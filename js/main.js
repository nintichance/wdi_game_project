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
    let clickCounter = 0
    $('.container > .questionBox').on('click', this,  function() {
        console.log(this.id) 
        clickCounter += 1
        console.log(clickCounter)
        let userResponse = prompt(answerQuestion[this.id].answer)
        if(userResponse === answerQuestion[this.id].question){
            alert('such a legit adulty person')
            $(this).css('background-color', 'green')
        } else {
            alert('and you call yourself an adult?')
            $(this).css('background-color', 'red') 
        }
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
})
