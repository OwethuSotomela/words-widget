let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");

let sentence = [];
let sentenceAnalyze = inputWords.value;

function theseWords() {
  if (sentenceAnalyze != "") {
    var sentenceAnalyze = inputWords.value;
  }
  if (sentenceAnalyze == "") {
    feedback.innerHTML = "Enter a sentence to analyze..!";
  } else {
    if (!sentence.includes(sentenceAnalyze)) {
      sentence.push(sentenceAnalyze);
    }
  }

  console.log(sentenceAnalyze);
  console.log(sentence);
  display.innerHTML = sentence;
  return sentence;
}

btn.addEventListener("click", theseWords);
