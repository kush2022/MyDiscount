<?php

$servername = "localhost";
$username = "root";
$password = "felo@kush12";
$database = "mydiscount";


// create connection 
$mysqli = new mysqli($servername, $username, $password, $database);


// check connection 
if($mysqli->connect_error){
    die("Connection Failed " .$mysqli->connect_error);
}

?>