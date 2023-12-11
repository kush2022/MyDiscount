<?php

include "../database/db.php";

// query for number of referrals 
$sql = "SELECT COUNT(*) AS count FROM referrals";
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