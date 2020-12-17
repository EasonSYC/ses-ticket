let arr = basicURLInfo().parmArr;

let date = decodeDate(arr[0]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;

let typ = parseInt(arr[1]);

let name = getName();
let food = foodArray[typ];

let ok = 0;

let tkp = 1;

if (!getUserInfo("name", name, "allow").includes(food)) {
    gAlert("权限不足以生成该餐票！");
    setTimeout(function () {
        window.history.back();
    }, 3000);
} else {
    let dynum = new Date(yr + '/' + mo + '/' + da).getDay();
    var num = numArray[typ];
    var loc = "食堂" + locArray[typ] + "楼";
    var wkd = mo + "/" + da + " 周" + weekArray[dynum];
    var urlqr = basicURLInfo().url.replace("print", "scan").split("?")[0] + "?" + name + "&" + basicURLInfo().urlParmStr + "&" + tkp;
    ok = 1;
}



function changeType() {
    ++tkp;
    tkp %= 3;
    QRCode.toDataURL(urlqr, {errorCorrectionLevel: errL[tkp]}, function (rtt, url) {
        document.getElementById("qrc").src = url;
    })
}