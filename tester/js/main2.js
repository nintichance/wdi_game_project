//Get modal element
    $(document).ready(function(){
        const answerQuestion = [
            {
                answer:'When I need to iron my pants with a nice firm'+
                    'crease ready to impress all of my business peers, I use this ironing thingy.A. What is that stuff that comes in a spray bottle. I think its called starch.',
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
        let score = 0
        let clickCounter = 0
        $('.container > .questionBox').on('click', this,  function() {
            clickCounter += 1
            let id = this.id
            showQuestion(id)
            let questionAnswered = this
            //when I create the modul, add a data value that corresponds with the id
            //you pass the event.target , then get a jquery object that looks ike it. how do i get a data attribute with jquery
            $('.modal-content > button').on('click', this, function(){
                $('body > #simpleModal').css('display', 'none')
                let pointString = $(questionAnswered).data('value')
                let pointNum = parseInt(pointString)
                
        
                if ($('.modal-content > input').val() === answerQuestion[id].question){
                    goodJob()
                    $(questionAnswered).css('background-color', 'green') 
                    $(questionAnswered).off()
                    score += pointNum
                } else {
                    tryAgain()
                    $(questionAnswered).css('background-color', 'red') 
                    $(questionAnswered).off()
                    score -= pointNum
                }
                // $('.modal-content > input').val() = ""
                // $('.score > p').data('points', score)
                $('.score > p').text(`Score: ${score}`)
                if (clickCounter === 25){
                    alert(`You have finished the game. Your score is ${score}. You must be an adult!`)
                }
                console.log(clickCounter)
                
                console.log(pointNum)
                
            })
            })
          //clear modal
          //$('.modal-content > input')
          //$('.modal-body > .question').text(answerQuestion[id].answer)
           
           
            // let pointString = $(questionAnswered).data('value')
            // let pointNum = parseInt(pointString)
            // let scoreString = $('.score > p').data('points')
            // let scoreNum = parseInt(scoreString)
            // let scoreNumDisplay
                //We've already done this in the exit button's event listener, so bring this up
        //    if ($('.modal-content > input').val() === answerQuestion[id].question){
        //         scoreNumDisplay = scoreNum + pointNum
        //     } else {
        //      scoreNumDisplay = scoreNum - pointNum
        //     }
           


    $('div > .closeBtn').on('click', this, function(){
        //Listen for close click
        //Closes modal
        $('body > #simpleModal').css('display', 'none')
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
