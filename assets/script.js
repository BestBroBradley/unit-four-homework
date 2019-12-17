var startBtn = document.getElementById("startButton")
var counter = document.getElementById("timeRemaining")
var landingPage = document.getElementById("landingPage")
var question = document.getElementById("question")
var optionOne = document.getElementById("optionOne")
var optionTwo = document.getElementById("optionTwo")
var optionThree = document.getElementById("optionThree")
var optionFour = document.getElementById("optionFour")
var answerEl = document.getElementById("answer")

var timeRemaining = 60;


counter.textContent = (`Time Remaining: ${timeRemaining} seconds`)

function startCountdown() {
    var timerInterval = setInterval(function () {
        timeRemaining--;
        counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);
        
        if (timeRemaining === -1) {
            clearInterval(timerInterval);
            alert("Time's up")
            timeRemaining = 60;
            counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);
        }
    }, 100);
}


startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    landingPage.setAttribute("class", "hidden")
    question.textContent = (questions[0].title)
    optionOne.textContent = (questions[0].choices[0])
    optionTwo.textContent = (questions[0].choices[1])
    optionThree.textContent = (questions[0].choices[2])
    optionFour.textContent = (questions[0].choices[3])
    var answer = (questions[0].answer[0])
    questionPage.setAttribute("class", "show")
    startCountdown();
    
});

optionOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[0].choices[0])
    
    if (userChoice.String == answer.String) {
        answerEl.textContent=("Correct!")
    } else {answerEl.textContent=("Incorrect")}

    question.textContent = (questions[1].title)
    optionOne.textContent = (questions[1].choices[0])
    optionTwo.textContent = (questions[1].choices[1])
    optionThree.textContent = (questions[1].choices[2])
    optionFour.textContent = (questions[1].choices[3])

})

optionOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[0].choices[0])
    
    if (userChoice.String == answer.String) {
        answerEl.textContent=("Correct!")
    } else {answerEl.textContent=("Incorrect")}

    question.textContent = (questions[1].title)
    optionOne.textContent = (questions[1].choices[0])
    optionTwo.textContent = (questions[1].choices[1])
    optionThree.textContent = (questions[1].choices[2])
    optionFour.textContent = (questions[1].choices[3])

})



