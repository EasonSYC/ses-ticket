function cacheset() {
    var cacheClear = document.getElementById("cache").value;
    if (cacheClear < 1) gAlert("缓存清空时间过短，请重新设置！");
    if (cacheClear > 24) gAlert("缓存清空时间过长，请重新设置！");
    gAlert("缓存清空时间已设置为：" + cacheClear + "小时");
}