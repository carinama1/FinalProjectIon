<?php
    define('DB_DATABASE', 'ionic_schema');
    define('DB_USER', 'any');
    define('DB_PASSWORD', '');
    define('DB_HOST', 'localhost');
    
    $mysqli = new mysqli('localhost', 'carinama2', '123456789', 'ionic_schema');

    function connect(){
        $connect = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

        if($connect){
            echo "connection success \n";
        }
         else{
            echo "connection not success: " . mysqli_error($connect);
        }

        if(mysqli_connect_errno($connect)){
            die("Failed to Connect : " . mysqli_connect_error());
        }

        mysqli_set_charset($connect, "utf8");

        return $connect;
    }

    $con = connect();
?>
