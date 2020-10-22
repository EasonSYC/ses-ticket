let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");
let api = parseInt(arr[1], 16);
let typ = Math.floor(api / 416);
let tim = api % 416;
let mon = Math.floor(tim / 32);
let day = tim % 32;
let numArray = ["undefined", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
let locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];
let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
let tod = new Date();
let toy = tod.getFullYear();
let tom = tod.getMonth() + 1;
let tot = tod.getDate();
let dynum;
if ((mon < tom) || ((mon === tom) && (day < tot))) {
    dynum = new Date((toy + 1) + "/" + mon + "/" + day).getDay()
} else {
    dynum = new Date(toy + "/" + mon + "/" + day).getDay()
}
var urlqr = url.replace("print", "scan");
var food = foodArray[typ];
var name = decodeURI(arr[0]);
var num = numArray[typ];
var loc = locArray[typ];
var wkd = mon + "/" + day + " 周" + weekArray[dynum];