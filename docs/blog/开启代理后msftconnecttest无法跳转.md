---
title: 开启代理后 msftconnecttest.com 无法跳转
date: 2021-03-06 20:20:20
updated: 2022-01-16 19:52:53
---

# 开启代理后校园网认证无法跳转

连接一个无线网络后，如果该网络需要认证（登录）（常见于开放网络或校园网），系统会访问 `http://www.msftconnecttest.com/redirect`，该网址会自动重定向到需要进行认证的地址。

但如果爬了梯，且代理的规则将 msftconnecttest.com 判断为走代理时，该页面无法正常跳转。这种情况常见于 SSR 的 PAC 模式、Clash 的规则中将微软策略匹配为 proxy 等。

由于我是用 Clash For Windows ，以下内容也针对 CFW ，但其他应当同理。

解决方法蛮多，比如：

- 关闭 clash 的开机自启 / system proxy 。
- 需要认证时关闭 system proxy 。
- 记下认证页面的真实地址直接访问。
- 策略组 微软 选择直链。
- 在 rule 里添加关键词匹配规则使 msftconnecttest 被 direct 。

上述方法治标不治本，添加 rule 虽然是个不错的方法（事实上这可能是多数人首先想到的方法），但是如果你用的是机场的订阅，那换个订阅/升级订阅后自己加的规则就没了。查阅 CFW 文档后发现了 [绕过系统代理 | Clash for Windows ](https://docs.cfw.lbyczf.com/contents/bypass.html#设置方式) ：

```yaml
bypass:
  - "*msftconnecttest.com"
  - "*c-msedge.net"
  - "edge.microsoft.com"
  - localhost
  - 127.*
  - 10.*
  - 172.16.*
  - 172.17.*
  - 172.18.*
  - 172.19.*
  - 172.20.*
  - 172.21.*
  - 172.22.*
  - 172.23.*
  - 172.24.*
  - 172.25.*
  - 172.26.*
  - 172.27.*
  - 172.28.*
  - 172.29.*
  - 172.30.*
  - 172.31.*
  - 192.168.*
  - <local>
```

终于是实现效果了，也没啥大问题。

但后来有一天我发现在命令提示符里进行 `pip install` 以及 `npm install` 的时候提示 `SSL 错误 `，换源已无法解决，于是找到了 issue ： [下载文件遇到 SSL 错误 · Issue #1568 · Fndroid/clash_for_windows_pkg (github.com)](https://github.com/Fndroid/clash_for_windows_pkg/issues/1568) 后被建议使用`PAC mode`，于是有了 PAC 版本的 Bypass ：

```javascript
function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".msftconnecttest.com")) {
    return "DIRECT";
  } else {
  return "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;"
  }
}
```

PAC 概念及其写法可参考： [代理自动配置文件（PAC）文件 - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#isplainhostname)

另发现了配置文件预处理，或许也可以用：更新某个订阅后 CFW 自动对该配置文件追加规则。参考 [配置文件预处理 | Clash for Windows](https://docs.cfw.lbyczf.com/contents/parser.html) 。

Clash 的几种模式介绍： [一个困扰已久的问题 · Discussion #1532 · Fndroid/clash_for_windows_pkg (github.com)](https://github.com/Fndroid/clash_for_windows_pkg/discussions/1532)
