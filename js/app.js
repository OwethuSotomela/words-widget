let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");
let counted = document.querySelector(".counted");
let checkBox = document.querySelector(".hideCheck");
let longWordBtn = document.querySelector(".longBtn");

let sentenceAnalyze = inputWords.value;

function theseWords() {
  let color = "";

  if (sentenceAnalyze != "") {
    var sentenceAnalyze =
      inputWords.value[0].toUpperCase() +
      inputWords.value.slice(1).toLowerCase();
  } else {
    feedback.innerHTML = "Enter a sentence to analyze..!";
  }

  let myColored = sentenceAnalyze.split(" ");

  for (let i = 0; i < myColored.length; i++) {
    let newColor = myColored[i];

    if (newColor.length > 4) {
      color += `<mark style="color:#110B11">  ${newColor}  </mark>`;
    } else {
      color += newColor + " ";
    }
  }
  display.innerHTML = color;

  counted.innerHTML =
    "You have " + sentenceAnalyze.split(" ").length + " words in this sentence";
}

function hideWords() {
  let checkBox = document.querySelector("input[name='hideCheck']:checked");
  let color = "";

  if (checkBox) {
    let hideCheck = checkBox.value;
    if (hideCheck != "") {
      let color = "";

      if (sentenceAnalyze != "") {
        var sentenceAnalyze =
          inputWords.value[0].toUpperCase() +
          inputWords.value.slice(1).toLowerCase();
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

function findLongestWord() {
  if (sentenceAnalyze != "") {
    var sentenceAnalyze =
      inputWords.value[0].toUpperCase() +
      inputWords.value.slice(1).toLowerCase();
  }
  let myColored = sentenceAnalyze.split(" ");
  const longestWord = myColored.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) {
      return currentWord;
    } else {
      return longest;
    }
  }, "");

  console.log(longestWord);

  let color = "";
  for (let i = 0; i < myColored.length; i++) {
    let newColor = myColored[i];
    if (newColor.length > 5 ) {
      if (newColor == longestWord) {
        color += ` <mark style="background-color: #42CAFD"> ${longestWord} </mark>`;
      } else {
        color += `<mark style="color:#110B11"> ${newColor} </mark>`;
      }
    } else {
      color += "";
    }
  }
  display.innerHTML = color;
}

btn.addEventListener("click", theseWords);
checkBox.addEventListener("click", hideWords);
longWordBtn.addEventListener("click", findLongestWord);
