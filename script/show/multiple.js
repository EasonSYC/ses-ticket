let arr = basicURLInfo().parmArr;
let date = decodeDate(arr[0]);
let syr = date.yr;
let smo = date.mo;
let sda = date.da;
let sdate = new Date(syr + "/" + smo + "/" + sda);
let api = arr[1];
let name = getName();
let urlNew = basicURLInfo().url.replace("multiple", "scan").split("?")[0];
let ret = "";
let ret2 = "";
let flg = 0;
let chargeStat = verifyCharge(getUserInfo("name", getName(), "id"));

if (chargeStat === 1) {
    gAlert("未找到有效充值！");
    setTimeout(function () { window.location.replace("/charge.html") }, 800)
} else {
    for (let i = 0; i < min(api.length, 250); ++i) {
        let chc = api[i];
        if ("bcdefghijkl".includes(chc)) {
            chc = numb[chc];

            let dyr = sdate.getFullYear();
            let dmo = sdate.getMonth() + 1;
            let ddy = sdate.getDate();

            let food = foodArray[chc];
            let dynum = sdate.getDay();
            let purl = "\"" + ".\/..\/result\/print.html?" + encodeDate(dyr, dmo, ddy) + "&" + chc + "\"";
            let surl = urlNew + "?" + name + "&" + encodeDate(dyr, dmo, ddy) + "&" + chc + "&1";
            let wkday = dmo + "/" + ddy + " 周" + weekArray[dynum];

            if (!getUserInfo("name", name, "allow").includes(food)) {
                flg = 1;
            } else {
                ret += ticketModel;
                ret = ret.replace(/FOOD/g, foodArray[chc]);
                ret = ret.replace(/PURL/g, purl);
                ret = ret.replace(/INDEX/g, i);
                ret = ret.replace(/NAME/g, name);
                ret = ret.replace(/AREA/g, numArray[chc]);
                ret = ret.replace(/FLOOR/g, locArray[chc]);
                ret = ret.replace(/DATE/g, wkday);


                ret2 += codeModel;

                ret2 = ret2.replace(/SURL/g, surl);
                ret2 = ret2.replace(/INDEX/g, i);
            }
        }
        sdate.setDate(sdate.getDate() + 1);
    }
    if (flg) {
        gAlert("权限不足以生成某些餐票！");
        setTimeout(function () { window.history.back() }, 800);
    } else {
        document.getElementById("res").innerHTML = ret;
        document.getElementById("res2").innerHTML = ret2;
    }
}