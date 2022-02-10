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

function getTo() {
    let today = new Date();
    let toyear = today.getFullYear();
    let tomonth = today.getMonth() + 1;
    let todate = today.getDate();
    let tod = today.getDay();
    return {
        "yr": toyear,
        "mo": tomonth,
        "da": todate,
        "wk": weekArray[tod],
        "al": today
    };
}

function writeScan() {
    localStorage.setItem(arr[0] + arr[1] + arr[2], "1");
}

function checkScan() {
    if (localStorage.getItem(arr[0] + arr[1] + arr[2]) === "1") {
        return 1;
    }
    return 0;
}

let foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
let locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];
let numArray = ["undefined", "1",  "2", "3", "4", "5", "6", "7", "8", "9"];
let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
let info = ["undefined", "<span class=\"text-green\">订单扫描成功!</span>", "<span class=\"text-red\">不是今日订单!</span>", "<span class=\"text-red\">订单已被扫描!</span>"];

let arr = basicURLInfo().parmArr;

let date = decodeDate(arr[1]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;

let typ = parseInt(arr[2]);

let dynum = new Date(yr + '/' + mo + '/' + da).getDay();

let tkp = arr[3];
if (tkp === undefined) {
    tkp = 1;
}
tkp = parseInt(tkp);

let name = decodeURI(arr[0]);
let num = numArray[typ];
let food = foodArray[typ];
let loc = "食堂" + locArray[typ] + "楼";
let wkd = mo + "/" + da + " 周" + weekArray[dynum];
let url = decodeURI(basicURLInfo().url);

