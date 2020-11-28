var choice = [];
var on = [];

function toDay() {
    let toD = getTo();
    let InpY = document.getElementById("year");
    let InpM = document.getElementById("month");
    let InpD = document.getElementById("day");
    InpY.value = toD.yr;
    InpM.value = toD.mo;
    InpD.value = toD.da;
    changeDate();
}

function changeDate() {
    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let d = new Date(yr + "/" + mon + "/" + day);
    let wkday = "周" + weekArray[d.getDay()];
    if (d.getDay() === undefined) {
        return;
    }
    let date = document.getElementById("date");
    date.innerHTML = mon + "/" + day + "<br>" + wkday;
}

function updateLook(a) {
    let shc = document.getElementById("shc0");
    let choose = choice[a];
    if (!"123456789".includes(choose)) {
        choose = choice[a] = 0;
    }
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
    shc.innerHTML = chs;
}

let gen = document.getElementById("gen");
gen.onclick = function () {
    let agr = document.getElementById("agree");

    let ntyp = choice[0];

    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);

    if (agr.checked === false) {
        gAlert("请先勾选复选框！");
    } else if (mon < 1 || mon > 12 || day < 1 || day > 31) {
        gAlert("请输入正确日期！");
    } else if (ntyp === 0) {
        gAlert("请在生成前选餐！");
    } else {
        window.open("../result/print.html?" + encodeDate(yr, mon, day) + "&" + ntyp);
    }
}