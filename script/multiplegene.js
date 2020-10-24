let gen = document.getElementById("gen");
gen.onclick = function () {
    let agr = document.getElementById("agree");
    let nam = document.getElementById("name").value;
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let typ = document.getElementById("typ").value;
    if (agr.checked === false) {
        alert("请先勾选复选框！");
        location.reload(true);
    } else if (smon < 1 || smon > 12 || sday < 1 || sday > 31 || emon < 1 || emon > 12 || eday < 1 || eday > 31) {
        alert("请输入正确信息！");
        location.reload(true);
    } else {
        let name = nam;
        let sdate = smon * 32 + sday;
        let edate = emon * 32 + eday;
        let api = typ;
        window.open("./../result/multip.html?name=" + name + "&sdate=" + sdate + "&edate" + edate + "&len=" + len + "&api=" + api, "_blank");
    }
}