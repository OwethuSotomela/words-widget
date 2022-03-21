let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");
let counted = document.querySelector(".counted");
let checkBox = document.querySelector(".hideCheck");

var sentenceStored = [];
if (localStorage["Last 5 Sentences"]) {
  sentenceStored = JSON.parse(localStorage.getItem("Last 5 Sentences"));
}

const wordsWidget = WordsWidget(sentenceStored);

function theseWords() {
  let analyseSentence = inputWords.value;
  wordsWidget.analyseWords(analyseSentence);
  localStorage.setItem('Last 5 Sentences', JSON.stringify(wordsWidget.getSentences()));
}

function hideWords() {
  let checkBox = document.querySelector("input[name='hideCheck']:checked");
  let color = "";

  if (checkBox) {
    let hideCheck = checkBox.value;
    if (hideCheck != "") {
      let color = "";

      if (sentenceAnalyze != "") {
        var sentenceAnalyze = inputWords.value[0].toUpperCase() + inputWords.value.slice(1).toLowerCase();
      } else {
        feedback.innerHTML = "Enter a sentence to analyze..!";
      }

      let myColored = sentenceAnalyze.split(" ");

      for (let i = 0; i < myColored.length; i++) {
        let newColor = myColored[i];
        if (newColor.length > 5) {
          color += `<mark style="color:#110B11"> ${newColor} </mark>`;
        } else {
          color += " " + " ";
        }
      }
      display.innerHTML = color;
    }
  } else {
    let sentenceAnalyze =
      inputWords.value[0].toUpperCase() +
      inputWords.value.slice(1).toLowerCase();
    let myColored = sentenceAnalyze.split(" ");
    for (let i = 0; i < myColored.length; i++) {
      let newColor = myColored[i];
      if (newColor.length > 4) {
        color += `<mark style="color:#110B11"> ${newColor} </mark>`;
      } else {
        color += newColor + " ";
      }
      display.innerHTML = color;
    }
  }
}


btn.addEventListener("click", theseWords);
checkBox.addEventListener("click", hideWords);
