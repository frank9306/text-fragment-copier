# Text Fragment Copier

> 📖 This README is also available in [简体中文](./README.zh-CN.md)

✨ A minimal Chrome extension that allows you to right-click any selected text on a webpage and copy a direct link with [Text Fragment](https://web.dev/text-fragments/) (`#:~:text=`) that highlights and scrolls to that exact text.

## 🔧 Features

- ✅ Right-click to copy precise URL with highlighted text
- 🖱️ Works with any visible text on the page
- 📋 Copies result directly to clipboard
- ⚡ Based on Chrome’s native `#:~:text=` feature

## 📸 Demo

Example: https://example.com/page#:~:text=Your%20Selected%20Text


## 🚀 Install (Development)

1. Clone or download this repo.
2. Go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**, then select this folder
5. That’s it!

## 📁 Project Structure

```
text-fragment-copier/
├── manifest.json # Extension manifest (MV3)
└── background.js # Handles right-click and clipboard copy
```


## 🛠️ Usage

1. Open any webpage
2. Select the text you want to link to
3. Right-click → **Copy text fragment link**
4. Paste and share!

## ⚠️ Compatibility

| Browser      | Supported? |
|--------------|------------|
| ✅ Chrome     | Yes        |
| ✅ Edge       | Yes        |
| ❌ Firefox    | No         |
| ❌ Safari     | No         |

> `#:~:text=` is a Chromium-only feature.

## 📚 References

- [Text Fragments — web.dev](https://web.dev/text-fragments/)
- [Chrome Feature: Scroll To Text Fragment](https://chromestatus.com/feature/4733392803332096)

## 🧑‍💻 License

MIT — free to use, share, and modify. 