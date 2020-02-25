let who = [dog, grandma, mom,brother]
let what = [eat, piss, crushed, ate, pooped]
let when = [in the morning, right before class, in the middle of the night,]


function pickRandom(wordArray) {
    let lengthOfArray = wordArray.length - 1;
    let randomNumber = Math.round(Math.random() * lengthOfArray);
    return wordArray[randomNumber];
  }