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
let urlencodedParser = bodyParser.urlencoded({ extended: false })  

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

        // if (req.getMethod().equals("OPTIONS")) {
        //     HttpUtil.setResponse(res, HttpStatus.OK.value(), null);
        //     return;
        // }

    next();
});


//导入数据对象
let  goodslist  =  require('../data/goodslist');
 
//app.use(orm.express('mysql://root:123@localhost:3306/meilishuo', {
app.use(orm.express('mysql://root:sp$5md@6pdfudc@47.90.203.87:3306/meilishuo', {
	define: function(db, models, next){
		models.goods = db.define("goods", { 
		    goodsid :{ type: "integer", unique: true },
		    title :{ type: "text", size: 50 },
		    main_img :{ type: "text", size: 500 },
		    shop_name :{ type: "text", size: 50 },
		    price :{ type: "number", size: 8 },
		    sell :{ type: "integer" },
		    ratio :{ type: "number", size: 8 },
		    commission :{ type: "number", size: 8 },
		    state :{ type: "text", size: 50 },
		    link :{ type: "text", size: 50 },
		    tkl :{ type: "text", size: 50 },
		    coupon_total :{ type: "text", size: 50 },
		    coupon_price :{ type: "text", size: 50 },
		    coupon_start :{ type: "text", size: 50 },
		    coupon_end :{ type: "text", size: 50 },
		    coupon_tkl :{ type: "text", size: 50 },
		    coupon_shortlink :{ type: "text", size: 150 }
		    // password : { type: "text", defaultValue: "Doe" },
		    // male    : { type: "boolean" },
		    // vat     : { type: "integer", unique: true },
		    // country : { type: "enum", values: [ "USA", "Canada", "Rest of the World" ] },
		    // birth   : { type: "date", time: false }
		});


		models.goodsdetail = db.define("goodsdetail", { 
		    iid :{ type: "integer", unique: true },
		    goodsinfo :{ type: "text", size: 20000 }
		});

		next();
	}
}));


app.get('/', function (req, res) {
   res.send('Hello World');
});



// app.get("/ormtest", function (req, res) {
// 	// req.models is a reference to models used above in define()
// 	let data = req.models.user.find({ name: "zhang"}, 3, function (err, user) {
// 	// finds people with name='John' AND surname='Doe' and returns the first 3
// 	});
//    res.send('成功');
// 	console.log(data)
// });
 

app.get("/api/getgoods", function (req, res) {
	res.send(JSON.stringify(goodslist.list1));
});


// app.get("/liuxing", function (req, res) {
// req.models.goods.find({ id: orm.between(40, 50) }, function(err, goods){
//   if(err){
//       res.send(err);
//   }

//   res.send(JSON.stringify(goods));
// 	});
// });


// app.get("/xinkuan", function (req, res) {
// req.models.goods.find({ id: orm.between(80, 90) }, function(err, goods){
//   if(err){
//       res.send(err);
//   }

//   res.send(JSON.stringify(goods));
// 	});
// });


app.get("/api/detailtest", function (req, res) {
req.models.goodsdetail.find({ iid: "1lvjmt2" }, function(err, goods){
  if(err){
      res.send(err);
  }

  res.send(JSON.stringify(goods.goodsinfo));
	});
});

app.get("/api/detail/:iid", function (req, res) {
	let iid = req.params.iid
	req.models.goodsdetail.find({ iid: iid }, function(err, goods){
	  if(err){
	      res.send(err);
	  }
	  goods[0].goodsinfo.replace(/\\/," ");
      goods[0].goodsinfo.trim('"');
	  res.send(goods[0].goodsinfo);
		});
});

app.get("/api/liuxing", function (req, res) {
	  res.send(JSON.stringify(goodslist.list1));
		
});


app.get("/api/xinkuan", function (req, res) {
	  res.send(JSON.stringify(goodslist.list2));
		
});


app.get("/api/jingxuan", function (req, res) {
	  res.send(JSON.stringify(goodslist.list3));
		
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


app.post('/api/addcart',  urlencodedParser, function(req, res) {
    // console.log('get FormData Params: ', req.body.goodsid);
    res.send(req.body);
});



//let server = app.listen(8088, function () {
let server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
});