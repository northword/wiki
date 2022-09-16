---
title: pip 换源
date: 2022-09-16 20:53:40
updated: 2022-09-16 20:58:30
permalink: /code/python/pip-mirrors/
---

# pip 换源

## 国内源  

新版 [ubuntu](https://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020) 要求使用 https 源，要注意。

- 清华：<https://pypi.tuna.tsinghua.edu.cn/simple>  
- 阿里云：<http://mirrors.aliyun.com/pypi/simple/>  
- 中国科技大学 <https://pypi.mirrors.ustc.edu.cn/simple/>  
- 华中理工大学：<http://pypi.hustunique.com/>  
- 山东理工大学：<http://pypi.sdutlinux.org/>  
- 豆瓣：<http://pypi.douban.com/simple/>
- 淘宝：<http://npm.taobao.org/mirrors/python/>

## 临时使用：

可以在使用 pip 的时候加参数 `-i <https://pypi.tuna.tsinghua.edu.cn/simple>`

例如：`pip install pyspider -i <https://pypi.tuna.tsinghua.edu.cn/simple>`，这样就会从清华这边的镜像去安装 pyspider 库。

## 永久修改，一劳永逸：

Linux 下，修改 `~/.pip/pip.conf` 

```ini
[global]  
index-url = <https://pypi.tuna.tsinghua.edu.cn/simple>  
[install]  
trusted-host=mirrors.aliyun.com  
```

windows 下，直接在用户目录中创建一个 pip 目录，如：`C:\Users\xx\pip`，新建文件 `pip.ini`。内容同上。
