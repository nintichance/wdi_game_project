
$(document).ready(function () {
    alert("The DOM is ready! Yay!")
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
    console.log('WE DID IT!', answerQuestion[0].answer)

    for (let i = 0; i < answerQuestion.length; i++) {
        answersArray.push(answerQuestion[i].answer)
        questionsArray.push(answerQuestion[i].question)
    }

    console.log(`IM HERE NOW. answer ${answersArray[0]} and question ${questionsArray[0]}`)

    $('.container > .questionBox').on('click', this,  function() {
        console.log(this.id) 
        let userResponse = prompt(answerQuestion[this.id].answer)
        if(userResponse === answerQuestion[this.id].question){
            alert('such a legit adulty person')
            $(this).css('background-color', 'green')
        } else {
            alert('and you call yourself an adult?')
            $(this).css('background-color', 'red') 
        }
    })








})

