let body = $response.body;
body = body.replace(/"hasInventory":false/g,'"hasInventory":true');
body = body.replace(/"stockable":false/g,'"stockable":true');
body = body.replace(/"showStatus":\d/g,'"showStatus":0');

console.log(body)
$done({body});
