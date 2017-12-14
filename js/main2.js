$(document).ready(function(){
    console.log('READY')
    $('body > p').addClass('animated bounce');


    $('header > #instructions').on('click', this, function(){
        
        $('body > #simpleModal').css('display', 'block')
    })

    $('div > .closeBtn').on('click', this, function(){

        $('body > #simpleModal').css('display', 'none')
    })

})