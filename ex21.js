// Anonymous Parameter

var f = function(arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2.name);
    arg3();
}

f(10, {
  name: "kickscar",
  age: 10  
}, function(){
    console.log('hello');
});