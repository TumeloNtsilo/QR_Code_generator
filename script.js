//Create a fuction that creates the QR Code image:
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let inputText = document.getElementById("inputText")

function generateImage () {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
}