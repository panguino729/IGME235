<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Random Fact</title>

    <link rel="stylesheet" href="css/fact-of-day-style.css">
</head>

<body>
    <main>
        <h1>Quote of The Day</h1>
        <p>Different quote for each day of the week</p>

        <div class="info" id="quote">
            <?php
            // -----DATE-----
            $sdate = date('l', $timestamp = $_SERVER["REQUEST_TIME"]);
            $days_week = [0 => "Sunday", 1 => "Monday", 2 => "Tuesday", 3 => "Wednesday", 4 => "Thursday", 5 => "Friday", 6 => "Saturday"];
            $quote_index = array_search($sdate, $days_week);

            echo ("<h2>Quote for $sdate</h2>");

            // -----QUOTES-----
            $quotes = ["Together we can change the world, just one random act of kindness at a time.  - Ron Hall", "It does not matter how slowly you go as long as you do not stop.  - Confucius", "Only I can change my life. No one can do it for me.  - Carol Burnett", "Failure will never overtake me if my determination to succeed is strong enough.  - Og Mandino", "Life is 10% what happens to you and 90% how you react to it.  - Charles R. Swindoll", "Good, better, best. Never let it rest. 'Til your good is better and your better is best.  - St. Jerome", "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.  - Helen Keller"];
            echo $quotes[$quote_index];
            ?>
        </div>
    </main>
</body>

</html>