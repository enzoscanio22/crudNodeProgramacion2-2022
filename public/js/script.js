function counter() {
  let countdown = 2;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    timerDiv.innerHTML;
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./"
    }
  }, 1000);
}