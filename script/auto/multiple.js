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