/**
 * Created by mac on 16/3/15.
 */
var mood = "don\'t ask again";
alert(mood);

var beatles=Array[6];
Array[1] = baba;

var beatles = Array("john","paul","george","ringo");

var bh = Array("fghj",1894,false);
var hj = Array("tsygduhjkn",true,2567)
var hi =[];
hi[0] = bh;
hi[1] = bh;
hi[2] = hj;
hi[3] = bh;

var lennon = {name:"john",year:1940,living:false};
var gdjw = Array();
gdjw["sdghj"] = lennon;
gdjw["agsdbu"] = "dsytuquhwd";
gdjw["aydtuuqwj"] = "twyhnk,"


var fg = new gdjw;


var beatles3 = new Array();
beatles3.length;


var num = 7.561;
var num = Math.round(num);
alert(num);


var shopping = document.getElementById("purchases");
alert(shopping.getAttribute("title"))
shoping.setAttribute("title","a list of good");
alert(shopping.getAttribute("title"));


var paras = document.getElementsByTagName("P")
for (var i=0; i<paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if (title_text) alert(title_text);
}


var paras = document.getElementsByTagName("p")
for (var i =0;i< paras.length;i++)
{
    var title_text = paras[i].getAttribute("title");
    if (title_text){

        paras[i].setAttribute("title","brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}
