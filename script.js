// html script

let result = document.querySelector(`.result`);
let buttons = document.querySelectorAll(`span`);
// ***********************************
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(`click`, calc);
}
// ***********************************
let count = 0;
function calc (e) {

  if (count === 1) {
    result.textContent = `0`;
    count = 0
  }
  if (    
    (e.target.textContent.match(/[.]/)
    && 
    result.textContent.match(/[.]/))) {

  }else if (
    (e.target.textContent.match(/[*/+-]/)
    && 
    result.textContent[result.textContent.length - 1].match(/[*/+-]/))
    ){
      result.textContent = result.textContent.replace(result.textContent[result.textContent.length - 1],e.target.textContent)
  }else if (e.target.textContent === `=`) {

    console.log(typeof(result.textContent));
    result.textContent = eval(result.textContent) || 0;
    count++;

  } else if (
  (result.textContent === `0`) 
  && (e.target.textContent !== `*`) 
  && (e.target.textContent !== `/`)
  ) {
    result.textContent = e.target.textContent;
  } else {
    result.textContent += e.target.textContent;
  }

  if (e.target.textContent === `C`) {
    result.textContent = `0`;
  }
}