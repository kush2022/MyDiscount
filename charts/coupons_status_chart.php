<?php

include "../database/db.php";


// query to get coupon status distribution
$sql = "SELECT coupon_status, COUNT(*) AS status_count 
FROM coupons 
GROUP BY coupon_status;";

$result = $mysqli->query($sql);

$data = [
    'statuses'=>[],
    'statusCounts'=>[]
];

while($row = $result->fetch_assoc()){
    $data['statuses'][] = $row['coupon_status'];
    $data['statusCounts'][] = $row['status_count'];
}

echo json_encode($data);

$mysqli->close();


?>