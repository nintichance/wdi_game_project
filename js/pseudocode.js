$(document).ready(function () {
    alert("The DOM is ready! Yay!")
    let testVariable = $('.container > .q1').on('click', function () {
        let testAnswer = prompt("I am an adulty thing that has to do with stocks. I rhyme with iPhones")
        if (testAnswer === "dow jones") {
            alert("you are correct")
            $(this).css('background-color', 'green')

        } else {
            alert("sorry, you are not adult enough")
            $(this).css('background-color', 'red')
        }
    
 
 //UPDATE SCORE
    //if answer is correct
    //score += value of question
//DEDUCT FROM SCORE
    //if answer is incorrect
    //score -= value of question

//I need the value of the question's points
//Score is collected in a <p> in the div with 
//class of "score"
//add the value of the questions points to the 
//value of score

//POINT VALUE
$('.container > .q1').data('point-value', '100')
let pointString = $('.container > .q1').data('point-value')
let pointNum = parseInt(pointString)
$('.scoreContainer > .score').data('points', '0')
let scoreString = $('.scoreContainer > .score').data('points')
let scoreNum = parseInt(scoreString)
console.log(scoreNum)

//ADDING POINTS
if (testVariable.testAnswer === "dow jones"){
let scoreNumDisplay = scoreNum + pointNum
} else {
let scoreNumDisplay = scoreNum - pointNum
}

//SCORE THE USER SEES
let scoreView = $('<p>')
$('.scoreContainer > .score').append(scoreView)
scoreView.text(`Score: ${scoreNumDisplay}`)


//ONLY ADD POINTS IF ANSWER IS RIGHT

})

}) 
