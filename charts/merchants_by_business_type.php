<?php
include "../database/db.php";

// query to get the number of merchants by business type 
$sql = "SELECT business_type, COUNT(business_id) as num_merchants
FROM merchants
GROUP BY business_type";

$result = $mysqli->query($sql);

$data = [
    'labels' => [],
    'values' => [],
];

while($row = $result->fetch_assoc()){
    $data['labels'][] = $row['business_type'];
    $data['values'][] = $row['num_merchants'];
}

echo json_encode($data);

$mysqli->close();

?>