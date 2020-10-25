let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");
let nma = arr[0].split("=");
let nam = decodeURI(nma[1]);
let sda = arr[1].split("=");
let std = sda[1];
let eda = arr[2].split("=");
let etd = eda[1];
let apa = arr[3].split("=");
let api = apa[1];

let syr = Math.floor(std / 416);
let sd = std % 416;
let smo = Math.floor(sd / 32);
let sdt = sd % 32;

let eyr = Math.floor(etd / 416);
let ed = etd % 416;
let emo = Math.floor(ed / 32);
let edt = ed % 32;

let numArray = ["undefined", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];

var ret = "<h3>" + nam + "的餐票</h3><br>";

if (syr > eyr || ((syr === eyr) && ((smo > emo) || ((smo === emo) && (sdt > edt))))) {
    alert("请输入正确日期！");
    ret += "<p>日期不正确。</p>";
} else {
    let sdate = new Date(syr + "/" + smo + "/" + sdt);
    let edate = new Date(eyr + "/" + emo + "/" + edt);
    for (let d = sdate, i = 0; d <= edate; d.setDate(d.getDate() + 1), ++i) {
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
            let dyr = d.getFullYear();
            let dmo = d.getMonth() + 1;
            let ddy = d.getDate();
            let are = numArray[chc];
            let typ = foodArray[chc];
            let ntim = dmo * 32 + ddy;
            let ncs = dyr * 416 + ntim;
            let ncss = ncs * 10 + chc;
            let napi = ncss.toString(16);
            let url = "\"" + "./../result/print.html?" + nam + "&" + napi + "\"";

            ret += "<p>" + dyr + "/" + dmo + "/" + ddy + " " + are + "区" + typ + "的餐票：" +
                "<a href=" + url + ">点击此处</a>" +
                "</p>";
        }
    }
}