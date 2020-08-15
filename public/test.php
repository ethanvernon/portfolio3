<?php
//declare variables for connecting
include 'creds.php';

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query1 = mysqli_query($conn, "SELECT
projects.name, GROUP_CONCAT(techs.tech_name SEPARATOR ', ') technologies
FROM
`projects`
JOIN project_techs ON projects.project_id = project_techs.project_id
JOIN techs ON techs.tech_id = project_techs.tech_id");


$query2 = mysqli_query($conn, "SELECT
projects.name, 
projects.description,
projects.start_date,
projects.end_date,
projects.team_size,
projects.project_id,
projects.is_pro,
GROUP_CONCAT( techs.tech_name SEPARATOR ', ') technologies,
GROUP_CONCAT(DISTINCT countries.country_name SEPARATOR ', ') countries
FROM
`projects`
JOIN project_techs ON projects.project_id = project_techs.project_id
JOIN techs ON techs.tech_id = project_techs.tech_id
JOIN project_countries ON projects.project_id = project_countries.project_id
JOIN countries ON countries.country_id = project_countries.country_id
");

$sth = mysqli_query($conn, "SELECT * FROM projects ORDER BY name");
$response = array();

while($row = mysqli_fetch_assoc($query2)) {
    $response[] = $row;
}

echo json_encode($response);

?>