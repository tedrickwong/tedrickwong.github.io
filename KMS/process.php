<?php
    if(isset($_POST['fname']) && isset($_POST['lname'])){
        if(isset($_POST['email']) && isset($_POST['phoneNumber'])){
            $data = $_POST['fname'] . ' ' . $_POST['lname'] . ', ' . $_POST['email'] . ', ' . $_POST['phoneNumber'] . PHP_EOL;
            file_put_contents('data.txt', $data, FILE_APPEND | LOCK_EX);
        }
    }
    header('Location: apply.html');
?>