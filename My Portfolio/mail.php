<?php

if(isset($_POST['submit'])) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];

    $to='mihlaligqasana@gmail.com';
    $subject='Form submission';
    $message="Name: " .$name."\n". "Phone: ".$phone."\n". "Submitted a form: "."\n\n".$message;
    $headers="From: ".$email;

    if(mail($to, $subject, $message, $headers)){
        echo "<h2>Message Sent! Thank you"."".$name.",You will be contacted shortly!</h2>" ;
    }
     else{
         echo "Message not Successfull!";
     }
}
?>