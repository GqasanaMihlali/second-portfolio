<?php 
function sanitize_my_email($field) {$field = filter_var($field,FILTER_SANITIZE_EMAIL);
if(filter_var($field, FILTER_VALIDATE_EMAIL)){
    return true;}
    else {return false;}
}
$to_email = 'mihlaligqasana"gmail.com';
$subject = 'Testing PHP Mail'; 
$message = 'The form is subbmitted';
$headers = 'From :noreply @ company . com';
mail($to_email,$subject,$message,$headers);
?>
