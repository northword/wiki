# 为linux非ROOT用户安装lrzsz

`lrzsz`是一款在linux里可代替FTP上传和下载的程序。可以实现在linux中支持直接拖拽上传；同时也支持`rz`和`sz`命令进行上传和下载。

如果拥有ROOT权限，可以直接执行下述代码安装：

```bash
$ yum -y install lrzsz
```

而如果没有ROOT权限，是无法写入的，就需要我们自行编译。下面是普通用户安装的办法。

## 下载并解压

```bash
$ cd /tmp
$ wget http://www.ohse.de/uwe/releases/lrzsz-0.12.20.tar.gz
$ tar -zxvf lrzsz-0.12.20.tar.gz && cd lrzsz-0.12.20
```

## 配置安装路径

```bash
# 在等号后写入目标安装路径
./configure --prefix=/public/home/zjb/app/lrzsz
```

## 编译安装

```bash
$ make && make install
```

## 配置当前用户下的系统命令

```bash
$ cd /public/home/zjb/app/lrzsz
$ mkdir bash-command $$ cd bash-command
$ ln -s /public/home/zjb/app/lrzsz/bin/lrz rz 
$ ln -s /public/home/zjb/app/lrzsz/bin/lsz sz
# 上面几个路径需要替换成自己的
```

## 配置当前用户的环境变量

```bash
$ cd ~
$ vi .bashrc
# 在PATH列表中添加如下：
export PATH="/public/home/zjb/app/lrzsz/bash-command":$PATH
$ source .bashrc
```

# 使用方法

见 [linux-lrzsz-usage.md](..\03-Linux\linux-lrzsz-usage.md) 