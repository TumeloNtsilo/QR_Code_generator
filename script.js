//Create a fuction that creates the QR Code image:
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let inputText = document.getElementById("inputText")

function generateImage () {

    if(inputText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
    imgBox.classList.add("show-img");

    }else {
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000)
    }
}