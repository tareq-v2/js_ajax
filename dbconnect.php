<?php
    $server = "localhost";
    $user = "root";
    $password = "";
    $database = "ajax";

    $con = new mysqli($server, $user, $password, $database);
    
    if($con->connect_error){
        die("Connection Failed");
    }
?>