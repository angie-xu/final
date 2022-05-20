<?php
//server info and log-in details
   $user = 'root';
   $password = 'root';
   $db = 'zodiac';
   $host = 'localhost';
   $port = 3306;
   
   //create connection
   $link = mysqli_init();
   $success = mysqli_real_connect(
      $link,
      $host,
      $user,
      $password,
      $db,
      $port
   );

   // Check connection
   if (!$link) {
      die("Connection failed: " . mysqli_connect_error());
    }
   
   //Selecting column from table
   $colors = mysqli_query($link, "SELECT colors from colors
                                  ORDER BY RAND()
                                  LIMIT 1");
   $items = mysqli_query($link, "SELECT items from items
                                 ORDER BY RAND()
                                 LIMIT 1");
   $rank = mysqli_query($link, "SELECT ranking from ranking
                                ORDER BY RAND()
                                LIMIT 1");



    
    //close connection
    mysqli_close($link);
?>
