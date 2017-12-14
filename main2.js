//Get modal element
$(document).ready(function(){
    $(document).ready(function(){
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
        // let playedAnswers = []
        let goodJob = function(){
            alert('such an adulty person')
        }
    
        let tryAgain = function(){
            alert('and you call yourself an adult?')
        }
        
        let showQuestion = function(id){
            $('body > #simpleModal').css('display', 'block')
            $('.modal-body > .question').text(answerQuestion[id].answer)
        }
        let clickCounter = 0
        $('.container > .questionBox').on('click', this,  function() {
            showQuestion(this.id)
            let id = this.id
            let questionAnswered = this
            $('.modal-content > button').on('click', this, function(){
                $('body > #simpleModal').css('display', 'none')
                if ($('.modal-content > input').text() === answerQuestion[id].question){
                    goodJob()
                    $(questionAnswered).css('background-color', 'green') 
                    $(questionAnswered).off()
                } else {
                    tryAgain()
                    $(questionAnswered).css('background-color', 'red') 
                    $(questionAnswered).off()
                }
           })
            // console.log(this.id) 
            // clickCounter += 1
            // console.log(clickCounter)
            // let userResponse = showQuestion(this.id)
            // if(userResponse === answerQuestion[this.id].question){
            //     goodJob()
            //     $(this).css('background-color', 'green') 
            //     $(this).off()
            // } else {
            //     tryAgain()
            //     $(this).css('background-color', 'red') 
            //     $(this).off()
    
            //     // playedAnswers.push(this)
            // }
            // let pointString = $(this).data('value')
            // let pointNum = parseInt(pointString)
            // let scoreString = $('.score > p').data('points')
            // let scoreNum = parseInt(scoreString)
            // console.log(scoreNum)
            // let scoreNumDisplay
            // if (userResponse === answerQuestion[this.id].question) {
            //     scoreNumDisplay = scoreNum + pointNum
            // } else {
            //  scoreNumDisplay = scoreNum - pointNum
            // }
            // $('.score > p').data('points', scoreNumDisplay)
            // $('.score > p').text(`Score: ${scoreNumDisplay}`)
            // if (clickCounter === 25){
            //     alert(`You have finished the game. Your score is ${scoreNumDisplay}. You must be an adult!`)
            // }
        })
    

    
    let modal = $('#simpleModal')
//Get open modal button
    let modalBtn = $('#modalBtn')
// Get close button
    let closeBtn = $('#closeBtn')
// Listen for click
    $('body > button').on('click', this, function(){
        //Opens modal
        $('body > #simpleModal').css('display', 'block')
        
    })
    $('div > .closeBtn').on('click', this, function(){
        //Listen for close click
        //Closes modal
        $('body > #simpleModal').css('display', 'none')
    })
    $('body > #simpleModal').on('click', this, function(){
        //Listen for outside of window click
        if (this === $('#simpleModal')){
        $('body > #simpleModal').css('display', 'none')
        }
    })

    let modalContent = $('.modal-content > input')
    let inputBox = $('<input>')
    $('div > .modal-content').append(inputBox)
    $('.modal-content > input').css('margin', '40px')
    $('.modal-content > input').css('height', '30px')
    $('.modal-content > input').css('width', '300px')
    $('.modal-content > input').css('font-size', '30px')
    $('.modal-content > input').css('border-radius', '4px')
    $('.modal-content > input').css('box-shadow', '0 2px 3px 0')

    let submitButton = $('<button>')
    $('div > .modal-content').append(submitButton)
    $('.modal-content > button').css('margin', '10px')
    $('.modal-content > button').css('height', '45px')
    $('.modal-content > button').css('width', '100px')
    $('.modal-content > button').css('font-size', '16px')
    $('.modal-content > button').css('marginBottom', '50px')
    $('.modal-content > button').css('border-radius', '10px')
    $('.modal-content > button').css('background-color', '#EB5757')
    $('.modal-content > button').css('box-shadow', '0 2px 3px 0')
    $('.modal-content > button').css('border-radius', '10px')

})
})