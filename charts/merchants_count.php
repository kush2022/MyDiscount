<?php

include "../database/db.php";

// query to get the number of merchants
$sql = "SELECT COUNT(*) AS count FROM merchants";
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