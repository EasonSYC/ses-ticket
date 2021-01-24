let showModelFront =
    "<div class=\"text-center\">" +
    "<b>距离</b>" +
    "<a style=\"font-size: 1.5rem; color: red; white-space: pre\"> NAME </a>" +
    "<b>还有</b>" +
    "</div>" +
    "<div class=\"text-center\">\n"

let showModelBack =
    "</div>" +
    "<div class=\"text-center\">\n" +
    "<b>DESCRIBE</b>\n" +
    "</div>";

let upTo = [
    "<a style=\"font-size: 1.5rem; color: red; white-space: pre\" id=\"dayINDEX\"> 0 </a>" +
    "<b>天</b>\n",
    "<a style=\"font-size: 1.5rem; color: red; white-space: pre\" id=\"horINDEX\"> 00 </a>" +
    "<b>时</b>\n",
    "<a style=\"font-size: 1.5rem; color: red; white-space: pre\" id=\"minINDEX\"> 00 </a>" +
    "<b>分</b>\n",
    "<a style=\"font-size: 1.5rem; color: red; white-space: pre\" id=\"secINDEX\"> 00 </a>" +
    "<b>秒</b>\n"
];

let codModelFront =
    "function showTimeINDEX(){" +
    "let countdownAll = TIME - Date.now() / 1000;" +
    "let countdownDay = Math.floor(countdownAll / 86400);\n" +
    "let countdownHor = Math.floor(countdownAll / 3600 - countdownDay * 24);\n" +
    "let countdownMin = Math.floor(countdownAll / 60 - countdownDay * 1440 - countdownHor * 60);\n" +
    "let countdownSec = Math.floor(countdownAll - countdownDay * 86400 - countdownHor * 3600 - countdownMin * 60);\n";

let codUpto = [
    "document.getElementById(\"dayINDEX\").innerHTML = \" \" + countdownDay + \" \";\n",
    "document.getElementById(\"horINDEX\").innerHTML = \" \" + (\"0\" + countdownHor).substr(-2) + \" \";\n",
    "document.getElementById(\"minINDEX\").innerHTML = \" \" + (\"0\" + countdownMin).substr(-2) + \" \";\n",
    "document.getElementById(\"secINDEX\").innerHTML = \" \" + (\"0\" + countdownSec).substr(-2) + \" \";\n"];
let codModelBack =
    "}\n" +
    "setInterval(function(){showTimeINDEX()}, 1);\n";

let len = 4;
let eventName = ["2021年", "中三部分班级地理期末考试", "中三部分班级道法期末考试", "中三期末考试"];
let eventTime = ["1609430400", "1609689600", "1609862400", "1610380800"];
let eventDescription = ["新的一年，让我们携手并进，再创辉煌！", "综合案例分析，认真分析！", "画书！熟记知识点位置！", "好好学习，天天向上！"];
let eventUpto = ["4", "1", "1", "1"];
let res = "";
let cod = "";

for (let i = 0, cnt = 0; i < len && cnt < 4; ++i) {
    if (Date.now() / 1000 > eventTime[i]) continue;
    ++cnt;
    res += showModelFront;
    for (let j = 0; j < eventUpto[i]; ++j) {
        res += upTo[j];
    }
    res += showModelBack;
    cod += codModelFront;
    for (let j = 0; j < eventUpto[i]; ++j) {
        cod += codUpto[j];
    }
    cod += codModelBack;
    res = res.replace(/INDEX/g, i);
    cod = cod.replace(/INDEX/g, i);
    res = res.replace(/NAME/g, eventName[i]);
    res = res.replace(/DESCRIBE/g, eventDescription[i]);
    cod = cod.replace(/TIME/g, eventTime[i]);
    res += "<br>";
}

let oRes = document.createElement("div");
oRes.id = "countdown";
oRes.innerHTML = res;
document.getElementsByClassName("p-2")[0].appendChild(oRes);

let oCod = document.createElement("div");
oCod.id = "countdowncode";
oCod.innerHTML = cod;
document.body.insertBefore(oCod, document.getElementById("countdowncodecode"));