$(function(){	
	var swiper = new Swiper('.swiper-container', {       
        direction: 'vertical',
         onInit:function(swiper){//Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			
			}, 
            
        onSlideChangeEnd:function(swiper){
        	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        	//第四张图片中间直线的设置：当跳转到第4张时，开始执行动画效果
            if(swiper.activeIndex==3){
                  $(".slide4-center").css("animation","move 4s linear 0s forwards");
               }else{
                  $(".slide4-center").css("animation","none");
               }
            }
    });
    // 音乐播放器的设置
    var state=0;
    $(".music").click(function(){
    	if(state==0){
    		$(".music").css("animation","none");
    		$(".audio")[0].pause();
    		state=1;

    	}else{
    		$(".music").css("animation","music 3s linear 0s infinite");
    		$(".audio")[0].play();
    		state=0;

    	}
    });
});
