let gen = document.getElementById("gen");
let str = document.getElementById("str");
str.onclick = function () {
    let res = "";

    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let sdate = new Date(syear + "/" + smon + "/" + sday);
    let edate = new Date(eyear + "/" + emon + "/" + eday);
    let len = (edate - sdate) / 86400000 + 1;

    for (let i = 0; i < len; ++i) {
        let chc = document.getElementById("typ" + i);
        chc = parseInt(chc.options[chc.selectedIndex].value);
        res += chc;
    }
    document.getElementById("typ").value = res;
}
gen.onclick = function () {
    let agr = document.getElementById("agree");
    let cook = getCookie("acc");
    let nam = decodeURI(cook.split("@")[0]);
    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let typ = document.getElementById("typ").value;
    if (agr.checked === false) {
        alert("请先勾选复选框！");
    } else if (smon < 1 || smon > 12 || sday < 1 || sday > 31 || emon < 1 || emon > 12 || eday < 1 || eday > 31) {
        alert("请输入正确信息！");
    } else {
        let name = nam;
        let sdate = syear * 416 + smon * 32 + sday;
        let edate = eyear * 416 + emon * 32 + eday;
        let api = typ;
        window.open("./../result/multiple.html?name=" + name + "&sdate=" + sdate + "&edate=" + edate + "&api=" + api);
    }
}