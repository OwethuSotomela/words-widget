let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");
let counted = document.querySelector(".counted");

let sentenceAnalyze = inputWords.value;

function theseWords() {
  let color = "";
  if (sentenceAnalyze != "") {
    var sentenceAnalyze = inputWords.value;
  }
  if (sentenceAnalyze == "") {
    feedback.innerHTML = "Enter a sentence to analyze..!";
  }

  let myColored = sentenceAnalyze.split(" ");

  for (let i = 0; i < myColored.length; i++) {
    let newColor = myColored[i];
    console.log(newColor);
    if (newColor.length > 4) {
      color += `<mark style="color: #157F1F">  ${newColor}  </mark>`;
    } else {
      color += newColor;
    }
  }
  display.innerHTML = color;

  counted.innerHTML = sentenceAnalyze.split(" ").length;
  sentenceAnalyze.split(" ").length;
}

btn.addEventListener("click", theseWords);
