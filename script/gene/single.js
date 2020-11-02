let gen = document.getElementById("gen");
gen.onclick = function() {
    let agr = document.getElementById("agree");
    let cook = getCookie("acc");
    let nam = decodeURI(cook.split("@")[0]);
    let ntyp = choice;
    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    if (agr.checked === false) {
        alert("请先勾选复选框！");
    } else if (mon < 1 || mon > 12 || day < 1 || day > 31) {
        alert("请输入正确日期！");
    } else if (ntyp === 0) {
        alert("请在生成前选餐！");
    } else {
        let tim = mon * 32 + day;
        let cs = yr * 416 + tim;
        let css = cs * 10 + ntyp;
        let api = css.toString(16);
        window.open("/result/print.html?" + nam + "&" + api);
    }
}