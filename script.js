var display = function () {
    "use strict";
    var master, hours, minutes, seconds, dindex, day, ap, cv1, cv2, cv3, colorvar;
    master = new Date();
    hours = master.getHours();
    minutes = master.getMinutes();
    seconds = master.getSeconds();
    cv1 = hours.toString(16);
    cv2 = minutes.toString(16);
    cv3 = seconds.toString(16);
    if (cv1.length === 1) {
        cv1 = "0" + cv1;
    }
    if (cv2.length === 1) {
        cv2 = "0" + cv2;
    }
    if (cv3.length === 1) {
        cv3 = "0" + cv3;
    }
    colorvar = "#" + cv1 + cv2 + cv3;
    console.log(colorvar);
    document.body.style.backgroundColor = colorvar;
    //setting AM and PM
    ap = "AM";
    if (hours > 12) {
        hours = hours - 12;
        ap = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }
    // Adding zeroes
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //printing time
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ap;
    //getting day and assinging value
    dindex = master.getDay();
    switch (dindex) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;
    }
    //printing day
};

var tick = function () {
    "use strict";
    display();
    setInterval(display, 1000);
};
