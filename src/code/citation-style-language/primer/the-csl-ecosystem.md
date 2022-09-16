---
title: CSL 生态
date: 2022-08-01 17:33:11
updated: 2022-08-05 18:11:56
---

# CSL 生态

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

要明白 `CSL` 是怎么运作的，首先要了解 `CSL` 的生态。`Style` 指的是 CSL 样式，`Item Metadata` 指的是每篇参考文献的作者，题目等信息，`Locale Files` 是为实现与语言无关（指英语，汉语等）的格式的本地化文件，`Citation Details` 指的是影响引文信息或参考文献列表表现的细节，比如顺序，位置等。

![](https://docs.citationstyles.org/en/stable/_images/csl-infrastructure.png)

## 独立格式和从属格式

`CSL` 的一切都是围绕 `style` 的，但是并不是所有的 `style` 都是相似的。主要包括两种格式：独立格式 `(independent styles)` 和从属格式 `(dependent styles)`。

独立格式有 2 种功能，首先，需要先定义一种引用格式。具体格式是什么样的，是 `author-date` 格式还是 `note` 格式？ 引用的顺序是按字母排序还是按日期排序？参考文献条目中是不是包含 `DOI`？使用什么标点符号以及使用大写还是小写？文献发表年限在文献题目前还是后？等等，这些都是引用格式定义的。第二个功能是：`CSL` 必须是能自我解释的，可以称之为格式的**元数据**。元数据中可以包括该 `CSL` 对应的期刊标题，以及该期刊的联接，该 `CSL` 的创建者等。

从属格式则仅包括格式的元数据，没有对引用格式的定义。从属格式必须指定它的参考格式 (父格式)，从属格式的引用将使用它的父格式的引用格式。

当多个格式使用相同的引用格式时，从属格式非常有用。以一个出版社旗下的不同期刊为例，如果每个期刊都使用独立格式，则每个 `CSL` 都要完整的对引用格式的描述，即使他们的引用格式都是相同的。这样就导致 `CSL` 太庞大，冗余太多。这种情况下，从属格式就比较适合。例如，`"Nature"`，`"Nature Biotechnology"` 和 `"Nature Chemistry"` 都使用同样的引用格式。因此，只需要创建一个 `"Nature"` 的独立格式，将 `"Nature Biotechnology"` 和 `"Nature Chemistry"` 格式都定义为 `"Nature"` 格式的从属格式。这样，如果 `"Nature"` 的出版社想改变引用格式，只需要改变 `"Nature"` 期刊格式的 `CSL` 就可以，不需要改变它的从属格式对应的 `CSL`。

## Locale 文件

事实上，大多数独立格式并不是完全独立的。

以下面的条目为例：

> Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (1999, September 28). Method and system for placing a purchase order via a communications network. Retrieved from <https://www.google.com/patents/US5960411>

你可以使用一种独立的 `CSL` 格式来描述这个条目，在格式种编码就可以实现。例如，在最后的链接前加上 `"Retrieved from"`，或者使用 `"YYYY, Month DD"` 作为日期的格式。但是这样的一种 `CSL`，只能在美式英语中使用，如果使用德语写作，就必须修改样式中对应的翻译和日期格式。

幸运的是，独立格式可以依据 `CSL locale files`(以下也翻译为 本地化文件 ) 来实现通用项的翻译，日期格式和语法的转换。例如：我们可以重写 `CSL` 格式使用 `"retrieved"` 和 `"from"` 项，并使用本地化的日期格式。如果我们将 `CSL` 样式 (同格式) 的使用环境设置为美式英语，该样式将从 `US English locale file` 检索和翻译对应的项，并生成上述引用。如果将英语换为德语，就会使用德语对应的 `locale file`，生成的引用如下：

>Hartman, P., Bezos, J. P., Kaphan, S., & Spiegel, J. (28. September 1999). Method and system for placing a purchase order via a communications network. Abgerufen von <https://www.google.com/patents/US5960411>

因此，使用 `CSL locale files` ，可以编写与语言无关的 `CSL` 样式。如上面展示的，这样的格式可以轻易的在不同的语言中转换。但是语言是很复杂的，`CSL automatic localization` 并不能支持所有的语言特色。但是，语言无关的样式仍然是有意义的，如果你要自己修改 `CSL` 样式来适应自己选择的语言环境，参考这些语言无关的样式将更容易实现。

`Locale file` 还有一个好处，那就是，我们只需要为每种语言定义一次通用的翻译，日期格式和语法。这样可以保证样式紧凑，并使 `locale file` 更容易维护。由于给定语言的引用格式并不是一直和 `locale file` 中定义的转换格式一致，因此，我们也可以自己选择性的重写任何在 `locale file` 中定义的项目。下面独立格式解析中的 `locale` 元素就是为实现这一功能设置的。

## Item Metadata

接下来就是引用中需要的参考文献条目的细节：条目元数据。

例如：一篇期刊文章可能需要作者的名字，发表的年份，文章题目，期刊名称，卷和期，出现的页码范围以及 `DOI`（数字文献唯一标识），所有这些信息都有助于读者识别和查找这篇文章。

参考文献管理软件可以轻松的创建文献的这些细节信息。但是，很多参考文献管理软件都有自己的格式来存储这些元素据，大多数都支持通用的 `bibliographic exchange formats`，比如 `BixTex` 和 `RIS`。` citeproc-js `CSL 处理器引入了一种基于 `JSON` 的格式，用于以 `citeproc-js` 可以理解的方式来存储元数据。其他的一些 `CSL` 处理器后来采用了这种 `“CSL JSON”` 格式（也称为 `“citeproc JSON”`）。

译者注：这里讲的似乎有些繁琐。总的来说，是我们需要每篇文章的作者，题目，发表期刊等信息来生成对应的条目。文献管理软件可以很方便的提供这些信息。至于其内部存储的方式，使用的时候并不需要关心，类似 `Zotero` 的文献管理软件会自动使用这些信息和 `CSL` 生成引用信息。

## 引用细节

对于给定的引用格式，引文和条目的展示不仅取决于被引用项的元数据，还取决于这些项被引用的上下文。我们将这类特定于上下文的信息称为引用细节。

例如：引用时对条目的排序会影响他们在参考文献中的位置（在下面独立格式的 `citation` 和 `bibliography` 章节中提到）。

## CSL 处理器

有了 CSL 样式，`locale file`，元数据和引用细节，我们现在需要一个软件来解析这些信息，并以正确的格式生成引用和参考文献条目。用来完成这些功能的软件就是 `CSL` 处理器。

大多数的参考文献管理软件使用的是免费开源的 `CSL` 处理器，比如：`citeproc-js`。
