var startBtn = document.getElementById("startButton")
var counter = document.getElementById("timeRemaining")
var landingPage = document.getElementById("landingPage")
var question = document.getElementById("question")
var optionOne = document.getElementById("optionOne")
var optionTwo = document.getElementById("optionTwo")
var optionThree = document.getElementById("optionThree")
var optionFour = document.getElementById("optionFour")
var answerEl = document.getElementById("answer")
var judgeText = document.getElementById("judgeText")
var initialsInp = document.getElementById("initials")
var scoreList = document.getElementById("scoreList")

var timeRemaining = 60;

var answer
var score

counter.textContent = (`Time Remaining: ${timeRemaining} seconds`)

function startCountdown() {
    var timerInterval = setInterval(function () {
        timeRemaining--;
        counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);

        if (timeRemaining === -1 || i === questions.length - 1) {
            clearInterval(timerInterval);
            alert("Time's up")
            if (i === questions.length - 1) {
                score = timeRemaining
                judgeText.textContent = ("Excellent job!")


            } else {
                score = 0
                timeRemaining = 60;
                judgeText.textContent = ("Some studying might be indicated.")
            }
            counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);
            questionPage.setAttribute("class", "hidden")
            resultsPage.setAttribute("class", "show")
            console.log(score)
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
    // if (i === questions.length - 1) {
    //     questionPage.setAttribute("class", "hidden")
    //     resultsPage.setAttribute("class", "show")
    // }
}

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    landingPage.setAttribute("class", "hidden")
    replaceQuestion();
    questionPage.setAttribute("class", "show")
    startCountdown();

});

optionOne.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[0])
    answer = (questions[i].answer)
    console.log("userChoice:" + userChoice)
    console.log("compChoice:" + answer)
    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
    }
    i++
    replaceQuestion();
})

optionTwo.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[1])

    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
    }
    i++
    replaceQuestion();
})

optionThree.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[2])

    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
    }
    i++
    replaceQuestion();
})

optionFour.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[3])

    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
    }
    i++
    replaceQuestion();
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.setItem("initials", initialsInp.value);
    localStorage.setItem("score", score)
    initialsInp.value = "";

}
)
