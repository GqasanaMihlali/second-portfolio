<?php
if(isset($_POST['submit'])){
    $name=$_POST['fullname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];
    
    $to='mihlaligqasana@gmail.com';
    $subject='Submission';
    $message="Name:".$name."\n"."phone:".$phone."\n". "Wrote the following:"."\n\n".$message;
    $headers="From: ".$email;
    if(mail($to, $subject, $message, $headers)){
        echo "<h2>Email sent Successfully!" ." ".$name.",You'll be contacted shortly!</h1>";
        
        else{
            echo "Message not sent!";
        }
    }
}
?>