(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

  return __webpack_require__(__webpack_require__.s = "./src/app.js");
})
({
  
      "./src/app.js":
      (function (module, exports, __webpack_require__) {
        eval("const str = __webpack_require__(\"./src/a.js\");\n\n__webpack_require__(\"./src/style/base.less\");\n\nconsole.log(str);");
      }),
  
      "./src/a.js":
      (function (module, exports, __webpack_require__) {
        eval("const str = __webpack_require__(\"./src/base/b.js\");\n\nmodule.exports = 'a' + str;");
      }),
  
      "./src/base/b.js":
      (function (module, exports, __webpack_require__) {
        eval("module.exports = 'b';");
      }),
  
      "./src/style/base.less":
      (function (module, exports, __webpack_require__) {
        eval("let style = document.createElement('style');\nstyle.innerHTML = \"body {\\n  background-color: #f00;\\n}\\n\";\ndocument.body.appendChild(style);");
      }),
  
});
