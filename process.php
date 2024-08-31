<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Check if the email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Thank you for subscribing! We will contact you soon.";
    } else {
        echo "Please enter a valid email address.";
    }
}
?>
