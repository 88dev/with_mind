/* 탭 변경 */
$(function() { 
	 $(document).on("click", "#tab ul li", function() {
		var $this=$(this).index();
		/* console.log($this); */
		$(".tab_lst").children("li").not($this).removeClass("on");
		$(".tab_lst").children("li").eq($this).addClass("on");
		
		$(".group").children("div").not($this).removeClass("on");
		$(".group").children("div").eq($this).addClass("on");
	 });
}); 

//탭메뉴
(function($){

    $.defaults = {
        active_class : "active"
    }

    $.fn.myTab = function(opt){
        option = $.extend({}, $.defaults, opt);
        new Tab(this, option);
        return this;
    }

    function Tab(selector, option){       
        this.init(selector, option);
        this.bindingEvent();
    }

    Tab.prototype.init= function(selector, option){
        this.opt = option;
        this.frame = selector;
        this.btns = this.frame.find("ul>li");
        this.boxs = this.frame.find("div>div");
    }

    Tab.prototype.bindingEvent = function(){   
        var self = this;
        
        self.btns.on("click", function(e){
                e.preventDefault();    
                var i = $(this).index();
                self.activation(i);   
        });
    }

    Tab.prototype.activation= function(index){
        this.btns.removeClass(this.opt.active_class);
        this.btns.eq(index).addClass(this.opt.active_class);

        this.boxs.removeClass(this.opt.active_class);
        this.boxs.eq(index).addClass(this.opt.active_class);
    }
})(jQuery);

$(document).ready(function(){
    $("#tab").myTab({
            active_class : "on"
    });
});