try {
	$(".p-menu-main").on("click",function (e) {
		var flag = $(this).hasClass("active");
		console.log('flag==', flag)
		if (flag) {
			$(this).removeClass("active");
			$(".p-header").css({
				transform: "translateY(-100%)"
			})
		} else {
			$(this).addClass("active");
			$(".p-header").css({
				transform: "translateY(0%)"
			})
		}
	});
	
	$(".wechat").on("mouseenter mouseleave", function (params) {
		var flag = $(this).hasClass("active");
		if (flag) {
			$(this).find(".code").stop(true).hide(200);
			$(this).removeClass("active");
		} else {
			$(this).find(".code").stop(true).show(200);
			$(this).addClass("active");
		}
	})

	function  showMenu() {
		var initscrollTop = $(window).scrollTop();
		if (initscrollTop > 116) {
			$(".p-menu-main").css({
				transform: "scale3d(1, 1, 1)"
			})
		} else {
			$(".p-menu-main").css({
				transform: "scale3d(0, 0, 0)"
			})
		}
	};

	if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
		$(".p-menu-main").css({
			transform: "scale3d(1, 1, 1)"
		})
	} else {
		showMenu();
		$(window).scroll(function (e) {
			showMenu()
		})
		$(window).resize(function (e) {
			showMenu();
		})
	};

	function Tab(tab, content){

			this.tabBtn = document.getElementById(tab).getElementsByTagName('li');
			this.tabDiv = document.getElementById(content).getElementsByTagName('li');

			for(var i=0;i<this.tabBtn.length;i++){
					this.tabBtn[i].index = i;
					var _this = this;
					this.tabBtn[i].onclick = function(){
							_this.clickBtn(this);
					};
			}
	};

	Tab.prototype.clickBtn = function(btn){
			for(var j=0;j<this.tabBtn.length;j++){
					this.tabBtn[j].className='';
					this.tabDiv[j].style.display='none';
			}
			btn.className='active';
			this.tabDiv[btn.index].style.display='block';
	};


} catch (error) {
	console.error('log=', error.message)
}