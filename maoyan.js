let body = $response.body;
body = body.replace(/"hasInventory":false/g,'"hasInventory":true');
body = body.replace(/"stockable":false/g,'"stockable":true');
body = body.replace(/"showStatus":\d/g,'"showStatus":0');
body = body.replace(/"msg".+",/g,'"msg":"666",');
body = body.replace(/"success":false/g,'"success":true');
body = body.replace(/"code":\d+/g,'"code":200');
console.log(body)
$done({body});
