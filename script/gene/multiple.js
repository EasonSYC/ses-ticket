let gen = document.getElementById("gen");
gen.onclick = function () {
    let res = "", res0 = 0;

    let agr = document.getElementById("agree");
    let cook = getCookie("acc");
    let nam = decodeURI(cook.split("@")[0]);
    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);

    let sdate = new Date(syear + "/" + smon + "/" + sday);
    let edate = new Date(eyear + "/" + emon + "/" + eday);
    let len = (edate - sdate) / 86400000 + 1;
    for (let d = sdate, i = 0; i < len; ++i, d.setDate(d.getDate() + 1)) {
        let choose = choice[i];
        res += choose;
    }
    for (let i = res.length - 1; i >= 0; i--) {
        res0 = res0 * 10 + parseInt(res[i]);
    }
    res = "";
    for (let i = res0.toString().length - 1; i >= 0; i--) {
        res += res0.toString()[i];
    }
    res = res.replace(/undefined/g, "0");

    if (agr.checked === false) {
        gAlert("请先勾选复选框！");
    } else if (smon < 1 || smon > 12 || sday < 1 || sday > 31 || emon < 1 || emon > 12 || eday < 1 || eday > 31) {
        gAlert("请输入正确信息！");
    } else {
        let name = nam;
        let sdate = syear * 416 + smon * 32 + sday;
        let api = res;
        window.open("/result/multiple.html?name=" + name + "&sdate=" + sdate + "&api=" + api);
    }
}