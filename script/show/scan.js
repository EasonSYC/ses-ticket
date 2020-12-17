function basicURLInfo() {
    return {
        "url" : document.location.toString(),
        "urlParmStr" : document.location.toString().slice(document.location.toString().indexOf("?") + 1),
        "parmArr" : document.location.toString().slice(document.location.toString().indexOf("?") + 1).split("&")
    };
}

function decodeDate(api) {
    let yr = Math.floor(api / 416);
    let mod = api % 416;
    let mo = Math.floor(mod / 32);
    let da = mod % 32;
    return {
        "yr" : yr,
        "mo" : mo,
        "da" : da
    };
}

var numArray = ["undefined", "1", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9"];
var weekArray = ["日", "一", "二", "三", "四", "五", "六"];

var foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
var locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];

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