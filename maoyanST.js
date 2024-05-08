let body = $response.body;
body = body.replace(/"msg".+",/g,'"msg":"666",');
body = body.replace(/"success":false/g,'"success":true');
body = body.replace(/"code":\d+/g,'"code":200');

console.log(body)
$done({body});
