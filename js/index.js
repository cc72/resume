//返回顶部
var backtop = document.getElementById("top");
backtop.onclick = function () {
  document.body.scrollTop = 0;
}

//推特
$(".twitter").hover(function(){
  $(".twitter1").toggle();
},function(){
  $(".twitter1").toggle();
})

//脸书
$(".facebook").hover(function(){
  $(".facebook1").toggle();
},function(){
  $(".facebook1").toggle();
})

//谷歌
$(".google").hover(function(){
  $(".google1").toggle();
},function(){
  $(".google1").toggle();
})
