$(function(){
// title开始
	$('.right li').hover(function(){
		$(this).toggleClass('on').children('div').toggleClass('on');
	})
// title结束
	 
// 搜索和吸顶开始
	$('.s-m-t li').click(function(){
		$('.middle').attr('class', 'middle '+$(this).attr("class")+'-on');
	});
	var middle_top = $('.middle').offset().top;
	$(window).scroll(function(e){
		if($(window).scrollTop()>=middle_top){
			$('.s-menu>div').addClass('fixed');
			$('.baobei-on .baobei,.tmao-on .tmao,.dianpu-on .dianpu').click();
		}else{
			$('.s-menu>div').removeClass('fixed');
		}
	})
	$('.s-m-t li').click(function(e){
		if($('.s-menu>div').hasClass('fixed')){
			$(this).prependTo($(this).parent());
		}	
	});
	$('.text').bind('input', function(e){
		if($(this).val()!=''){
			$('.s-m-m').addClass('q-not-empty');
		}else{
			$('.s-m-m').removeClass('q-not-empty');
		}
	});
	$('.s-m-t').mouseenter(function(){
		$(this).css('overflow','visible');
	}).mouseleave(function(){
		$(this).css('overflow','hidden')
	})
	$('.s-menu p span').click(function(){
		$(this).parent().hide();
	})
// 搜索和吸顶结束

// list淡入开始
	$('.l-ul li').hover(function(e){
		$(this).toggleClass('h');
	});
	$('.l-ul').mouseenter(function(e){
		$(e.target).children('.l-menu')
			.css({opacity:0}).stop(true).animate({opacity:1}, 1000);
	});
// list淡入结束

// 轮播图1开始
	var index=0;
	$('.list .r-m-t .next').click(function(){
		index++
		if(index<$('.list .r-m-t ul li').length-1){
			$('.list .r-m-t ul').stop().animate({'left':'-'+index+'00%'},500);
			$('.list .r-m-t ol li').eq(index).addClass('cur').siblings().removeClass('cur')
		}else if(index=$('.list .r-m-t ul li').length-1){
			$('.list .r-m-t ul').stop().animate({'left':'-'+index+'00%'},500,'swing',function(){
				$('.list .r-m-t ul').css('left','0')
			})
			index=0;
			$('.list .r-m-t ol li').eq(index).addClass('cur').siblings().removeClass('cur')
		}
	})
	$('.list .r-m-t .last').click(function(){
		index--
		if(index<0){
			index=$('.list .r-m-t ul li').length-2
			$('.list .r-m-t ul').css({'left':'-500%'},500)
			$('.list .r-m-t ul').stop().animate({'left':'-'+index+'00%'},500)
			$('.list .r-m-t ol li').eq(index).addClass('cur').siblings().removeClass('cur')
		}else{
			$('.list .r-m-t ul').stop().animate({'left':'-'+index+'00%'},500);
			$('.list .r-m-t ol li').eq(index).addClass('cur').siblings().removeClass('cur')
		}
	})
	$('.list .r-m-t ol li').click(function(){
		index=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur')
		$('.list .r-m-t ul').stop(true).animate({'left':'-'+index+'00%'},500);
	})
	var timer;
	timer=setInterval(function(){
		$('.list .r-m-t .next').click()
	},2000)
	$('.list .r-m-t').mouseenter(function(){
		clearInterval(timer);
		$('.list .r-m-t span').stop(true).fadeIn();
	}).mouseleave(function(){
		timer=setInterval(function(){
			$('.list .r-m-t .next').click()
		},2000)
		$('.list .r-m-t span').stop(true).fadeOut();
	})
// 轮播图1结束
	
// 轮播图2开始
	var num=0
	$('.list .r-m-b .next').click(function(){
		num++
		if(num<$('.list .r-m-b ul li').length-1){
			$('.list .r-m-b ul').stop().animate({'left':'-'+num+'00%'},500);
			$('.list .r-m-b ol li').eq(num).addClass('cur').siblings().removeClass('cur');
			$('.right .r-m-m i em').get(0).innerHTML=num+1;
		}else if(num=$('.list .r-m-b ul li').length-1){
			$('.list .r-m-b ul').stop().animate({'left':'-'+num+'00%'},500,'swing',function(){
				$('.list .r-m-b ul').css('left','0')
			})
			num=0;
			$('.right .r-m-m i em').get(0).innerHTML=num+1;
			$('.list .r-m-b ol li').eq(num).addClass('cur').siblings().removeClass('cur')
		}
	})
	$('.list .r-m-b .last').click(function(){
		num--
		if(num<0){
			num=$('.list .r-m-b ul li').length-2
			$('.list .r-m-b ul').css({'left':'-600%'},500)
			$('.list .r-m-b ul').stop().animate({'left':'-'+num+'00%'},500)
			$('.right .r-m-m i em').get(0).innerHTML=num+1;
			$('.list .r-m-b ol li').eq(num).addClass('cur').siblings().removeClass('cur')
		}else{
			$('.list .r-m-b ul').stop().animate({'left':'-'+num+'00%'},500);
			$('.list .r-m-b ol li').eq(num).addClass('cur').siblings().removeClass('cur')
			$('.right .r-m-m i em').get(0).innerHTML=num+1;
		}
	})
	$('.list .r-m-b ol li').click(function(){
		num=$(this).index();
		$('.right .r-m-m i em').get(0).innerHTML=num+1;
		$(this).addClass('cur').siblings().removeClass('cur')
		$('.list .r-m-b ul').stop(true).animate({'left':'-'+num+'00%'},500);
	})
	var keyer;
	keyer=setInterval(function(){
		$('.list .r-m-b .next').click()
	},2000)
	$('.list .r-m-b').mouseenter(function(){
		clearInterval(keyer);
		$('.list .r-m-b span').stop(true).fadeIn();
	}).mouseleave(function(){
		keyer=setInterval(function(){
			$('.list .r-m-b .next').click()
		},2000)
		$('.list .r-m-b span').stop(true).fadeOut();
	})
// 轮播图2结束
	
// 快捷服务开始
	$('.right .r-side span').each(function(index,el){
			$(this).css('background-position','0 -'+44*index+'px');
		})
	$('.right .r-side li:lt(4)').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active')
	}).mouseleave(function(){
		$(this).removeClass('active');
	})
// 快捷服务结束

// 侧边栏开始
	var sidebar_top=$('.sidebar').position().top;
	
	var tops=[$('.haunt').offset().top-49,$('.fashion').offset().top-49,$('.life').offset().top-49,$('.special').offset().top-49,$('.cheap').offset().top-49,$('.guess').offset().top-49,0];
	console.log(tops[0]);
	console.log(tops[1]);
	console.log(tops[2]);
	console.log(tops[3]);
	console.log(tops[4]);
	console.log(tops[5]);
	console.log(tops[6]);
	console.log(tops[7]);
	console.log(tops[8]);

	$(window).scroll(function(){
		var ind=tops[index];
		if($(window).scrollTop()<tops[1]){
			$('.sidebar li').eq(0).addClass('click').siblings().removeClass('click');
		}else if($(window).scrollTop()<tops[2]){
			$('.sidebar li').eq(1).addClass('click').siblings().removeClass('click');
		}else if($(window).scrollTop()<tops[3]){
			$('.sidebar li').eq(2).addClass('click').siblings().removeClass('click');
		}else if($(window).scrollTop()<tops[4]){
			$('.sidebar li').eq(3).addClass('click').siblings().removeClass('click');
		}else if($(window).scrollTop()<tops[5]){
			$('.sidebar li').eq(4).addClass('click').siblings().removeClass('click');
		}else{
			$('.sidebar li').eq(5).addClass('click').siblings().removeClass('click');
		}

		if($(window).scrollTop()+49>=sidebar_top){
			$('.sidebar').css({'position':'fixed',top:49})
		}else{
			$('.sidebar').css({'position':'absolute',top:sidebar_top});
		}
		if($(window).scrollTop()>=$(window).height()*1.5){
			$('.sidebar li').eq(6).css('display','block')
		}else{
			$('.sidebar li').eq(6).css('display','none')
		}
	})
	$('.sidebar li').mouseenter(function(){
		$(this).addClass('hover').css({opacity:0}).animate({opacity:1}, 500);;
	}).mouseleave(function(){
		$(this).removeClass('hover');
	})
	$('.sidebar li:lt(7)').click(function(){
		$(this).addClass('click').siblings().removeClass('click');
		var ind=$(this).index();
		$('html,body').animate({scrollTop:tops[ind]},500);
	})
// 侧边栏结束
})