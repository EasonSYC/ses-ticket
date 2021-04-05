function qprintNoLogin() {
    window.location.replace("/sesticket/qprint/qprint.html");
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