let gen = document.getElementById("gen");
gen.onclick = function() {
    let agr = document.getElementById("agree");
    let nam = document.getElementById("name").value;
    let typ = document.getElementById("typ");
    typ = parseInt(typ.options[typ.selectedIndex].value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    if(agr.checked === false) {
        alert("请先勾选复选框！");
        location.reload(true);
    } else if (/*!isValid(mon, day)*/mon < 1 || mon > 12 || day < 1 || day > 31) {
        alert("请输入正确信息！");
        location.reload(true);
    } else {
        let tim = mon * 31 + day;
        let cs = typ * 403 + tim;
        let api = cs.toString(16);
        window.open("print#nam="+nam+"typ="+api, "_blank");
    }
}
// TODO: isValid
