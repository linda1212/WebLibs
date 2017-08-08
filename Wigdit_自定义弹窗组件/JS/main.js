require.config({
	paths:{
		jquery:"jquery-1.11.3",
		jqueryUI:"jquery-ui"
	}
});

require(['jquery','jqueryUI','Window'],function($,$UI,w){

	var win = new w.Window();

	$("#showAlertBtn1").click(function(){
		win.alert({
			handler4AlertBtn:function(){
				console.log("you click ok button");
			},
			handler4CloseBtn:function(){
				console.log("you click close button")
			},
			okLabel:"确定",
			draggerHandler:".window_header"
		});
	});

	$("#showAlertBtn2").click(function(){
		win.alert({
			handler4AlertBtn:function(){
				console.log("you click ok button");
			},
			handler4CloseBtn:function(){
				console.log("you click close button")
			},
			skinClassName:"window_skin_a",
			okLabel:"确定",
			draggerHandler:".window_header"
		}).on("alert",function(){
			console.log("you alert the windowdddd")
		}).on("close",function(){
			console.log("you close the button");
		});
	});

	win.on("alert",function(){console.log("you alert the window");});
	win.on("alert",function(){console.log("you alert the window 2");});
	win.on("close",function(){console.log("you close the window");});
});