var choice = [];

let weekArray = ["日", "一", "二", "三", "四", "五", "六"];

let moc = [[
    "<option value=\"0\">跳过本日</option>",
    "<option value=\"0\" selected=\"selected\">跳过本日</option>"
], [
    "<option value=\"1\">1区 自助餐</option>",
    "<option value=\"1\" selected=\"selected\">1区 自助餐</option>"
], [
    "<option value=\"2\">2区 套餐A</option>",
    "<option value=\"2\" selected=\"selected\">2区 套餐A</option>"
], [
    "<option value=\"3\">3区 套餐A</option>",
    "<option value=\"3\" selected=\"selected\">3区 套餐A</option>"
], [
    "<option value=\"4\">4区 套餐A</option>",
    "<option value=\"4\" selected=\"selected\">4区 套餐A</option>"
], [
    "<option value=\"5\">5区 套餐B</option>",
    "<option value=\"5\" selected=\"selected\">5区 套餐B</option>"
], [
    "<option value=\"6\">6区 盖浇饭</option>",
    "<option value=\"6\" selected=\"selected\">6区 盖浇饭</option>"
], [
    "<option value=\"7\">7区 套餐C</option>",
    "<option value=\"7\" selected=\"selected\">7区 套餐C</option>"
], [
    "<option value=\"8\">8区 面档</option>",
    "<option value=\"8\" selected=\"selected\">8区 面档</option>"
], [
    "<option value=\"9\">9区 套餐B</option>",
    "<option value=\"9\" selected=\"selected\">9区 套餐B</option>"
]];

function changeDate() {
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
    for (let d = sdate, i = 0; i < len; ++i, d.setDate(d.getDate() + 1)) {

        let dyr = d.getFullYear();
        let dmo = d.getMonth() + 1;
        let ddy = d.getDate();
        let dda = d.getDay();

        let choose = choice[i];

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
            "\" style=\"width: auto\" onchange=\"changeType(" +
            i +
            ")\">";

        for (let j = 0; j <= 9; ++j) {
            if (choose === j) res += moc[j][1];
            else res += moc[j][0];
        }

        res += "</select>" +
            "</p>";
    }
    document.getElementById("chs").innerHTML = res;
}

function changeType(a) {
    let chc = document.getElementById("typ" + a);
    chc = parseInt(chc.options[chc.selectedIndex].value);
    choice[a] = chc;
}