let tmp = "";
for (let i = 0; i < chargeUserID.length; i++) {
    if (chargeUserID[i] === getUserInfo("name", getName(), "id")) {
        let cgm = chargeModel;
        let chargeStat = chargeStatList[verifyCharge(getUserInfo("name", getName(), "id"))];
        cgm = cgm.replace(/ID/g, sha1(i.toString()).substr(0, 6));
        cgm = cgm.replace(/START/g, chargeStartDate[i]);
        cgm = cgm.replace(/END/g, chargeEndDate[i]);
        cgm = cgm.replace(/STAT/g, chargeStat);
        tmp += cgm;
    }
}
document.getElementById("charge-list").innerHTML = tmp;

document.getElementById("charge").onclick = function () {
    gAlert("请联系管理员付款！");
}