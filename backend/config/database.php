<?php
// Salin nilai ini dari cPanel > MySQL Databases.
const DB_HOST = 'localhost';
const DB_NAME = 'cpaneluser_sdn_turi';
const DB_USER = 'cpaneluser_sdn_user';
const DB_PASS = 'GANTI_DENGAN_PASSWORD_DATABASE';
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123'; // Ganti sebelum website dipublikasikan.

function startApiSession(): void {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function database(): PDO {
    static $pdo;
    if ($pdo instanceof PDO) {
        return $pdo;
    }
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
    return $pdo;
}

function respond(mixed $data, int $status = 200): never {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function inputJson(): array {
    $input = json_decode(file_get_contents('php://input'), true);
    return is_array($input) ? $input : [];
}

function requireAdmin(): void {
    startApiSession();
    if (empty($_SESSION['admin_authenticated'])) {
        respond(['error' => 'Unauthorized'], 401);
    }
}

function clean(string $value): string {
    return trim($value);
}
