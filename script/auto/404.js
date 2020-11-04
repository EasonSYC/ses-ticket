let but = document.getElementById("g-but");
if (document.referrer === "" || document.referrer === undefined || document.referrer === null) {
    but.innerHTML = "首页";
    but.href = "/";
    but.onclick = "";
} else {
    but.innerHTML = "返回";
    but.href = "";
    but.onclick = "history.back(-1)";
}

let eggs = ["随机数的范围不包括这串字符，你是怎么让它显示出来的？",
    "别让食堂阿姨用扫票机扫你的餐票……",
    "知道吗，这个项目最早从九月底就开始编写了……",
    "“你今天是真的8区吗？”",
    "不要尝试生成几千年的餐票，这会让你的电脑卡住！",
    "输错网址了，憨批！",
    "如果你点了网站里的一个按钮来到这里，请向我们报告！",
    "找啊找，找啊找，找到一个404",
    "(0,0)",
    "页面建设中……"];
document.getElementById("egg").innerHTML = eggs[Math.floor(Math.random() * eggs.length + 1)];