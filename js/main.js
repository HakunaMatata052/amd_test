(function () {
    require.config({
        baseUrl: 'js/modules',
        shim: {
            'superslide':{
                deps:['jquery']
            }
        }
    });

    requirejs(["jquery","superslide"], function (jQuery ,slide) {
        // module2.showMsg();
        $('body').css('background',"#f00");
        $('.demo').slide({'autoplay':true})
    })
    document.getElementById("alerter").onclick = function(){
        require(["alerter"],function(alerter){
            $("#alerter").text(alerter)
        })
    }    
})()