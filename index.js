const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let censor = "dolor" 

function whySayThat(text, censor) {
    const textArray = text.split(' ');
    let index = textArray.indexOf(censor);
    if (index !== -1) {
        textArray[index] = "[redacted]";
    }
    const redactedText = textArray.join(" ");
    console.log (redactedText);
    return redactedText
}

/*alternative to using split

function whySayThat(text, censor) {
let redactedtext = text.replaceAll (censor , 'xxx');
console.log (redactedtext);
}

*/

/*Challenge 1*/

let redactedText = whySayThat (text, censor);
redactedText.split('[redacted]')
let censorcount = (redactedText.split('[redacted]').length-1);

console.log (censorcount);

/*Challenge 2*/

let text2 = prompt('enter text to filter');
let censor2 = prompt('enter word to filter out');
let replace2 = prompt('enter word to replace censored word')

function whySayThat(text2, censor2, replace2) {
    const textArray = text2.split(' ');
    let index = textArray.indexOf(censor2);
    if (index !== -1) {
        textArray[index] = replace2 ;
    }
    const redactedText = textArray.join(" ");
    console.log (redactedText);
    return redactedText
}

whySayThat(text2, censor2, replace2);