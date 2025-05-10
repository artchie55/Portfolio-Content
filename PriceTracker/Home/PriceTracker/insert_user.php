<?php
$pdo = new PDO("mysql:host=localhost;dbname=login_pricetracker", "root", "");

// Replace these values with the username and password you want to insert
$username = "admin";
$plainPassword = "admin123";

// Hash the password
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

// Insert the user
$stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->execute([$username, $hashedPassword]);

echo "User inserted successfully.";
?>
