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

<body data-spy="scroll" data-target=".navbar" data-offset="50">
<nav class="navbar navbar-expand-md navbar-light bg-light justify-content-center sticky-top bg" id="navigationBar"> <a class="navbar-brand" href="#">Katarina Tretter</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul class="navbar-nav justify-content-center" id="menu">
      <li class="nav-item"> <a class="nav-link" href="#aboutMe">About Me</a> </li>
      <li class="nav-item"> <a class="nav-link" href="#portfolio">Portfolio</a> </li>
      <li class="nav-item"> <a class="nav-link" href="#contact">Contact</a> </li>
      <li class="nav-item"> <a class="nav-link" href="#resume">Resume</a> </li>
    </ul>
  </div>
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
    <div class="col-md-3 image" id="mainimg"><img src="images/katarinaTretterSmaller.jpg" alt="Katarina Tretter"> </div>
  </div>
</div>

<!-- ---------PORTFOLIO--------- -->
<div id="portfolio">
  <h2>Portfolio</h2>
  <div class="card-deck"> 
    <!-- -----GAUNTLET REMAKE----- -->
    <div class="card"> <img class="card-img-top" src="images/guantletUI.png" alt="Gauntlet Remake Menu Screen">
      <div class="card-body">
        <h5 class="card-title">Gauntlet Remake</h5>
        <p class="card-text">Space themed Gauntlet reamke - Characters, GUI</p>
        <!-- <a href="#" class="btn btn-secondary">More Info</a> --> 
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#gauntlet"> More Info </button>
      </div>
    </div>
    <!-- -----SAKANA----- -->
    <div class="card"> <img class="card-img-top" src="images/SakanaScreenshot.png" alt="Sakana gameplay screenshot of the water and the fishing rod">
      <div class="card-body">
        <h5 class="card-title">Sakana</h5>
        <p class="card-text">Japanese style fly fishing in VR - Sound, Lantern</p>
      </div>
      <div class="card-footer">
        <button type="button" id="sakanaVid" class="btn btn-outline-dark" data-toggle="modal" data-target="#sakana"> More Info </button>
      </div>
    </div>
    <!-- -----HAT QUEST----- -->
    <div class="card"> <img class="card-img-top" src="images/bringMeTheHatsGameplay.PNG" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Hat Quest</h5>
        <p class="card-text">Rogue like turn based combat - GUI, Art</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#hatQuest"> More Info </button>
      </div>
    </div>
  </div>
</div>

<!-- ---------MODALS--------- --> 
<!-- -----GAUNTLET REMAKE----- -->
<div class="modal fade" id="gauntlet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Gauntlet Remake</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body"> <img src="images/Scientist.png" alt="scientist"> <img src="images/Spacesuit.png" alt="spacesuit"> </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- -----SAKANA----- -->
<div class="modal fade" id="sakana" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sakana</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body">
        <iframe class="embed-responsive-item" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- -----HAT QUEST----- -->
<div class="modal fade" id="hatQuest" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hat Quest</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body"> <img id="portfolioImg" src="images/HatQuestMainCharacterSprite.png" alt="Hat Quest main character sprite Ellion; elf with blond hair and wearing green robes"> <img id="portfolioImg" src="images/HatQuestCutleryHat.png" alt="Hat Quest Cutlery Hat; orange top hat with 2 sporks ducktaped onto it"> </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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
      <input id="submit" class="btn btn-outline-dark" name="submit" type="submit" value="Submit">
    </div>
  </form>
  <?php
  // ** Form validation code **
  // We will use the $_POST "super global" associative array to extract the values of the form fields
  // #1 - was the submit button pressed?
  if ( isset( $_POST[ "submit" ] ) ) {
    $to = "kft3635@rit.edu"; // !!! REPLACE WITH YOUR EMAIL !!!

    // #2 - if a value for the `email` form field is missing, give a default value
    // else, use the value from the form field
    $from = empty( trim( $_POST[ "email" ] ) ) ? "noemail@sample.com" : sanitize_string( $_POST[ "email" ] );

    $subject = "Portfolio: ";

    // #3 - same as above, except with the `message` form field
    $message = empty( trim( $_POST[ "message" ] ) ) ? "No message" : sanitize_string( $_POST[ "message" ] );

    // #4 - same as above, except with the `first name` form field
    $fname = empty( trim( $_POST[ "firstname" ] ) ) ? "No name" : sanitize_string( $_POST[ "firstname" ] );

    // 'last name' form field
    $lname = empty( trim( $_POST[ "lastname" ] ) ) ? "No name" : sanitize_string( $_POST[ "lastname" ] );

    // #5 - same as above, except with the `human` form field
    $human = empty( trim( $_POST[ "human" ] ) ) ? "0" : sanitize_string( $_POST[ "human" ] );

    $headers = "From: $from" . "\r\n";

    // #6 - add the user's name to the end of the message
    $message .= "\n\n - $fname $lname";

    if ( isset( $_POST[ "urgent" ] ) ) {
      $subject = "Urgent! " . $subject;
    }

     #7 - if they know what 2+2 is, send the message
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
  function sanitize_string( $string ) {
    $string = trim( $string );
    $string = strip_tags( $string );
    return $string;
  }
  ?>
</div>

<!-- RESUME -->
<div class="info" id="resume">
  <h2>Resume</h2>
  <a href="media/Katarina Tretter Resume.pdf" target="_blank"><button type="button" class="btn btn-outline-dark"> Open Resume </button></a>
</div>

<!-- ----- BOOTSTRAP----- --> 
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> --> 
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> 
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> 
<script src="js/main.js"></script>
</body>
</html>