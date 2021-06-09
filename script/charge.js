let userTyp = getUserInfo("name", getName(), "type");

if (userTyp === 1) {
    document.getElementsByTagName("title")[0].innerText = '餐票 - 充值管理';
    document.getElementById("title-1").innerText = "充值用户ID";
}

let tmp = "";
for (let i = 0; i < chargeUserID.length; i++) {
    if (chargeUserID[i] === getUserInfo("name", getName(), "id")) {
        let cgm = chargeModel, verCharge = verifyCharge(getUserInfo("name", getName(), "id")), chargeStat;

        if (chargeStatus[i] === 0) chargeStat = chargeStatList[verCharge];
        else if (chargeStatus[i] === 1) chargeStat = "充值已取消";
        else if (chargeStatus[i] === 2) chargeStat = "充值已退款";
        else {
            if (verCharge === 0) chargeStat = "赠送使用中";
            else if (verCharge === 1) chargeStat = "赠送已到期";
            else if (verCharge === 2) chargeStat = "赠送已到账";
            else chargeStat = "赠送数据异常";
        }

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