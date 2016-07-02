<?php


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

    $name   = isset($_POST['name'])?$_POST['name']:null;
    $individual_name   = isset($_POST['individual_name'])?$_POST['individual_name']:null;
    $address   = isset($_POST['address'])?$_POST['address']:null;
    $tell   = isset($_POST['tell'])?$_POST['tell']:null;
    $email  = isset($_POST['email'])?$_POST['email']:null;
    $services = isset($_POST['services'])?$_POST['services']:null;


    header('Content-type: application/json');

    if (!$name) {
        echo json_encode(['error' => 1, 'name' => 'name', 'msgf'=>'Название организации']);
        exit();
    }
    
    if (!$individual_name) {
        echo json_encode(['error' => 1, 'name' => 'individual_name', 'msgf'=>'Название индивидуального предпринимателя']);
        exit();
    }

    if (!$address) {
        echo json_encode(['error' => 1, 'name' => 'address', 'msgf'=>'Юридический (фактический) адрес']);
        exit();
    }

    if (!$tell) {
        echo json_encode(['error' => 1, 'name' => 'tell', 'msgf'=>'Номер телефона']);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['error' => 1, 'name' => 'email', 'msgf'=>'Электронный адрес']);
        exit();
    }

    if (!$services) {
        echo json_encode(['error' => 1, 'name' => 'services', 'msgf'=>'Наименование продукции, услуги']);
        exit();
    }

    echo json_encode(['error' => 0, 'msgf' => 'Спасибо за сообщение']);

    $text = "от : " .$name. " " .$individual_name. " " .$address. " " .$tell. " ( ". $email ." ) " . $services . "\r\n";

    file_put_contents('./msgf.txt', PHP_EOL . $text, FILE_APPEND);

    mail(".......@gmail.com", "Сообщение с сайта-HALAL для подачи заявки на оформление сертификата от: ".$name . " " .$individual_name. " " .$address. " " .$tell. " ( " .$email ." ) ", $services);
?>

