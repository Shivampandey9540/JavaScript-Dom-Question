const logo = document.querySelector(".logo");

const img = document.createElement("img");
// const icon = document.querySelector(".icon-logo");

img.src = "https://ineuron.ai/images/ineuron-logo.png";

logo.removeChild(logo.firstElementChild);
logo.appendChild(img);
