<?php

include("dbconnect.php");

$mydata = stripcslashes(file_get_contents("php://input"));
$data = json_decode($mydata, true);

$name = $data["name"];
$email = $data["email"];
$password = $data["password"];
$phone = $data["phone"];

if(!empty($name) && !empty($email) && !empty($password) && !empty($phone)){
    $sql = "INSERT INTO user_info(user_name, user_email, user_password, user_phone) values ('$name', '$email', '$password', '$phone')";
    if($con->query($sql)  == true){
        echo "Add user successfully";
    }else{
        echo "user not connected";
    }
}else{
    echo "Please, Fill up all the field !";
}

?>