let userTyp = getUserInfo("name", getName(), "level");

if (userTyp === 1) {
    document.getElementsByTagName("title")[0].innerText = '餐票 - 充值管理';
    document.getElementById("title-1").innerText = "充值用户ID";
}

let tmp = "";
for (let i = 0; i < chargeUserID.length; ++i) {
    if (chargeUserID[i] === getUserInfo("name", getName(), "id") || userTyp === 1) {
        let cgm = chargeModel, verCharge = queryCharge(i), chargeStat = chargeStatList[verCharge];

        if (userTyp !== 1) cgm = cgm.replace(/ID/g, sha1(i.toString()).substr(0, 6));
        else cgm = cgm.replace(/ID/g, chargeUserID[i]);
        cgm = cgm.replace(/START/g, chargeStartDate[i]);
        cgm = cgm.replace(/END/g, chargeEndDate[i]);
        cgm = cgm.replace(/STAT/g, chargeStat);
        tmp += cgm;
    }
}
document.getElementById("charge-list").innerHTML = tmp;

document.getElementById("charge").onclick = function () {
    if (userTyp !== 1) gAlert("请联系管理员付款！");
    else gAlert("您是管理员，无需充值！");
}