function single_jump() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        window.open("https://www.icloud.com/shortcuts/f18fe1dce03d4cd1a8ba38e44548bc85", "_blank");
    } else if (/android/.test(userAgent)) {
        window.open("https://cowtransfer.com/s/1b9c4a5bc4ad4c", "_blank");
    } else {
        window.open("generate/single.html", "_blank");
    }
}