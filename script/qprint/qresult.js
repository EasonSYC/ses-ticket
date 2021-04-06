let arr = basicURLInfo().parmArr;

let yr = getTo().yr;
let mo = getTo().mo;
let da = getTo().da;

let typ = parseInt(arr[0]);

let name = getQprintName();
let food = foodArray[typ];

let ok = 0;

let tkp = 0;

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
    ok = 1;
}

function changeType() {
    do {
        ++tkp;
        tkp %= 4;
    } while (showTypeOption(typ, tkp) === false)

    var urlqr;

    if (tkp !== 2) {
        urlqr = basicURLInfo().url.replace("qprint/qresult", "result/scan").split("?")[0] + "?" + name + "&" + encodeDate(yr, mo, da) + "&" + basicURLInfo().urlParmStr + "&" + tkp;
    } else {
        urlqr = basicURLInfo().url.replace("qprint/qresult", "result/personal").split("?")[0] + "?" + name + "&" + encodeDate(yr, mo, da) + "&" + basicURLInfo().urlParmStr + "&" + tkp;
    }
    gAlert("点击二维码以切换扫描反馈" + "<br>目前状态：" + nowChoice[tkp] + "<br>适用人群：" + nowPeople[tkp] + "<br><br>观察扫描人员，<br>警惕餐票扫描！");

    QRCode.toDataURL(urlqr, {errorCorrectionLevel: "M"}, function (rtt, url) {
        document.getElementById("qrc").src = url;
    });

}