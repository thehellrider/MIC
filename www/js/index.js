var resultDiv;
document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}
function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
           /* var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled+"<br/>"+
			"<iframe src='"+result.text+"' style='position: absolute; height: 100%; width:100%; border: none' frameborder='0'>Tu celular no soporta iframes. Dirijete al siguiente <a href='"+result.text+"'>enlace</a></iframe>"; 
            resultDiv.innerHTML = s;	*/
			resultDiv.innerHTML = "<iframe src='"+result.text+"' style='position: absolute; height: 100%; width:100%; border: none' frameborder='0'>Tu celular no soporta iframes. Dirijete al siguiente <a href='"+result.text+"'>enlace</a></iframe>";
        },
        function (error) {
            alert("Error al escanear el codigo. Intenta nuevamente o verfica que sea un codigo valido: " + error);
        }
    );
}