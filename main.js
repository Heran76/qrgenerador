function generateQR() {
    document.querySelector("#qr-image").style.display = "block";
    let QRtext = document.querySelector("#text").value;
    let { value: QRwidth } = document.querySelector("#width");
    let { value: QRheight } = document.querySelector("#height");
    if(QRtext.trim().length == 0) {
        document.querySelector("#qr-image .error").innerHTML = "Porfavor introduzca los datos";
        document.querySelector("#qr-image .error").style.color="red";
        document.querySelector("#img").style.display = "none";
    } else {
        document.querySelector("#img").style.display = "block";
        document.querySelector("#qr-image .error").innerHTML = "";
        document.querySelector("#img").src = `gi/?size=${getDimension(QRwidth)}x${getDimension(QRheight)}&data=${QRtext}`;
    }
}

function getDimension(dimension){
    return dimension.length === 0 ? 240 : dimension
}