/*
const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
*/
function whySayThat(text, censor, replace) {
let textArray = text.split(' ');
let censorArray = censor.split(' ');
let counter = 0;
    for (i=0; i < textArray.length; i ++) {
        for (j=0; j < censorArray.length; j++) {
            if (textArray[i] == censorArray[j]) {
            textArray[i] = replace;
            counter +=1;
            }
        }
    }
    const output = textArray.join(" ");
    console.log (output);
    console.log (`${counter} words were changed`);
}

let text = prompt('enter text to filter');
let censor = prompt('enter word(s) to filter out (insert space between each word)');
let replace = prompt('enter word to replace censored word');
whySayThat(text, censor, replace);