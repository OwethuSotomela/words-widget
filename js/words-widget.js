function WordsWidget(local) {
  let sentenceList = [];
  sentenceList = local;
  let message = "";
  let mySentence = "";

  function analyseWords(sentence) {
    let applyColor = "";
    console.log(sentence);
    if (sentence != undefined) {
      mySentence = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
      if (!sentenceList.includes(mySentence)) {
        sentenceList.push(mySentence);
      } else {
        message = "Enter a sentence..";
      }
    }
    let splitSentence = mySentence.split(" ");

    const longestWord = splitSentence.reduce(function (longest, currentWord) {
      if (currentWord.length > longest.length) {
        return currentWord;
      } else {
        return longest;
      }
    }, "");

    for (let i = 0; i < splitSentence.length; i++) {
      let defColor = splitSentence[i];

      if (defColor.length > 4) {
        if (defColor == longestWord) {
          applyColor += ` <mark style="background-color: #42CAFD"> ${longestWord} </mark>`;
        } else {
          applyColor += `<mark style="color:#110B11"> ${defColor} </mark>`;
        }
      } else {
        applyColor += defColor + " ";
      }
    }

    display.innerHTML = applyColor;
    counted.innerHTML =
      "You have " + mySentence.split(" ").length + " words in this sentence";
  }

  function getSentences() {
    return sentenceList;
  }

  return {
    analyseWords,
    getSentences,
  };
}
