window.addEventListener('load',init);
let time = 6;
let score = 0;
let isPlaying;
let random;
let wordLength = 4;

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const timeLeft = document.getElementById("time");
const scoreCard = document.getElementById("score");
const msg = document.getElementById("message");

async function fetchWord(length) {
    const word = await fetch("https://random-word-api.herokuapp.com/word"+"?length="+length);
    const response = await word.json();
    currentWord.innerHTML =  response[0];
}
console.log(random);
function init(){
    //load word on the screen
    fetchWord(wordLength);
    wordInput.addEventListener('input', matching);
    setInterval(timer, 1000);
    setInterval(checkStatus, 50);

}
function timer(){
    if(time>0) {
        time--;
    }
    else if(time===0) {
        isPlaying =false;
    }
    timeLeft.innerHTML = time;
}
function checkStatus() {
    if(!isPlaying && time===0) {
        msg.innerHTML = "Game Over! Retype the word to play again."
        wordInput.value = '';
        score = -1;
    }
}
function matching(){
    if(wordMatch()) {
        isPlaying = true;
        time = 6;
        score++;
        if(score<=10) {
            wordLength = 3 + Math.floor(Math.random()*3);
            console.log(wordLength);
        }
        else if(score>10 && score <=20) {
            wordLength = 3 + Math.floor(Math.random()*5);
            console.log(wordLength);
        }
        else{
            wordLength = 3 + Math.floor(Math.random()*8);
        }

        fetchWord(wordLength);
        wordInput.value = '';
    }
    if(score==-1) {
        scoreCard.innerHTML = '0';
    }
    else {
        scoreCard.innerHTML = score;
    }
}
function wordMatch(){
    if(wordInput.value == currentWord.innerHTML) {
        msg.innerHTML = 'Correct! Keep Going!';
        return true;
    }
    else{
        
        return false;
    }
}
timer();