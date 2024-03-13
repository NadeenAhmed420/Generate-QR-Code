const qrImg = document.querySelector(".qr-img");
const qrText = document.querySelector(".qr-text");
const imgBox = document.querySelector(".img-box");
const generateBtn = document.querySelector(".generate-btn");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    imgBox.classList.remove("show-img");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 2000);
  }
}

generateBtn.addEventListener("click", generateQR);
