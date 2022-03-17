let inputWords = document.querySelector(".words");
let feedback = document.querySelector(".feedback");
let display = document.querySelector(".footer");
let btn = document.querySelector(".analyzeBtn");
let counted = document.querySelector(".counted");
let checkBox = document.querySelector(".hideCheck");
let longBtn = document.querySelector(".longBtn");
// let checkMe = document.querySelector(".checkMe");
// let longWord = document.querySelector(".long")

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
      color += `<mark style="color:#157F1F">  ${newColor}  </mark>`;
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

  if (checkBox) {
    var hideCheck = checkBox.value;
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
          color += `<mark style="color:#157F1F"> ${newColor} </mark>`;
        } else {
          color += " " + " ";
        }
      }
      display.innerHTML = color;
    }
  } else {
    display.innerHTML =
      inputWords.value[0].toUpperCase() +
      inputWords.value.slice(1).toLowerCase();
    // console.log(inputWords.value);
  }
}

btn.addEventListener("click", theseWords);
checkBox.addEventListener("click", hideWords);
