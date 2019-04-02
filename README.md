# PaiGu

## 概述

PaiGu 服务用于对百度和谷歌搜索结果进行比较，也可以自定义搜索引擎。

[![Netlify Status](https://api.netlify.com/api/v1/badges/0736e710-4d8a-47fc-a07c-b12c42f503dc/deploy-status)](https://app.netlify.com/sites/determined-brahmagupta-ed077d/deploys)

## 比较内容

+ 搜索引擎响应速度
+ 搜索关键词匹配度

## 附加卖点

+ 过滤广告
+ 过滤推广
+ 无需翻墙

## 自定义搜索引擎

1. 在 `client/src/utils/engines.ts` 添加引擎地址
2. 在 `client/src/parses` 下添加解析器

***注意：引擎名要与解析器名相同（不区分大小写）***

## 技术实现

+ 服务端：go/echo
+ WEB端：html/css/javascript/typescript/vue