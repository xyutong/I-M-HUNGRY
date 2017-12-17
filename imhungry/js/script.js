var places = [ 
	{name: "天安门广场", 
	location: "中国"}, 
	{name: "圣托里尼", 
	location: "希腊"},
	{name: "埃菲尔铁塔", 
	location: "法国"},
	{name: "伦敦大桥", 
	location: "英国"},
	{name: "比萨斜塔", 
	location: "意大利"},
	{name: "威尼斯水上都市", 
	location: "意大利"},
	{name: "金字塔", 
	location: "埃及"},
	{name: "温哥华吊桥", 
	location: "加拿大"},
	{name: "富士山", 
	location: "日本"} 
	];
$(function(){
	for (var i = 0; i < 9; i++) {
	    console.log(places[i].name + " " +places[i].location);
	    $( "span" ).append(places[i].name);
	   
	}
 });