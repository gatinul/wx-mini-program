# wx-mini-program
一个小程序demo

## 需要

1. [官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/)
2. [flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 组件使用

- view
  - 大部分.wxml文件都用view包裹
- swiper
  - 城市页放了一个swiper（swiper放在view里会无效）
- text
  - 放置文本内容
- picker
  - 选择组件，这里用来选择地区
- image
  - image中mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。

## api应用

- navigateTo
  - 保留当前页跳转新页面，url可接参数，用?隔开

## 事件绑定

- bindtap
  - tap:手指触摸后马上离开 

## Todo

1. 利用flex布局编写城市页信息

## 页面截图

![picture](https://github.com/gatinul/wx-mini-program/raw/master/Screenshots/screen.png)

![picture](https://github.com/gatinul/wx-mini-program/raw/master/Screenshots/screen1.png)

