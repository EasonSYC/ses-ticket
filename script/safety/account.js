let num = 9;
let nameArray = [
    "d033e22ae348aeb5660fc2140aec35850c4da997",
    "a28079aa9ed5861504d0fde60544f715df764110",
    "fab60904d36306295b5d27dc1745a645482b2201",
    "032b83ec07d20c839f43b18b85ee2a71906cc524",
    "ca13078b652648bbb734212811a238bf6b835b0f",
    "a67a98a27ce25528db145277dde1a9eee29e9a46",
    "a7a12ba71f7ab5331cfffe1a0c1e12baa2661069",
    "ebf91f6760eef10753bed9bf00b46945f253a2e1",
    "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"];
let pwdArray = [
    "d033e22ae348aeb5660fc2140aec35850c4da997",
    "2e92ac4a17994f037461eb2b476415b11bab3319",
    "7e226f1ff2de32b0e5b998c7b462110c1a21ea4b",
    "c02e02219ecaef0bcdc95d447a6aa44b2d206e32",
    "b60964940dd43924f6b17ebad061f41caa117b32",
    "01c88f65f014d24283c2794a3de117cebe267d19",
    "7319be0502b21f03904b0b680e3c44a4ed266d14",
    "2f42c22ec0cc1e08f446a46c9fd2ea1bf204e8e1",
    "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"];
let typArray = [
    0,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    5];
let tynArray = [
    "根用户",
    "开发者",
    "内测",
    "SVIP",
    "VIP",
    "普通用户"];
let allArray = [
    "123456789",
    "123456789",
    "123456789",
    "123456789",
    "23456789",
    "234579"];

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

function exists() {
    let cook = getCookie("acc");
    if (cook === "") return 0;
    let nam = decodeURI(cook.split("@")[0]);
    let acc = sha1(nam);
    let pwd = cook.split("@")[1];
    for (let i = 0; i < num; ++i)
        if (acc === nameArray[i] && pwd === pwdArray[i])
            return 1;
    return 0;
}

function index() {
    if (exists()) {
        window.location.reload();
    } else {
        alert("用户名或密码错误！");
        window.location.reload();
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
    alert("用户类别：" + tyn + "\n生成餐区：" + all);
}