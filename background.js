
//拦截 https://h5.qzone.qq.com/proxy/domain/taotao.qq.com/cgi-bin/emotion_cgi_getcmtreply_v6
//因为此接口行为不正常
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: details.url.indexOf("https://h5.qzone.qq.com/proxy/domain/taotao.qq.com/cgi-bin/emotion_cgi_getcmtreply_v6") != -1 };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
