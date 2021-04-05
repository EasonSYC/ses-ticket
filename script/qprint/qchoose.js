let choice = [];

function showChoice(a) {
    let chc = document.getElementById("chc" + a);
    let ret = "";
    for (let i = 1; i <= foodNumb; ++i) {
        ret += choiceModel;
        ret = ret.replace(/INDEX/g, a);
        ret = ret.replace(/AREA/g, numArray[i]);
        ret = ret.replace(/ID/g, i);
        ret = ret.replace(/FOOD/g, foodArray[i]);
        ret = ret.replace(/FLOOR/g, locArray[i]);
        ret = ret.replace(/LEVEL/g, levelArray[alertArray[i]]);
        ret = ret.replace(/FREQ/g, freqArray[alertArray[i]]);
        if (getUserInfo("name", getName(), "allow").includes(foodArray[i]) === false) {
            ret = ret.replace(/BUTINFO/g, butinfoArray[3]);
            ret = ret.replace(/BUTCLASS/g, butclassArray[3]);
        } else if (i === choice[a]) {
            ret = ret.replace(/BUTINFO/g, butinfoArray[2]);
            ret = ret.replace(/BUTCLASS/g, butclassArray[2]);
        } else {
            ret = ret.replace(/BUTINFO/g, butinfoArray[1]);
            ret = ret.replace(/BUTCLASS/g, butclassArray[1]);
        }
    }
    chc.innerHTML = ret;
}

function chooseType(a, tp) {
    choice[a] = parseInt(tp);
    showChoice(a);
}

let gen = document.getElementById("gen");
gen.onclick = function () {
    let agr = document.getElementById("agree");
    let ntyp = choice[0];
    if (agr.checked === false) {
        gAlert("请先勾选复选框！");
    } else if (ntyp === 0 || ntyp === undefined) {
        gAlert("请在生成前选餐！");
    } else {
        window.location.replace("./qresult.html?" + ntyp);
    }
}