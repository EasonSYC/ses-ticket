let gen = document.getElementById("gen");
let str = document.getElementById("str");
let mak = document.getElementById("mak");
mak.onclick = function () {
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

    let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    for (let d = sdate, i = 0; i < len; ++i, d.setDate(d.getDate() + 1)) {

        let dyr = d.getFullYear();
        let dmo = d.getMonth() + 1;
        let ddy = d.getDate();
        let dda = d.getDay();

        res +=
            "<p>" +
            dyr +
            "/" +
            dmo +
            "/" +
            ddy +
            " 周" +
            weekArray[dda] +
            ": " +
            "<select id=\"typ" +
            i +
            "\" style=\"width: auto\">" +
            "<option value=\"0\">跳过本日</option>" +
            "<option value=\"1\">1区 自助餐</option>" +
            "<option value=\"2\">2区 套餐A</option>" +
            "<option value=\"3\">3区 套餐A</option>" +
            "<option value=\"4\">4区 套餐A</option>" +
            "<option value=\"5\">5区 套餐B</option>" +
            "<option value=\"6\">6区 盖浇饭</option>" +
            "<option value=\"7\">7区 套餐C</option>" +
            "<option value=\"8\">8区 面档</option>" +
            "<option value=\"9\">9区 套餐B</option>" +
            "</select>"
        "</p>"
    }
    document.getElementById("chs").innerHTML = res;
}
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
    let nam = document.getElementById("name").value;
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
        window.open("./../result/multiple.html?name=" + name + "&sdate=" + sdate + "&edate=" + edate + "&api=" + api, "_blank");
    }
}