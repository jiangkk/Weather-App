# Weather-App

一个天气APP，点击[这里](https://jiangkk.github.io/Weather-App/)进行线上访问。
## 开发

```sh
# 安装依赖
npm i 

# 本地开发，需要node12版本及以上
npm run dev

```

## 部署

```sh

# 本地执行部署, 会构建到pages分支，从而更新github pages
npm run publish

```

## 说明

#### 技术选型

- 工程：基于`vite` 进行了部分额外定制化配置
- 框架：`react` + `react-router`
- 除`classnames`外无其他多余第三方库

#### 目录说明

- `src/pages`: 业务页面
- `src/components`: 公共组件
- `src/common`: 公共方法或公共配置
- `src/hooks`: 公共hook
 
#### 小的设计

- 适配：采用了等比宽度缩放的`rem`方式，见`common/rem.js`，配合`px2rem`插件实现
- 离线：借助于`vite`官方提供的`pwa`插件，可以很方便配置离线缓存。与此同时，前期也在`request`方法上增加一层离线缓存，结果异步存入`localstorage`
- 定位：所用的第三方开发接口在获取天气时必须要获取经纬度，发现用原生获取经纬的方法有时耗时会比较久，因此为了优化体验。用户第一次进来会先看到默认定位的天气界面，同步进行授权动作，完成后自动重新刷新天气信息，同时进行了缓存。详见`hooks/usePosition.js`

### TODO & 遗留点

- 一些还原由于时间原因暂时无法完善，如第二页有一个图表，考虑到一般的图表库体积都较大，而本项目中所用到的能力非常少，因此是可以考虑使用`canvas`自己进行绘制的，时间有点不够。抽时间再进行补充。
- 自动化部署：CI配置。
- 交互体验优化：切换的流畅性，增加动画等。