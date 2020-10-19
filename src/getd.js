function getdate(type) {
    let today = new Date();
    let tomonth = today.getMonth() + 1;
    let todate = today.getDate();
    if (type === 0) return tomonth;
    if (type === 1) return todate;
}