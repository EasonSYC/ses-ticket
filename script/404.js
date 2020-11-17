let but = document.getElementById("but");

if (document.referrer === '') {
    but.innerHTML = before + home + after;
} else {
    but.innerHTML = before + back + after;
}
document.getElementById("egg").innerHTML = eggs[Math.floor(Math.random() * eggs.length + 1)];