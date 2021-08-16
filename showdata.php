<?php
include('dbconnect.php');

// Getting user info
$sql = "SELECT * from user_info";
$result = $con->query($sql);

if($result->num_rows > 0){
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
}
echo json_encode($data);

?>