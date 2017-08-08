(function(){
	function LoginView(cfg){
		this.name = cfg.name;
		this.data = cfg.data
	}
	LoginView.prototype = {
		init:function(){
		},
		startListen:function(){
			alert("this is start function");
		},
	}

	window.LoginView = LoginView;
})();