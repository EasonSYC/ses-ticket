let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");

let

let date = decodeDate(arr[1]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;

let api = parseInt(arr[1], 16);
let tim = Math.floor(api / 10);
let yr = Math.floor(tim / 416);
let mod = tim % 416;
let mon = Math.floor(mod / 32);
let day = mod % 32;
let typ = api % 10;

let dynum = new Date(yr + '/' + mon + '/' + day).getDay();
var food = foodArray[typ];
var name = decodeURI(arr[0]);
var num = numArray[typ];
var loc = "食堂" + locArray[typ] + "楼";
var wkd = mon + "/" + day + " 周" + weekArray[dynum];

url = decodeURI(url);