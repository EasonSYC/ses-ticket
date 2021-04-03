let log = document.getElementById("submit");
log.onclick = function () {
    let username = document.getElementById("username").value;
    username = encodeURI(username);
    let password = document.getElementById("password").value;
    password = sha1(password);
    setCache(0, 0);
    let expdate = getCache();
    let d = new Date();
    let timeline = d.getTime();
    d.setTime(d.getTime() + (expdate * 24 * 60 * 60 * 1000));
    let expires = d.toUTCString();
    let cookie = "acc=" + username + "@" + password + "@" + timeline + ";expires=" + expires + ";path=/";
    document.cookie = cookie;
    index();
}