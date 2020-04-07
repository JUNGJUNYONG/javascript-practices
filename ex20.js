
var o = {
    name: "jkouese"
}

global.name = "nodejs"
var f = function(s){
    console.log(s+" "+ this.name);
}
f("hello");

f.call(o,"hi");