$(function(){
	var cfg = {data:"1",name:"my name is loginview"};
	var loginview = new LoginView(cfg);
		loginview.init();
		loginview.startListen();
})