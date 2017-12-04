;(function($){
    //定义一个默认的参数配置项
    var defaluts = {
        direction: 'h',//h为水平,v为垂直
        textAlign:"left"
    };

    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }

   
    
    /**
     * 在jquery的原型上定义一个step方法
     * 
     */
    $.fn.extend({
        step:function(options){
            if (!isValid(options))
            return this;
            //使用jQuery.extend 覆盖插件默认参数
            var opts = $.extend({}, defaluts, options); 
            //拿到step的个数
            var persentW = this.width()/this.find(".step").length ;
            var mydirection = null;
            if(opts.direction=="h"){
               mydirection = "left";
                this.find(".step").css({
                    width:persentW+"px"
                })
                var boxWidth = this.find(".step").eq(0).width()*this.find(".step").length;
                this.find(".line").css("width",boxWidth+"px")
            }else if(opts.direction=="v"){
               mydirection = "none";
            }

            
            
           
            
            
            
            
            return this.find(".step-explain").each(function () {  //这里的this 就是 jQuery对象。这里return 为了支持链式调用
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
                 var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                 
                 
                 $this.parent(".step").css({
                     "float":mydirection,
                 })
                 
                // //根据参数来设置 dom的样式
                $this.css({
                    "text-align":opts.textAlign,
                })
            });
            
    
        },
        toStep:function(num){

             if(!num||typeof num!="number"){
                 return
             }
             var maxNum = this.find(".step").length;
             if(num>maxNum){
                 num = maxNum;
             }
             this.find(".step").eq(0).find(".step-round").addClass("hasRound")
             //拿到需要走的宽度
             var runWidth = this.find(".step").eq(0).width()*num;
             this.find(".lineGo").animate({
                    width:runWidth+"px"
                },500,function(){
                    for( var i = 0; i<num;i++){
                        $(this).siblings(".step").eq(i).children(".step-round").addClass("hasRound");
                        $(this).siblings(".step").eq(i).children(".step-explain").fadeIn(100).addClass("colorGreen")

                    }
                })
            //  for(var i = 0;i<num;i++){
            //     this.find(".step-round").eq(i).addClass("hasRound")
            //  }


        }
    })

})(window.jQuery)