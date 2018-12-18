let express     = require('express');
let app         = express();
let bodyParser  = require('body-parser');
let jwt    = require('jsonwebtoken'); // 使用jwt签名
const expressJwt = require('express-jwt');
let orm = require('orm');//数据库处理中间件
let ormmodel =  require('./getgoods');
//引入请求处理中间件
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart(); 
// create application/json parser  
let jsonParser = bodyParser.json()  
  
// create application/x-www-form-urlencoded parser  
let urlencodedParser = bodyParser.urlencoded({ extended: false })  


//获取表单数据
let username = '';
let password = '';
app.post('/api/login/',  urlencodedParser, function(req, res) {
    // console.log('get FormData Params: ', req.body.goodsid);
    res.send(req.body);
    username = req.body.username;
    password = req.body.password;
    res.end();
});

//从数据库获取用户数据
let user = function(){
	req.models.userinfo.find({ username: username,password:password }, function(err, userinfo){
	  if(err){
	       res.send("用户名或者密码错误！");
	  }
	  username = userinfo.username;
	});
}

//定义签名
const secret = 'www.youguole.com';
//生成token
const token = jwt.sign({
    name: username
}, secret, {
    expiresIn:  60 //秒到期时间
});

//使用中间件验证token合法性
app.use(expressJwt ({
    secret:  secret 
}).unless({
    path: ['/login', '/getUserInfo']  //除了这些地址，其他的URL都需要验证
}));

//拦截器
app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        res.status(401).send('invalid token...');
    }
});

//定义一个接口，返回token给客户端
app.get('/getUserInfo', function(req, res) {
    res.json({
        token: token
    })
})
