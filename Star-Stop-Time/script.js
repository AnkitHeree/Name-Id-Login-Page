let time = document.querySelector(".time");
let strBtn = document.querySelector(".strBtn");
let stpBtn = document.querySelector(".stpBtn");
let resetBtn = document.querySelector(".resetBtn");

let timeinMin = 60;
let interval = null;

// Start
strBtn.addEventListener("click", function () {

    if (interval !== null) return;

    interval = setInterval(() => {
        if (timeinMin > 0) {
            timeinMin--;
            time.textContent = timeinMin;
        } else {
            clearInterval(interval);
        }
    }, 1000);

});

// Stop
stpBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
});

// Reset
resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    timeinMin = 60;
    time.textContent = timeinMin;
});