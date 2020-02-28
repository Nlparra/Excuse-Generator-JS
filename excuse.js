let who = ["Dog", "Mom", "Dad", "Evil Twin", "self", "Boss", "girlfriend"]
let what = ["pooped", "destroyed", "shredded","pissed","stepped on","ate"]
let when = ["last night","this morning","just now","a second ago","3 years ago"]

pickRandomIndexNumber = (array) => {
 return Math.floor(Math.random()* array.length);
}


randomSentence = () => {
     return `My ${who[pickRandomIndexNumber(who)]} ${what[pickRandomIndexNumber(what)]} my scientific report ${when[pickRandomIndexNumber(when)]}`;
}


generateSentence = () => {
let x = randomSentence();
document.querySelector("#excuse").innerHTML = x;
}



