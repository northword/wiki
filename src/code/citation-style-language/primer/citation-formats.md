---
title: 引文格式
date: 2022-08-01 17:33:11
updated: 2022-08-03 10:18:39
---

# 引文格式

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

引文格式有很多很多种，我们最常用的就是国标（信息与文献 参考文献著录规则），最新的国标代号是 `(GB/T 7714-2015)`。大多数的引用格式都属于几个基本类别，如下：

## In-text Styles

引用格式可以分为两个主要的类型。第一种就是 `in-text styles`，正文中的引用直接指向参考文献目录中的一个或者多个条目。`in-text styles` 还可以细分为 `author-date,author,numeric` 和 `label` 格式。

在 `CSL` 中，每个单独的 `pointer` 称为一个引用。例如，引文 `“(Doe et al. 2002, Smith 1997)”` 包含两个引用：一个是 `Doe et al.` 在 2002 年发表的文献，另外一个是 `Smith`1997 年发表的文献。

### “author-date” 和 “author” 格式

`author-date` 引用格式会显示作者的名字和发表的日期，比如：`(Van der Klei et al. 1991; Zwart et al. 1983)`。`author` 只显示作者名字，例如：`(Gidijala et al.)`。参考文献条目一般使用字母表顺序对作者进行排序。

应该注意的是，许多引用格式使用了令人疑惑的 `Harvard` 术语来指代 `author-date` 格式，但是大多数这些格式与哈佛大学并没有关系。而且也并不存在一个官方的 `Harvard` 格式。

**参考文献条目实例**

> Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.
>
> van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.
>
> Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

### “numeric”格式

`numeric` 格式由数字组成，比如 `[1,2]` 和 `[3]`。参考文献条目一般使用作者首字母排序或者使用第一次在正文中的引用顺序排序。国标就是一种典型的 `numeric` 格式。

**参考文献条目实例**

>1. Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.

>2. Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

>3. van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.

### "numeric" 复合格式

复合格式是 `numeric` 格式的变体。这种风格在化学领域很流行。`CSL` 中暂时不支持这种格式，这里也不多作介绍。

**参考文献条目实例**

>1. Gidijala L, et al. (2008) BMC Biotechnol 8: 29.

>2. a) Zwart KB, et al. (1983) Antonie van Leeuwenhoek 49: 369-385, b) van der Klei IJ, et al. (1991) Arch Microbiol 156: 15-23.

### 标签格式

这种引用格式由 `keys` 构成，例 `GBKv2008]` 和 `[ZwVH1983; vaHV1991]`。`CSL` 对这种格式支持有限，这里也不多作介绍。

**参考文献条目实例**

> [GBKv2008] Gidijala L, Bovenberg RA, Klaassen P, van der Klei IJ, Veenhuis M, et al. (2008) Production of functionally active *Penicillium chrysogenum* isopenicillin N synthase in the yeast *Hansenula polymorpha*. BMC Biotechnol 8: 29.
>
> [vaHV1991] van der Klei IJ, Harder W, Veenhuis M (1991) Methanol metabolism in a peroxisome-deficient mutant of *Hansenula polymorpha*: a physiological study. Arch Microbiol 156: 15-23.
>
> [ZwVH1983] Zwart KB, Veenhuis M, Harder W (1983) Significance of yeast peroxisomes in the metabolism of choline and ethanolamine. Antonie van Leeuwenhoek 49: 369-385.

## Note Styles

引用格式的第二类为 `Note` 格式。引用中的 `marker` 可以是数字或者符号，例如 `[*]` 或者 `[†]`。每个 `marker` 指向脚注或者尾注。`CSL` 不能设置使用哪些数字或者符号用于 `marker`，这些应该用字处理软件 (比如 `word`) 设置。与上面的 `in-text` 格式不同，尾注或者脚注通常显示的信息更多。

**参考文献条目实例**

> [*]  Voyage to St. Kilda’ (3rd edit. 1753), p. 37.
>
> [†]  Sir J. E. Tennent, ‘Ceylon,’ vol. ii. 1859, p. 107.
