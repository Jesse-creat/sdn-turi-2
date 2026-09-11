<?php
require __DIR__ . '/config.php';
startApiSession();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    respond(['authenticated' => !empty($_SESSION['admin_authenticated'])]);
}

if ($method === 'POST') {
    $body = inputJson();
    if (($body['username'] ?? '') !== ADMIN_USER || ($body['password'] ?? '') !== ADMIN_PASS) {
        respond(['error' => 'Username atau password tidak sesuai.'], 401);
    }
    $_SESSION['admin_authenticated'] = true;
    respond(['authenticated' => true]);
}

if ($method === 'DELETE') {
    $_SESSION = [];
    session_destroy();
    respond(['authenticated' => false]);
}

respond(['error' => 'Method not allowed'], 405);
