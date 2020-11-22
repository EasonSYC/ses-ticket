let url = document.location.toString();
let api = parseInt(url.slice(url.indexOf("?") + 1), 16);

let tim = Math.floor(api / 10);
let yr = Math.floor(tim / 416);
let mod = tim % 416;
let mon = Math.floor(mod / 32);
let day = mod % 32;
let typ = api % 10;
let dynum = new Date(yr + '/' + mon + '/' + day).getDay();
var truurlqr = url.replace("print", "scan");
truurlqr = decodeURI(truurlqr);
var trufood = foodArray[typ];

var truname = getName();

var ok = 0;

var trunum = numArray[typ];

if (!getUserInfo("name", truname, "allow").includes(trunum)) {
    gAlert("权限不足以生成该餐票！");
    setTimeout(function () {
        window.history.back();
    }, 3000);
} else {
    var truloc = "食堂" + locArray[typ] + "楼";
    var truwkd = mon + "/" + day + " 周" + weekArray[dynum];
    ok = 1;
}