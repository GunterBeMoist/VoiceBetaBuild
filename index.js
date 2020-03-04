function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

window.SpeechRecognition = window.webkitSpeechRecognition || 
window.SpeechRecognition;

if ('SpeechRecognition' in window) {
  // speech recognition API supported
} else {
  // speech recognition API not supported
}

const recognition = new window.SpeechRecognition();

var myGrammars = mySpeechRecognition.grammars;
mySpeechRecognition.grammars = mySpeechGrammarList;

var myLang = mySpeechRecognition.lang;
mySpeechRecognition.lang = 'en-US';

var myInterimResult = mySpeechRecognition.interimResults;
mySpeechRecognition.interimResults = false;

var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
mySpeechRecognition.maxAlternatives = 2;

mySpeechRecognition.start();

recognition.stop()
