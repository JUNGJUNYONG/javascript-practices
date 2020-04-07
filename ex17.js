//URL 다루기

//1. escape(x) - URL을 전부 encoding, deprecated
var url = 'http://localhost:8080/mysite03?n=정준용';
var url2 = escape(url);
console.log(url2);

//2. encodeURI (o) : parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent
var url4 = encodeURIComponent(url);
console.log(url4);

//4. encodeURIComponent 사용 예
var url = "http://localhost:8080/mysite03";
var o = {
    name: '정준용',
    mail: 'jkouese@gmail.com'
};
var toQueryString = function (o) {
    var qs = [];
    for (property in o) {
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }
    return qs.join('&');
}
var url5 = url + "?" + toQueryString(o);
console.log(url5);