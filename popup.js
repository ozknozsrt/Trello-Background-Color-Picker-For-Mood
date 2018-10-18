$(function () {

    $('body').append(`<div class="box">
    <span class="title" style="padding-top:0">Flat Colors</span>
    <ul>
        <li><a href="#" id="Green">🤔<span>Undecided</span></a></li>
        <li><a href="#" id="Blue">😌<span>Stressful</span></a></li>
        <li><a href="#" id="Pink">😠<span>Nervous</span></a></li>
    </ul>
    <span class="title">Gradient Colors</span>
    <ul>
        <li><a href="#" id="Green2">🤔<span>Undecided</span></a></li>
        <li><a href="#" id="Blue2">😌<span>Stressful</span></a></li>
        <li><a href="#" id="Pink2">😠<span>Nervous</span></a></li>
    </ul>
</div>`);


    $('.header-user').prepend('<a class="header-btn js-bgchanger" href="#" style="text-align:center" title="Trello Background Changer">😄</a>');

    $('.js-bgchanger').click(function () {
        $('.box').toggle();
    });
    $(document).bind('click', function (e) {
        if ($(e.target).closest('.js-bgchanger').length == 0) {
            $('.box').hide();
        }
    });


    var Green = $('#Green').css('background-color');;
    var Blue = $('#Blue').css('background');
    var Pink = $('#Pink').css('background');
    var Green2 = $('#Green2').css('background');
    var Blue2 = $('#Blue2').css('background');
    var Pink2 = $('#Pink2').css('background');


    $('#Green').click(function () {
        $('#classic-body').css('background', Green);
    });

    $('#Blue').click(function () {
        $('#classic-body').css('background', Blue);
    });

    $('#Pink').click(function () {
        $('#classic-body').css('background', Pink);
    });

    $('#Green2').click(function () {
        $('#classic-body').css('background', Green2);
    });

    $('#Blue2').click(function () {
        $('#classic-body').css('background', Blue2);
    });

    $('#Pink2').click(function () {
        $('#classic-body').css('background', Pink2);
    });
});