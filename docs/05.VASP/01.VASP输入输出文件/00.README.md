---
title: VASP 简介
date: 2020-12-15 13:28:10
permalink: /pages/df30ef/
categories:
  - VASP
tags:
  -
updated: 2022-01-16 19:56:51
---

`VASP` 的全称 `Vienna Ab-initio Simulation Package`，是维也纳大学 Hafner 小组开发的进行电子结构计算和量子力学-分子动力学模拟软件包。

`vaspkit` 是一款 VASP 预-后数据处理脚本。 最新版的 `vaspkit` 是王伟老师、许楠、刘锦程，唐刚，李强和乐平共同努力的成果。

因此我们需要区分开 `VASP` 和 `VASPKIT`。`VASP` 是一款计算模拟软件，而 `VASPKIT` 仅是为方便使用 `VASP` 而开发的一个脚本包。也即，如果不用 `VASPKIT`，你仍然可以使用 `VASP` 进行计算，无非麻烦一些罢了。

`VASP` 官网：https://www.vasp.at/

`VASPKIT` 官网：https://vaspkit.com/index.html

官网已经详细的列出了 VASPKIT 如何配置安装，如何开始使用。由于课程需要，实际使用与官方文档的描述有一丁点区别，本文档仅对本人使用过程做记录。

---

01-输入输出文件

02-结构优化与静电自洽

03-电子结构

- 自洽场理论、能带理论、态密度、电荷密度；

- 自旋电荷密度分析，电荷密度差分析，静电势分析，Bader 电荷分析，态密度，能带结构；

04-反应路径与分子动力学

- NEB 计算方法与操作实践；

- 系综理论，控温方法，输入文件准备，计算过程，结果分析。
