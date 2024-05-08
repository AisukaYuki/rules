let body = $response.body;
body = body.replace('"hasInventory":false','"hasInventory":true');
body = body.replace(/"showStatus":\d/,'"showStatus":0');

console.log(body);
$done({body});
