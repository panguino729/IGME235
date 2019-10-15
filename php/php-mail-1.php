<?php
    $to = "kft3635@rit.edu";
    $from = "kft3635@rit.edu";
    $subject = "This is a test message";
    $message = "Here is the test message";
    $headers = "From: $from" . "\r\n";

    //Sent the message
    mail($to, $subject, $message, $headers);
?>