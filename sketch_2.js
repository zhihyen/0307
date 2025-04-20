function setup() {//設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //畫布背景顏色為a2d2ff
    background('#415a77')
      
    }
    
    function draw() { //畫圖函數，畫圖的地方
      //畫布的背景顏色為415a77
      background('#415a77');
      //計算圓形與方形的大小
      let size = map(mouseX, 0, windowWidth, 50, 200) 
      let spacing = size * 1.5;
    
      for (let x = spacing / 2; x < windowWidth; x += spacing) {
        for (let y = spacing / 2; y < windowHeight; y += spacing) {
          //畫方框的顏色為a2d2ff
          fill('#a2d2ff');
          //畫方框方框的邊框顏色為#edede9
          stroke('#edede9');
          //畫方框的邊框寬度為10
          strokeWeight(10);
          //在視窗的中間畫一個方框，以中心點為基準，方框的寬高為size
          rectMode(CENTER); //設定方框的模式為中心點
          rect(x, y, size, size); //畫方框
    
          //在視窗的中間畫一個圓，圓的寬高為size
          //圓的顏色為#bde0fe
          fill('#bde0fe');
          //圓的邊框顏色為#edede9
          stroke('#edede9');
          //圓的邊框寬度為10
          strokeWeight(10);
          ellipse(x, y, size, size);
        }
      }
    }
    
      //當視窗的大小改變時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    