const typedText = document.querySelector('.js-message');
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

function callSidebar() {
const menuToggle = document.querySelector('.js-side-menu');
const navLinks = document.querySelector('.js-side-bar');

navLinks.classList.toggle('visible');
console.log(navLinks)
}

const visitLink = `
 <div class="visit">
  <button class="link-button1 js-visit-link">
    <a href="mailto:henrygodwin650@gmail.com">
      Mail me
    </a>
  </button>

  <a>
    <button class="link-button1 js-cancel-link"
    onclick="canCel();">
     Cancel
    </button>
   </a>
 </div>
`;
document.querySelector('.js-email').addEventListener('click', () => {
  document.querySelector('.js-button-link').innerHTML = visitLink;
})

const visitLink1 = `
 <div class="visit">
  <button class="link-button1 js-visit-link">
   <a href="https://slack.com" target="_blank"> Visit </a>
  </button>
  <button class="link-button1 js-cancel-link"
   onclick="canCel();"> Cancel </button>
 </div>
`;
document.querySelector('.js-slack').addEventListener('click', () => {
  document.querySelector('.js-button-link').innerHTML = visitLink1;
})

const visitLink2 = `
 <div class="visit">
  <button class="link-button1 js-visit-link">
   <a href="https://github.com/henrygodwin650" target="_blank"> Visit Link</a>
  </button>
  <button class="link-button1 js-cancel-link"
   onclick="canCel();"> Cancel </button>
 </div>
`;
document.querySelector('.js-github').addEventListener('click', () => {
  document.querySelector('.js-button-link').innerHTML = visitLink2;
})

function canCel(){
  document.querySelector('.js-button-link').innerHTML='';
}