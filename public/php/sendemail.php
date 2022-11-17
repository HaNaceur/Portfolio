<?php


$name= $_POST["NAME"];
$visitor_email= $_POST["EMAIL"];
$visitor_contact= $_POST["CONTACT"];
$visitor_message= $_POST["MESSAGE"];

$email_form= "h.naceur@montpellier-bs.com";
$email_subject= "New form submission";

$email_body="User Name : $name.\n".
                "User Email: $visitor_email.\n".
                    "User message: $message.\n";

$to= "h.naceur@montpellier-bs.com";
$headers="Form:$email_form \r\n";
$headers .="Reply-To: $visitor_email \r\n";

mail($to, $email_subject,$email_body,$headers);
header("Location:contact.ejs");

?>