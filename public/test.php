<?php
//declare variables for connecting
$servername = "localhost";
$username = "fromga5_portfolio_manager";
$password = "qjTSe&Yx@k28";
$dbname = "fromga5_portfolio";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sth = mysqli_query($conn, "SELECT * FROM projects ORDER BY name");
$response = array();

while($row = mysqli_fetch_assoc($sth)) {
    $response[] = $row;
}

echo json_encode($response);

?>