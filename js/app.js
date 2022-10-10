//連結 Chrome 和 Firefox 上的 SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//要使用SpeechRecognition，要先建立一個SpeechRecognition物件
const recognition = new SpeechRecognition();
//套用物件
const mic = document.querySelector('#mic');
const colorful = document.querySelector('#colorful');
//點擊啟動
mic.onclick = () => {
  recognition.start();
}
//辨識有任何結果時會呼叫這個函數
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
//print
  console.log(color);
//連到背景
  colorful.style.backgroundColor = color;
}

