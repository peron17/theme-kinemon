var btnToggle = $("#btn-toggle");
var btnSearch = $("#search");

btnToggle.click(function () {
    $(this).toggleClass("on");

    if (btnSearch.hasClass("on")) {
        btnSearch.removeClass("on");
    }
});

btnSearch.click(function () {
    $(this).toggleClass("on");

    if (btnToggle.hasClass("on")) {
        btnToggle.removeClass("on");
    }
});
