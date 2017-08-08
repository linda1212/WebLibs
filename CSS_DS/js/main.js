(function(){
	window.onload = function(){
		var menus = document.getElementsByClassName("menuItem");
		var submenus = document.getElementsByClassName("subMenu");

		for (var i = 0; i < menus.length; i++)
		(function(index){
			var menu = menus[index];
			eventUtil.addHandler(menu,"mouseover",function(){
				submenus[index].style.display = "block";
			});
			eventUtil.addHandler(menu,"mouseout",function(){
				submenus[index].style.display = "none";
			});
		})(i);
	}
})();