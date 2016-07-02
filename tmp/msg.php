<?php


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

    $name   = isset($_POST['name'])?$_POST['name']:null;
    $email  = isset($_POST['email'])?$_POST['email']:null;
    $message = isset($_POST['message'])?$_POST['message']:null;


    header('Content-type: application/json');

    if (!$name) {
        echo json_encode(['error' => 1, 'name' => 'name', 'msg'=>'Введите свое имя пожалуйста']);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['error' => 1, 'name' => 'email', 'msg'=>'Введите свой email для обратной связи']);
        exit();
    }

    if (!$message) {
        echo json_encode(['error' => 1, 'name' => 'message', 'msg'=>'Введите сообщение']);
        exit();
    }

    echo json_encode(['error' => 0, 'msg' => 'Спасибо за сообщение']);

    $text = "от : " .$name. " ( ". $email ." ) " . $message . "\r\n";

    file_put_contents('./msg.txt', PHP_EOL . $text, FILE_APPEND);

    mail("irina.drive@gmail.com", "Сообщение с сайта-портфолио от: ".$name . " ( " .$email ." ) ", $message);
?>

