---
title: Zotero 指北
date: 2022-01-18 22:00:06
updated: 2022-07-29 22:02:11
---

# Zotero 指北

## 关于 Zotero 是什么以及为什么使用它

Why Zotero & Why NOT EndNote?

> Todo

## 安装与配置

### 主程序

没什么好记录的，在 [Zotero 官网](https://zotero.org) 下载一路下一步安装即可。

### 浏览器插件 Zotero Connector

Zotero 相较于其他文献管理软件的一大优势就是可以直接从网页中抓取元数据并存入数据库，这个过程通过浏览器插件 Zotero Connector 实现。

### 中文 Translator 与茉莉花插件

比起其他的文献管理软件，原生的 Zotero 对中文支持并没有好到哪里去，但是得益于开源社区的维护，我们可以通过第三方 translator 库 [github.com/l0o0/translators_CN](https://github.com/l0o0/translators_CN) 极大的提高其中文文献抓取能力。

该库的主要维护者还开发了插件 [Jasminum - 茉莉花](https://github.com/l0o0/jasminum) 来继续增强 Zotero 的中文支持，茉莉花插件提供了如下功能：

> 1.  拆分或合并 Zotero 中条目作者姓和名
> 2.  根据知网上下载的文献文件来抓取引用信息（就是根据文件名）
> 3. 添加中文 PDF/CAJ 时，自动拉取知网数据，该功能默认关闭。需要到设置中开启，注意添加的文件名需要含有中文，全英文没有效果（还是根据文件名）
> 4. 为知网的学位论文 PDF 添加书签
> 5. 更新中文 translators
> 6. 拉取文献引用次数，是否核心期刊

就安装而言，

1. 下载安装 Jasminum 插件：在 [Latest Release · l0o0/jasminum (github.com)](https://github.com/l0o0/jasminum/releases/latest) 下载 `.xpi` 文件。在 Zotero——Tools——Add-ons——右上角小齿轮⚙——Install Add-on From File...——选中第二步保存的文件——确定——重启 Zotero。
2. 下载安装 PDFtk：下载并安装 [PDFtk server](https://www.pdflabs.com/tools/pdftk-server/) ，记录安装路径（eg. `C: \Program Files (x86)\PDFtk`）。在 Zotero——edit——Preferences——Jasminum——Setting——PDFtk Server Execute File Path 中填写 `<PDFtk install dir>/bin` （eg. `C: \Program Files (x86)\PDFtk\bin`）（即 PDFtk 可执行文件所在目录）。MAC 用户参考 [这里](https://github.com/l0o0/jasminum#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8) 。
3. 安装中文 Translator：与上一步同一界面——Unofficial Translator Repository——Refresh——Update all。
4. 更新中文 Translator：打开已安装 Zotero Connector 的浏览器，右击 Zotero Connector 图标进入拓展选项，Advanced——Update Translators。

### Styles 与 GB/T 7714-2015 CSL 文件

 [这是一个修改过的 GB/T 7714-2015 CSL 文件](https://github.com/northword/Scripts/tree/main/Zotero/styles) ，将这些文件放置于 Zotero 数据目录下的 Styles 文件夹即可。

国内学校论文/作业的参考文献格式基本上都与国标相近，这里的 CSL 文件经过修改，适配了参考文献列表“等”与“et al”混排。其原理见后文 [参考文献列表中文“等”与外文“et al”混排](#参考文献列表中文“等”与外文“et%20al”混排) 。

## 基础使用

截止至这里，最基本的 Zotero 安装就已经完成了。关于具体的使用，可以参考以下内容来学习，他们均较为详细地介绍了如何导入与组织文献以及如何在 Word 中插入引用，因此就不再重复造轮子了。

- [Zotero 官方文档](https://www.zotero.org/support/start) 
- [韩学士. 优雅地用 Zotero 进行文献管理和论文写作. GitHub](https://github.com/redleafnew/Zotero_introduction/releases) 【推荐】
- [思考问题的熊. 文献管理神器 Zotero 学习路径指南. 少数派](https://sspai.com/post/56724)

在使用 Zotero 之前，我希望可以引入几个术语：

- **条目 Item**：
- **附件 Attachments**：
- 链接的附件：
- 存储的附件：
- 合集 Collections：
- 标签 Tags:
- 引文
- 参考书目

以下列个需要了解的大纲：

```markdown
### 添加与维护条目、附件

#### 添加条目

##### 通过标识符添加条目

##### 通过附件添加条目

##### 直接从 Connector 生成条目

#### 添加附件

### 组织、管理文献库

#### 集合与标签

#### 笔记与关联条目

#### 重复条目

### 插入引文与生成参考书目

#### 直接在 Zotero 里生成参考条目

#### 在 Word 里插入引文

#### 使用 Zotero bib 生成参考条目

#### 引文格式
```

## 多设备同步方案

在多设备同步中，条目的同步均是通过 Zotero 官方提供的同步服务进行的，不同的是附件的同步方式。可以依据需要同步的设备类型、同步的目的来合理选择同步的方案。

### 使用官方的存储空间进行附件同步

优点：只需要账号登录上，基本不需要任何额外配置，方便快捷简单。

缺点：默认只有 300M，更大要付费，没钱，一票否决，过了。

### WebDav 实现附件同步

> Todo

### OneDrive & ZotFile 实现附件同步

> Todo

### 使用 ZotFile 实现更自由地附件管理

> Todo

## 其他插件与玩法

少数派这篇文章介绍了一些较为基础的用法，而对一些更深的玩法并没有详细展开或提及；同时，它发布于 2019 年 9 月，而在这之后，Zotero 也涌现出了许多其他优秀的插件，却少有文章进行较为集中的综述，所以下面对我所了解的一些技巧进行记录和分享。

### Zotero-PDF-Translate 实现在 PDF 中翻译

[windingwind/zotero-pdf-translate: PDF translation add-on for Zotero 6 (github.com)](https://github.com/windingwind/zotero-pdf-translate)

### Zotero-tag 实现新条目添加未读标签，阅读后自动取消

[windingwind/zotero-tag: One add-on to rule Tags all. Manage all your Tags in one Zotero add-on. (github.com)](https://github.com/windingwind/zotero-tag)

该插件可以定义一系列规则组，例如新添加条目添加“未读”标签，当打开过后，自动取消该标签。

### Zotero-SciHub 实现从 SCI-HUB 下载全文

[ethanwillis/zotero-scihub: A plugin that will automatically download PDFs of zotero items from sci-hub (github.com)](https://github.com/ethanwillis/zotero-scihub)

### Zotero Update IFs 为期刊添加影响因子

[redleafnew/zotero-updateifs: 从唯问更新影响因子](https://github.com/redleafnew/zotero-updateifs)

### Zotero 与 Obdisian 或其他 Markdown 编辑器结联动

> Todo

### Zutilo 

> Todo

### 使用 Better BibTex for Zotero 实现在 LaTeX / Markdown 中引用

> Todo

### 修改 CSL 文件使参考文献列表中文“等”与外文“et al”混排

通过 Zotero `Language` 字段与 CSL `<Local>` 标签实现。

> Todo

## 其他平台客户端

### iOS

目前官方 iOS 客户端已正式发布。

### Android

无官方客户端，考虑使用三方客户端 Zoo for Zotero。

### Web

> Todo
