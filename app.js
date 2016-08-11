var koa = require("koa");
var router = require("koa-router")();
var logger = require("koa-logger");
var views = require("co-views");
var serve  = require("koa-static");

var port = 8080;
var app = new koa();
var render = views("./views",{
	map:{html:"swig"}
});

router.get("/",function *(){
	var movies = [
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"},
		{_id:1,title:"盗墓笔记",img:"https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2370646859.jpg"}
	]
	this.body = yield render("pages/home.html",{
		title:"首页",
		movies:movies
	});//如何找到这个页面的?上面render初始pages/化的时候有个./views
});
router.get("/detail/:id",function *(){//为什么id前要加:   这里表示是取得的值
	var movie = {
		title:"盗墓笔记",
		doctor:"李仁港",
		country:"中国大陆",
		language:"汉语普通话",
		year:"2016",
		summary:"落魄作家为了写作素材，寻访到了一个叫做吴邪（鹿晗 饰）的古董铺子老板，而吴邪正准备离开这个城市，临走之前，吴邪和他讲诉了关于自己奇怪的盗墓家族往事，并说出了自己第一次随家族探险所经历的诡异事件：那一次他们的家族因为偶然获取了一件特殊的青铜器， 追根溯源，寻找到了被掩埋在中国西北盆地中的西王母古国，他们招募了一批盗墓贼一同前往古城遗址探险，进入了位于古城地下的西王母陵中，发现了当年周穆王于西王母求长生不死之术的真相。作家听完吴邪的故事，却发现其中有很多疑点，吴邪到底说的是自己的臆想，还是真相更加可怕复杂，因为吴邪的离开变成了永恒之谜。 ",
		flash:""
	}
	this.body = yield render("pages/detail.html",{
		title:movie.title,
		movie:movie
	});
});
router.get("/admin/movie/new",function *(){
	this.body = yield render("admin/new.html",{});
});
router.get("/admin/movie/list",function *(){
	this.body = yield render("admin/list.html",{});
});

app.use(serve("./static"));
app.use(logger());
app.use(router.routes());
app.listen(port);
console.log("listening:"+port);