function setup() {
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB, 360, 100, 100);
  //設定初始背景顏色
  background(210, 30, 47);
}

function draw() {
  //不清除背景，保留軌跡
  //計算顏色隨著滑鼠X位置變化
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  //計算亮度隨著滑鼠Y位置變化
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  //設定圓的顏色
  fill(hue, 100, brightness);
  //計算邊框顏色隨著滑鼠X位置變化，從亮粉色漸變成白色
  let strokeHue = map(mouseX, 0, windowWidth, 300, 360);
  let strokeBrightness = map(mouseX, 0, windowWidth, 100, 0);
  //圓的邊框顏色為亮粉色漸變成白色
  stroke(strokeHue, 100, strokeBrightness);
  //圓的邊框寬度為5
  strokeWeight(2);
  //在滑鼠位置畫一個圓，圓的寬高為150x
  ellipse(mouseX, mouseY, 150,150);
}

function windowResized() {
  //當視窗的大小改變時，重新設定畫布的寬高
  resizeCanvas(windowWidth, windowHeight);
  //重新設定初始背景顏色
  background(210, 30, 47);
}
