// 변수의 범위
// 1. 자바스크립트는자바와 같은 block scope는 없다.
// 2. function의{} 안에서 변수에 var를 사용하게 되면 function scope가 된다.
// 3. let(es6), const(es6)는 Block Scope를 만든다.
var i = 10;
var f = function() {
	var i = 20;
	j = 100;
	console.log(i);
	i = j - i;
}
{
	let x= 10000;
	const PI = 3.14;
	//상수이기 때문에 오류
	//PI = 0; //에러발생 변경될수없음
	}
//접근안됨
//console.log(x);
f();
console.log(i);
console.log(j);