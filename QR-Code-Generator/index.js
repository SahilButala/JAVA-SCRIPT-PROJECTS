const Qrcodebtn = document.querySelector(".Qr-code-btn");
const QRCodecontainer = document.querySelector(".QR-Code-container");
const input = document.querySelector(".input");
const error = document.querySelector(".error");
console.log(error);

Qrcodebtn.addEventListener("click", () => {
  if (!input.value) {
    error.innerHTML = "type Somthing to generate the code";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
  } else {
    GenerateCode();
  }
});

function GenerateCode() {
  new QRCode(QRCodecontainer, {
    text: input.value,
    height: 400,
    width: 400,
    colorLight: "#fff",
    colorDark: "#000",
  });
}