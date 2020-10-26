function single_jump() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        window.open("https://www.icloud.com/shortcuts/f45977a24a74441997606c89398b8993", "_blank");
    } else if (/android/.test(userAgent)) {
        window.open("https://cowtransfer.com/s/9f5ba5a3853240", "_blank");
    } else {
        window.open("generate/single.html", "_blank");
    }
}