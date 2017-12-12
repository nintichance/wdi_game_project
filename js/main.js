$(document).ready(function(){
    alert("The DOM is ready! Yay!")
    $('.container > .q1').on('click', function(){
        let testAnswer = prompt("I am an adulty thing that has to do with stocks. I rhyme with iPhones")
        if (testAnswer === "dow jones"){
            alert("you are correct")
            $(this).css('background-color', 'green')
        }
        })
    
})