function generateQR() {
    // Muestra la sección donde estará el QR
    const qrImageDiv = document.querySelector("#qr-image");
    const qrText = document.querySelector("#text").value;  // Cambié "texto" a "text"
    const qrWidth = document.querySelector("#width").value || 240;
    const qrHeight = document.querySelector("#height").value || 240;
    const qrImg = document.querySelector("#img");
    const errorMessage = document.querySelector("#qr-image .error");

    if (qrText.trim().length === 0) {
        errorMessage.innerHTML = "Por favor, introduzca los datos";
        errorMessage.style.color = "red";
        qrImg.style.display = "none";
    } else {
        qrImg.style.display = "block";
        errorMessage.innerHTML = "";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrWidth}x${qrHeight}&data=${encodeURIComponent(qrText)}`;
    }

    qrImageDiv.style.display = "block";
}

