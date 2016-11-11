goog.provide('xiaoD.start');
goog.provide('xiaoD.i');

goog.require('goog.dom');
goog.require('goog.ui.Zippy');

xiaoD.start = function() {
  var newDiv = goog.dom.createDom('h1', {'id':'h1','style': 'background-color:#EEE'},
    'Hello world!');
  goog.dom.appendChild(document.body, newDiv);
  
  var zippyHeader = document.getElementById('');
  var zippyContent = document.getElementById('content');
  var zippy = new goog.ui.Zippy("header", 'h1',false,zippyContent);
  
  function react(e) {
    console.log('The Zippy opened!');
  }
  
  zippy.addOnDisposeCallback(react);
  zippy.toggle();
  xiaoD.i = zippy;
  //goog.events.listen(zippy, goog.ui.Zippy.Events.TOGGLE, react);
  
  //触发事件
  //goog.events.dispatchEvent(zippy, goog.ui.Zippy.Events.TOGGLE);
  
};

// Ensures the symbol will be visible after compiler renaming.
// 解析脚本时需要,避免命名空间被打包时被重命名
goog.exportSymbol('xiaoD.start', xiaoD.start);