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

function get_items() {
    global $conn;
    // $rowCount = mysqli_fetch_array(mysqli_query($conn, "SELECT COUNT(*) as total from items"));
    $randomdraw = rand(1, 364);
    $search = mysqli_query($conn, "SELECT * from items ORDER BY id DESC");
    
    if(mysqli_num_rows($search) > 0) {
        $horizontal = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM items WHERE id = $randomdraw"));
        return $horizontal;
    }
    else {
        return $horizontal = "";
    }
}

function parse_items($items) {
    echo("
        ".$items['items']."
        
    ");
}



$itemsData = get_items();

parse_items($itemsData);






function get_ranking() {
    global $conn;
    // $rowCount = mysqli_fetch_array(mysqli_query($conn, "SELECT COUNT(*) as total from rank"));
    $randompull = rand(1, 11);
    $seek = mysqli_query($conn, "SELECT * from ranking ORDER BY id DESC");
    
    if(mysqli_num_rows($seek) > 0) {
        $across = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM ranking WHERE id = $randompull"));
        return $across;
    }
    else {
        return $across = "";
    }
}

function parse_ranking($ranking) {
    echo("
        ".$ranking['ranking']."
        
    ");
}



$rankingData = get_ranking();

parse_ranking($rankingData);




mysqli_close($conn);
?>
