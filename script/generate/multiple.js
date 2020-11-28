var choice = [];
var on = [];

let moc = [
    "                                                            <div class=\"text-muted text-center mt-4\">点击这里选餐</div>",
    "                                                            <b class=\"title\">1区 自助餐</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-red\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    经常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">2区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">3区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">4区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">5区 套餐B</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">6区 盖浇饭</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    有时扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">7区 套餐C</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">8区 面档</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    有时扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">9区 套餐B</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>"
];

let clook =
    "                               <ul class=\"supply-date-list px-3\">\n" +
    "                                    <li class=\"py-2\">\n" +
    "                                        <div class=\"row no-gutters\" onclick=\"showChoice(Number)\">\n" +
    "                                            <div class=\"col-3\">\n" +
    "                                                <div class=\"date-icon\">\n" +
    "                                                   DateNow" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-9\">\n" +
    "                                                <div class=\"row no-gutters\">\n" +
    "                                                    <div class=\"col-12\">\n" +
    "                                                        <div class=\"px-3\" id=\"shc\">\n" +
    "                                                            ChoiceNow" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <ul class=\"supply-list shadow-sm\" id=\"chcNumber\">\n" +
    "                                             \n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                </ul>";

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

    changeDate();
}

function changeDate() {
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
    for (let d = sdate, i = 0; i < min(len, 250); ++i, d.setDate(d.getDate() + 1)) {

        let dmo = d.getMonth() + 1;
        let ddy = d.getDate();
        let dda = d.getDay();

        if (dda === undefined) continue;

        let choose = choice[i];

        if (choose !== 1 &&
            choose !== 2 &&
            choose !== 3 &&
            choose !== 4 &&
            choose !== 5 &&
            choose !== 6 &&
            choose !== 7 &&
            choose !== 8 &&
            choose !== 9) {
            choice[i] = choose = 0;
        }

        res += clook;

        res = res.replace(/Number/g, i);
        res = res.replace("DateNow", dmo + "/" + ddy + "<br>" + "周" + weekArray[dda]);
        res = res.replace("ChoiceNow", moc[choose]);
    }


    document.getElementById("chs").innerHTML = res;
}

function chooseType(a, b) {
    choice[a] = b;
    changeDate();
    showChoice(a);
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
    for (let i = 0; i < min(len, 250); ++i) {
        res += choice[i];
    }

    res = noZero(res);

    if (agr.checked === false) {
        gAlert("请先勾选复选框！");
    } else if (smon < 1 || smon > 12 || sday < 1 || sday > 31 || emon < 1 || emon > 12 || eday < 1 || eday > 31) {
        gAlert("请输入正确信息！");
    } else {
        window.open("../result/multiple.html?" + encodeDate(syear, smon, sday) + "&" + res);
    }
}