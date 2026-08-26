# 豆包输入法图标仓库

给豆包输入法左上角更换图标使用的图片直链工具。所有分类显示在同一条连续瀑布流中，顶部标签只负责定位；点击图片卡片或“复制直链”按钮即可复制链接。

当前分类：

- 群友分享：13 个，原有动态、静态和默认素材已合并到这里。
- 输入法预设：13 个，使用应用商店或项目仓库中的真实图标，全部带透明背景，并保留一个全透明 PNG。
- 静态推荐：16 个 PNG。
- 动态推荐：13 个正方形 GIF，包含轻量循环动画和吉伊卡哇 / 小八热门动画。

## 在线页面

https://logo.agar-cabin.site/

复制出来的图片直链使用 jsDelivr GitHub CDN，例如：

https://cdn.jsdelivr.net/gh/agarcabin/doubao-ime-icons@main/icons/input-methods/sogou.png

jsDelivr 通常比直接复制 `raw.githubusercontent.com` 更适合做图片直链，但不同运营商和网络环境仍可能有差异；如果手机端打不开，建议先在手机浏览器直接测试复制出来的链接。

## 素材说明

- 原有 GIF、PNG 和默认图标保留在 `icons/animated`、`icons/static`、`icons/default`。
- 搜狗、百度、讯飞、微信、Gboard、SwiftKey、仓输入法和 iRime 使用对应 App Store 条目的应用图标，并进一步去除连通背景。
- Trime、Fcitx5 for Android、FlorisBoard 和 HeliBoard 使用各自项目仓库中的官方图标。
- 之前误标为输入法图标的华为、小米、OPPO、vivo、三星等品牌 Logo，以及手心、触宝等通用占位图，已经从预设组移除。
- 静态推荐图标来自 Iconify 提供的 Noto Emoji、Fluent Emoji 等开源图标集合。
- 新增的吉伊卡哇 / 小八 GIF 来自 Tenor 页面；不适合正方形裁切的横幅素材已替换。详细来源和许可说明见 [SOURCES.md](SOURCES.md)。

## 本地预览

直接打开 `index.html` 即可查看；如果浏览器限制本地文件的剪切板权限，可在此目录启动任意静态文件服务器后再打开页面。
