var Rect = require('./rect.js');
var Rect2 = Rect.Rect();
window.addEventListener('load',function(){
	var rects = [new Rect(100,100, 200,300,"#00f"),new Rect(250,250, 400,400,"#0f0"),new Rect(400,400, 500,600,"#f00")];
	var index=0;
	var intervalId = setInterval(function(){
		if(index >= rects.length){
			clearInterval(intervalId);
			return;
		}
		console.log(rects[index].hasOwnProperty("x1"));
		rects[index++].show();
	},1000);
});