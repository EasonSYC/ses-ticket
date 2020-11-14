var choice = [];
var on = [];

let weekArray = ["日", "一", "二", "三", "四", "五", "六"];

let moc = [
    "                                                            <div class=\"text-muted text-center mt-4\">点击这里选餐</div>",
    "                                                            <b class=\"title\">1区 自助餐</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-red\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    经常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">2区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">3区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">4区 套餐A</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">5区 套餐B</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">6区 盖浇饭</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    有时扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">7区 套餐C</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">8区 面档</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    有时扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>",
    "                                                            <b class=\"title\">9区 套餐B</b>\n" +
    "                                                            <span class=\"float-right\">\n" +
    "                                                                <span class=\"badge badge-orange\">\n" +
    "                                                                    已选餐\n" +
    "                                                                </span>\n" +
    "                                                            </span>\n" +
    "                                                            <br>\n" +
    "                                                            <small>\n" +
    "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
    "                                                            </small>\n" +
    "                                                            <div>\n" +
    "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
    "                                                                <small class=\"mr-1\">\n" +
    "                                                                    不常扫描\n" +
    "                                                                </small>\n" +
    "                                                            </div>"
];

let clook =
    "                               <ul class=\"supply-date-list px-3\">\n" +
    "                                    <li class=\"py-2\">\n" +
    "                                        <div class=\"row no-gutters\" onclick=\"showChoice(Number)\">\n" +
    "                                            <div class=\"col-3\">\n" +
    "                                                <div class=\"date-icon\">\n" +
    "                                                   DateNow" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"col-9\">\n" +
    "                                                <div class=\"row no-gutters\">\n" +
    "                                                    <div class=\"col-12\">\n" +
    "                                                        <div class=\"px-3\" id=\"shc\">\n" +
    "                                                            ChoiceNow" +
    "                                                        </div>\n" +
    "                                                    </div>\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <ul class=\"supply-list shadow-sm\" id=\"chcNumber\">\n" +
    "                                             \n" +
    "                                        </ul>\n" +
    "                                    </li>\n" +
    "                                </ul>";

let agr =
    "<div class=\"mt-3 text-center\">\n" +
    "                                    <label>\n" +
    "                                        <input id=\"agree\" style=\"width: auto\" type=\"checkbox\">\n" +
    "                                    </label>\n" +
    "                                    我已阅读并同意\n" +
    "                                    <a href=\"../policy.html\">用户协议</a>\n" +
    "                                    。\n" +
    "                                </div>";

let choicArray = ["",
    [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">1区 自助餐</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 1)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-red\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    经常扫描\n" +
        "                                                                </small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">1区 自助餐</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 1)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-red\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    经常扫描\n" +
        "                                                                </small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">2区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 2)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">2区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 2)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">3区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 3)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">3区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 3)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">4区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 4)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">4区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 4)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">5区 套餐B</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 5)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">5区 套餐B</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 5)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">6区 盖浇饭</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 6)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">有时扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",


        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">6区 盖浇饭</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 6)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">有时扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">7区 套餐C</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 7)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">7区 套餐C</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 7)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">8区 面档</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 8)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">有时扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">8区 面档</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 8)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">有时扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ], [
        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">9区 套餐B</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary\"\n" +
        "                                                               onclick=\"chooseType(Number, 9)\">选餐</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>",


        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">9区 套餐B</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-orange\"\n" +
        "                                                               onclick=\"chooseType(Number, 9)\">已选择</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">不常扫描</small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ]
];

function changeDate() {
    let res = "";

    let syear = parseInt(document.getElementById("syear").value);
    let smon = parseInt(document.getElementById("smonth").value);
    let sday = parseInt(document.getElementById("sday").value);
    let eyear = parseInt(document.getElementById("eyear").value);
    let emon = parseInt(document.getElementById("emonth").value);
    let eday = parseInt(document.getElementById("eday").value);
    let sdate = new Date(syear + "/" + smon + "/" + sday);
    let edate = new Date(eyear + "/" + emon + "/" + eday);
    let len = (edate - sdate) / 86400000 + 1;
    for (let d = sdate, i = 0; i < len; ++i, d.setDate(d.getDate() + 1)) {

        let dmo = d.getMonth() + 1;
        let ddy = d.getDate();
        let dda = d.getDay();

        let choose = choice[i];

        if (choose !== 1 &&
            choose !== 2 &&
            choose !== 3 &&
            choose !== 4 &&
            choose !== 5 &&
            choose !== 6 &&
            choose !== 7 &&
            choose !== 8 &&
            choose !== 9) {
            choice[i] = choose = 0;
        }

        res += clook;

        res = res.replace(/Number/g, i);
        res = res.replace("DateNow", dmo + "/" + ddy + "<br>" + "周" + weekArray[dda]);
        res = res.replace("ChoiceNow", moc[choose]);
    }

    res += agr;

    document.getElementById("chs").innerHTML = res;
}

function chooseType(a, b) {
    choice[a] = b;
    changeDate();
    showChoice(a);
}

function showChoice(a) {
    let chc = document.getElementById("chc" + a);
    if (on[a] === 0 || on[a] === undefined) {
        let ret = "";
        for (let i = 1; i <= 9; ++i) {
            let j = 0;
            let cook = getCookie("acc");
            let nam2 = decodeURI(cook.split("@")[0]);
            for (; j < num; ++j) {
                if (nameArray[j] === sha1(nam2)) break;
            }
            if (allArray[typArray[j]].includes(i) === false) continue;
            if (i === choice[a]) {
                ret += choicArray[i][1];
            } else {
                ret += choicArray[i][0];
            }
        }
        ret = ret.replace(/Number/g, a);
        chc.innerHTML = ret;
        on[a] = 1;
    } else {
        chc.innerHTML = "";
        on[a] = 0;
    }
}