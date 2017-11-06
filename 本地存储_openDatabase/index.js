var database;
this.createDatabase = function() {
	database = openDatabase("teacher", "1.0", "教师表",
		1024 * 1024,
		function() {});
	if (database) {
		console.log("创建数据库成功");
	} else {
		console.log("创建数据库失败");
	}
}

this.createTable = function() {
	database = transaction(function(context) {
		context.executeSql(
			"create table if not exists teacher (id REAL UNIQUE, name TEXT)", [],
			function(context, result) {
				alert("创建teacher表成功");
				console.log(context);
				console.log(result);
			},
			function(context, error) {
				alert("创建teacher表失败" + error.message);
			});
	})
}

this.insertData = function() {
	database.transaction(function(context) {
		context.executeSql(
			"insert into teacher (id, name) values(?, ?)", ['1', '老师1'],
			function() {
				alert('添加数据成功');
			},
			function(context, error) {
				alert('添加数据失败: ' + error.message);
			});
	});
}

this.queryData = function() {
	database = transaction(function(context) {
		context.executeSql("select * from teacher", [],
			function(context, result) {
				console.log("查询结果：" + result);
			},
			function(context, error) {
				console.log("查询失败" + error.message);
			});
	})
}