let but = document.getElementById("but");

if (document.referrer === '') {
    but.innerHTML = before + home + after;
} else {
    but.innerHTML = before + back + after;
}

let errorIdGet = document.location.href.split("#")[1];
let i;
for(i = 0; i < errorId.length; ++i){
    if(errorId[i] === errorIdGet) break;
}
document.getElementById("error-prompt").innerHTML = errorPrompt[i];
document.getElementById("error-typ").innerHTML = errorId[i];