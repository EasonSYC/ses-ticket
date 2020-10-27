function exists() {
    let cookie = document.cookie.split(";")[0].split("=")[1];
    let acc = sha1(decodeURI(cookie.split("@")[0]));
    let pwd = cookie.split("@")[1];
    let num = 5;
    let nameArray = [
        "d033e22ae348aeb5660fc2140aec35850c4da997",
        "a28079aa9ed5861504d0fde60544f715df764110",
        "fab60904d36306295b5d27dc1745a645482b2201",
        "032b83ec07d20c839f43b18b85ee2a71906cc524",
        "ca13078b652648bbb734212811a238bf6b835b0f"];
    let pwdArray = [
        "d033e22ae348aeb5660fc2140aec35850c4da997",
        "2e92ac4a17994f037461eb2b476415b11bab3319",
        "7e226f1ff2de32b0e5b998c7b462110c1a21ea4b",
        "c02e02219ecaef0bcdc95d447a6aa44b2d206e32",
        "b60964940dd43924f6b17ebad061f41caa117b32"];
    for (let i = 0; i < num; ++i)
        if (acc === nameArray[i] && pwd === pwdArray[i])
            return 1;
    return 0;
}

function index() {
    if (exists()) {
        window.open("./index.html");
    } else {
        alert("用户名或密码错误！");
        window.location.reload();
    }
}