let arr = basicURLInfo().parmArr;
let date = decodeDate(arr[0]);
let yr = date.yr;
let mo = date.mo;
let da = date.da;
let typ = parseInt(arr[1]);
let name = getName();
let food = foodArray[typ];
let num = numArray[typ] + " ";
let loc = "食堂" + locArray[typ] + "楼";
let dynum = new Date(yr + '/' + mo + '/' + da).getDay();
let wkd = mo + "/" + da + " 周" + weekArray[dynum];
let chargeStat = verifyCharge(getUserInfo("name", getName(), "id"));

let tkp = 0;

if (chargeStat === 1) {
    gAlert("未找到有效充值！");
    setTimeout(function () { window.location.replace("/charge.html") }, 800)
} else if (!getUserInfo("name", name, "allow").includes(food)) {
    gAlert("权限不足以生成该餐票！");
    setTimeout(function () { window.history.back() }, 800);
} else {
    document.getElementById("food").innerHTML = food;
    document.getElementById("name").innerHTML = name;
    document.getElementById("num").innerHTML = num + "<span class=\"order-area-tail\">区</span>";
    document.getElementById("loc").innerHTML = loc;
    document.getElementById("wkd").innerHTML = wkd;
    changeType();
}

function changeType() {
    do {
        ++tkp;
        tkp %= 4;
    } while (showTypeOption(typ, tkp) === false)

    var urlqr;

    if (tkp !== 2) {
        urlqr = basicURLInfo().url.replace("print", "scan").split("?")[0] + "?" + name + "&" + basicURLInfo().urlParmStr + "&" + tkp;
    } else {
        urlqr = basicURLInfo().url.replace("print", "personal").split("?")[0] + "?" + name + "&" + basicURLInfo().urlParmStr + "&" + tkp;
    }
    gAlert("点击二维码以切换扫描反馈" + "<br>目前状态：" + nowChoice[tkp] + "<br>适用人群：" + nowPeople[tkp] + alertTextArray[typ] + "<br><br>观察扫描人员，<br>警惕餐票扫描！");

    QRCode.toDataURL(urlqr, {errorCorrectionLevel: "M"}, function (rtt, url) {
        document.getElementById("qrc").src = url;
    });

}