<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=utf-8");

    // require 'connect.php';
    error_reporting(E_ERROR);

    class Person
    {
    public $name_customer;
    public $desc;
    }

    // $visitors = [];
    // $sql = "SELECT * FROM visitors";

    // if($result = mysqli_query($con, $sql)){
    //     $cr = 0;
    //     while($row = mysqli_fetch_assoc($result)){
    //         $response[$cr]['id'] = $row['id'];
    //         $response[$cr]['user_name'] = $row['user_name'];
    //         $response[$cr]['user_desc'] = $row['user_desc'];
    //         $cr++;
    //     }

    //     echo json_encode($response);
    // }else{
    //     http_response_code(404);
    // }
    $person1 = new Person();
    $person1->name_customer = 'test_user';
    $person1->desc = 'Jakarta';

    $person2 = new Person();
    $person2->name_customer = 'John Coup';
    $person2->desc = 'New Exchange Student';

    
    $person3 = new Person();
    $person3->name_customer = 'Krey Johanson';
    $person3->desc = 'Bali';


    $customers = array($person1,$person2,$person3);

    $data->customers = $customers;
    
    echo json_encode($data);
?>