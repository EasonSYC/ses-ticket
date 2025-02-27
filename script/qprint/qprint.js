let log = document.getElementById("submit");

log.onclick = function () {
    let username = document.getElementById("username").value;
    username = encodeURI(username);
    let password = document.getElementById("password").value;
    password = sha1(password);
    let d = new Date();
    d.setTime(d.getTime() + (5 * 60 * 1000));
    let expires = d.toUTCString();
    let cookie = "qprint=" + username + "@" + password + ";expires=" + expires + ";path=/qprint";
    document.cookie = cookie;
    if (qprintExists()) {
        window.location.reload();
    } else {
        gAlert("用户名或密码错误！");
    }
}