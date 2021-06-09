let choice = [];
let on = [];

function toDay() {
    let syr = document.getElementById("syear");
    let smo = document.getElementById("smonth");
    let sdt = document.getElementById("sday");
    let eyr = document.getElementById("eyear");
    let emo = document.getElementById("emonth");
    let edt = document.getElementById("eday");

    let arr = getWk();

    syr.value = arr.syr;
    smo.value = arr.smo;
    sdt.value = arr.sda;
    eyr.value = arr.eyr;
    emo.value = arr.emo;
    edt.value = arr.eda;

    updateLook(0);
}

function updateLook(a) {
    let res = "";

    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let sdate = new Date(syear + "/" + smon + "/" + sday);
    let edate = new Date(eyear + "/" + emon + "/" + eday);
    let len = (edate - sdate) / 86400000 + 1;

    if (checkDt(syear, smon, sday) === false || checkDt(eyear, emon, eday) === false) {
        return;
    }

    for (let d = sdate, i = 0; i < min(len, min(len, mulmaxArray[getUserInfo("name", getName(), "level")])); ++i, d.setDate(d.getDate() + 1)) {

        let dmo = d.getMonth() + 1;
        let ddy = d.getDate();
        let dda = d.getDay();
        if (dda === undefined) continue;

        let choose = choice[i];
        if (choose === undefined) {
            choose = choice[i] = 0;
        }

        res += choicePanelModel;

        res = res.replace(/INDEX/g, i);
        res = res.replace(/DATE/g, dmo + "/" + ddy + "<br>" + "周" + weekArray[dda]);

        let chs = "";
        if (choose === 0) chs = noChoose;
        else {
            chs = chosenModel;
            chs = chs.replace(/AREA/g, numArray[choose]);
            chs = chs.replace(/FOOD/g, foodArray[choose]);
            chs = chs.replace(/FLOOR/g, locArray[choose]);
            chs = chs.replace(/LEVEL/g, levelArray[alertArray[choose]]);
            chs = chs.replace(/FREQ/g, freqArray[alertArray[choose]]);
        }

        res = res.replace(/CHOICE/g, chs);
    }
    document.getElementById("LIST").innerHTML = res;
}

let gen = document.getElementById("gen");
gen.onclick = function () {

    let agr = document.getElementById("agree");

    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let sdate = new Date(syear + "/" + smon + "/" + sday);
    let edate = new Date(eyear + "/" + emon + "/" + eday);
    let len = (edate - sdate) / 86400000 + 1;

    let res = "";
    for (let i = 0; i < min(len, mulmaxArray[getUserInfo("name", getName(), "level")]); ++i) {
        res += alpha[choice[i]];
    }
    res = noA(res);

    let chargeStat = verifyCharge(getUserInfo("name", getName(), "id"));

    if (getUserInfo("name", getName(), "level") !== 1 && chargeStat !== 0) {
        if (chargeStat === 1) gAlert("充值已过期！");
        if (chargeStat === 2) gAlert("充值时间未到！");
        if (chargeStat === 3) gAlert("充值数据出错！");
        if (chargeStat === 4) gAlert("使用前请先充值！")
        setTimeout(function () { window.location.replace("../charge.html") }, 800)
    } else if (agr.checked === false) {
        gAlert("请先勾选复选框！");
    }
    else if (checkDt(syear, smon, sday) === false || checkDt(eyear, emon, eday) === false) {
        gAlert("请输入正确日期！");
    } else {
        window.location.replace("../result/multiple.html?" + encodeDate(syear, smon, sday) + "&" + res);
    }
}