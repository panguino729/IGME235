<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- -----BOOTSTRAP----- -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="styles/main.css">
    <script src="styles/main.css"></script>

    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">

    <title>Katarina Tretter</title>
</head>

<body data-spy="scroll" data-target="#navigationBar">

    <nav class="navbar navbar-expand-sm bg-light justify-content-center" id="navigationBar">
        <a class="navbar-brand" href="#">Katarina Tretter</a>

        <ul class="nav justify-content-center" id="menu">
            <li class="nav-item">
                <a class="nav-link" href="#aboutMe">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
            </li>
        </ul>
    </nav>

    <!-- ---------ABOUT ME--------- -->
    <div class="container-fluid" id="aboutMe">
        <h2>About Me</h2>
        <div class="row">
            <div class="col-md-9">
                <p>I'm Katarina Tretter. I am interested in gaming. My goal is to create an intersting game for PC. I
                    hope to
                    learn how to build an aesthetically pleasing webiste using HTML and CSS in this class. During my
                    time here
                    at RIT studying Game Design and Development, I hope to further my knowledge and programing skills so
                    that I
                    can create sucessful games. When I graduate, I will hopefully have a full time job or have all the
                    skills
                    necessarry to get a full time job.</p>
            </div>
            <div class="col-md-3 image" id="mainimg"><img src="images/katarinaTretterSmaller.jpg" alt="Katarina Tretter">
            </div>
        </div>
    </div>

    <!-- ---------PORTFOLIO--------- -->
    <div id="portfolio" class="carousel slide" data-ride="carousel">
        <h2>Portfolio</h2>
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#project0" data-slide-to="0" class="project0 active"></li>
            <li data-target="#project1" data-slide-to="1" class="project1"></li>
            <li data-target="#project2" data-slide-to="2" class="project2"></li>
        </ol>
        <!-- The Slideshow -->
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block img-fluid" src="images/thomas-bjornstad-462980-unsplash.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Project 1</h3>
                    <p>Filler Image</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block img-fluid" src="images/stefan-stefancik-105376-unsplash.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Project 2</h3>
                    <p>Filler image</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block img-fluid" src="images/sergey-pesterev-1471103-unsplash.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Project 3</h3>
                    <p>Filler image</p>
                </div>
            </div>
        </div>
        <!-- Left and Right controls -->
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <!-- ---------CONTACT ME--------- -->
    <div class="info" id="contact">
        <h2>Contact Me</h2>
        <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
            <div class="form-group">
                <label>First Name</label>
                <input class="form-control" name="firstname" placeholder="Type Here">

                <label>Last Name</label>
                <input class="form-control" name="lastname" placeholder="Type Here">

                <label>Email</label>
                <input class="form-control" name="email" type="email" placeholder="person@sample.com">

                <label>Message</label>
                <textarea class="form-control" name="message" placeholder="Type Here"></textarea>

                <label>Check this box if the message is urgent</label>
                <input class="form-control" type="checkbox" name="urgent" value="Urgent">

                <label>*What is 2+2? (Anti-spam)</label>
                <input class="form-control" name="human" placeholder="Type Here">

                <input id="submit" class="btn btn-primary" name="submit" type="submit" value="Submit">
            </div>
        </form>
        <?php
        // ** Form validation code **
        // We will use the $_POST "super global" associative array to extract the values of the form fields
        // #1 - was the submit button pressed?
        if (isset($_POST["submit"])) {
            $to = "kft3635@rit.edu"; // !!! REPLACE WITH YOUR EMAIL !!!

            // #2 - if a value for the `email` form field is missing, give a default value
            // else, use the value from the form field
            $from = empty(trim($_POST["email"])) ? "noemail@sample.com" : sanitize_string($_POST["email"]);

            $subject = "Portfolio: ";

            // #3 - same as above, except with the `message` form field
            $message = empty(trim($_POST["message"])) ?  "No message" : sanitize_string($_POST["message"]);

            // #4 - same as above, except with the `first name` form field
            $fname = empty(trim($_POST["firstname"])) ? "No name" : sanitize_string($_POST["firstname"]);

            // 'last name' form field
            $lname = empty(trim($_POST["lastname"])) ? "No name" : sanitize_string($_POST["lastname"]);

            // #5 - same as above, except with the `human` form field
            $human = empty(trim($_POST["human"])) ? "0" : sanitize_string($_POST["human"]);

            $headers = "From: $from" . "\r\n";

            // #6 - add the user's name to the end of the message
            $message .= "\n\n - $fname $lname";

            if (isset($_POST["urgent"])) {
                $subject = "Urgent! " . $subject;
            }

            // #7 - if they know what 2+2 is, send the message
            if (intval($human) == 4) {

                // #8 - mail returns false if the mail can't be sent
                $sent = mail($to, $subject, $message, $headers);
                if ($sent) {
                    echo "<p><b>You sent:</b> $message</p>";
                } else {
                    echo "<p>Mail not sent!</p>";
                }
            } else {
                echo "<p>You are either a 'bot, or bad at arithmetic!</p>";
            }
        }

        // #9 - this handy helper function is very necessary whenever
        // we are going to put user input onto a web page or a database
        // For example, if the user entered a <script> tag, and we added that < script > tag to our HTML page
        // they could perform an XSS attack (Cross-site scripting)
        function sanitize_string($string)
        {
            $string = trim($string);
            $string = strip_tags($string);
            return $string;
        }
        ?>
    </div>

    <!-- RESUME -->
    <div class="info" id="resume">
        <h2>Resume</h2>
    </div>

    <!-- ----- BOOTSTRAP----- -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
</body>

</html>