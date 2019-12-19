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
var testUl = document.getElementById("test-ul")
var link = document.getElementById("highScore")
var clearBtn = document.getElementById("clearArray")
var timeRemaining = 60;

var scoreArray
var answer
var score

counter.textContent = (`Time Remaining: ${timeRemaining} seconds`)
scoreArray = JSON.parse(localStorage.getItem("scores array")) || [];

function startCountdown() {
    var timerInterval = setInterval(function () {
        timeRemaining--;
        counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);

        if (timeRemaining <= -1 || i === questions.length) {
            clearInterval(timerInterval);
            if (i === questions.length) {
                score = timeRemaining
                judgeText.textContent = ("Excellent job!")

            } else {
                score = 0
                timeRemaining = 60;
                judgeText.textContent = ("Some studying might be indicated.")
                alert("Time's up")
            }
            counter.textContent = (`Time Remaining: ${timeRemaining} seconds`);
            questionPage.setAttribute("class", "hidden")
            resultsPage.setAttribute("class", "show")
            console.log(score)
        }
    }, 1000);
}

var i = 0

function replaceQuestion() {
    question.textContent = (questions[i].title)
    optionOne.textContent = (questions[i].choices[0])
    optionTwo.textContent = (questions[i].choices[1])
    optionThree.textContent = (questions[i].choices[2])
    optionFour.textContent = (questions[i].choices[3])
}

function loadScores() {
    scoreArray = JSON.parse(localStorage.getItem("scores array")) || [];
    scoreArray.sort(function (a, b) {
        return b.score - a.score;
    })
    if (((scoreArray.length) - 1) >= 10) {
        scoreArray.splice(10)
    }
    scoreArray.forEach(function (item) {
        var newLi = document.createElement("li")
        newLi.textContent = ((item.name) + " " + (item.score));
        scoreList.appendChild(newLi)
    })
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
        timeRemaining -= 15
    }
    i++
    replaceQuestion();
})

optionTwo.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[1])
    answer = (questions[i].answer)
    console.log("userChoice:" + userChoice)
    console.log("compChoice:" + answer)
    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
        timeRemaining -= 15
    }
    i++
    replaceQuestion();
})

optionThree.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[2])
    answer = (questions[i].answer)
    console.log("userChoice:" + userChoice)
    console.log("compChoice:" + answer)
    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
        timeRemaining -= 15
    }
    i++
    replaceQuestion();
})

optionFour.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var userChoice = (questions[i].choices[3])
    answer = (questions[i].answer)
    console.log("userChoice:" + userChoice)
    console.log("compChoice:" + answer)
    if (userChoice === answer) {
        answerEl.textContent = ("Correct!")
        console.log("correct")
    } else {
        answerEl.textContent = ("Incorrect")
        console.log("incorrect")
        timeRemaining -= 15
    }
    i++
    replaceQuestion();
})

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var newScore = {
        name: initialsInp.value,
        score: score
    }
    scoreArray.push(newScore)
    localStorage.setItem("scores array", JSON.stringify(scoreArray));
    initialsInp.value = "";
    console.log(scoreArray)
})