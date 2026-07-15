<?php
// Badri Marine contact form mailer
// Sends the submitted contact form to the configured inbox
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function clean($v) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], '', (string)$v));
}

$first   = clean($_POST['first_name'] ?? '');
$last    = clean($_POST['last_name']  ?? '');
$email   = clean($_POST['email']      ?? '');
$company = clean($_POST['company']    ?? '');
$service = clean($_POST['service']    ?? '');
$budget  = clean($_POST['budget']     ?? '');
$message = trim($_POST['message']     ?? '');

if ($first === '' || $last === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please complete all required fields with a valid email.']);
    exit;
}

$to          = 'info@badrimarine.com';
$fromDomain  = 'badrimarine.com';
$fromAddress = 'no-reply@' . $fromDomain;
$subject     = 'New Quote Request - Badri Marine';

$body  = "New quote request from the Badri Marine website\n";
$body .= "---------------------------------------------------\n\n";
$body .= "Name:    {$first} {$last}\n";
$body .= "Email:   {$email}\n";
$body .= "Company: " . ($company !== '' ? $company : '-') . "\n";
$body .= "Service: " . ($service !== '' ? $service : '-') . "\n";
$body .= "Budget:  " . ($budget  !== '' ? $budget  : '-') . "\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "---------------------------------------------------\n";
$body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP:        " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

$replyName = clean($first . ' ' . $last);
$headers  = "From: Badri Marine Website <{$fromAddress}>\r\n";
$headers .= "Reply-To: {$replyName} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = @mail($to, $subject, $body, $headers, "-f {$fromAddress}");

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Please email info@badrimarine.com directly.']);
}
