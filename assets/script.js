var startBtn = document.getElementById("startButton")
var counter = document.getElementById("timeRemaining")
var landingPage = document.getElementById("landingPage")
var page2 = document.getElementById("page2")

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
    page2.setAttribute("class", "show")
    startCountdown();

});




