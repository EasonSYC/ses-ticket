var choice = 0;
var on = 0;

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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">1区 自助餐</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 1)\">暂无权限</a>\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">2区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 2)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">3区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 3)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂一楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">4区 套餐A</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 4)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">5区 套餐B</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 5)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">6区 盖浇饭</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 6)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    有时扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">7区 套餐C</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 7)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">8区 面档</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 8)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-orange\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    有时扫描\n" +
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
        "                                            </li>\n",

        "                                            <li>\n" +
        "                                                <div class=\"row no-gutters\">\n" +
        "                                                    <div class=\"col-12\">\n" +
        "                                                        <div class=\"px-3\">\n" +
        "                                                            <b class=\"title\">9区 套餐C</b>\n" +
        "                                                            <a class=\"btn btn-sm btn-outline-secondary disabled\"\n" +
        "                                                               onclick=\"chooseType(Number, 9)\">暂无权限</a>\n" +
        "                                                            <br>\n" +
        "                                                            <small>\n" +
        "                                                                <span class=\"text-muted\">食堂二楼</span>\n" +
        "                                                            </small>\n" +
        "                                                            <div>\n" +
        "                                                                <i class=\"fa fa-exclamation-triangle icon-green\"></i>\n" +
        "                                                                <small class=\"mr-1\">\n" +
        "                                                                    不常扫描\n" +
        "                                                                </small>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </li>\n"
    ]
];

let choiceArray = [
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

function changeDate() {
    let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    let yr = parseInt(document.getElementById("year").value);
    let mon = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let d = new Date(yr + "/" + mon + "/" + day);
    let wkday = "周" + weekArray[d.getDay()];
    let date = document.getElementById("1");
    date.innerHTML = mon + "/" + day + "<br>" + wkday;
}

function showChoice() {
    let chc = document.getElementById("chc");
    if (on === 0) {
        let ret = "";
        for (let i = 1; i <= 9; ++i) {
            let j = 0;
            let cook = getCookie("acc");
            let nam2 = decodeURI(cook.split("@")[0]);
            for (; j < num; ++j) {
                if (nameArray[j] === sha1(nam2)) break;
            }
            if (allArray[typArray[j]].includes(i) === false) {
                ret += choicArray[i][2];
            }
            else {
                if (i === choice) {
                    ret += choicArray[i][1];
                } else {
                    ret += choicArray[i][0];
                }
            }
        }
        chc.innerHTML = ret;
        on = 1;
    } else {
        chc.innerHTML = "";
        on = 0;
    }
}

function updateLook(v) {
    let shc = document.getElementById("shc");
    shc.innerHTML = choiceArray[v];
    showChoice();
}

function chooseType(tp) {
    choice = tp;
    updateLook(tp);
}