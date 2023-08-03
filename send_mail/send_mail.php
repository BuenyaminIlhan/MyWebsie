<?php

########### CONFIG ###############

$recipient = 'ilhan.buenyamin@gmail.com'; # Bitte hier deine E-Mail angeben
$redirect = 'success.html';

########### CONFIG END ###########



########### Instruction ###########
#
#   This script has been created to send an email to the $recipient
#
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [email] The email address of the sender
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################


switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Contact From " . $_POST['name'];
        $headers = "From: norply@ilhan-buenyamin.com";

        #mail($recipient, $subject, $_POST['message'], $headers, $_POST['email']);
        mail($recipient, $subject, $headers, $_POST['message'], $_POST['email']);
        header("Location: " . $redirect);

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}