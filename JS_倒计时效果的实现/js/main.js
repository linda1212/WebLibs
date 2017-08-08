window.onload = function(){
	showTime();
	showDisDate();
};

function showTime(){
	var now = new Date();
	var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	/*console.log("now:" + now);
	console.log("getYear:" + now.getYear());
	console.log("getFullYear:" + now.getFullYear());
	console.log("getMonth:" + now.getMonth());
	console.log("getDay:" + now.getDay());
	console.log("getDate:" + now.getDate());
	console.log("getHours:" + now.getHours());
	console.log("getMinutes:" + now.getMinutes());
	console.log("getSeconds:" + now.getSeconds());*/
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDay();
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var seconds = now.getSeconds();
	var showBox = document.getElementById("show").innerHTML = year + "年" + month + "月" + date + "日" + weeks[day]+ hour + "时" + minute + "分" + seconds + "秒";

	setTimeout(showTime,500);
}

function showDisDate(){
	var startTime = new Date();
	var endTime = new Date("2015/11/14,11:04:00");
	var dis = endTime.getTime()-startTime.getTime();
	var days = dis/1000/60/60/24;
	console.log(days);
}