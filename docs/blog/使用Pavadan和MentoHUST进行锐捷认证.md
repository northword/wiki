---
date: 2020-11-07 13:39:31
updated: 2022-01-16 19:52:42
---

## 1. 红米 AC2100 刷入 Pavadan 固件

目前主流 RM AC 2100 的 Pavadan 固件有三个人制作：Hiboy、ChongshenB、hanwckf。已编译好的固件中只有 Hiboy 包括 mentohust，其余二者若需要此插件均需要自行编译。

### Download Link

- Hiboy：

## 2. MentoHUST 的配置

### 在 WebUI 配置

路径：` 拓展功能 - 配置拓展环境 - 锐捷认证 `

- 启用 MentoHUST
- 用户名：学号
- 密码：校园网上网密码，默认密码为身份证后六位
- 组播地址：0(标准)
- DHCP 方式：2(认证后)
- 是否后台运行：2(是，保留输出)
- 客户端版本号：4.96
- 其余均保持默认

### 帮助命令

```shell
mentohust -h
```

```shell
欢迎使用MentoHUST    版本: 0.3.1
Copyright (C) 2009-2010 HustMoon Studio
人到华中大，有甜亦有辣。明德厚学地，求是创新家。
Bug report to http://code.google.com/p/mentohust/issues/list

用法:    mentohust [-选项][参数]
选项:    -h 显示本帮助信息
    -k -k(退出程序) 其他(重启程序)
    -w 保存参数到配置文件
    -u 用户名
    -p 密码
    -n 网卡名
    -i IP[默认本机IP]
    -m 子网掩码[默认本机掩码]
    -g 网关[默认0.0.0.0]
    -s DNS[默认0.0.0.0]
    -o Ping主机[默认0.0.0.0，表示关闭该功能]
    -t 认证超时(秒)[默认8]
    -e 心跳间隔(秒)[默认30]
    -r 失败等待(秒)[默认15]
    -l 允许失败次数[0表示无限制，默认8]
    -a 组播地址: 0(标准) 1(锐捷) 2(赛尔) [默认0]
    -d DHCP方式: 0(不使用) 1(二次认证) 2(认证后) 3(认证前) [默认0]
    -b 是否后台运行: 0(否) 1(是，关闭输出) 2(是，保留输出) 3(是，输出到文件) [默认0]
    -v 客户端版本号[默认0.00表示兼容xrgsu]
    -f 自定义数据文件[默认不使用]
    -c DHCP脚本[默认dhclient]
    -q 显示SuConfig.dat的内容(如-q/path/SuConfig.dat)
    -S 接入服务选择：0（默认） 1（有线1x上网服务，例如华农拨办公账号时需要）
例如:    mentohust -uusername -ppassword -neth0 -i192.168.0.1 -m255.255.255.0 -g0.0.0.0 -s0.0.0.0 -o0.0.0.0 -t8 -e30 -r15 -a0 -d1 -b0 -v4.10 -fdefault.mpf -cdhclient
注意：使用时请确保是以root权限运行！
```

## 在 Pavadan 中设置定时任务（可选）

路径：` 高级设置 - 自定义设置 - 脚本 `

### 在 WAN 上行/下行启动后执行

```shell
#!/bin/sh

### Custom user script
### Called after internal WAN up/down action
### $1 - WAN action (up/down)
### $2 - WAN interface name (e.g. eth3 or ppp0)
### $3 - WAN IPv4 address
logger  "运行后 WAN 状态:" "WAN 状态:【$1】, WAN 接口:【$2】, WAN IP:【$3】"

if [ $1 == "up" ] ; then
    sleep 30
    /etc/storage/crontabs_script.sh up &
#else
#    echo "检测到WAN:【$1】 "
#    echo "请尝试重启mentohust或重启路由器"
#    echo "正在尝试重启mentohust"
#    mentohust -k -k
fi
```

### 自定义 Crontab 定时任务配置

可选定时开关 WAN 口，将命令前的 `#` 移除即可启用命令

或去 ` 高级设置 - 系统管理 - 服务 - 计划任务 ` 中加入

```shell
# 凌晨2点定时关网：
0 2 * * * stop_wan #删除开头的#启动命令

# 早上8点定时开网（重启wan口）：
0 8 * * * restart_wan #删除开头的#启动命令

```
