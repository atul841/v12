<?php

header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

require __DIR__ . '/db.php';


$name  = trim($_POST['name']  ?? '');
$phone = preg_replace('/\s+/', '', $_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');


if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Invalid input']);
  exit;
}

$ip   = $_SERVER['REMOTE_ADDR'] ?? null;
$ua   = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255);

try {
  $stmt = $pdo->prepare(
    "INSERT INTO leads (name, phone, email, ip_address, user_agent)
     VALUES (:name, :phone, :email, :ip, :ua)"
  );
  $stmt->execute([
    ':name'  => $name,
    ':phone' => $phone,
    ':email' => $email,
    ':ip'    => $ip,
    ':ua'    => $ua,
  ]);

  echo json_encode(['ok' => true, 'id' => $pdo->lastInsertId()]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Insert failed']);
}
