const arriveDate = new Date("June 20, 2024").getTime();

const x = setInterval(function () {
  let now = new Date().getTime();

  let distance = arriveDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysDisplay = document.querySelector("#days");
  const hoursDisplay = document.querySelector("#hours");
  const minsDisplay = document.querySelector("#minutes");
  const secsDisplay = document.querySelector("#seconds");

  daysDisplay.textContent = days;
  hoursDisplay.textContent = hours;
  minsDisplay.textContent = minutes;
  secsDisplay.textContent = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".main").innerHTML = "EXPIRED";
  }
}, 1000);
