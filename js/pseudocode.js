// // //  //UPDATE SCORE
// // //     //if answer is correct
// // //     //score += value of question
// // // //DEDUCT FROM SCORE
// // //     //if answer is incorrect
// // //     //score -= value of question

// // // //I need the value of the question's points
// // // //Score is collected in a <p> in the div with 
// // // //class of "score"
// // // //add the value of the questions points to the 
// // // //value of score

// // //POINT VALUE
// // $('.container > .q1').on('click', function () {
// //     let testAnswer = prompt("I am an adulty thing that has to do with stocks. I rhyme with iPhones")
// //     if (testAnswer === "dow jones") {
// //         alert("you are correct")
// //         $(this).css('background-color', 'green')

// //     } else {
// //         alert("sorry, you are not adult enough")
// //         $(this).css('background-color', 'red')
// //     }

// // $('.container > .q1').data('point-value', '100')
// // let pointString = $('.container > .q1').data('point-value')
// // let pointNum = parseInt(pointString)
// // $('.scoreContainer > .score').data('points', '0')
// // let scoreString = $('.scoreContainer > .score').data('points')
// // let scoreNum = parseInt(scoreString)
// // console.log(scoreNum)

// // let scoreNumDisplay;
// // //ADDING POINTS
// // if (testAnswer === "dow jones"){
// //  scoreNumDisplay = scoreNum + pointNum
// // } else {
// //  scoreNumDisplay = scoreNum - pointNum
// // }

// // //SCORE THE USER SEES
// // let scoreView = $('<p>')
// // $('.scoreContainer > .score').append(scoreView)
// // scoreView.text(`Score: ${scoreNumDisplay}`)
// // })


// // // //ONLY ADD POINTS IF ANSWER IS RIGHT


$(document).ready(function () {
//     alert("The DOM is ready! Yay!")
//     // let hoverOnDiv = $('.container > .q1').on('hover', function (){
//     //     $('.container > .q1').css('background-color', 'orange')
//     // })


    let answersArray = []
    let questionsArray = []
    
    const answerQuestion = [
        {
            answer:'When I need to iron my pants with a nice firm crease ready to impress all of my business peers, I use this ironing thingy.A. What is that stuff that comes in a spray bottle. I think its called starch.',
            question: "A."
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        },
        {
            answer: 'answer',
            question: 'question'
        }
    ]
//     console.log('WE DID IT!', answerQuestion[0].answer)

//     for (let i = 0; i < answerQuestion.length; i++) {
//         answersArray.push(answerQuestion[i].answer)
//         questionsArray.push(answerQuestion[i].question)
//     }

//     console.log(`IM HERE NOW. answer ${answersArray[0]} and question ${questionsArray[0]}`)

    // for (let i = 1; i < 26; i++){
    //     console.log(`NOW. HERE. THIS. answer ${answersArray[0]} and question ${questionsArray[0]}`)
        
    //     $(`.container > q${i}`).on('click', function(){
    //         console.log(`Um.... answer ${answersArray[0]} and question ${questionsArray[0]}`)
            
    //         let userAnswer = prompt(answerQuestion[i-1].answer)
    //         if (userAnswer === answerQuestion[i-1].question){
    //             alert('such a legit adulty person')
    //             $(this).css('background-color', 'green')
    //         } else {
    //             alert('and you call yourself an adult?')
    //             $(this).css('background-color', 'red')
    //         }
    //     })
//     // }

    let clickCounter = 0
    // let playedAnswers = []
    $('.container > .questionBox').on('click', this,  function() {
        console.log(this.id) 
        clickCounter += 1
        console.log(clickCounter)
        let userResponse = prompt(answerQuestion[this.id].answer)
        if(userResponse === answerQuestion[this.id].question){
            alert('such a legit adulty person')
            $(this).css('background-color', 'green')
            // playedAnswers.push(this)
        } else {
            alert('and you call yourself an adult?')
            $(this).css('background-color', 'red') 
            // playedAnswers.push(this)
        }
        // console.log(playedAnswers.length)
        // console.log(playedAnswers)
        // console.log($(this).data('value'))
        // let pointString = $(this.data('value')
        // let pointNum = parseInt(pointString)
        // $('.scoreContainer > .score').data('points', '0')
        // let scoreString = $('.scoreContainer > .score').data('points')
        // let scoreNum = parseInt(scoreString)
        // console.log(scoreNum)

        let pointString = $(this).data('value')
        let pointNum = parseInt(pointString)
        let scoreString = $('.score > p').data('points')
        let scoreNum = parseInt(scoreString)
        console.log(scoreNum)

        let scoreNumDisplay
        if (userResponse === answerQuestion[this.id].question) {
            scoreNumDisplay = scoreNum + pointNum
        } else {
         scoreNumDisplay = scoreNum - pointNum
        }
        $('.score > p').data('points', scoreNumDisplay)
        $('.score > p').text(`Score: ${scoreNumDisplay}`)
        if (clickCounter === 25){
            alert(`You have finished the game. Your score is ${scoreNumDisplay}. You must be an adult!`)
        }
    })
    let notPlayable = function (){
        if ($('.container > .questionBox').css('background-color')=== 'green' || $('.container > .questionBox').css('background-color')=== 'red'){
            $(this).remove('questionBox')
        }
    }
})

//On the 25th click, this is the last condition... Interesting, sounds like an end condition to me...
//Make a collection of clicks on the mouse Path2D. Check to see if the progrss bar is full
//Make a variable called counter. For every click add one to the counter. When the counter is 25, the game is over.
// console.log($('.container > #0').data('value'))
// let pointString = $('.container > .q1').data('point-value')
// let pointNum = parseInt(pointString)
// $('.scoreContainer > .score').data('points', '0')
// let scoreString = $('.scoreContainer > .score').data('points')
// let scoreNum = parseInt(scoreString)
// console.log(scoreNum)

// // let scoreNumDisplay;
// // //ADDING POINTS
// // if (testAnswer === "dow jones"){
//  scoreNumDisplay = scoreNum + pointNum
// } else {
//  scoreNumDisplay = scoreNum - pointNum
// }

// // //SCORE THE USER SEES
// // let scoreView = $('<p>')
// // $('.scoreContainer > .score').append(scoreView)
// // scoreView.text(`Score: ${scoreNumDisplay}`)
// // })




// // let divClass = function(){
// //     let qArray = []
// //     for (let i = 0; i < 25; i++){
// //         qArray.push(i)
// //     } 
// //     let qValue = `q${q[i]}`
// //     return qValue
// // }





// // // 

// //ASSIGN QUESTIONS TO EACH POINT DIV

// //questions to ask
// //Is there a way to specifically assign a question to a particular DOM element?
// //I

// //ASSIGN DATA VALUES TO EACH POINT DIV