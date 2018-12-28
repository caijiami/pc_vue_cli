//导入模块
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

//引入路由文件
var app=express();
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
}));

app.listen(3000,function(){
    console.log("创建服务器成功")
});

//   加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(express.static("public"));


//路由挂载
