document.addEventListener("DOMContentLoaded", function(){

  function waitFourSeconds() {
    let settimeout = document.querySelector(".settimeout");
    settimeout.textContent = 'This is Set Timeout.';
  }

  setTimeout(waitFourSeconds, 2000);

  let num = 0;
  function incrementNumber() {
    let setinterval = document.querySelector(".setinterval");

    setinterval.textContent = `The current number is: ${num}`;
    num++;
  }

  setInterval(incrementNumber, 1000);

});
