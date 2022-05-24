<?php
//server info and log-in details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zodiac";

$conn = mysqli_connect("$servername", "$username", "$password", "$dbname");

//check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

function get_colors() {
    global $conn;
    // $rowCount = mysqli_fetch_array(mysqli_query($conn, "SELECT COUNT(*) as total from colors"));
    $randomRow = rand(0, 23);
    $find = mysqli_query($conn, "SELECT * from colors ORDER BY id DESC");
    
    if(mysqli_num_rows($find) > 0) {
        $row = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM colors WHERE id = $randomRow"));
        return $row;
    }
    else {
        return $row = "";
    }
}

function parse_colors($colors) {
    echo("
        ".$colors['colors']."
        
    ");
}



$colorsData = get_colors();

parse_colors($colorsData);



mysqli_close($conn);
?>
