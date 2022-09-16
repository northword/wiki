---
title: 理解 CSL 格式
date: 2022-08-01 17:33:11
updated: 2022-08-03 10:18:48
---

# 理解 CSL 格式

> [!warning] WORK IN PROGRESS
> 此页面正在施工中。

到现在为止，我们已经知道什么是 `CSL`、怎么使用它、以及它怎么运作的。接下来我们将深入到 `CSL` 文件内部，分析它的 `XML` 代码。`XML基础.md` 文件中简单介绍了 `XML`，看完后可以读懂并编辑简单的 `XML` 文件。如果想更多的了解 `XML`，可以在网上查找 `XML` 教程。

## 从属格式解析

下面是一个 `CSL` 从属格式文件：

```xml
<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" default-locale="en-US">
  <!-- Generated with https://github.com/citation-style-language/utilities/tree/master/generate_dependent_styles/data/asm -->
  <info>
    <title>Applied and Environmental Microbiology</title>
    <id>http://www.zotero.org/styles/applied-and-environmental-microbiology</id>
    <link href="http://www.zotero.org/styles/applied-and-environmental-microbiology" rel="self"/>
    <link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="independent-parent"/>
    <link href="http://aem.asm.org/" rel="documentation"/>
    <category citation-format="numeric"/>
    <category field="biology"/>
    <issn>0099-2240</issn>
    <eissn>1098-5336</eissn>
    <updated>2014-04-30T03:45:36+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
</style>
```

如 `XML基础.md` 文件中的描述：一行给出了 `xml` 的声明。根元素为 `style`，其中包含了一个子元素 `info`。`info` 元素中又包含了很多元素，其中很多元素都有内容和属性。`xmlns、version` 和 `defaults-locale` 都是元素 `style` 的属性，分别指定了??、版本和使用的语言，这里为美国英语。

大多数从属格式都是电子表格自动生成的，下面的注释也给出了指向电子表格的联接。

```xml
 <!-- Generated with https://github.com/citation-style-language/utilities/tree/master/generate_dependent_styles/data/asm -->
```

元素 `info` 里包含了大多数 `style` 的元数据，比如：

`style` 的题目（也是期刊的题目）：

```xml
<title>Applied and Environmental Microbiology</title>
```

样式的 ID，是文献管理软件用来区分不同 `style` 的标志：

```xml
<id>http://www.zotero.org/styles/applied-and-environmental-microbiology</id>
```

`style` 自己的链接。该链接指向了网上的副本。

```xml
<link href="http://www.zotero.org/styles/applied-and-environmental-microbiology" rel="self"/>
```

从属格式需要指定它的父格式，父格式为独立格式。这里的父格式为 `American Society for Microbiology`

```xml
<link href="http://www.zotero.org/styles/american-society-for-microbiology" rel="independent-parent"/>
```

为了更好的维护格式，因此需要指定格式的文档链接。这里文档的链接转到了期刊的主页。

```xml
<link href="http://aem.asm.org/" rel="documentation"/>
```

为了便于分类，还可以在 `category` 元素中设置它的属性。这里分别设置了引用格式为 `numeric`，领域为 `biology`。

```xml
<category citation-format="numeric"/>
<category field="biology"/>
```

当期刊创建格式的时候，可以在 `issn` 元素和 `eissn` 元素中保存其打印标准国际连续出版物号 `(ISSN)` 和其电子版本 `(ESSIN)`。

```xml
<issn>0099-2240</issn>
<eissn>1098-5336</eissn>
```

`updated` 元素保存了最后一次更新的时间戳：

```xml
<updated>2014-04-30T03:45:36+00:00</updated>
```

`rights` 元素中保存了该 CSL 格式的证书：

```xml
<rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
```

## 独立格式解析

下面是一个独立格式的实例，实例中定义了引用格式，所以要比从属格式要大一些。这里的示例只是一个简化的例子，实际的格式比这个还要大很多。但这个简化的例子仍然是完整有效的。

```xml
<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  <info>
    <title>Example Style</title>
    <id>http://www.zotero.org/styles/example</id>
    <link href="http://www.zotero.org/styles/example" rel="self"/>
    <link href="http://www.zotero.org/styles/apa" rel="template"/>
    <link href="http://www.example.com/style-guide/" rel="documentation"/>
    <author>
      <name>John Doe</name>
      <email>JohnDoe@example.com</email>
    </author>
    <contributor>
      <name>Jane Doe</name>
    </contributor>
    <contributor>
      <name>Bill Johnson</name>
    </contributor>
    <category citation-format="author-date"/>
    <category field="science">
    <updated>2014-10-15T18:17:09+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="en">
    <terms>
      <term name="no date">without date</term>
    </terms>
  </locale>
  <macro name="author">
    <names variable="author">
      <name initialize-with="."/>
    </names>
  </macro>
  <macro name="issued-year">
    <choose>
      <if variable="issued">
        <date variable="issued">
          <date-part name="year"/>
        </date>
      </if>
      <else>
        <text term="no date"/>
      </else>
    </choose>
  </macro>
  <citation et-al-min="3" et-al-use-first="1">
    <sort>
      <key macro="author"/>
      <key macro="issued-year"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author"/>
        <text macro="issued-year"/>
      </group>
    </layout>
  </citation>
  <bibliography>
    <sort>
      <key macro="author"/>
      <key macro="issued-year"/>
      <key variable="title"/>
    </sort>
    <layout suffix="." delimiter=", ">
      <group delimiter=". ">
        <text macro="author"/>
        <text macro="issued-year"/>
        <text variable="title"/>
        <text variable="container-title"/>
      </group>
      <group>
        <text variable="volume"/>
        <text variable="issue" prefix="(" suffix=")"/>
      </group>
      <text variable="page"/>
    </layout>
  </bibliography>
</style>
```

### 结构

首先看一下根元素 `style` 的子元素。

```xml
<?xml version="1.0" encoding="utf-8"?>
<style>
  <info/>
  <locale/>
  <macro/>
  <macro/>
  <citation/>
  <bibliography/>
</style>
```

相比于从属格式只有 `info` 一个子元素，独立格式的根元素有除了 `info·` 以外，还有 `locale 、 macro 、citation、bibliography` 四个子元素。

这些子元素的作用分别是：

- `info` 该元素在独立格式中的作用和从属格式中相同，都是用来保存基本的格式元数据。

- `locale` 该元素可以用来从 `locale file` 中重写 `locale data`
- `macro` 用来存储 CSL 代码，这些代码可能应用在 `citation 、bibliography ` 或者其他的 `macro` 元素中。
- `citation` 定义文中引用的格式。
- `bibliography` 定义参考文献目录的格式。

以下从 `style` 根元素开始分析。

### 根元素/style 元素

```xml
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  ...
</style>
```

在从属格式中我们已经了解了 `xmlns` 和 `version` 属性，`class` 是新的属性，用来告诉 `CSL processor`(CSL 处理器) 使用的引用格式是什么。

### info 元素

独立格式的元数据通常比从属格式的元数据更加全面：

```xml
<info>
  <title>Example Style</title>
  <id>http://www.zotero.org/styles/example</id>
  <link href="http://www.zotero.org/styles/example" rel="self"/>
  <link href="http://www.zotero.org/styles/apa" rel="template"/>
  <link href="http://www.example.com/style-guide/" rel="documentation"/>
  <author>
    <name>John Doe</name>
    <email>JohnDoe@example.com</email>
  </author>
  <contributor>
    <name>Jane Doe</name>
  </contributor>
  <contributor>
    <name>Bill Johnson</name>
  </contributor>
  <category citation-format="author-date"/>
  <category field="science">
  <updated>2014-10-15T18:17:09+00:00</updated>
  <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
</info>
```

`title、style ID、"self" link、categories、time stamp、license ` 和从属格式作用都是相同的，但有些许差别。首先，独立格式不依赖父格式，通常是提供一个 `template(模板)` 链接，表明当前的独立格式是以模板格式链接创建的（这样写的原因是，通常情况下，凭空写一个 `CSL` 比较困难，但是借助一个模板改写则容易的多）。这里的模板是 `APA style`。此外，`info` 还倾向于给定一个或者多个 `document` 链接，用来指向引文格式的在线描述。

为了致谢 `CSL` 格式的创建者，他们的名字和联系方式也可以添加到格式文件中。在当前的例子中，有一个作者和两个贡献者。作者通常完成了创建格式的大部分工作，贡献者一般只提供了一些小的改进。

### citation 元素和 macro 元素

接下来分析 `macros` 和 `citation` 元素。`citation` 元素用来描述引用的格式。

```xml
<macro name="author">
  <names variable="author">
    <name initialize-with="."/>
  </names>
</macro>
<macro name="issued-year">
  <choose>
    <if variable="issued">
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </if>
    <else>
      <text term="no date"/>
    </else>
  </choose>
</macro>
<citation et-al-min="3" et-al-use-first="1">
  <sort>
    <key macro="author"/>
    <key macro="issued-year"/>
  </sort>
  <layout prefix="(" suffix=")" delimiter="; ">
    <group delimiter=", ">
      <text macro="author"/>
      <text macro="issued-year"/>
    </group>
  </layout>
</citation>
```

上面的代码可以生成类似 `“(A.C. Smith et al., 2002; W. Wallace, J. Snow, 1999)”` 这样的格式。为了理解这种引用格式在 CSL 中式如何编码的，要先分析 `citation` 元素中的 `layout` 元素。`layout` 元素中的 `prefix`、`suffix` 和 `delimiter` 属性分别定义了前缀（这里为 `(`），后缀（这里为 `)`）以及条目分隔符（这里为 `;`）。也就是说整个条目要放在圆括号中，条目之间以 `;` 分隔。每个条目的格式在 `layout` 元素的内容中定义。其内容中的 `group` 元素包括了 `author` 和 `issue-year` macros，并且以 `,` 分隔。

`macro` 元素是一种辅助元素，在其他元素或者其他 `macro` 元素中使用。通过其名字也可以看出，其与其他语言中的 __ 宏 __ 类似，这里暂不翻译。每个 `macro` 都含有 `name` 属性。

**注：**以下为了方便描述，将对应的 `macro` 元素直接以 `name` 指代，例：`name` 为 `author` 的 `macro` 元素直接称为 `author` 元素。

``author` 元素的 `name` 的属性指定了名称，`variable` 属性保存了具体的作者值，`initialize-with` 表明作者值为首字母缩写，每个首字母后面为 `.`。

`issued-year` 元素以分支语句开始，分支语句以 `choose` 元素定义，其中包含 `if` 和 `else` 元素。如果参考文献有日期，则保存在 `issued` 变量中，如果 `issued-year` 元素被引用，日期的年份将被印出，否则就印出 `no date`。

`layout` 元素中的 `group` 元素的 `author` 用来印出在 `author` 元素中存储的值，`issued-year` 则用来印出 `issued-year` 元素储存的值。

为什么不直接把 `macro` 中的内容放在 `citation` 元素中呢？使用 `macro` 有什么好处呢？在上面的例子中，`macro` 的使用简化了 `citation` 元素的结构。此外，上述的两个 `macro` 总共被调用了 4 次（两次在 `citation` 元素中，两次在 `bibliography` 元素中），如果不使用 `macro`，必须多次重复这些代码。因此 `macro` 的使用提供了更紧凑的样式。

再看 `citation` 元素，其中含有两个属性 `et-al-min` 和 `et-al-use-first`。这里的值分别为 `3、1`，表示作者大于等于 `3` 个的时候，使用印出第一个作者，后面跟 `et al` 术语。

`citation` 元素中还包括了 `sort` 元素，其中包括了两个 `key` 元素，用来表明引用的排列顺序。第一个 `key` 元素中引用了 `author` 宏，第二个宏引用了 `issued-year` 宏，表明，先按作者作者字母排序，然后按文献发表年份排序。

### bibliography 元素

`citation` 元素定义了引用的格式，`bibliography` 定义了参考文献条目的格式。

```xml
<macro name="author">
  <names variable="author">
    <name initialize-with="."/>
  </names>
</macro>
<macro name="issued-year">
  <choose>
    <if variable="issued">
      <date variable="issued">
        <date-part name="year"/>
      </date>
    </if>
    <else>
      <text term="no date"/>
    </else>
  </choose>
</macro>
...
<bibliography>
  <sort>
    <key macro="author"/>
    <key macro="issued-year"/>
    <key variable="title"/>
  </sort>
  <layout suffix="." delimiter=", ">
    <group delimiter=". ">
      <text macro="author"/>
      <text macro="issued-year"/>
      <text variable="title"/>
      <text variable="container-title"/>
    </group>
    <group>
      <text variable="volume"/>
      <text variable="issue" prefix="(" suffix=")"/>
    </group>
    <text variable="page"/>
  </layout>
</bibliography>
```

上述的例子中的 `bibliography` 实际上只适用于一种类型：期刊文章。它生成的条目的格式是：

> A.C. Smith, D. Williams, T. Johnson. 2002. Story of my life. Journal of Biographies, 12(2), 24—27. W. Wallace, J. Snow. 1999. Winter is coming. Journal of Climate Dynamics, 6(9), 97—102.

我们怎么定义这种格式呢？首先，`bibliography` 元素的结构和 `citation` 元素很相似，不同的是，这里的 `layout` 元素用来定义参考文献条目的格式。除了给出 `author` 和 `issued-year`，参考文献条目还需要给出每个条目的 `title`、`container-title`(对期刊文章来说，就是期刊的名称)、`volume`、`issue` 和 `page`。这里 `layout` 元素使用属性 `suffix` 和 `delimiter` 分别指定了 `group` 的后缀为 `.`，以及 `group` 之间的分隔符为 `,`。

和 `citation` 元素相同，`bibliography` 也包括了一个 `sort` 元素，用来对参考文献条目进行排序。这里的三个 `key` 分别为 `author`、`issued-year` 和 `title`。

### locale 元素

最后介绍的是 `loacle` 元素。正如上面写道的，`CSL locale file` 允许 `CSL` 样式快速转换为不同的语言。但是，有时需要覆盖默认翻译。

```xml
<locale xml:lang="en">
  <terms>
    <term name="no date">without date</term>
  </terms>
</locale>
```

对 US English 来说，`"no date"` 项的内容就是 `"no date"`。但是在我们的例子中，我们想使用 `"without date"` 去替换它。为了重写默认的翻译，我们可以使用类似上面的 `locale` 元素。对一个没有日期的条目来说，这种重写会导致引用变为像 `(D. Williams, without date)` 这样的格式。

`locale` 的 `xml:lang` 属性被设置为 `en`，这告诉 CSL 样式当样式被用于英语写作的时候，重写 `"no date"`。如果我们在德语写作的时候使用该 `CSL`，该样式将会依据 `German locale file ` 印出德语的翻译 (`ohne Datum`)
