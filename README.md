# 微信小程序【小而美工具】

[官网站点](https://whinc.github.io/ucalc-website/) | [备用站点（国内推荐）](https://xiaohui_hubei.gitee.io/ucalc-website/)

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

1. 将新增的图片（原始大小）拷贝到 `public/assets/screenshots_raw`
2. 执行脚本`sh ./scripts/update-assets.sh`

> 脚本依赖 zx 工具，请先确保全局安装`npm install -g zx`

### Gitee

为了方便国内用户访问，仓库也同步一份到 Gitee 上 [xiaohui_hubei/ucalc-website](https://gitee.com/xiaohui_hubei/ucalc-website)

```bash
git remote add origin-gitee git@gitee.com:xiaohui_hubei/ucalc-website.git
git push origin-gitee main
```
