# 微信小程序【小而美工具】

[官网站点](https://whinc.github.io/ucalc-website/) | [备用站点（国内推荐）](https://xiaohui_hubei.gitee.io/ucalc-website/)

微信号：`iCloudCoding`

<p align="center">
  <a href="https://whinc.github.io/ucalc-website/" target="_blank"><img src="./public/assets/images/qrcode_soso.png" alt="Next js starter banner"></a>
</p>

### 本地开发

```bash
npm ci
npm run dev
```

### 部署发布

Github：推送代码，触发流水线发布 Github Pages
Gitee：由于 Gitee 暂不支持 node.js ^18.17.0 的构建环境，采用手动发布，本地运行`npm run build-prod`后推送到仓库，手动触发 Gitee Pages 部署

### Gitee

为了方便国内用户访问，仓库也同步一份到 Gitee 上 [xiaohui_hubei/ucalc-website](https://gitee.com/xiaohui_hubei/ucalc-website)

```bash
git remote add origin-gitee git@gitee.com:xiaohui_hubei/ucalc-website.git
git push origin-gitee main
```

### 压缩图片

```
TINYPNG_API_KEY=<API_KEY> node ./scripts/tinypng.mjs <input>  <output>
```