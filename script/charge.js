let cgm = chargeModel;
for (let i = 0; i < chargeID.length(); i++) {
    if (chargeID[i] === getUserInfo("acc", getCookie("acc"), "id")) {
        let chargeStat, csdate = new Date(chargeStartDate[i]), cedate = new Date(chargeEndDate[i]), date = new Date();
        if (date >= csdate && date <= cedate) chargeStat = "正常";
        if (date >= csdate && date >= cedate) chargeStat = "到期";
        if (date <= csdate && date <= cedate) chargeStat = "未开始";
        if (date <= csdate && date >= cedate) chargeStat = "数据异常";
        cgm.replace(/ID/g, sha1(chargeID[i]).substr(0, 6));
        cgm.replace(/START/g, chargeStartDate[i]);
        cgm.replace(/END/g, chargeEndDate[i]);
        cgm.replace(/STAT/g, chargeStat);
        document.getElementById("charge-list").innerHTML += cgm;
    }
}

document.getElementById("charge").onclick = function () {
    gAlert("请联系管理员付款！");
}