function single_jump() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        window.open("https://www.icloud.com/shortcuts/4fa7687bc26b408b9e1157b75b1e6866", "_blank");
    } else if (/android/.test(userAgent)) {
        window.open("https://cowtransfer.com/s/9f5ba5a3853240", "_blank");
    } else {
        window.open("generate/single.html", "_blank");
    }
}