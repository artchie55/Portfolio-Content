<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$input = json_decode(file_get_contents("php://input"), true);
$username = $input["username"] ?? '';
$password = $input["password"] ?? '';

try {
    $pdo = new PDO("mysql:host=localhost;dbname=login_pricetracker", "root", "");

    // Check if username already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->execute([$username]);

    if ($stmt->fetch()) {
        echo json_encode(["success" => false, "message" => "Username already exists."]);
        exit;
    }

    // Hash password and insert user
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->execute([$username, $hashedPassword]);

    echo json_encode(["success" => true, "message" => "Signup successful!"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Server error."]);
}
