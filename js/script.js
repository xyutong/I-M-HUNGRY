var places = [ 
	{name: "天安门广场", 
	location: "中国",
	image:"img/photo1.jpg"}, 

	{name: "圣托里尼", 
	location: "希腊",
	image:"img/photo2.jpg"},

	{name: "埃菲尔铁塔", 
	location: "法国",
	image:"img/photo3.jpg"},

	{name: "伦敦大桥", 
	location: "英国",
image:"img/photo4.jpg"},

	{name: "比萨斜塔", 
	location: "意大利",
image:"img/photo5.jpg"},

	{name: "威尼斯", 
	location: "意大利",
image:"img/photo6.jpg"},

	{name: "金字塔", 
	location: "埃及",
image:"img/photo7.jpg"},

	{name: "温哥华吊桥", 
	location: "加拿大",
image:"img/photo8.jpg"},

	{name: "富士山", 
	location: "日本",
image:"img/photo9.jpg"} 
	];

var x = '';
for (var i = 0; i <= places.length -1 ; i++) {
	x += '<div class="photos">';
	x += '<figure class="grid-item">';
	x += '<img src="'+ places[i].image +'">';
	x += '<figcaption>'
	x += '<h2>' + places[i].name + '</h2>';
	x += '<p>' + places[i].location + '</p>';
	x += '</figcaption></figure>'	
	x += '</div>';
	
	};

console.log(x);
$('.container').append(x);
