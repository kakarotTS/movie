var koa = require("koa");
var router = require("koa-router")();
var logger = require("koa-logger");
var views = require("co-views");

var port = 8080;
var app = new koa();
var render = views("./views",{
	map:{html:"swig"}
});

router.get("/",function *(){
	this.body = yield render("home.html",{});//如何找到这个页面的?上面render初始化的时候有个./views
});
router.get("/detail/:id",function *(){//为什么id前要加:   这里表示是取得的值
	this.body = yield render("detail.html",{});
});
router.get("/admin/movie/new",function *(){
	this.body = yield render("admin/new.html",{});
});
router.get("/admin/movie/list",function *(){
	this.body = yield render("admin/list.html",{});
});

app.use(logger());
app.use(router.routes());

app.listen(port);