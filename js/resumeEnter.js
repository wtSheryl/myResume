$(function() {
	document.onmousedown = function() {
		document.onmousemove = function() {
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;
	}



	$('#main_content').fullpage({

		//设置背景色
		sectionsColor: ['#D12717', 'rgba(13,13,203,.5)', 'rgba(220,220,22,.5)', 'rgba(255, 203, 13, .5)'],
		//滑动速度
		scrollingSpeed: 700,
		//是否首尾循环
		continuousVertical: true,
		//内容超出后是否出现滚动条
		scrollOverflow: false,
		//设置导航锚点 
		anchors: ['introduction', 'skill', 'experience', 'evaluation'],
		//设置菜单
		menu: '#menu',
		//动画速度
		easing: 'easeInOut',
		// 页面渲染后回调
		afterRender: function() {
			// page4 透明背景
			$('item-4').css('background', 'rgba(255, 255, 255, .1)');

			// 顶部导航栏自动会拉事件
			if($('.navbar-toggle').css('display') == 'block') {
				$('.navbar-collapse li').on('click', function() {
					$('.navbar-toggle').trigger('click');
				});
			}
			$('#fp-nav').addClass('hidden-xs');
			// 为了避免标签太多同一时间加载的话在刚载入页面时候产生怪异感，所有动画元素初始都是hidden的
			$('.item-1 .next-page').on('click', function() {
				$.fn.fullpage.moveSectionDown();
			});
			setTimeout(function() {
				$('.item-1 .corner').show();
				$('.main_content-hide').show();
			}, 500);
		},

		//滚动触发后结束前回调
		onLeave: function(index, nextIndex, direction) {
			if(nextIndex == 4) {
				$('.pure').hide();
				$('.sky').show();
			}
			if(nextIndex == 6) {
				$('.sky').hide();
			} else {
				$('.item-6 .top').animate({
					'height': '50%'
				}, 400);
				$('.item-6 .foot').animate({
					'height': '50%'
				}, 400);
			}
			switch(index) {
				case 1:
					$('.item-1 .corner').hide();
					$('.navbar').removeClass('black');
					break;
				case 2:
					if(direction == 'down') {
						$('.item-2 .icon-infomation').addClass('zoomOutUp');
						setTimeout(function() {
							$('.item-2 .icon-infomation').removeClass('zoomOutUp');
							$('.item-2 .container').hide();
						}, 500);
					} else {
						$('.item-2 .container').hide();
					}
					break;
				case 3:
					$('.item-3 .container').hide();
					$('.navbar').removeClass('blue');
					break;
				case 4:
					{
						$('.item-4 .container').hide();
						break;
					}
				case 6:
					{

					}
			}
		},

		// 滚动结束后回调
		afterLoad: function(anchorLink, index) {
			if(index == 5)
				$('.pure').show();

			switch(anchorLink) {
				case 'page1':
					$('.item-1 .corner').show();
					$('.main_content-hide').show();
					$('.navbar').addClass('black');
					break;
				case 'page2':
					$('.item-2 .container').show();
					break;
				case 'page3':
					$('.navbar').addClass('blue');
					$('.item-3 .container').show();

					break;
				case 'page4':
					$('.item-4 .container').show();
					break;

				case 'page5':
					break;

				case 'page6':
					setTimeout(function() {
						$('.item-6 .top').animate({
							'height': '30%'
						}, 400);
						$('.item-6 .foot').animate({
							'height': '30%'
						}, 400);
					}, 500)
					break;
			}
		},

		// 水平滑块回调
		onSlideLeave: function(anchorLink, index, slideIndex, direction) {
			// if(slideIndex==0){

			// }
		},

		// 水平滑块回调
		afterSlideLoad: function(anchorLink, index, slideIndex) {}
	})
})