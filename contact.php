<?php
// Basic enquiry handler for GoDaddy cPanel hosting.
// IMPORTANT: Confirm the recipient email address before publishing.
$recipient = "info@abhijitenterprises.in";
function clean($value) {
    return trim(str_replace(["\r", "\n"], " ", (string)$value));
}
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html#contact");
    exit;
}
$name = clean($_POST["name"] ?? "");
$phone = clean($_POST["phone"] ?? "");
$service = clean($_POST["service"] ?? "");
$message = trim((string)($_POST["message"] ?? ""));
if ($name === "" || $phone === "" || $service === "" || strlen($message) > 1500) {
    http_response_code(400);
    echo "Please go back and complete the required fields.";
    exit;
}
$subject = "Website enquiry - " . $service;
$body = "New enquiry from Abhijit Enterprises website\n\n"
      . "Name: $name\nMobile: $phone\nService: $service\n\nMessage:\n$message\n";
$headers = "From: Website Enquiry <no-reply@" . ($_SERVER["HTTP_HOST"] ?? "abhijitenterprises.in") . ">\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";
if (mail($recipient, $subject, $body, $headers)) {
    header("Location: thank-you.html");
    exit;
}
http_response_code(500);
echo "We could not send your enquiry right now. Please contact us on 8208361003.";
?>
