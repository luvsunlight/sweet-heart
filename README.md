# Sweet-Heart-3D

> A gift for my girlfriend 西西


## Screenshots

![](https://github.com/luvsunlight/sweet-heart/blob/master/screenshots/main.png)

![](https://github.com/luvsunlight/sweet-heart/blob/master/screenshots/dashboard.png)

![](https://github.com/luvsunlight/sweet-heart/blob/master/screenshots/music.png)

## Change Log

### 2018/10/17

* 添加小心心
* 项目部署至[我的博客下](https://luvsunlight.github.io/demo/sweet-heart-3d/)

### 2018/10/18

* 用vue-cli的webpack-simple模板进行重构
* 编写了npm下的node脚本，使用`npm run dist`来一键build打包至本地并且上传到远程(最激动人心的功能)
* 更顺畅的字体过渡动画
* 优化了Talker组件
* 增加了小的UI栏
* 增加了让心心开心和伤心的功能

### 2018/10/19

* 增加了地图功能，点击后显示我在哪个地方
* 修复了菜单栏阴影显示不正常的bug
* 优化了心心版块的代码
* 心心的大小和明度会随着其开心程度变化
* 将所有的对话单独做成一个模块Message.js
* 在触摸心心时会触发额外的台词
* 当心心的开心程度低于一定程度时，会触发新的台词
* 设置了隐藏的台词(暂未启用，留作彩蛋)
* 进一步优化了Talker的业务逻辑
* 增加了音乐播放器的模块，目前只能播放小心心，同时支持在后台播放音乐的功能

### 2018/10/20

* 将项目同步至github上,但是同步的功能还暂时不打算放在自动化脚本里运行
* 给图标做了bounce的动画

## Todo

* 增加数据版块，可以在后台记录用户访问该网站的次数和时间

## Existing Bug

### 移动端版本的高德底图部分图层不加载

