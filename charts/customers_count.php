<?php

include "../database/db.php";

// query to get the number of customers 
$sql = "SELECT COUNT(*) AS count FROM customers";
$result = $mysqli->query($sql);

$data = [
    'count'=>0,
];

if($row = $result->fetch_assoc()){
    $data['count'] = $row['count'];
}

echo json_encode($data);

$mysqli->close();

?>