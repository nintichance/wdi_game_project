$(document).ready(function () {
    alert("The DOM is ready! Yay!")
    $('.container > .q1').on('click', function () {
        let testAnswer = prompt("I am an adulty thing that has to do with stocks. I rhyme with iPhones")
        if (testAnswer === "dow jones") {
            alert("you are correct")
            $(this).css('background-color', 'green')

        } else {
            alert("sorry, you are not adult enough")
            $(this).css('background-color', 'red')
        }
    })
    $('.container > .q1').data('point-value', '100')
    let pointString = $('.container > .q1').data('point-value')
    let pointNum = parseInt(pointString)
    $('.scoreContainer > .score').data('points', '0')
    let scoreString = $('.scoreContainer > .score').data('points')
    let scoreNum = parseInt(scoreString)
    console.log(scoreNum)
})