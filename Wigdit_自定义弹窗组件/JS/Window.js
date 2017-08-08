define(['Widget','jquery','jqueryUI'],function(widget,$,$UI){

	function Window(){
		this.cfg = {
			title:"提示",
			okLabel:"OK",
			content:"welcome to login view",
			skinClassName:null,
			handler4CloseBtn:null,
			handler4AlertBtn:null,
			width:500,
			height:300,
			hasCloseBtn:true,
			hasMask:true,
			isDraggable:true,
			draggerHandler:null
		},

		this.handlers = {}
	}

	Window.prototype = $.extend({},new widget.Widget(),{
		alert:function(cfg){

			that = this;
			var CFG = $.extend(this.cfg,cfg);
			var boundingBox = $('<div class="window_boundingBox">' + 
									'<div class="window_header">' + CFG.title + '</div>' +
									'<div class="window_body">' + CFG.content + '</div>' +
									'<div class="window_footer"><input type="button" value="' + CFG.okLabel + '"></div>' +
								'</div>');
			
			var mask = null;
			if(CFG.hasMask)
			{
				mask = $('<div class="window_mask"></div>');
				mask.appendTo("body");
			}

			var btn = boundingBox.find(".window_footer input");

			if(CFG.isDraggable)
			{
				if(CFG.draggerHandler)
				{
					boundingBox.draggable({handle:CFG.draggerHandler});
				}else{
					boundingBox.draggable();
				}
				
			}
			// $('<input type="button" value="ok">');
			// btn.appendTo(boundingBox);
			btn.click(function(){
				// CFG.handler4AlertBtn && CFG.handler4AlertBtn();
				mask && mask.remove();
				boundingBox.remove();
				that.fire("alert");
			});

			boundingBox.appendTo("body");

			boundingBox.css({
				"width":CFG.width + "px",
				"height":CFG.height + "px",
				"position":"fixed",
				"background":"#f99",
				"left":(CFG.x || (window.innerWidth - CFG.width)/2) + "px",
				"top":(CFG.y || (window.innerHeight - CFG.height)/2) + "px",
				"border":"1px solid gray",
				// "margin-left":(-this.cfg.width/2)+ "px",
				// "margin-top":(-this.cfg.height/2) + "px",
				"box-shadow":"0 0 12px rgba(0,0,0,0.6)"
			});

			if(CFG.hasCloseBtn)
			{
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					// CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					mask && mask.remove();
					boundingBox.remove();
					that.fire("close");
				});
			}

			if(CFG.skinClassName)
			{
				boundingBox.addClass(CFG.skinClassName);
			}
			if(CFG.handler4CloseBtn){
				this.on("close",CFG.handler4CloseBtn)
			}

			if(CFG.handler4AlertBtn){
				this.on("alert",CFG.handler4AlertBtn)
			}

			return this;			
		},
		confirm:function(){},
		prompt:function(){}
	});

	return {
		Window:Window
	};
});