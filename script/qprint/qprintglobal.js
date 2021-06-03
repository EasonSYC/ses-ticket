function qprintNoLogin() {
    window.location.replace("./qprint.html");
}

function delQprintCookie() {
    let d = new Date();
    d.setTime(d.getTime() - 1);
    let c = getCookie("qprint");
    document.cookie = "qprint" + "=" + c + ";expires=" + d.toUTCString() + ";path=/sesticket/qprint";
}

function getQprintName() {
    return (getCookie("qprint") === "") ? "-1" : decodeURI(getCookie("qprint").split("@")[0]);
}

function getQprintPwd() {
    return getCookie("qprint").split("@")[1];
}

function qprintExists() {
    let nam = getQprintName();
    if (nam === "-1") {
        delCookie("qprint");
        return 0;
    }
    let pwd = getQprintPwd();
    let trupwd = getUserInfo("name", nam, "pwd");
    if (trupwd === "-1") {
        delCookie("qprint");
        return 0;
    }
    if (pwd === trupwd) return 1;
    delCookie("qprint");
    return 0;
}