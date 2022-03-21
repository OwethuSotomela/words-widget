let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");
let counted = document.querySelector(".counted");
let checkBox = document.querySelector(".hideCheck");
let resetBtn = document.querySelector(".reset");

var sentenceStored = [];
if (localStorage["Last 5 Sentences"]) {
  sentenceStored = JSON.parse(localStorage.getItem("Last 5 Sentences"));
}

const wordsWidget = WordsWidget(sentenceStored);

function theseWords() {
  let analyseSentence = inputWords.value;
  wordsWidget.analyseWords(analyseSentence);
  localStorage.setItem(
    "Last 5 Sentences",
    JSON.stringify(wordsWidget.getSentences())
  );
}

function hideWords() {
  wordsWidget.hideShortWords();
}

function localStorageClear() {
  wordsWidget.clearLocalStorage();
}

btn.addEventListener("click", theseWords);
checkBox.addEventListener("click", hideWords);
resetBtn.addEventListener("click", localStorageClear);
