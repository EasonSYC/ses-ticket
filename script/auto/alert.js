function noLogin(source) {
    gAlert("您还没有登录！");
    setTimeout(function () {
        window.location.replace("/login.html?ref=" + source);
    }, 3000);
}

function gAlert(txt) {
    document.getElementById("gAlertModal").style.display = "block";
    document.getElementById("gAlertBack").style.display = "block";
    document.getElementById("gAlertMsg").innerHTML = txt;
    document.getElementById("gAlertModal").classList.add("show");
    document.getElementById("gAlertBack").classList.add("show");
}

document.getElementById("gAlertButton").onclick = function () {
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
    document.getElementById("gAlertModal").style.display = "none";
    document.getElementById("gAlertBack").style.display = "none";

    doSomething(userfunction);
}

document.getElementById("gAlertBack").onclick = function(){
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
    document.getElementById("gAlertModal").style.display = "none";
    document.getElementById("gAlertBack").style.display = "none";
}

/*

code needed to be added before-hand

<div id="gAlertModal" class="modal fade global-alert" style="display: none;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <button id="gAlertButton" type="button" class="close float-right">
                <span aria-hidden="true">×</span>
            </button>
            <div id="gAlertMsg" class="text-center font-weight-bold"></div>
        </div>
    </div>
</div>

<div id="gAlertBack" class="modal-backdrop fade" style="display: none;"></div>

*/