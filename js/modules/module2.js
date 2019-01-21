// 有依赖的模块
define([
    'module1'
], function(module1) {
    'use strict';
    var msg = "module2";
    function showMsg() {
        console.log(module1.getName())
      }
    return {showMsg}
});
 