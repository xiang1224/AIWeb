
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const mic = document.querySelector('#mic');
const colorful = document.querySelector('#colorful');
mic.onclick = () => {
  recognition.start();
}
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  console.log(color);
  colorful.style.backgroundColor = color;
}

