if (!$response.body) {
    $done({});
    return;
}

//var body = JSON.parse($response.body)
//body.result.pvcstatus = 2;
//body.result.pvcversion = 2;
var body = "";

$done({
    body: JSON.stringify(body)
});
