<?php
//declare variables for connecting
$servername = "";
$username = "";
$password = "";
$dbname = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sth = mysqli_query($conn, "SELECT * FROM exercise_name ORDER BY name");
$response = array();

while($row = mysqli_fetch_assoc($sth)) {
    $response[] = $row;
}

print json_encode($response);
echo json_encode($response);

?>