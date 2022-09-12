---
title: Aria2 折腾记录
date: 2022-01-18 21:54:39
updated: 2022-01-28 00:09:04
---

# Aria2 折腾记录

## 关于 Aria2

aria2 是一款支持多种协议的轻量级命令行下载工具。

## 安装与配置 Aria2

Aria2 的运行依靠以下几个文件：

| 文件名                 | 描述     | 必须？ |
| ---------------------- | -------- | ------ |
| aria2c (or aria2c.exe) | 主程序   | 是     |
| aria2.conf             | 配置文件 | 是     |
| aria2.session          | 任务文件 | 是     |
| aria2.log              | 日志文件 | 否     |

## 与 OneDrive 联动

### 通过 Reclon 和 upload.sh

Aria2 的 `on-completed` 参数设置后，会在任务完成时向指定脚本传递任务的 UID、文件数量、任务路径三个参数。

## 参考资料

 [P3TERX/aria2.sh: Aria2 一键安装管理脚本 增强版 (github.com)](https://github.com/P3TERX/aria2.sh)
 [在 Windows 中使用 Aria2 - P3TERX ZONE](https://p3terx.com/archives/use-aria2-under-windows.html)
 [Aria2 + Rclone 实现 OneDrive、Google Drive 等网盘离线下载 - P3TERX ZONE](https://p3terx.com/archives/offline-download-of-onedrive-gdrive.html)
