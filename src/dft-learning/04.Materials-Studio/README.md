---
title: Mat.Studio 操作
date: 2020-11-30 13:28:10
permalink: /pages/2e10d2/
categories:
  - Materials-Studio
tags:
  -
updated: 2022-01-16 19:56:29
---

# Materials Studio

懒得写了的

## 建模

**问题 17：** 如何快速、准确地选取某一类原子或者原子团，以及它们的组合体？

**答：** MS 的计算结束后，下一步是进行结果分析，常见如：结合（作用）能量计算、浓度（浓度）分布（Concentration Profile）、均方位移（Mean Square Displacement，MSD）、径向分布函数（Radial Distribution Function，RDF）、回转半径（Radius of Gyration）等等。即便是常见的结合能计算：E_interaction = E_total - (E_surface + E_adsorbate)也是需要分别选取不同原子（团）作为分析目标。所以，结果分析的第一步，是要准确无误地选取分析目标。

当所建模型包含的原子数目较少时，通过肉眼观察、鼠标点击或框选的方式，就能完成分析目标的选取。

但是，当所建模型原子数达几千几万时（对于 MD 计算而言，这样的原子数目是很常见的），再采用肉眼观察来选取的方式，不仅低效，而且很容易多选、错选、漏选，最终导致分析结果错误。

在 MS 中，有以下更快速的原子（团）选取方法：

1. 鼠标左键单击选中某个 A 原子后，按住 Ctrl 键不放，再左键单击某个 B 原子，此时会同时选中上述两个原子；
2. 按住 Alt 键不放，鼠标左键双击（注意是双击）某个 A 原子，此时会选中模型中全部的 A 原子；
3. MS 界面顶部 Edit→Atom Selection 中，可通过以元素种类、化学键数目、电荷数目、力场类型等等，选取模型中全部满足要求的原子，此时结合“Selection mode”中的选项，可进一步添加需要的或筛除不需要的原子；
4. 以某个原子团为 pattern，通过“Find Patterns”可选择模型中全部的该原子团。举个例子：要选取模型中全部的水分子，首先新建一个 xsd 文档，绘制出一个水分子，命名为 water.xsd，并将此文件保持打开状态，然后将模型置于当前，在 MS 界面顶部 Edit→Find Patterns，将其中的 Pattern document 下拉选择为 water.xsd（如果找不到 water.xsd，是因为 water.xsd 被关闭了，重新打开即可找到），点“Find”即可找到模型中全部的水分子；
5. 对于用 Layer 命令堆叠得到模型，在 MS 界面顶部 Edit→Edit Sets，可选取任一原始的 layer，这对于用 Layer 命令堆叠得到模型的结合能计算非常有用；
6. 将上述（1）~（5）进行组合，可实现绝大多数情况的分析目标的选取。

> [写给 MS 新手：Materials Studio 软件常见问题与解决方案（2018 年 06 月 10 日更新） - 分子模拟 - 小木虫 - 学术 科研 互动社区 (muchong.com)](http://muchong.com/html/201704/11279111.html)

## 其他资源

- [界面各部分介绍](http://www.cailiaoniu.com/51296.html)

- [超详细 Materials Studio 建模（上）| 刘锦程](https://www.bilibili.com/video/BV1b54y1672a?t=899)

    <div class="btv" id="btv"><iframe src="//player.bilibili.com/player.html?aid=842972226&bvid=BV1b54y1672a&cid=261004851&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></div>
