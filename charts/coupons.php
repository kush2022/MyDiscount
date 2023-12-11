<?php

include "../database/db.php";

// query to get number and sum of coupons 
$sql = "SELECT
            COUNT(*) AS number_of_coupons,
            SUM(amount) AS total_coupon_value
        FROM coupons";

$result = $mysqli->query($sql);

$data = [
    'number_of_coupons'=>0,
    'total_coupon_value'=>0
];

if($row = $result->fetch_assoc()){
    $data['number_of_coupons'] = $row['number_of_coupons'];
    $data['total_coupon_value'] = $row['total_coupon_value'];
}

echo json_encode($data);

$mysqli->close();
?>