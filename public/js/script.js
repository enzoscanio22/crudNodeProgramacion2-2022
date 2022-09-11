function counter() {
  let countdown = 5;

  let timerDiv = document.getElementById("timer");

  let timer = setInterval(function () {
    timerDiv.innerHTML = `Regresando a Home: ${countdown}`;
    countdown--;
    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "./"
    }
  }, 1000);
}