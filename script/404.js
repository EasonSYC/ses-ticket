let but = document.getElementById("but");

if (document.referrer === '') {
    but.innerHTML = before + home + after;
} else {
    but.innerHTML = before + back + after;
}

document.getElementById("error-prompt").innerHTML = eggs[Math.floor(Math.random() * eggs.length + 1)];