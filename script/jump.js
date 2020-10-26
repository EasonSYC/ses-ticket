function single_jump() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        window.open("https://www.icloud.com/shortcuts/ba04b04dc72049da9c83585581eba8d8", "_blank");
    } else if (/android/.test(userAgent)) {
        window.open("https://cowtransfer.com/s/9f5ba5a3853240", "_blank");
    } else {
        window.open("generate/single.html", "_blank");
    }
}