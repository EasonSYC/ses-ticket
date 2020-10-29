var choice = 0;

function changeDate() {
    let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let d = new Date(yr + "/" + mon + "/" + day);
    let wkday = "周" + weekArray[d.getDay()];
    let date = document.getElementById("1");
    date.innerHTML = mon + "/" + day + "<br>" + wkday;
}

function chooseType(tp) {
    alert(tp);
    choice = tp;
}