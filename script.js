
  
        

// Update the count down every 0.1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, seconds and milliseconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((distance % 1000) / 100);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "." + milliseconds + "s ";

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 100);  // 0.1 second interval
