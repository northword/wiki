---
title: CSL 1.0.2 规范
date: 2022-08-01 16:55:26
updated: 2022-08-05 18:05:52
---

# CSL 1.0.2 规范

> [!DONE] 
> 此页面于 2022-8-2 已校对完成。

主要作者：[Rintze M. Zelle， PhD](https://twitter.com/rintzezelle)、 [Brenton M. Wiernik](https://twitter.com/bmwiernik)、Frank G. Bennett， Jr.、 Bruce D’Arcus、Denis Maier

其他贡献者：Julien Gonzalez、Sebastian Karcher、Sylvester Keil、Cormac Relf、Lars Willighagen  and other CSL contributors.

译者：[Mao Zhou](https://github.com/ZMAlt)、 [Northword](https://github.com/northword)。

此工作以 [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) 授权。

## 介绍

CSL（Citation Style Language，引文样式语言） 是一种基于 XML 的格式，用来描述引文、注释和参考文献的格式，他提供了：

- 一种开放的 (开源的) 格式
- 紧凑、稳定的样式
- 对样式要求的广泛支持
- 样式自动本地化
- 对样式发布和更新的基本支持
- 数千种免费提供的样式（CC BY-SA 授权）

有关的其他文档，CSL 议程，样式和本地化文件详见 [CSL 项目主页](https://citationstyles.org/)。

## 翻译习惯

这里将列出一些常用的术语的译文，并不能保证翻译的准确性。为保持准确性，后文的描述中可能会在译文旁标注原文。

| 原文                | 译文       | 备注     |
| ------------------- | ---------- | -------- |
| locale files/locale | 本地化文件 | 区域文件 |
| styles              | 样式       |          |
| citation            | 引文       |          |
| macro               | 宏         |          |
|                     |            |          |

## 术语

关键字 MUST，MUST NOT，REQUIRED，SHALL，SHALL NOT，SHOULD，SHOULD NOT，RECOMMENDED，MAY 和 OPTIONAL 按 [IETF RFC 2119](http://tools.ietf.org/html/rfc2119) 中的描述解释。

> [!NOTE] 译者注：关于 IETF RFC 2119 协议
> 
> RFC ，即 **R**equest **f**or **C**omments，意见征求稿，是由 [The Internet Engineering Task Force](http://www.ietf.org/) 制作的文档，其中许多是各种 Internet 协议的官方标准。
> 
> RFC 2119 协议全文：https://www.ietf.org/rfc/rfc2119.txt
> 
> **MUST**：必须的。通过它描述的对象，是强制要求的。它与 REQUIRED 和 SHALL 含义相同。
>  
> **MUST NOT**：不允许的。通过它描述的对象也是强制的。与 SHALL NOT 同义。
> 
> **SHOULD**：在通常情况下，应当这样。但是，特殊情况下除外。与 RECOMMENDED 同义。
> 
> **SHOULD NOT**：在通常情况下，不是这样。但是，特殊情况下除外。与 NOT RECOMMENDED 同义。
> 
> **MAY**：可选的描述对象。与 OPTIONAL 同义。
