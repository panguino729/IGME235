<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Random Fact</title>

    <link rel="stylesheet" href="random-fact-style.css">
</head>

<body>
    <main>
        <h1>Random Quote of The Day</h1>
        <p>Reload this page to recieve a new random quote</p>

        <div class="info" id="quote">
            <?php
            $quotes = ["Together we can change the world, just one random act of kindness at a time.  - Ron Hall", "It does not matter how slowly you go as long as you do not stop.  - Confucius", "Only I can change my life. No one can do it for me.  - Carol Burnett", "Failure will never overtake me if my determination to succeed is strong enough.  - Og Mandino", "Life is 10% what happens to you and 90% how you react to it.  - Charles R. Swindoll", "Good, better, best. Never let it rest. 'Til your good is better and your better is best.  - St. Jerome", "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.  - Helen Keller"];
            echo $quotes[rand(0, count($quotes) - 1)];
            ?>
        </div>

        <form action="HW-random-fact.php" method="post">
            <input type="submit" value="Get another Quote!">
        </form>
    </main>
</body>

</html>