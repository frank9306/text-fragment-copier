# Text Fragment Copier

> 📖 本文档也提供 [English Version](./README.md)

✨ 一个极简的 Chrome 浏览器插件，允许你在网页中选中任意文字，右键点击即可复制一个带有 [Text Fragment](https://web.dev/text-fragments/)（`#:~:text=`）高亮定位的链接。

## 🔧 功能特点

- ✅ 右键一键复制高亮定位链接
- 🖱️ 支持网页中任意可见文字
- 📋 自动复制到剪贴板
- ⚡ 利用 Chrome 原生 `#:~:text=` 功能

## 📸 示例

例如： https://example.com/page#:~:text=你选择的文本内容


点击链接后会自动滚动并高亮该段文字。

## 🚀 本地安装（开发模式）

1. 克隆或下载本项目
2. 打开浏览器访问：`chrome://extensions`
3. 打开右上角 **开发者模式**
4. 点击「加载已解压的扩展程序」，选择项目文件夹
5. 完成！

## 📁 项目结构
```
text-fragment-copier/
├── manifest.json # 插件配置（Manifest V3）
└── background.js # 背景脚本，负责右键菜单与剪贴板操作
```


## 🛠️ 使用方式

1. 打开任意网页
2. 选中文本
3. 右键 → **复制带文本定位的链接**
4. 粘贴使用即可

## ⚠️ 浏览器兼容性

| 浏览器     | 是否支持 |
|------------|----------|
| ✅ Chrome  | 支持 |
| ✅ Edge    | 支持 |
| ❌ Firefox | 不支持 |
| ❌ Safari  | 不支持 |

> 该功能目前仅支持基于 Chromium 的浏览器。

## 📚 参考资料

- [Text Fragments — web.dev](https://web.dev/text-fragments/)
- [Chrome Feature: Scroll To Text Fragment](https://chromestatus.com/feature/4733392803332096)

## 🧑‍💻 开源协议

MIT — 你爱怎么用就怎么用😎