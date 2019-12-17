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

var answer;

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

var i = 0

function replaceQuestion() {
    question.textContent = (questions[i].title)
    optionOne.textContent = (questions[i].choices[0])
    optionTwo.textContent = (questions[i].choices[1])
    optionThree.textContent = (questions[i].choices[2])
    optionFour.textContent = (questions[i].choices[3])
    // answer = (questions[i].answer)
    // i++
}

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    landingPage.setAttribute("class", "hidden")
    replaceQuestion();
    questionPage.setAttribute("class", "show")
    startCountdown();
    
});

optionOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[0])
    answer = (questions[i].answer)
    console.log("userChoice:" + userChoice)
    console.log("compChoice:" + answer)
    if (userChoice === answer) {
        answerEl.textContent=("Correct!")
        console.log("correct")
    } else {answerEl.textContent=("Incorrect")
console.log("incorrect")}
i++
    replaceQuestion();
})

optionTwo.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[1])
    
    if (userChoice === answer) {
        answerEl.textContent=("Correct!")
        console.log("correct")
    } else {answerEl.textContent=("Incorrect")
console.log("incorrect")}
i++
    replaceQuestion();
})

optionThree.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[2])
    
    if (userChoice === answer) {
        answerEl.textContent=("Correct!")
        console.log("correct")
    } else {answerEl.textContent=("Incorrect")
console.log("incorrect")}
i++
    replaceQuestion();
})

optionFour.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[3])
    
    if (userChoice === answer) {
        answerEl.textContent=("Correct!")
        console.log("correct")
    } else {answerEl.textContent=("Incorrect")
console.log("incorrect")}
i++
    replaceQuestion();
})