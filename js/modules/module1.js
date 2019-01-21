// 没有依赖的模块

define(function(){
    let name = "module1";
    function getName(){
        return name;
    }
    // 暴露模块
    return {getName}
})