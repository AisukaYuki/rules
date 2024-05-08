let body = $response.body;
body = body.replace('"sellStatus":3','"sellStatus":1');

console.log(body);
$done({body});
