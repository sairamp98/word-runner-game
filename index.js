window.addEventListener('load',init);
let time = 0;
let score = 0;
let isPlaying;
let random;

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const timeLeft = document.getElementById("time");
const scoreCard = document.getElementById("score");
const msg = document.getElementById("message");

random = fetchWord(5).then(function(response) {
    console.log(response);
    //currentWord.innerHTML = response;
    return response;
});

async function fetchWord(length) {
    const word = await fetch("https://random-word-api.herokuapp.com/word"+"?length="+length);
    const response = await word.json();
    return response[0];
}
console.log(random);
function init(){

}