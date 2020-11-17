// Food Arrays

var numArray = ["undefined", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
var locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];
var weekArray = ["日", "一", "二", "三", "四", "五", "六"];

// 404 Arrays

var eggs = [
    "随机数的范围不包括这串字符，你是怎么让它显示出来的？",
    "别让食堂阿姨用扫票机扫你的餐票……",
    "知道吗，这个项目最早从九月底就开始编写了……",
    "“你今天是真的8区吗？”",
    "不要尝试生成几千年的餐票，这会让你的电脑卡住！",
    "输错网址了，憨批！",
    "如果你点了网站里的一个按钮来到这里，请向我们报告！",
    "找啊找，找啊找，找到一个404",
    "(0,0)",
    "页面建设中……"];

// 404 Strings

var before =
    "\n" +
    "\t\t\t<p class=\"display-1 text-danger py-3\"> 404 </p>\n" +
    "\t\t\t<p class=\"text-muted\" id=\"egg\" style=\"font-size: 25px\">页面建设中...</p>";
var home =
    "<a class=\"btn btn-outline-secondary px-5 mt-5\" href=\"/\" id=\"g-but\">\n" +
    "\t\t\t\t首页\n" +
    "\t\t\t</a>";
var back =
    "<a class=\"btn btn-outline-secondary px-5 mt-5\" id=\"g-but\" onclick=\"history.back();\">\n" +
    "\t\t\t\t返回\n" +
    "\t\t\t</a>";
var after =
    "\n" +
    "\t\t\t<a class=\"btn btn-outline-secondary px-5 mt-5\" href=\"/help.html#NotFound\">\n" +
    "\t\t\t\t帮助\n" +
    "\t\t\t</a>";

// Alert Functions

function gAlert(txt) {
    document.getElementById("gAlertModal").style.display = "block";
    document.getElementById("gAlertBack").style.display = "block";
    document.getElementById("gAlertMsg").innerHTML = txt;
    setTimeout(function () {
        document.getElementById("gAlertModal").classList.add("show");
        document.getElementById("gAlertBack").classList.add("show");
    }, 10);
}

function gAlertClose() {
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
    setTimeout(function () {
        document.getElementById("gAlertModal").style.display = "none";
        document.getElementById("gAlertBack").style.display = "none";
    }, 160);
}

// <div id="gAlertModal" class="modal fade global-alert" style="display: none;">
//     <div class="modal-dialog modal-sm">
//         <div class="modal-content">
//             <button id="gAlertButton" type="button" class="close float-right">
//                 <span aria-hidden="true">×</span>
//             </button>
//             <div id="gAlertMsg" class="text-center font-weight-bold"></div>
//         </div>
//     </div>
// </div>
// <div id="gAlertBack" class="modal-backdrop fade" style="display: none;"></div>

// Alert Setup

document.getElementById("gAlertButton").onclick = gAlertClose;
document.getElementById("gAlertModal").onclick = gAlertClose;

// Auto Functions

function noLogin(source) {
    window.location.replace("/login.html?ref=" + source);
}

// User Values

var num = 16;

// User Strings

var nameArray = [
    "d033e22ae348aeb5660fc2140aec35850c4da997",
    "3dacbce532ccd48f27fa62e993067b3c35f094f7",
    "b3272311c05de421d1cc7c4f0e531ea6a63b8df5",
    "7b45cc4c64b0ba1dc8f4c9f331a068a783ef2cbc",
    "dc7d96d4125e819d53e0efe8001afa6a64b35728",
    "12dea96fec20593566ab75692c9949596833adc9",

    "a28079aa9ed5861504d0fde60544f715df764110",
    "fab60904d36306295b5d27dc1745a645482b2201",
    "032b83ec07d20c839f43b18b85ee2a71906cc524",
    "ca13078b652648bbb734212811a238bf6b835b0f",
    "a67a98a27ce25528db145277dde1a9eee29e9a46",
    "a7a12ba71f7ab5331cfffe1a0c1e12baa2661069",
    "ebf91f6760eef10753bed9bf00b46945f253a2e1",
    "9bb63820ef3c5518cd3b7572778a05e8f3d0fd51",
    "87bcfe46af9de8e5d1cd0c17d5fcd0304a9df0ed",
    "fccfac5ea6317fb43541816f476a0b614a1efa5f"];
var pwdArray = [
    "346de590de624b35df35ca0e5431c12cd1bd0ceb",
    "1a9f35e469dd557845ba707710e89b8da52205d0",
    "1dbb9af22119da11c5c89274ffa5534ef7b170c9",
    "89ecddf086cc2982e7f846c0480b8fb023b7fdc6",
    "a1d7124b3c6aa915695ef5d034bfb0d0f18c406f",
    "b5d9564790a2d404044a754a823997b3a0a5f9f4",

    "2e92ac4a17994f037461eb2b476415b11bab3319",
    "7e226f1ff2de32b0e5b998c7b462110c1a21ea4b",
    "c02e02219ecaef0bcdc95d447a6aa44b2d206e32",
    "b60964940dd43924f6b17ebad061f41caa117b32",
    "01c88f65f014d24283c2794a3de117cebe267d19",
    "7319be0502b21f03904b0b680e3c44a4ed266d14",
    "2f42c22ec0cc1e08f446a46c9fd2ea1bf204e8e1",
    "c11c41262e19826e0edac6846a84ea654a05a0f7",
    "eb820fc7799df7d8130225a3052a3e9d36a237fc",
    "49760f017daccda000140283ecdcdcdbdfa55579"];
var typArray = [
    0,
    1,
    2,
    3,
    4,
    5,

    1,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    1];
var tynArray = [
    "根用户",
    "开发者",
    "内测",
    "SVIP",
    "VIP",
    "普通用户"];
var allArray = [
    "123456789",
    "123456789",
    "123456789",
    "123456789",
    "23456789",
    "234579"];

// User Functions

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function delCookie(cname) {
    let d = new Date();
    d.setTime(d.getTime() - 1);
    let c = getCookie(cname);
    document.cookie = cname + "=" + c + ";expires=" + d.toUTCString() + ";path=/";
}

function exists() {
    let cook = getCookie("acc");
    if (cook === "") return 0;
    let nam = decodeURI(cook.split("@")[0]);
    let acc = sha1(nam);
    let pwd = cook.split("@")[1];
    for (let i = 0; i < num; ++i)
        if (acc === nameArray[i] && pwd === pwdArray[i])
            return 1;
    delCookie("acc");
    return 0;
}

function index() {
    if (exists()) {
        window.location.reload();
    } else {
        gAlert("用户名或密码错误！");
    }
}

function allowance() {
    let cook = getCookie("acc");
    if (cook === "") return 0;
    let nam = decodeURI(cook.split("@")[0]);
    let acc = sha1(nam);
    let i = 0;
    for (; i < num; ++i) {
        if (nameArray[i] === acc) break;
    }
    let tyn = tynArray[typArray[i]];
    let all = allArray[typArray[i]];
    gAlert("用户类别：" + tyn + "<br>生成餐区：" + all);
}

// sha1 Functions

function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        }
    ;
    return r;
}

// 字符串加密成 hex 字符串
function sha1(s) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
            function () {
                return m[1] & m[2] | ~m[1] & m[3];
            },
            function () {
                return m[1] ^ m[2] ^ m[3];
            },
            function () {
                return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
            },
            function () {
                return m[1] ^ m[2] ^ m[3];
            }
        ], rol = function (n, c) {
            return n << c | n >>> (32 - c);
        },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++) m[j] = m[j] + o[j] | 0;
    }
    ;
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}

// Date Functions

