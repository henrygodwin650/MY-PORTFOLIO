const html =`
 <div class="contact-message">
    <a href="mailto:henrygodwin650@gmail.com"  class="contact-card">📧 E-mail</a>
    <a href="https://github.com/henrygodwin650" target="_blank" class="contact-card">💻 GitHub</a>
 </div>     
`;

function endMessage(){
  let retun = document.querySelector('js-contracts');
  document.querySelector('.js-end').innerHTML = html;

  if('click'){
   setTimeout(()=> {
     document.querySelector('.js-end').innerHTML ='';
   }, 8000);
}
}
//Make language text interactive
const langButton = document.querySelector('.js-language');

langButton.addEventListener('click', () => {
  document.querySelector('.js-foot-message').innerHTML= footHTML;
})

const footHTML = `
  <div class="div-multi">
  💻 FRONT-END PROGRAMMING
    <p class="multi">HyperText Multi-languge</p>
    <p class="multi">Cascading Stylesheet</p>
    <p class="multi">JavaScript</p>
 </div>
`;
 const projectHTML = `
  <div class="div-multi">
  💻 PROJECTS
    <p class="multi"><a href="https://github.com/henrygodwin650/rock-paper-scissors/tree/master/Rock-Paper-Scissors">Rock-Paper-Scissors Game</p>
    <p class="multi"></p>
    <p class="multi"><a href="https://github.com/henrygodwin650/rock-paper-scissors/tree/master/javascript-amazon-project/javascript-amazon-project">JavaScript-Amazon-Project</p>
 </div>
`;
document.querySelector('.js-project').addEventListener('click', () => {
  document.querySelector('.js-foot-message').innerHTML= projectHTML;
})
document.body(alert('Welcome to my portfolio'));
/*
let isLanguage = false;
  let isProject = false;
  let intervalId;

 function clickProject (){
if (!isProject){
    intervalId = setInterval(() => {
      document.querySelector('.js-foot-message').innerHTML = '';
    }, 5000);
    isProject = true;
    document.querySelector('.js-foot-message').innerHTML= projectHTML;
  } else {
    clearInterval(intervalId, 500);
    isProject = false;
    document.querySelector('.js-foot-message').innerHTML= '';
  }
  if (!isLanguage){
    intervalId = setInterval(() => {
      document.querySelector('.js-foot-message').innerHTML = '';
    }, 5000);
    isLanguage = true;
    document.querySelector('.js-foot-message').innerHTML= footHTML;
  } else {
    clearInterval(intervalId, 500);
    isLanguage = false;
    document.querySelector('.js-foot-message').innerHTML= '';
  }
}
*/