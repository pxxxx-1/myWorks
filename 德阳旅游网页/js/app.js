//获取时间
function timeGo(){
    let mytime = new Date();
    let myyear = mytime.getFullYear();
    let mymonth = mytime.getMonth()+1;
    let mydate = mytime.getDate();
    let myday = mytime.getDay();
    let day_arr = ["日","一","二","三","四","五","六"];
    myday = day_arr[myday];
    let res = myyear+"年"+mymonth+"月"+mydate+"日 星期"+myday;
    document.getElementById("timeshow").innerHTML = res;
}
let myset = setInterval(function(){
    timeGo();
},1000);

// 导航栏点击跳转
$(document).ready(function() {
    // 获取所有section和nav项
    const sections = [$('.banner'), $('.part1'), $('.part2'), $('.part3'), $('.part4')];
    const navItems = $('nav ul li');

    // 点击导航项事件
    $('#fist').click(function() {
        $('html, body').animate({
            scrollTop: $('#banner').offset().top
        }, 800);
        updateNavActive(0);
    });
    $('#deyang').click(function() {
        $('html, body').animate({
            scrollTop: $('.part1').offset().top
        }, 800);
        updateNavActive(1);
    });

    $('#jingcheng').click(function() {
        $('html, body').animate({
            scrollTop: $('.part2').offset().top
        }, 800);
        updateNavActive(2);
    });

    $('#fengwu').click(function() {
        $('html, body').animate({
            scrollTop: $('.part3').offset().top
        }, 800);
        updateNavActive(3);
    });

    $('#tese').click(function() {
        $('html, body').animate({
            scrollTop: $('.part4').offset().top
        }, 800);
        updateNavActive(4);
    });

    // 滚动事件监听
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();
        
        // 检查每个section的位置
        sections.forEach((section, index) => {
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.height();
            
            // 当前滚动位置在某个section内
            if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionBottom) {
                updateNavActive(index);
            }
        });
    });

    // 更新导航激活状态
    function updateNavActive(activeIndex) {
        navItems.removeClass('active-nav');
        navItems.eq(activeIndex).addClass('active-nav');
    }
});

//轮播
$(function(){
    let banner = $("#banner");
    let bannerUl = $('#bannerUl');
    let dots = $('#dots');
    let li = bannerUl.children();
    let num = li.length;
    for(let i=0; i<=num-1; i++){
        let span = $("<span></span>");
        if(i==0){
            span.addClass('active-span');
        }
        dots.append(span);
    }
    // 初始化显示
    let index = 0 ;  // 当前索引
    li.eq(index).show();

    // 切换函数
    function change(index){
        li.eq(index).show();
        li.eq(index).siblings().hide();

        // 控制点切换
        $("#dots span").eq(index).addClass('active-span');
        $("#dots span").eq(index).siblings().removeClass('active-span');
    }
    // 点击事件
    $("#dots span").click(function(){
        // 获取当前标签索引
        index = $(this).index();
        change(index);
    });

    // 自动切换
    let myset = setInterval(function(){
        index++;
        if(index>num-1){
            index = 0;
        }
        change(index);
    },3000);
    // 鼠标移入停止
    banner.hover(function(){
        clearInterval(myset);
    },function(){
        myset = setInterval(function(){
            index++;
            if(index>num-1){
                index = 0;
            }
            change(index);
        },3000);
    });
});

//电脑端卡片切换
$(function(){
    let li=$(".tab1 li");

    // 初始化卡片样式
    li.eq(1).find('.text').addClass('active-text');
    li.eq(1).find('.img2').addClass('active-img'); 
    li.eq(1).find('img').first().addClass('img1');
    li.eq(0).addClass('tab-lf');
    li.eq(1).addClass('tab-mid');
    li.eq(2).addClass('tab-rt');

    li.click(function(){
        let index=$(this).index();

        // 移除所有卡片的样式类
        li.removeClass('tab-lf tab-mid tab-rt');
        li.find('.text').removeClass('active-text');
        li.find('.img2').removeClass('active-img'); 
        li.find('img').first().removeClass('img1'); 

        // 为当前点击的卡片添加激活样式
        $(this).find('.text').addClass('active-text');
        $(this).find('.img2').addClass('active-img');

        if(index==0){
            li.eq(0).addClass('tab-mid');
            li.eq(0).find('img').first().removeClass('lt-img').addClass('img1'); 
            li.eq(1).addClass('tab-rt');
            li.eq(1).find('img').first().removeClass('img1').removeClass('mid-img-rt').addClass('mid-img-lf active-img'); 
            li.eq(2).addClass('tab-rt');
            li.eq(2).find('img').first().removeClass('img1').addClass('rt-img');
        }else if(index==1){
            li.eq(0).addClass('tab-lf');
            li.eq(1).addClass('tab-mid');
            li.eq(1).find('.text').addClass('active-text');
            li.eq(1).find('.img2').addClass('active-img'); 
            li.eq(1).find('img').first().addClass('img1');
            li.eq(2).addClass('tab-rt');
        }else{
            li.eq(0).addClass('tab-lf');
            li.eq(1).addClass('tab-lf');
            li.eq(1).find('img').first().removeClass('img1').addClass('mid-img-rt active-img'); 
            li.eq(2).addClass('tab-mid');
            li.eq(2).find('img').first().removeClass('rt-img').addClass('img1');
        }
    })
});

//移动端切换
$(function(){
    let tab2=$("#tab");
    let card=tab2.children();
    let num = card.length;
    let icon=$('#icon');

    for(let i=0; i<num; i++){
        let span = $("<span></span>");
        if(i==1){
            span.addClass('active-icon');
        }
        span.text(i + 1); 
        icon.append(span);
    }

    let index=1;
    card.eq(index).show();
    card.eq(index).siblings().hide();

    function change(newIndex) {
        card.eq(index).hide();
        card.eq(newIndex).show();
        $("#icon span").removeClass('active-icon');
        $("#icon span").eq(newIndex).addClass('active-icon');
        index = newIndex; // 更新 index
    }

    // 点击事件
    $("#icon span").click(function () {
        // 获取当前标签索引
        let newIndex = $(this).index();
        change(newIndex);
    });
})


//菜单切换
$(function(){
    let tab=$("#cul-nav");
    let li=tab.children();
    let changeLi=tab.find(".img-change");

    //初始化
    let index=0;
    li.eq(index).find('h3').addClass("active-h3");
    changeLi.eq(index).addClass("active");
    li.eq(index).find('img').first().addClass("img-change");
    $("#cul-content .cul-box").eq(index).addClass("active");

    function change(index){
        // 移除所有可能的激活类
        changeLi.removeClass("active");
        li.find('h3').removeClass("active-h3");
        li.find('.ks').removeClass('img-change');
        $("#cul-content .cul-box").removeClass("active");
        

        // 添加新的激活类
        changeLi.eq(index).addClass("active");
        li.eq(index).find('h3').addClass("active-h3");
        li.eq(index).find('img').first().addClass('img-change');
        $("#cul-content .cul-box").eq(index).addClass("active");
        
    }

    li.click(function(){
        let currentLi=$(this);
        let currentIndex=currentLi.index();
        change(currentIndex);
    })
});