let syr = document.getElementById("syear");
let smo = document.getElementById("smonth");
let sdt = document.getElementById("sday");
let eyr = document.getElementById("eyear");
let emo = document.getElementById("emonth");
let edt = document.getElementById("eday");

let arr = getWk();

syr.value = arr.syr;
smo.value = arr.smo;
sdt.value = arr.sda;

eyr.value = arr.eyr;
emo.value = arr.emo;
edt.value = arr.eda;