console.log(
  "%c                                       ",
  'background-image:url("https://qlogo3.store.qq.com/qzone/1993996310/1993996310/100?1570634666");background-repeat:no-repeat;display:block;line-height:100px'
);
console.log(
  "%c Qzone Fix %c Yifan Xiao(1993996310@qq.com) ",
  "color:#FF6600;font-size:20px;background-color:black",
  "color:#99FF00;font-size:20px;background-color:#663300"
);

injectScript(`
QZFL.media.getFlashVersion().major = 32;
console.log("[QZONEFIX]已绕过Flash检查,现在空间不再会要求你安装的Flash啦！！！");

`);

//没法直接访问页面JS API,通过中转方法来实现！
function injectScript(code) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.appendChild(document.createTextNode(code));
  document.getElementsByTagName("body")[0].appendChild(script);
  console.log("[QZONEFIX]Inject javascript code successful!");
}
