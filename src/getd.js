let today = new Date();
let tomonth = today.getMonth() + 1;
let todate = today.getDate();
let InpM = document.getElementById(month);
let InpD = document.getElementById(date);
InpM.value = tomonth;
InpD.value = todate;