<?php
require __DIR__ . '/../config/database.php';
startApiSession();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $rows = database()->query('SELECT id, title, excerpt, article_date AS date, image_url AS image FROM articles ORDER BY created_at DESC')->fetchAll();
    respond($rows);
}

requireAdmin();
$pdo = database();

if ($method === 'POST') {
    $body = inputJson();
    $title = clean((string)($body['title'] ?? ''));
    $excerpt = clean((string)($body['excerpt'] ?? ''));
    $date = clean((string)($body['date'] ?? ''));
    if ($title === '' || $excerpt === '' || $date === '') {
        respond(['error' => 'Judul, tanggal, dan ringkasan wajib diisi.'], 422);
    }

    $imageUrl = null;
    if (!empty($body['image']) && preg_match('/^data:image\/(jpeg|png|webp|gif);base64,/', $body['image'], $match)) {
        $binary = base64_decode(substr($body['image'], strpos($body['image'], ',') + 1), true);
        if ($binary === false || strlen($binary) > 2 * 1024 * 1024) {
            respond(['error' => 'Gambar tidak valid atau lebih besar dari 2 MB.'], 422);
        }
        $extension = $match[1] === 'jpeg' ? 'jpg' : $match[1];
        $directory = __DIR__ . '/../uploads/articles';
        if (!is_dir($directory)) mkdir($directory, 0755, true);
        $filename = bin2hex(random_bytes(12)) . '.' . $extension;
        file_put_contents($directory . '/' . $filename, $binary);
        $imageUrl = 'uploads/articles/' . $filename;
    }

    if (!empty($body['id'])) {
        $statement = $pdo->prepare('UPDATE articles SET title = ?, excerpt = ?, article_date = ?, image_url = COALESCE(?, image_url) WHERE id = ?');
        $statement->execute([$title, $excerpt, $date, $imageUrl, (int)$body['id']]);
        respond(['id' => (int)$body['id'], 'title' => $title, 'excerpt' => $excerpt, 'date' => $date, 'image' => $imageUrl]);
    }

    $statement = $pdo->prepare('INSERT INTO articles (title, excerpt, article_date, image_url) VALUES (?, ?, ?, ?)');
    $statement->execute([$title, $excerpt, $date, $imageUrl]);
    respond(['id' => (int)$pdo->lastInsertId(), 'title' => $title, 'excerpt' => $excerpt, 'date' => $date, 'image' => $imageUrl], 201);
}

if ($method === 'DELETE') {
    $body = inputJson();
    $statement = $pdo->prepare('DELETE FROM articles WHERE id = ?');
    $statement->execute([(int)($body['id'] ?? 0)]);
    respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
