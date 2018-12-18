let express = require('express');

//引入数据库orm
let orm = require('orm');
let app = express();

//引入请求处理中间件
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();

let bodyParser = require('body-parser');
// create application/json parser  
let jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser  
let urlencodedParser = bodyParser.urlencoded({
	extended: false
})

let jwt = require('jsonwebtoken'); // 使用jwt签名
// 设置superSecret 全局参数（盐值）
let slat = "啊客户的撒客户就喀什地方；是垃圾来看撒娇撒来达到减肥撒看见法卡了；uelkjadlkfjasdklfjafj";
app.set('superSecret', slat);

//设置跨域访问
app.all('*', function(req, res, next) {
	// res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	// res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By",' 3.2.1')
	// res.header("Content-Type", "application/json;charset=utf-8");

	//TODO 支持跨域访问
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.setHeader("Access-Control-Expose-Headers", "*");

	// if (req.getMethod().equalss("OPTIONS")) {
	//     HttpUtil.setResponse(res, HttpStatus.OK.value(), null);
	//     return;
	// }

	next();
});

//导入数据对象
let goodslist = require('../data/goodslist');

let ormmodel = app.use(orm.express('mysql://root:root@localhost:3306/meilishuo', {
	// app.use(orm.express('mysql://root:sp$5md@6pdfudc@localhost:3306/meilishuo', {
	define: function(db, models, next) {
		models.goods = db.define("goods", {
			goodsid: {
				type: "integer",
				unique: true
			},
			title: {
				type: "text",
				size: 50
			},
			main_img: {
				type: "text",
				size: 500
			},
			shop_name: {
				type: "text",
				size: 50
			},
			price: {
				type: "number",
				size: 8
			},
			sell: {
				type: "integer"
			},
			ratio: {
				type: "number",
				size: 8
			},
			commission: {
				type: "number",
				size: 8
			},
			state: {
				type: "text",
				size: 50
			},
			link: {
				type: "text",
				size: 50
			},
			tkl: {
				type: "text",
				size: 50
			},
			coupon_total: {
				type: "text",
				size: 50
			},
			coupon_price: {
				type: "text",
				size: 50
			},
			coupon_start: {
				type: "text",
				size: 50
			},
			coupon_end: {
				type: "text",
				size: 50
			},
			coupon_tkl: {
				type: "text",
				size: 50
			},
			coupon_shortlink: {
				type: "text",
				size: 150
			}
			// password : { type: "text", defaultValue: "Doe" },
			// male    : { type: "boolean" },
			// vat     : { type: "integer", unique: true },
			// country : { type: "enum", values: [ "USA", "Canada", "Rest of the World" ] },
			// birth   : { type: "date", time: false }
		});

		models.goodsdetail = db.define("goodsdetail", {
			iid: {
				type: "integer",
				unique: true
			},
			goodsinfo: {
				type: "text",
				size: 20000
			},
			ratelist: {
				type: "text"
			}
		});

		models.userinfo = db.define("userinfo", {
			username: {
				type: "text",
				unique: 50
			},
			password: {
				type: "text",
				size: 50
			},
			created_at: {
				type: "text",
				size: 50
			},
			updated_at: {
				type: "text",
				size: 50
			}
		});

		models.carts = db.define("carts", {
			userid: {
				type: "integer"
			},
			shopid: {
				type: "integer"
			},
			iid: {
				type: "integer"
			},
			stockid: {
				type: "integer"
			},
			sum: {
				type: "integer"
			}
		});

		next();
	}
}));

app.get('/api/', function(req, res) {
	res.send('Hello World');
	res.end();
});

app.get("/api/getgoods", function(req, res) {
	res.send(JSON.stringify(goodslist.list1));
	res.end();
});

app.get("/api/ratelist/:iid", function(req, res) {
	let iid = req.params.iid
	req.models.goodsdetail.find({
		iid: iid
	}, function(err, goodsdetail) {
		if(err) {
			res.send(err);
		}

		goodsdetail[0].ratelist.trim('"');
		goodsdetail[0].ratelist.replace(/\\/, " ");
		res.send(goodsdetail[0].ratelist);
		res.end();
	});
});

app.get("/api/detail/:iid", function(req, res) {
	let iid = req.params.iid
	req.models.goodsdetail.find({
		iid: iid
	}, function(err, goodsdetail) {
		if(err) {
			res.send(err);
		}
		if(goodsdetail[0] == null) {
			res.send("数据建设中。。。");
		}
		if(goodsdetail[0] != null) {
			goodsdetail[0].goodsinfo.trim('"');
			goodsdetail[0].goodsinfo.replace(/\\/, " ");
			res.send(goodsdetail[0].goodsinfo);
		}
		res.end();
	});

});

app.get("/api/liuxing", function(req, res) {
	res.send(JSON.stringify(goodslist.list1));
	res.end();
});

app.get("/api/xinkuan", function(req, res) {
	res.send(JSON.stringify(goodslist.list2));
	res.end();
});

app.get("/api/jingxuan", function(req, res) {
	res.send(JSON.stringify(goodslist.list3));
	res.end();
});

app.get("/api/test", function(req, res) {
	let data = {
		"page_num": req.query.page_num, //get参数获取方法
		"list": JSON.stringify(goodslist.list2)
	}
	res.send(data);
	res.end();
});

//购物车相关api
app.get("/api/cartstest", function(req, res) {
	req.models.goods.find(10, function(err, goods) {
		if(err) {
			res.send(err);
		}
		if(goods[0] == null) {
			res.send("没有找到相关数据。。。");
		}
		if(goods[0] != null) {
			res.send(goods);
		}
		res.end();
	});
});

app.post('/api/delcart/', urlencodedParser, function(req, res) {
	// console.log('get FormData Params: ', req.body.goodsid);
	//console.log('get FormData Params: ', req.body.goodsid);这种方式获取不到playload中的数据
	var str = "";
	req.on("data", function(chunk) {
		str += chunk
	});
	res.send(str);
	res.end();
});

// app.post("/addcart", function (req, res) {
// 	// req.models.goods.find({ id: orm.between(920, 930) }, function(err, goods){
// 	//   if(err){
// 	//       res.send(err);
// 	//   }

// 	//   res.send(JSON.stringify(goods));
// 	// 	});
// 	let goodsid = req.RequestBody.goodsid
// 	res.send(goodsid);

// });

// app.post('/addcart', multipartMiddleware, function(req, res) {
//     console.log('get FormData Params: ', req.body);
//     res.end();
// });

app.post('/api/addcart/:xdSkuId', urlencodedParser, function(req, res) {
	// console.log('get FormData Params: ', req.body.goodsid);
	res.send(req.body);
	res.end();
});

app.post('/api/addcart', urlencodedParser, function(req, res) {
	// console.log('get FormData Params: ', req.body.goodsid);

	let result = "";
	// 将订单信息存入数据库
	function addcart(result) {
		// 获取请求参数
		let userid = req.body.userid;
		let shopid = req.body.shopid;
		let iid = req.body.iid;
		let stockid = req.body.stockid;
		let sum = req.body.sum;
		req.models.carts.create([{
			userid: userid,
			shopid: shopid,
			iid: iid,
			stockid: stockid,
			sum: sum
		}], function(err, items) {
			// err - description of the error or null
			// items - array of inserted items
			if(err != null) {
				res.send("添加到购物车成功！");
				res.end();
			} else {
				res.send("添加失败");
				res.end();
			}
			console.log(err);
		});
		// return result;
	}
	console.log(addcart(result));
	console.log("hhh");
});

app.post('/api/search', urlencodedParser, function(req, res) {
	// console.log('get FormData Params: ', req.body.goodsid);
	console.log('get FormData Params: ', req.body.wd);
	let wd = req.body.wd;
	//  	if (wd != undefined) {
	//  		req.models.goods.find({ title: orm.like( "%"+wd+ "%") }, function(err, goods){
	//   if(err){
	//       res.send(err);
	//   }
	//   if (goods[0] == null) {
	//      	  res.send("没有找到相关数据。。。");
	//      }
	//      if (goods[0] != null) {
	// 	  res.send(goods);
	//  }
	//   	res.end();
	// });
	//  	}
	//  	else{
	//  		app.use(bodyParser.json()) // .json()是重点
	//  		const { foo } = req.body

	//  		let str="";
	//  		req.on("data",function(chunk){str+=chunk})
	//  		res.send(str)
	//  	}
	req.models.goods.find({
		title: orm.like("%" + wd + "%")
	}, function(err, goods) {
		if(err) {
			res.send(err);
		}
		if(goods[0] == null) {
			res.send("没有找到相关数据。。。");
		}
		if(goods[0] != null) {
			res.send(goods);
		}
		res.end();
	});

});

app.post('/api/getusername', urlencodedParser, function(req, res) {
	let username = req.body.username;
	req.models.userinfo.find({
		username: username
	}, function(err, userinfo) {
		if(err) {
			res.send(err);
		} else if(userinfo[0] != null) {
			res.status(200).send("手机号已被注册");
		}
	});
});

app.post('/api/regist', urlencodedParser, function(req, res) {
	// console.log('get FormData Params: ', req.body.goodsid);
	console.log('get FormData Params: ', req.body.wd);
	let username = req.body.username;
	let password = req.body.password;
	req.models.userinfo.find({
		username: username,
		password: password
	}, function(err, userinfo) {
		if(err) {
			res.send(err);
		} else if(userinfo[0] == null) {
			// 没有找到用户,开始注册
			req.models.userinfo.create([{
				username: username,
				password: password,
				phone: username
			}], function(err, items) {
				// err - description of the error or null
				// items - array of inserted items
				if(err != null) {
					res.status(200).send("注册成功！");
					res.end();
				} else {
					res.status(401).send("注册失败！");
					res.end();
				}
				console.log(err);
			});
		} 
		else(userinfo[0] != null) 
			// 用户名存在说明已经注册过了
			res.status(401).send("该手机号已被注册!");
			res.end();
	});
});

app.post('/api/login', urlencodedParser, function(req, res) {
	//	  进入路由先判断有无token(没有token则没有注册  第一次登录时没有token所以第一次登陆时创建token)	

	// 拿取token 数据 按照自己传递方式写
	//  var token = req.body.token || req.query.token || req.headers['x-access-token'];
	let token = req.headers['x-access-token'];
	let username = req.body.username;
	let password = req.body.password;
	console.log('token'+token)
	console.log(username)
	console.log(password)
	req.models.userinfo.find({
		username: username,
		password: password
	}, function(err, userinfo) {
		if(err) {
			res.send(err);
			res.end();
		} else if(token != ''  && userinfo[0] != null) {
			// 解码 token (验证 secret 和检查有效期（exp）)
			jwt.verify(token, app.get('superSecret'), function(err, decoded) {
				if(err) {
					 res.status(403).send({
						success: false,
						message: '无效的token.(身份验证不通过)'
					});
					 res.end();
				} else {
					// 如果验证通过，在req中写入解密结果
					 req.decoded = decoded;
					// console.log(decoded)  ;
					// next(); //继续下一步路由
					 res.send({
						"message": "登陆成功！"
					});
					 res.end();
				}
			});
			// console.log('用户'+userinfo[0])
		} else if(token == '' && userinfo[0] != null) { //用户名不为空而token为空 则是第一次登陆
			// 返回jwt token(第一次登陆)
			let token = jwt.sign(userinfo[0], app.get('superSecret'), {
				expiresIn: 60 * 60 * 24 // 授权时效24小时
			});
			res.send({
				"data": "登录成功！",
				"token": token
			});
			res.end();
			// console.log('用户'+userinfo[0])
		} else if(userinfo[0] == null) {
			res.status(401).send({
				"error": "用户名或密码错误！"
			});
			res.end();
			// console.log('用户'+userinfo[0])
		}
	});
	
	
	// res.status(402).send({
	// 	"error": "用户名或密码错误！"
	// });
	// res.end();
});

//let server = app.listen(8088, function () {
let server = app.listen(8088, function() {

	let host = server.address().address
	let port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

module.export = ormmodel;