# 微信小程序【小而美工具】

[官网站点](https://whinc.github.io/ucalc-website/) 

微信号：`iCloudCoding`

<p align="center">
  <a href="https://whinc.github.io/ucalc-website/" target="_blank"><img src="./public/assets/images/qrcode_soso.png" alt="Next js starter banner"></a>
</p>

### 本地开发

```bash
npm ci
# 启动后本地浏览器打开 http://localhost:3000/ucalc-website/
npm run dev
```

### 部署发布

执行下面发布指令后，自动 push 触发 CI 发布流程

```bash
# https://whinc.github.io/ucalc-website/
npm run deploy:github

# https://xiaohui_hubei.gitee.io/ucalc-website/
npm run deploy:gitee
```

### 新增工具流程

1. 更新运行截图 `public/assets/screenshots_raw/xxx_{light,dark}.png`
2. 更新二维码资源 `public/assets/screenshots_raw/xxx_qrcode.png`
  2.1 [小程序码生成](https://mp.weixin.qq.com/wxamp/wxaqrcode/weappcode) 官方工具，页面路径格式为 `page/home/index?share=xxx`，具体参考 `project.private.config.json`
3. 更新 pages.ts 
4. 更新 VerticalFeatures.tsx

### 更新图片资源

创建`.env.local`环境变量文件，并保存 tinypng 站点申请的秘钥
```
TINYPNG_API_KEY=<YOUR_API_KEY>
```

```bash
# 1.将新增的图片（原始大小）拷贝到 public/assets/screenshots_raw 目录
# 2.执行下面脚本，全量压缩图片
npm run update-assets

# 增量压缩图片，仅 --since 日期之后新增的图片会被压缩（日期是本地时区，无需换算）
npm run update-assets -- --since='2024-04-29T10:00:00'
```

> 脚本依赖 zx 工具，请先确保全局安装`npm install -g zx`


### Gitee

为了方便国内用户访问，仓库也同步一份到 Gitee 上 [xiaohui_hubei/ucalc-website](https://gitee.com/xiaohui_hubei/ucalc-website)

```bash
git remote add origin-gitee git@gitee.com:xiaohui_hubei/ucalc-website.git
git push origin-gitee main
```
