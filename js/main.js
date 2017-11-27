document.addEventListener("DOMContentLoaded", function(){

  function waitFourSeconds() {
    let settimeout = document.querySelector(".settimeout");
    settimeout.textContent = 'This is Set Timeout.';
  }
  setTimeout(waitFourSeconds, 800);

  let num = 0;
  let incrementNumber = setInterval(function() {
    let setinterval = document.querySelector(".setinterval");
    setinterval.textContent = `The current number is: ${num}`;
    num++;

    if (num > 10) {
      setinterval.className += " bold-this";
      setinterval.textContent = "This interval has been cleared we will no longer update."
      clearInterval(incrementNumber);
    }
  }, 250);



});
