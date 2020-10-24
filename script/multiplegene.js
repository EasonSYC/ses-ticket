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
        // } else if (mon < 1 || mon > 12 || day < 1 || day > 31) {
        //     alert("请输入正确信息！");
        //     location.reload(true);
    } else {
        let name = nam;
        let date = smon * 32 + sday;
        let len = 1;
        let api = typ;
        window.open("./../result/multiple.html?name=" + name + "&date=" + date + "&len=" + len + "&api=" + api, "_blank");
    }
}