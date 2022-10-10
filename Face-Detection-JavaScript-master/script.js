const video = document.getElementById('video')
//載入模型
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)
//開啟webcam, 把webcam引入video 顯示
function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}
//播放
video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)//插入畫布
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)//設定顯示尺寸
  setInterval(async () => {//每 100ms 去繪製
//識別位置, 輪廓, 表情
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)//清空畫布
    faceapi.draw.drawDetections(canvas, resizedDetections)//臉部探測
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)//輪廓顯示
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)//表情顯示
  }, 100)
})