let imgBox= document.getElementById("imgBox");
let qrImage= document.getElementById("qrImage");
let qrText= document.getElementById("inputText");

function GenerateQR(){
    if(qrText.value.length>0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+qrText.value;
        imgBox.setAttribute("class", "show-img");
    }
    else{
        alert("Text cannot be empty..")
    }
}