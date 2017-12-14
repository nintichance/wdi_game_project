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


    // let answersArray = []
    // let questionsArray = []
    
    const answerQuestion = [
        {
            answer: "The vanishing of this adorable child catalyzed the major plot of Stranger Things.",
            question: "Who is Will Byers?"
        },
        {
            answer: "This alternate dimension parallels our own. The kids refer to it by this name.",
            question: "What is the Upside Down?"
        },
        {
            answer: "This fantastical monster kills Will's wizard in Mike's D&D campaign. It shares its name cleverly with this series nonhuman protagonist.",
            question: "What is the demogorgon?"
        },
        {
            answer: "The city and state in which they live.",
            question: "What is Hawkins, Indiana?"
        },
        {
            answer: "Dustin punnily renames the hive-minded monsters of the Upside Down, reminding the audience of Doug Dimmadome, the owner of the Dimsdale Dimmadome.",
            question: "What are demodogs?"
        },
        {
            answer: "She's Bojack's agent and long-time girlfriend",
            question: "Who is Princess Carolyn?"
        },
        {
            answer: "The most adulty person in the series, despite being three children stacked on each other's shoulders in a trenchcoat",
            question: "Who is Vincent Adultman?"
        },
        {
            answer: "Diane's ringtone consistely features pre-recorded ringtones from this radio station",
            question: "What is NPR?"
        },
        {
            answer: "Back in the 90's Bojack starred in this very famous TV show.",
            question: "What is Horsin' Around?"
        },
        {
            answer: "This sexy aquatic mammal took Sarah Lynn's place as America's idol",
            question: "Who is Sextina Aquafina?"
        },
        {
            answer: "The composer of the theme song for Steven Universe in the Steven Universe universe",
            question: "Who is Steven Universe?"
        },
        {
            answer: "This fusion came as a surprise to viewers. They are also beloved by the irredeemable, fashionable Kevin",
            question: "Who is Stevonnie?"
        },
        {
            answer: "Steven, the Crystal gems, and all of Steven's friends live here",
            question: "What is Beach City?"
        },
        {
            answer: "This character runs an online campaign to 'Keep Beach City Weird.'",
            question: "Who is Ronoldo?"
        },
        {
            answer: "Onion's mother",
            question: "Who is Vidalia?"
        },
        {
            answer: "This adorable character wears bunny ears everyday.",
            question: "Who is Louise?"
        },
        {
            answer: "He doesn't only voice our beloved Bob from Bob's Burgers, but also Archer",
            question: "Who is H. Jon Benjamin?"
        },
        {
            answer: "On the latest Thanksgiving special, the audience discovers, unsurprisingly, that this character is a horder due to childhood trauma",
            question: "Who is Teddy?"
        },
        {
            answer: "Gene Belcher dresses as this amalgamation of mythical creature and foot item.",
            question: "Who is Beefsquatch?"
        },
        {
            answer: "Complete this sentence: I've logged over _____ fantasy hours on my relationship with Jimmy Jr. You don't just throw that away.",
            question: "What is 3000?"
        },
        {
            answer: "The lead character with a talent for words.",
            question: "Who is Ezekiel Figuero?"
        },
        {
            answer: "Finish this sentence: 'Mylene, Mylene, my_____'",
            question: "What is butterscotch queen?"
        },
        {
            answer: "This item was given to Shaolin by his mentor as a hint into becoming a master DJ.",
            question: "What is a purple crayon?"
        },
        {
            answer: "Zeke is accepted into this Ivy League college, but his plans of attendance of thwarted by his best friend, Shaolin.",
            question: "What is Yale?"
        },
        {
            answer: "This rapper heavily influences the acting and art of the show",
            question: "Who is Nas?"
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
    let goodJob = function(){
        alert('such an adulty person')
    }

    let tryAgain = function(){
        alert('and you call yourself an adult?')
    }
    
    let showQuestion = function(id){
    return prompt(answerQuestion[id].answer)
    }
//read answer function that looks up the id of that box.
//when the modul shows up showModal function is going to display the inpout box and then run the rest of the code that decides if the answer is right or not
//clicking out of the modal checks to see if your question is right or wrong
//The below line of code will go into the modul's submit click event
// if(userResponse === answerQuestion[this.id].question){
//     goodJob()
//     $(this).css('background-color', 'green') 
//     $(this).off()
// } else {
//     tryAgain()
//     $(this).css('background-color', 'red') 
//     $(this).off()
// Modul's .text() must be answerQuestion[this.id] which I will call
// in the click event
// modul must have an input box with that will compare

let inputBox = $('<input>')
$('body > #simpleModal').append(inputBox)

// let userResponse = inputBox.text()

// if (userResponse === answerQuestion[i].question){
//     //do the things
// }

// $(this).text(answerQuestion[i].answer)




    $('.container > .questionBox').on('click', this,  function() {
        console.log(this.id) 
        clickCounter += 1
        console.log(clickCounter)
        let userResponse = showQuestion(this.id)
        if(userResponse === answerQuestion[this.id].question){
            goodJob()
            $(this).css('background-color', 'green') 
            $(this).off()
        } else {
            tryAgain()
            $(this).css('background-color', 'red') 
            $(this).off()

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

// $('.container').prepend('<div>')
// $('.container').first().addClass('aestheticOnly')
// $('.container > .aestheticOnly').css('background-color', 'green')
// $('.container > .aestheticOnly').css('border-radius', '4px')
// $('.container > .aestheticOnly').css('width', '95px')
// $('.container > .aestheticOnly').css('height', '45px')
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