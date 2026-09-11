<?php
require __DIR__ . '/config.php';
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $rows = database()->query('SELECT id, title, activity_date AS date, location, description FROM activities ORDER BY created_at DESC')->fetchAll();
    respond($rows);
}

requireAdmin();
$pdo = database();

if ($method === 'POST') {
    $body = inputJson();
    $title = clean((string)($body['title'] ?? ''));
    $date = clean((string)($body['date'] ?? ''));
    $location = clean((string)($body['location'] ?? ''));
    $description = clean((string)($body['description'] ?? ''));
    if ($title === '' || $date === '' || $location === '' || $description === '') {
        respond(['error' => 'Semua kolom kegiatan wajib diisi.'], 422);
    }

    if (!empty($body['id'])) {
        $statement = $pdo->prepare('UPDATE activities SET title = ?, activity_date = ?, location = ?, description = ? WHERE id = ?');
        $statement->execute([$title, $date, $location, $description, (int)$body['id']]);
        respond(['id' => (int)$body['id'], 'title' => $title, 'date' => $date, 'location' => $location, 'description' => $description]);
    }

    $statement = $pdo->prepare('INSERT INTO activities (title, activity_date, location, description) VALUES (?, ?, ?, ?)');
    $statement->execute([$title, $date, $location, $description]);
    respond(['id' => (int)$pdo->lastInsertId(), 'title' => $title, 'date' => $date, 'location' => $location, 'description' => $description], 201);
}

if ($method === 'DELETE') {
    $body = inputJson();
    $statement = $pdo->prepare('DELETE FROM activities WHERE id = ?');
    $statement->execute([(int)($body['id'] ?? 0)]);
    respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
