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
   // $colors = mysqli_query($link, "SELECT colors from colors
   //                                ORDER BY RAND()
   //                                LIMIT 1");
   // $items = mysqli_query($link, "SELECT items from items
   //                               ORDER BY RAND()
   //                               LIMIT 1");
   // $rank = mysqli_query($link, "SELECT ranking from ranking
   //                              ORDER BY RAND()
   //                              LIMIT 1");

   
   function get_data() {
      global $link;

      $randomdraw = rand(1, 24);
      $search = mysqli_query($link, "SELECT * from colors ORDER BY id DESC");
      
      if(mysqli_num_rows($search) > 0) {
          $row = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM colors WHERE id = $randomdraw"));
          return $row;
      }
      else {
          return $row = "";
      }
  }

  
  function parse_data($colors) {
   echo($colors['colors']);
       
}

  



    
    //close connection
    mysqli_close($link);
?>
