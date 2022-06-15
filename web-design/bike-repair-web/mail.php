<?php
if(isset( $_POST['Name']))
$Name = $_POST['Name'];
if(isset( $_POST['Email']))
$Email = $_POST['Email'];


$content="From: $Name";
$recipient = "phuonganhtruong211@gmail.com";
$mailheader = "From: $Email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>