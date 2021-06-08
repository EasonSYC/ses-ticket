let cgm = chargeModel;
for (let i = 0; i < chargeID.length(); i++) {
    if (chargeID[i] == getUserInfo("acc", getCookie("acc"), "id")) {
        cgm.replace(/ID/g, sha1(chargeID[i]).substr(0, 6));
        cgm.replace(/START/g, chargeStartDate[i]);
        cgm.replace(/END/g, chargeEndDate[i]);
        cgm.replace(/STAT/g, "暂无");
        document.getElementById("charge-list").innerHTML += cgm;
    }
}

document.getElementById("charge").onclick = function () {
    window.location.replace("../charge.jpg")
}