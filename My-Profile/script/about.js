const typedText = document.querySelector(".js-typed-text");
const textArray = ["FRONT-END DEVELOPER", "FULL TIME SOFTWARE DEVELOPER"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

const images = ['/images/IMG_20250906_094334_361.jpg', '/images/IMG_20250906_094359_501.jpg', '/images/Snapchat-147892830.jpg'];

let index = 0;

function changeImage (){
  const imgElement = document.getElementById('slideshow');

  imgElement.src = images[index];

  index++;
  if(index >= images.length) {
    index = 0;
  }
}

setInterval(changeImage,3000);
document.body(alert('Welcome to About me'));