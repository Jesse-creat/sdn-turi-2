<?php
require __DIR__ . '/../config/database.php';
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $rows = database()->query('SELECT id, title AS judul, achievement_year AS tahun, level AS tingkat FROM achievements ORDER BY created_at DESC')->fetchAll();
    respond($rows);
}

requireAdmin();
$pdo = database();

if ($method === 'POST') {
    $body = inputJson();
    $title = clean((string)($body['judul'] ?? ''));
    $year = clean((string)($body['tahun'] ?? ''));
    $level = clean((string)($body['tingkat'] ?? ''));
    if ($title === '' || $year === '' || $level === '') {
        respond(['error' => 'Semua kolom prestasi wajib diisi.'], 422);
    }

    if (!empty($body['id'])) {
        $statement = $pdo->prepare('UPDATE achievements SET title = ?, achievement_year = ?, level = ? WHERE id = ?');
        $statement->execute([$title, $year, $level, (int)$body['id']]);
        respond(['id' => (int)$body['id'], 'judul' => $title, 'tahun' => $year, 'tingkat' => $level]);
    }

    $statement = $pdo->prepare('INSERT INTO achievements (title, achievement_year, level) VALUES (?, ?, ?)');
    $statement->execute([$title, $year, $level]);
    respond(['id' => (int)$pdo->lastInsertId(), 'judul' => $title, 'tahun' => $year, 'tingkat' => $level], 201);
}

if ($method === 'DELETE') {
    $body = inputJson();
    $statement = $pdo->prepare('DELETE FROM achievements WHERE id = ?');
    $statement->execute([(int)($body['id'] ?? 0)]);
    respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);