let gen = document.getElementById("gen");
gen.onclick = function() {
    let agr = document.getElementById("agree");
    let nam = document.getElementById("name").value;
    let typ = document.getElementById("typ");
    typ = parseInt(typ.options[typ.selectedIndex].value);
    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    if(agr.checked === false) {
        alert("请先勾选复选框！");
    } else if (mon < 1 || mon > 12 || day < 1 || day > 31) {
        alert("请输入正确日期！");
    } else {
        let tim = mon * 32 + day;
        let cs = yr * 416 + tim;
        let css = cs * 10 + typ;
        let api = css.toString(16);
        window.open("./../result/print.html?" + nam + "&" + api);
    }
}