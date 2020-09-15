

$('body').on('click', '.icon-sym', function () {
    var x = $('#nav').attr('class');
    if (x === "nav-bar") {
        $(this).parent().removeClass('nav-bar');
        $(this).parent().addClass('res-bar');
    }
    else {
        if (x === "res-bar") {
            $(this).parent().removeClass('res-bar');
            $(this).parent().addClass('nav-bar');
        }
    }
});