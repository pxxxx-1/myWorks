/**
 * Created by Administrator on 2018/1/5.
 */
;(function($){

    $.fn.timeLine = function(opt) {

        var defaults = {
            w: 0,  
            n:0,  
            btnPrev:"#btnLeft",   
            btnNext: "#btnRight",  
            dateBox:"#yearList",
            dateArr: "#yearList li",
            conBox:"#cUl",  
            conArr:"#cUl li" 
        };

        var opt = $.extend({}, defaults, opt);
        return this.each(function() {

            opt.btnPrev=$(opt.btnPrev);
            opt.btnNext=$(opt.btnNext);
            opt.dateBox=$(opt.dateBox);
            opt.dateArr=$(opt.dateArr);
            opt.conBox=$(opt.conBox);
            opt.conArr=$(opt.conArr);
            var liNum=opt.conArr.length;

            opt.conArr.each(function(i){
                $(this).css("left",opt.w*i+"px");
            })

            opt.dateBox.on("click","li",function(){
                var i=$(this).index();
                opt.n=i;
                updata();
            })


            opt.btnNext.on("click",function(){
                if(opt.n<liNum){
                    opt.n++;
                    (opt.n>=liNum)&&(opt.n=0);
                    updata();
                }
            })
            opt.btnPrev.on("click",function(){
                opt.n--;
                (opt.n<0)&&(opt.n=liNum-1);
                updata();
            })

            function updata(){
                opt.conBox.stop();
                opt.dateBox.stop();
                opt.conBox.animate({left:-(opt.w*opt.n)+'px'},300);
                opt.dateBox.animate({left:-((90)*opt.n)+'px'},300);
                $(opt.dateArr[opt.n]).addClass("year-active").siblings().removeClass("year-active");
            }
        });
    }
})(jQuery);