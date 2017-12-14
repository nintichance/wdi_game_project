$(document).ready(function(){
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
            answer: "This rapper heavily influences the acting and art of this show",
            question: "Who is Nas?"
        }
    ]
    let clickCounter = 0
    $('.container > .questionBox').on('click', this,  function() {
        console.log(this.id) 
        clickCounter += 1
        console.log(clickCounter)
        let userResponse = prompt(answerQuestion[this.id].answer)
        if(userResponse === answerQuestion[this.id].question){
            $(this).css('background-color', 'rgba(25, 245, 13, 0.75)')
        } else {
            $(this).css('background-color', 'rgba(238, 4, 4, 0.75)') 
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
