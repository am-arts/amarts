document.addEventListener("DOMContentLoaded", function() {
    var pinInputs = document.querySelectorAll('.pin-input input');
    var countdownTimer;
  
    // Start countdown timer function
    function startCountdown(durationInSeconds) {
      var timer = durationInSeconds;
      countdownTimer = setInterval(function () {
        var seconds = timer % 60;
  
        document.getElementById('countdown').textContent = "0:" + (seconds < 10 ? "0" : "") + seconds;
  
        if (--timer < 0) {
          clearInterval(countdownTimer);
          document.querySelector('button[type="submit"]').removeAttribute('disabled');
          document.getElementById('countdown').textContent = "Time's up!";
        }
      }, 1000);
    }
  
    // Call startCountdown with 10 seconds
    startCountdown(10);
  
    // Event listeners and functions for input handling and form submission (already existing in your code)
  
    // Function to validate login (already existing in your code)
  });
  