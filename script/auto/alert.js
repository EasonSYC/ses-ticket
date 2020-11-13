function noLogin(source) {
    window.location.replace("/login.html?ref=" + source);
}

function gAlert(txt) {
    document.getElementById("gAlertModal").style.display = "block";
    document.getElementById("gAlertBack").style.display = "block";
    document.getElementById("gAlertMsg").innerHTML = txt;
    setTimeout(function(){
        document.getElementById("gAlertModal").classList.add("show");
        document.getElementById("gAlertBack").classList.add("show");},10);
}

function gAlertClose(){
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
    setTimeout(function(){
        document.getElementById("gAlertModal").style.display = "none";
        document.getElementById("gAlertBack").style.display = "none";},160);
}

document.getElementById("gAlertButton").onclick = gAlertClose();
document.getElementById("gAlertModal").onclick = gAlertClose();

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