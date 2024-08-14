<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = $_POST["firstname"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  

  if (empty($firstname) || empty($phone) || empty($email)) { 
    echo "Please fill in all the fields";
  } else {
    $to = "your-email"; // емайл получателя данных из формы

    $tema = "Форма  PHP"; // тема полученного емайла

    $message = "firstname: " . $_POST['firstname'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Phone: " . $_POST['phone'] . "\n";


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    if (mail($to, $tema, $message, $headers)) {
        echo "Ваше сообщение успешно отправлено!";
    } else {
        echo "При отправке сообщения произошла ошибка!";
    }
}
}

?>

