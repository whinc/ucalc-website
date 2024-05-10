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

```bash
# https://whinc.github.io/ucalc-website/
npm run deploy:github

# https://xiaohui_hubei.gitee.io/ucalc-website/
npm run deploy:gitee
```

### 更新图片资源

```bash
# 1.将新增的图片（原始大小）拷贝到 public/assets/screenshots_raw 目录
# 2.执行下面脚本，全量压缩图片
TINYPNG_API_KEY=<API_KEY> npm run update-assets

# 增量压缩图片，仅 --since 日期之后新增的图片会被压缩
TINYPNG_API_KEY=<API_KEY> npm run update-assets -- --since='2024-04-29T10:00:00'
```

> 脚本依赖 zx 工具，请先确保全局安装`npm install -g zx`

### Gitee

为了方便国内用户访问，仓库也同步一份到 Gitee 上 [xiaohui_hubei/ucalc-website](https://gitee.com/xiaohui_hubei/ucalc-website)

```bash
git remote add origin-gitee git@gitee.com:xiaohui_hubei/ucalc-website.git
git push origin-gitee main
```
