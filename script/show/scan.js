let arr = basicURLInfo().parmArr;

let date = decodeDate(arr[1]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;

let typ = parseInt(arr[2]);

let dynum = new Date(yr + '/' + mo + '/' + da).getDay();

var name = decodeURI(arr[0]);
var num = numArray[typ];
var food = foodArray[typ];
var loc = "食堂" + locArray[typ] + "楼";
var wkd = mo + "/" + da + " 周" + weekArray[dynum];
var url = decodeURI(basicURLInfo().url);