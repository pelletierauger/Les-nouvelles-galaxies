let GET = {};
let query = window.location.search.substring(1).split("&");

for (let i = 0; i < query.length; i++) {
    if (query[i] === "") // check for trailing & with no param
        continue;
    var param = query[i].split("=");
    GET[param[0]] = param[1];
}

let exporting = (GET["exporting"] && GET["exporting"] == "true") ? true : false;

function frameExport() {
    var fileName = frameName;
    var dC = drawCount - 6000;
    var formattedFrameCount = "" + dC;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    fileName += "-" + formattedFrameCount;
    var dataUrl = canvasDOM.toDataURL();
    var data = {
        dataUrl: dataUrl,
        name: fileName
    }
    socket.emit('image', data);
}