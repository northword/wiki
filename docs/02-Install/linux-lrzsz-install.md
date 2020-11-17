# 为linux非ROOT用户安装lrzsz

`lrzsz`是一款在linux里可代替FTP上传和下载的程序。可以实现在linux中支持直接拖拽上传；同时也支持`rz`和`sz`命令进行上传和下载。

如果拥有ROOT权限，可以直接执行下述代码安装：

```shell
$ yum -y install lrzsz
```

而如果没有ROOT权限，是无法写入的，就需要我们自行编译。下面是普通用户安装的办法。

## 下载并解压

```shell
$ cd /tmp
$ wget http://www.ohse.de/uwe/releases/lrzsz-0.12.20.tar.gz
$ tar -zxvf lrzsz-0.12.20.tar.gz && cd lrzsz-0.12.20
```

## 配置安装路径

```shell
# 在等号后写入目标安装路径
./configure --prefix=/public/home/zjb/app/lrzsz
```

## 编译安装

```shell
$ make && make install
```

## 配置当前用户下的系统命令

```shell
$ cd /public/home/zjb/app/lrzsz
$ mkdir bash-command
$ cd bash-command
$ ln -s /public/home/zjb/app/lrzsz/bin/lrz rz 
$ ln -s /public/home/zjb/app/lrzsz/bin/lsz sz
```

## 配置当前用户的环境变量

```shell
$ cd ~
$ vi .bash_profile
# 在PATH列表中添加如下：
export PATH="/public/home/zjb/app/lrzsz/bash-command":$PATH
$ source .bash_profile
```

# 使用方法

## 上传（rz）

```shell
$ rz 
```

- 上传可以直接拖动，上传文件至当前目录；
- 同时也可以命令：输入rz回车后，会出现文件选择对话框，选择需要上传文件，一次可以指定多个文件，上传到服务器的路径为当前执行rz命令的目录

## 下载（sz）

```shell
#下载一个文件
$ sz filename 

#下载多个文件
$ sz filename1 filename2

#下载dir目录下所有文件，不包含dir下的文件夹
$ sz dir/*
```

