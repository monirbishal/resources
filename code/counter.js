<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Date Counter</h1>

<div>
    <p>days: <span id="days"></span></p>
    <p>hours: <span id="hours"></span></p>
    <p>minutes: <span id="minutes"></span></p>
    <p>secound: <span id="secound"></span></p>
</div>
    <script>
        
        // function countdownTimer() {
        //     const difference = +new Date("2020-12-01") - +new Date();
        //     let remaining = "Time's up!";
        //     if (difference > 0) {
        //         const parts = {
        //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        //         minutes: Math.floor((difference / 1000 / 60) % 60),
        //         seconds: Math.floor((difference / 1000) % 60),
        //         };

        //         // remaining = Object.keys(parts).map(part => {
        //         // return `${parts[part]} ${part}`;
        //         // }).join(" ");
        //         // console.log(remaining);
        //         // // out put : 19 days 14 hours 21 minutes 49 seconds

        //         document.getElementById("days").innerHTML = 'Days: '+parts['days'];
        //         document.getElementById("hours").innerHTML = 'Hours: '+parts['hours'];
        //         document.getElementById("minutes").innerHTML = 'Minutes: '+parts['minutes'];
        //         document.getElementById("seconds").innerHTML = 'seconds: '+parts['seconds'];
        //     }
        // }
        // setInterval(countdownTimer, 1000);


        function days() {
            const difference = +new Date("2020-12-01") - +new Date();
            if (difference > 0) {
                document.getElementById('days').innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
            }
        }
        function hours() {
            const difference = +new Date("2020-12-01") - +new Date();
            if (difference > 0) {
                document.getElementById('hours').innerHTML = Math.floor((difference / (1000 * 60 * 60)) % 24);
            }
        }
        function minutes() {
            const difference = +new Date("2020-12-01") - +new Date();
            if (difference > 0) {
                document.getElementById('minutes').innerHTML = Math.floor((difference / 1000 / 60) % 60);
            }
        }
        function secound() {
            const difference = +new Date("2020-12-01") - +new Date();
            if (difference > 0) {
                document.getElementById('secound').innerHTML = Math.floor((difference / 1000) % 60);
            }
        }
        setInterval(days, 1000);
        setInterval(hours, 1000);
        setInterval(minutes, 1000);
        setInterval(secound, 1000);
        // those functions are used for individual times count
        
    </script>
</body>
</html>