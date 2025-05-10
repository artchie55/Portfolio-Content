<?php
// Allow requests from React frontend (running on Vite's default port 5173)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Get JSON input from the frontend
$input = json_decode(file_get_contents("php://input"), true);
$username = $input["username"] ?? '';
$password = $input["password"] ?? '';

try {
    // Connect to MySQL
    $pdo = new PDO("mysql:host=localhost;dbname=login_pricetracker", "root", "");

    // Get user from database
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check password
    if ($user && password_verify($password, $user["password"])) {
        // On success, return success flag and message
        echo json_encode([
            "success" => true,
            "message" => "Login successful!",
            "username" => $username // Optionally, return the username if needed
        ]);
    } else {
        // On failure, return failure flag and message
        echo json_encode([
            "success" => false,
            "message" => "Invalid credentials."
        ]);
    }
} catch (Exception $e) {
    // If there's an error with the database connection or query
    echo json_encode([
        "success" => false,
        "message" => "Server error: " . $e->getMessage()
    ]);
}
