function WordsWidget(local) {
  let sentenceList = [];
  sentenceList = local;
  let message = "";
  let mySentence = "";

  function analyseWords(sentence) {
    let applyColor = "";

    if (sentence != undefined) {
      mySentence = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
      if (!sentenceList.includes(mySentence)) {
        sentenceList.push(mySentence);
      } else {
        message = "Enter a sentence..";
      }
    }
    let splitSentence = mySentence.split(" ");

    const longestWord = splitSentence.reduce((longest, currentWord) => {
        if (currentWord.length > longest.length) {
          return currentWord;
        } else {
          return longest;
        }
      }, "");

    for (let i = 0; i < splitSentence.length; i++) {
      let defColor = splitSentence[i];

      if (defColor.length > 4) {
        if (defColor.length == longestWord.length) {
          applyColor += `<mark style="background-color:#42CAFD;"> ${longestWord} </mark>`;
        } else {
          applyColor += `<mark style="color:#110B11"> ${defColor} </mark>`;
        }
      } else {
        applyColor += defColor + " ";
      }
    }
    
    let count = 0;
    for (let i = 0; i < sentenceList.length; i++) {
      count += sentenceList[i].split(" ").length;
    }
    let average = count / sentenceList.length;
    console.log(average);
    feedback.innerHTML = `Average words: ${average}`;


    display.innerHTML = applyColor;
    counted.innerHTML =
      "You have " + mySentence.split(" ").length + " words in this sentence";
  }

  function getSentences() {
    return sentenceList;
  }

  function getMessage() {
    return message;
  }

  function hideShortWords() {
    let checkBox = document.querySelector("input[name='hideCheck']:checked");
    let applyColor = "";

    if (checkBox) {
      mySentence =
        mySentence[0].toUpperCase() + mySentence.slice(1).toLowerCase();

      let splitSentence = mySentence.split(" ");
      for (let i = 0; i < splitSentence.length; i++) {
        let defColor = splitSentence[i];
        if (defColor.length > 5) {
          applyColor += `<mark style="color:#110B11"> ${defColor} </mark>`;
        } else {
          applyColor += " " + " ";
        }
      }
      display.innerHTML = applyColor;
    } else {
      mySentence =
        mySentence[0].toUpperCase() + mySentence.slice(1).toLowerCase();
      let splitSentence = mySentence.split(" ");
      for (let i = 0; i < splitSentence.length; i++) {
        let defColor = splitSentence[i];
        if (defColor.length > 4) {
          applyColor += `<mark style="color:#110B11"> ${defColor} </mark>`;
        } else {
          applyColor += defColor + " ";
        }
        display.innerHTML = applyColor;
      }
    }
  }

  function clearLocalStorage() {
    setTimeout(() => {
      localStorage.clear(), location.reload();
      feedback.innerHTML = "LocalStorage will be cleared in a second..!";
    }, 1000);
  }

  return {
    analyseWords,
    getSentences,
    getMessage,
    hideShortWords,
    clearLocalStorage,
  };
}
