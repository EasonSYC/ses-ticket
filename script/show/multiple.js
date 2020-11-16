function min(a, b) {
    return a < b ? a : b;
}

let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");
let nma = arr[0].split("=");

let nam = decodeURI(nma[1]);

let cook = getCookie("acc");
let nam2 = decodeURI(cook.split("@")[0]);

if (nam !== nam2) {
    gAlert("姓名不匹配！");
    setTimeout(function () {
        window.history.back();
    }, 3000);
} else {
    let sda = arr[1].split("=");
    let std = sda[1];
    let apa = arr[2].split("=");
    let api = apa[1];

    let urlNew = url.replace("multiple", "scan");
    urlNew = urlNew.split("?")[0];

    let syr = Math.floor(std / 416);
    let sd = std % 416;
    let smo = Math.floor(sd / 32);
    let sdt = sd % 32;

    var ret = "";
    var ret2 = "";

    let sdate = new Date(syr + "/" + smo + "/" + sdt);
    for (let i = 0; i < min(api.length, 366); ++i) {
        let chc = api[i];
        if ((chc === "1") ||
            (chc === "2") ||
            (chc === "3") ||
            (chc === "4") ||
            (chc === "5") ||
            (chc === "6") ||
            (chc === "7") ||
            (chc === "8") ||
            (chc === "9")) {
            chc = parseInt(chc);
            let dyr = sdate.getFullYear();
            let dmo = sdate.getMonth() + 1;
            let ddy = sdate.getDate();
            let are = numArray[chc];
            let typ = foodArray[chc];
            let loc = locArray[chc];
            let ntim = dmo * 32 + ddy;
            let ncs = dyr * 416 + ntim;
            let ncss = ncs * 10 + chc;
            let napi = ncss.toString(16);
            let wkday = new Date(dyr + "/" + dmo + "/" + ddy).getDay();
            let purl = "\"" + ".\/..\/result\/print.html?" + nam + "&" + napi + "\"";
            let surl = urlNew + "?" + nam + "&" + napi;
            let datestr = dmo + "/" + ddy + " 周" + weekArray[wkday];

            let acc2 = sha1(nam2);
            let j = 0;
            for (; j < num; ++j) {
                if (nameArray[j] === acc2) break;
            }

            let allow = allArray[typArray[j]];

            if (!allow.includes(are)) {
                gAlert("权限不足以生成" + dyr + "/" + dmo + "/" + ddy + "的餐票！");
                // wait(untilpress);
            } else {
                ret +=
                    "<div class=\"col-6 mt-2 d-flex justify-content-center\">" +
                    "<div class=\"order-panel\"> " +
                    "<div class=\"d-flex justify-content-between\">" +
                    "<div>" +
                    "<div class=\"order-name\">" +
                    typ +
                    "</div>" +
                    "<a href=" +
                    purl +
                    ">" +
                    "<img class=\"img-qrcode border\" id=\"" +
                    "qrc" +
                    i +
                    "\"" +
                    ">" +
                    "</a>" +
                    "<div class=\"user-name text-center\">" +
                    "<span>" +
                    nam +
                    "</span>" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"ticket-body\">" +
                    "<div class=\"order-area\">" +
                    are +
                    " " +
                    "<span class=\"order-area-tail\">" +
                    "区" +
                    "</span>" +
                    "</div>" +
                    "<div class=\"order-location\">" +
                    "<span>" +
                    "食堂" +
                    loc +
                    "楼" +
                    "<span>" +
                    "<br>" +
                    "<span>" +
                    datestr +
                    "</span>" +
                    "</span>" +
                    "</span>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                ret2 +=
                    "QRCode.toDataURL(\"" +
                    surl +
                    "\", {errorCorrectionLevel: 'L'}, function (rtt, url) {" +
                    "document.getElementById(\"" +
                    "qrc" +
                    i +
                    "\").src=url;});";
            }
        }
        sdate.setDate(sdate.getDate() + 1);
    }
}