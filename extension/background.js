const VIBEPAD_ORIGIN = "https://dsalfen.github.io";
const VIBEPAD_URL = "https://dsalfen.github.io/vibepad/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "vibepad-capture",
    title: "Add to Vibepad Inbox",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== "vibepad-capture") return;
  const text = info.selectionText?.trim();
  if (!text) return;

  const captureUrl = VIBEPAD_URL + "?capture=" + encodeURIComponent(text);

  const [existing] = await chrome.tabs.query({ url: VIBEPAD_ORIGIN + "/vibepad/*" });
  if (existing) {
    await chrome.tabs.update(existing.id, { url: captureUrl, active: true });
    chrome.windows.update(existing.windowId, { focused: true });
  } else {
    chrome.tabs.create({ url: captureUrl });
  }
});
