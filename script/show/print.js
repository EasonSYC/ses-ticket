let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");
let api = parseInt(arr[1], 16);
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

var truname = decodeURI(arr[0]);

let cook = getCookie("acc");
let nam2 = decodeURI(cook.split("@")[0]);

var ok = 0;

if (truname !== nam2) {
    window.history.back();
} else {
    var trunum = numArray[typ];

    let acc2 = sha1(nam2);
    let i = 0;
    for (; i < num; ++i) {
        if (nameArray[i] === acc2) break;
    }

    let allow = allArray[typArray[i]];

    if (!allow.includes(trunum)) {
        gAlert("权限不足以生成该餐票！");
    } else {
        var truloc = "食堂" + locArray[typ] + "楼";
        var truwkd = mon + "/" + day + " 周" + weekArray[dynum];
        ok = 1;
    }
}