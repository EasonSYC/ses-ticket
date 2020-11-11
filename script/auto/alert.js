function alert(txt){
    document.getElementById("gAlertMsg").innerHTML = txt;
    document.getElementById("gAlertModal").classList.add("show");
    document.getElementById("gAlertBack").classList.add("show");
}

document.getElementById("gAlertButton").onclick = function(){
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
}

document.getElementById("gAlertBack").onclick = function(){
    document.getElementById("gAlertModal").classList.remove("show");
    document.getElementById("gAlertBack").classList.remove("show");
}

/*

code needed to be added before-hand

<div id="gAlertModal" class="modal fade global-alert" style="display: block;">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <button id="gAlertButton" type="button" class="close float-right">
                <span aria-hidden="true">×</span>
            </button>
            <div id="gAlertMsg" class="text-center font-weight-bold">您本周没有预订</div>
        </div>
    </div>
</div>

<div id="gAlertBack" class="modal-backdrop fade"></div>

*/