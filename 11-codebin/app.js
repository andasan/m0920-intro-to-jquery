$('.toggleButton').on('mouseenter', function(){
    // $(this).css('background-color', 'grey')
    $(this).addClass('highlightedButton')
}).on('mouseleave', function(){
    // $(this).css('background-color', '#EEE')
    $(this).removeClass('highlightedButton')
}).on('click', function(){
    $(this).toggleClass('active')
    $(this).removeClass('highlightedButton')

    let panelId = $(this).attr('id') + 'Panel'
    $('#' + panelId).toggleClass('hidden')

    let numberofActivePanels = 4 - $('.hidden').length
    $('.panel').width($(window).width() / numberofActivePanels)
})

$('.panel').height($(window).height() - $('#header').height() - 15)
$('.panel').width($(window).width() / 2)

$('iframe').contents().find('html').html('BYE')

$('div').val('BYE')

$('textarea').on('change keyup paste', function(){
    $('iframe').contents().find('html').html(`
        <html>
        <head>
        <style type="text/css">
        ${$('#cssPanel').val()}
        </style>
        </head>
        <body>
        ${$('#htmlPanel').val()}
        </body>
        </html>
    `)
})