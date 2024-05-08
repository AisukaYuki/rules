let body = $response.body;
body = body.replace('"hasInventory":false','"hasInventory":true');
body = body.replace('"stockable":false','"stockable":true');

console.log(body);
$done({body});
