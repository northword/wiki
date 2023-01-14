---
title: 在 Windows 中使用 Bash shell
date: 2022-12-12 21:26:33
permalink: /code/bash-for-windows
updated: 2022-12-12 21:36:52
---

# 在 Windows 中使用 Bash shell

> 概述：Git Bash 内置了 Vim 和多数 Linux 命令，使用 Git Bash 为默认终端能提高 Win 端终端操作文件的效率  
> 本文语雀地址：[https://www.yuque.com/achuan-2/blog/eu4rbz](https://link.zhihu.com/?target=https%3A//www.yuque.com/achuan-2/blog/eu4rbz)  
> 本文博客地址：[https://achuan-2.github.io/posts/be43.html](https://link.zhihu.com/?target=https%3A//achuan-2.github.io/posts/be43.html)
> source: <https://zhuanlan.zhihu.com/p/418321777>

![](https://pic1.zhimg.com/v2-fe5921aa3b6ff6e32c670a8845e41634_b.jpg)

前排介绍

- Git bash 是什么？  
- Git Bash 源自 MinGW, 是一个用于开发原生 Window 应用的开发环境, 提供了针对 WIn32 应用的 GCC、GNU binutils 等工具.
- 为什么要用 Git Bash？  
- Windows 下的 Powershell 并不好用，或者说我并不知道如何使用。既然相较之下，更熟悉 Linux 命令行，就干脆把 Git Bash 当作默认终端了。Git Bash 自带 Vim，还集成了许多 Linux 命令，对我来说更加顺手

## 0 准备工作

Windows 下载地址：[Git for Windows](https://link.zhihu.com/?target=https%3A//gitforwindows.org/)

安装教程随便网上找一篇就好了，不多说

## 1 设置为默认终端

1. Windows Terminal 配置 Git bash 为默认终端
2. VSCode 配置 Git bash 为默认终端

### 1.1 Windows Terminal 配置 Git bash 为默认终端

现在 Windows Terminal 有了图形界面，直接选择就好

![](https://pic4.zhimg.com/v2-f5ab73bb87783dd158e5bac6936ca1db_b.jpg)

具体 json 文件配置

```json
"defaultProfile": "{c891c3d2-b798-4857-83c0-89bf2ea34021}",
    "profiles": 
    {
        "defaults": 
        {
            ...
        },
        "list": 
        [
            {
                "commandline": "D:\\Environment\\Git\\bin\\bash.exe --login -i",
                "guid": "{c891c3d2-b798-4857-83c0-89bf2ea34021}",
                "name": "Git Bash",
                "icon": "D:\\Program_Files\\Git\\mingw64\\share\\git\\git-for-windows.ico"
            },
```

其中 `"commandline": "D:\\Environment\\Git\\bin\\bash.exe --login -i",`

之所以加了--login -i 后面见 「2 可能出现的问题」

### 1.2 VSCode 配置 Git bash 为默认终端

前排提示：我最初在网上搜索，发现之前许多教程里的 json 变量 `“terminal.integrated.shell.windows”` 已经过时了，现在是需要配置 profiles。

![](https://pic1.zhimg.com/v2-043c7dad363d49018076c8346b578238_b.jpg)

参考官网的文档：[Integrated Terminal in Visual Studio Code](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/editor/integrated-terminal)

Ctrl+,打开设置，搜索 `shell:windows`，在 `settings.json` 的最后添加下面的配置

自行修改 Git Bash 和 Powershell exe 的路径

```json
"terminal.integrated.automationShell.windows": "D:\\Environment\\Git\\bin\\bash.exe",
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "path": "C:\\Program Files\\PowerShell\\7-preview\\pwsh.exe",
      "icon": "terminal-powershell",
      "args": [
        "-NoLogo" //不显示 powershell 开头的输出
//不加载Powershell的配置和美化
//,"-NoProfile" 
      ]
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Bash": {
      "path": [
        "D:\\Environment\\Git\\bin\\bash.exe" //Git bash路径
      ],
      "icon": "terminal-bash",
      "args": ["-i","-l"] // 激活Git在外部的配置
        }
  },
```

## 2 可能出现的配置问题

1. Windows Terminal 和 VSCode 打开 Git Bash，发现不会加载配置
2. Git Bash 不会加载 `~/.bashrc` 的配置
3. Git-Bash 修改前缀 (隐藏用户 @ 主机)
4. 修复 Git Bash 中文乱码

### 2.1 Windows Terminal 和 VSCode 打开 Git Bash，发现不会加载配置

解决方法，其实上面已经给出了，就是在 bash.exe 后面加-l, - i 配置，这样激活 Git Bash 就会加载 `~/.bash_profile` 的配置

### 2.2 Git Bash 不会加载 `~/.bashrc` 的配置

确实是这样，Git Bash 在 Win 端只会 `source ~/.bash_profile` 而不会激活 `~/.bashrc` 的配置。所以如果你和我一样，喜欢在 `~/.bashrc` 配置别名，在 `~/.bash_profile` 配置环境的话，

解决方法是那就在 `~/.bash_profile` 加一行，`source ~/.bashrc` 就好啦！

### 2.3 Git-Bash 修改前缀 (隐藏用户 @ 主机)

如果直接打开 Git Bash 终端，你会发现显示的东西很冗余

有用户 @ 主机名，MINGW64，绝对路径。其中前面两个都是固定的，所以就想要把这个隐藏

![](https://pic3.zhimg.com/v2-b63cf1d65cae718ebc51b7843505859a_b.jpg)

在 Git-Bash 中我们输入以下代码: `vi ~/.bash_profile` , 然后把以下内容添加到配置文件里面。我这里是隐藏了用户 @ 主机，同时把绝对路径改成了只显示当前文件夹， 需要看全路径的话用 `pwd` 就显示了。这样不至于截图、被人看到时，太暴露隐私哈哈哈。

根据需要自行选择配置。

```
# Shows Git branch name in prompt.
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
# 显示 用户 @ 主机
# export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
# 隐藏用户 @ 主机，显示当前文件夹 
#export PS1="\W\[\033[32m\]\$(parse_git_branch)\[\033[00m\]"

# 只显示当前文件夹
export PS1="\[\e[32;1m\]\W $\[\e[0m\]\[\033[32m\]\$(parse_git_branch)\[\033[00m\] "

# 显示全路径
#export PS1="\[\e[32;1m\]\w $\[\e[0m\]\[\033[32m\]\$(parse_git_branch)\[\033[00m\] "
```

粘贴完后，`source .bash_profile` 的结果

![](https://pic4.zhimg.com/v2-c27943b52ce1a74d12add876f028f657_b.jpg)

补充下环境下默认的特殊符号所代表的意义：

- `\u` ：当前用户的账号名称
- `\w` ：完整的工作目录名称。家目录会以 ~代替
- `\W` ：利用 basename 取得工作目录名称，所以只会列出最后一个目录
- `\H`：完整的主机名称。例如：我的机器名称为：fc4.linux，则这个名称就是 fc4.linux
- `\h` ：仅取主机的第一个名字，如上例，则为 fc4，.linux 则被省略
- `\d` ：代表日期，格式为 weekday month date，例如："Mon Aug1"
- `\t` ：显示时间为 24 小时格式，如：HH：MM：SS
- `\T` ：显示时间为 12 小时格式
- `\A` ：显示时间为 24 小时格式：HH：MM
- `\v` ：BASH 的版本信息
- `#` ：下达的第几个命令
- `$` ：提示字符，如果是 root 时，提示符为：# ，普通用户则为：$

> 参考：

- [linux 系统终端命令提示符设置（PS1）记录 - 散尽浮华 - 博客园 (cnblogs.com)](https://link.zhihu.com/?target=https%3A//www.cnblogs.com/kevingrace/p/5985970.html)

### 2.4 修复 Git Bash 中文乱码

Git bash 自身配置：

- 终端不能显示中文：打开 Git bash，右键打开选项， `Options->Text->Locale` 改为 `zh_CN`，`Character set` 改为 `UTF-8`
- 解决 git status 不能显示中文：终端输入 `git config --global core.quotepath false`

Windows Terminal 和 VSCode 中别忘了添加 --login -i 参数

> 参考资料：

- [Windows Terminal 修复 Git Bash 中文乱码 && 添加 WT 到右键菜单 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/166407830)
- [git 显示中文和解决中文乱码 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/133706032)

### 解决中文无法显示的问题

> [Win10也要愉快地使用Bash - 掘金 (juejin.cn)](https://juejin.cn/post/6844904071535525896)

打开Git安装目录下的 **C:\Git\etc\bash.bashrc** （具体路径以你安装的为准）文件，在末尾追加一行：

```ini
export LC_ALL=en_US.UTF-8
复制代码
```

并保存，重启终端就好了。

## 3 你可能不知道却非常有用的技巧

1. 在终端启动软件查看文件
2. Linux 下常用软件下载
3. 资源管理器地址妙用，直接在终端打开当前文件夹

### 3.1 在终端启动软件查看文件

- 在终端如何快速查看文件  
- Windows 里有一个很有用的命令 「start」,`start .` 用资源管理器打开当前目录（或用 `explorer .`），`start 文件名` 用默认软件打开这个文件，这样就不用开了终端，还要手动去找这个文件再查看了，工作流得到优化
- 在终端以 VSCode 打开当前项目  
- 首先需要在环境变量 Path 中添加 VSCode 的 Code.exe 地址，比如我的是 `D:\Program_Files\Microsoft VS Code\Code.exe`
- 然后在终端下使用 `code ./` 就可以打开当前项目

> 参考：

- [Windows 小技巧 -- 命令行窗口打开指定目录的资源管理器\_Anyers 的专栏-CSDN 博客\_命令行打开资源管理器](https://link.zhihu.com/?target=https%3A//blog.csdn.net/u012995964/article/details/85810626)

### 3.2 Linux 下常用软件下载

- 安装 tree 以树形显示文件结构  
- 安装  

1. 下载地址：[Tree for Windows (sourceforge.net)](https://link.zhihu.com/?target=http%3A//gnuwin32.sourceforge.net/packages/tree.htm)，下载 Binaries 的 Zip 文件
2. 下载解压完成后，将 bin 目录下的 tree.exe 复制到 Git Bash 安装路径下的 usr/bin 文件夹下，完成

- 常用命令  
- 基本命令格式：`tree [-option] [dir]`
- 显示中文，`-N`，如果中文名是中文，不加-N 有些电脑上是乱码的
- 选择展示的层级：`-L [n]`
- 只显示文件夹：`-d`
- 区分文件夹、普通文件、执行文件：`-FC`，C 是加上颜色，
- 起别名：可以起一个别名 `alias tree='tree -FCN'`
- 输出目录结构到文件，写文档的时候需要展示项目目录就会用到 `tree -L 2 -I '*.js|node_modules|*.md|*.json|*.css|*.ht' > tree.txt`
- 添加 wget 下载工具  
- 安装  

1. 下载 wget 二进制安装包，地址：[https://eternallybored.org/misc/wget/2](https://link.zhihu.com/?target=https%3A//eternallybored.org/misc/wget/2)
2. 移动到 Git Bash 安装路径下的 usr/bin 文件夹下，完成

- 常用命令  
- 最直接的下载命令：`wget [url]`
- 指定文件名 `-O`
- 指定目录 `-P`
- 下载多个文件 `wget -i [url.txt]`
- 断点续传 `wget -c -t [n] [url]`,n 代表尝试的次数，0 代表一直尝试
- 后台执行：`wget -b [url]` 可以添加 `-b` 选项，这时执行该命令的回显信息都会自动存储在 `wget.log` 文件中
- 下载一个网站的所有图片、视频、pdf `wget -r -A.pdf url`

### 3.3 资源管理器地址妙用，直接在终端打开当前文件夹

alt + d 可以直接把光标移动到资源管理器地址栏，对于不同终端

- cmd： 输入 `cmd`
- Windows Terminal：输入 `wt`
- Git Bash： 输入 `bash`
- VSCode:  
- 方法一：输入 `code.cmd .`，必须要加.，不然只是打开 VSCode 软件，而不会打开当前文件夹
- 方法二：新建变量 code，输入 VSCode 地址，然后在地址栏就可以输入 %code%（还是上面那个输入快点，不用按 shift）
- 方法三：直接右键吧，为啥这么折腾
- 方法四：utools 快捷命令
- 为什么我直接输入 code 就是打开一个 sh 脚本呢，我用 `start .` 打开这个脚本的目录，突然恍然大悟，原来就是因为这个 code 文件影响到了我直接用 code，我看了下脚本，这个应该是用于 wsl 启动的（我随口说的，你可以尝试去掉这个文件，然而也不能通过在地址栏输入 code 打开 VSCode 就是了）  

![](https://pic1.zhimg.com/v2-9ad0e49a560f46c954aff91051c5647c_b.jpg)

### 3.4 添加一些常用别名增加效率

我的 `~/.bashrc` 文件

```
# 为了更好的push到github，配置代理
export http_proxy=http://127.0.0.1:10809
export https_proxy=http://127.0.0.1:10809

# 方便cd 进 hexo
alias blog='cd /e/blog'
# hexo 博客发布，num run是package.json中script list配置的别名
alias dev='npm run v'
alias publish='npm run p'

# 配置tree别名
alias tree='tree -FCN'
```
