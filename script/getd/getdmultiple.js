let to = new Date();
let toyear = to.getFullYear();
let tomonth = to.getMonth() + 1;
let todate = to.getDate();
let today = to.getDay();
let syr = document.getElementById("syear");
let smo = document.getElementById("smonth");
let sdt = document.getElementById("sday");
let eyr = document.getElementById("eyear");
let emo = document.getElementById("emonth");
let edt = document.getElementById("eday");

let s = to;
for (; s.getDay() !== 1; s.setDate(s.getDate() + 1)) ;

let e = new Date(s);
e.setDate(e.getDate() + 4);

syr.value = s.getFullYear();
smo.value = s.getMonth() + 1;
sdt.value = s.getDate();

eyr.value = e.getFullYear();
emo.value = e.getMonth() + 1;
edt.value = e.getDate();