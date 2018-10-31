1. 下载文件
curl -o <newName> <website>	//文件重命名
curl -O <website>	//使用原文件名称
2. 查看网页源码
curl <website>
3. 自动跳转
curl -L <website>	//重定向
4. post请求
curl -X POST -H "Gifs-API-Key: gifs56d63999f0f34" -H "Content-Type: application/json" -d '{
 "source": "https://vine.co/v/ibAU6OH2I0K",
 "title": "2015 Craziness",
 "tags": ["crazy", "hand drawn", "2015", "art"],
 "attribution": {
   "site": "vine",
   "user": "AliciaHerber"
 }
}' "https://api.gifs.com/media/import"