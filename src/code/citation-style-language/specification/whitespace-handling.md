---
title: 空格处理
date: 2022-08-02 16:02:13
updated: 2022-08-03 10:26:47
---

# 空格处理

> [!question] Whitespace Handling
> 翻译有一些疑惑，请参阅原文，欢迎提出改善意见。

CSL styles are valid XML, but CSL processors MUST NOT normalize attribute values by trimming leading or trailing whitespace from attributes which define text that is intended for output:

CSL 样式是有效的 XML，但是 CSL 处理器不会（MUST NOT）通过修剪以下属性值前后的空格来规范输出。

- after-collapse-delimiter
- cite-group-delimiter
- delimiter
- initialize-with
- name-delimiter
- names-delimiter
- prefix
- range-delimiter
- sort-separator
- suffix
- year-suffix-delimiter
- value
