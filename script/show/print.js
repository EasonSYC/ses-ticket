let arr = basicURLInfo().parmArr;

let date = decodeDate(arr[0]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;

let typ = parseInt(arr[1]);

var name = getName();
var num = numArray[typ];

var ok = 0;

if (!getUserInfo("name", name, "allow").includes(num)) {
    gAlert("权限不足以生成该餐票！");
    setTimeout(function () {
        window.history.back();
    }, 3000);
} else {
    let dynum = new Date(yr + '/' + mo + '/' + da).getDay();
    var food = foodArray[typ];
    var loc = "食堂" + locArray[typ] + "楼";
    var wkd = mo + "/" + da + " 周" + weekArray[dynum];
    var urlqr = basicURLInfo().url.replace("print", "scan").split("?")[0] + "?" + name + "&" + basicURLInfo().urlParmStr;
    ok = 1;
}