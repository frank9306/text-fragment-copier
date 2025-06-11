chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "copyTextFragment",
      title: "复制带文本定位的链接",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copyTextFragment") {
      const selectedText = info.selectionText;
      if (!selectedText || !tab || !tab.url) return;
  
      const encoded = encodeURIComponent(selectedText);
      const textFragmentUrl = `${tab.url.split('#')[0]}#:~:text=${encoded}`;
  
      // 复制到剪贴板
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          navigator.clipboard.writeText(text).then(() => {
            console.log("✅ 链接已复制:", text);
          });
        },
        args: [textFragmentUrl]
      });
    }
  });
  