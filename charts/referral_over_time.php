<?php

include "../database/db.php";

// Query to get referrer customers over time
$sql = "SELECT DATE_FORMAT(date_created, '%Y-%m-%d') AS date,
               COUNT(DISTINCT customer_id) AS customer_count
        FROM referrals
        GROUP BY date
        ORDER BY date";

$result = $mysqli->query($sql);

$data = [
    'dates' => [],
    'customerCounts' => [],
];

while ($row = $result->fetch_assoc()) {
    $data['dates'][] = $row['date'];
    $data['customerCounts'][] = $row['customer_count'];
}

echo json_encode($data);
$mysqli->close();

?>