let body = $request.body;
body = body.replace(/"sellStatus":\d/,'"sellStatus":1');

console.log(body)
$done({body});
