let seriously;
let capture;
var slider1;
var slider3;

var vid;

/*
function preload() {
  //vid = createVideo(['https://video.wixstatic.com/video/d3d3a7_13e9e91a05b240d7ae3f966f86ccd1de/1080p/mp4/file.mp4']);
  vid = createVideo("Laura Test 1 A003_11152354_C001.MOV");
  
  //vid = createVideo(['https://i.imgur.com/0AUMwf4.mp4']); 
  vid.hide();
  }
*/


function setup() {
  let canvas = createCanvas(1080, 1920, WEBGL);
  canvas.id('p5canvas');  
  
  
  //registerPreloadMethod(createVideo);

  //vid = createVideo('https://www.w3schools.com/html/mov_bbb.mp4');
  
  
  //https://www.w3schools.com/html/mov_bbb.mp4
  //vid = createVideo(['https://video.wixstatic.com/video/d3d3a7_13e9e91a05b240d7ae3f966f86ccd1de/1080p/mp4/file.mp4']);
  vid = createVideo("3lixlow.MOV");
  vid.loop();
  vid.speed(1); //max3
  vid.id('p5video');
  vid.hide();
  
  slider1 = createSlider(0, 0.2, 0, 0.01);
  slider1.id('effect-slider1');
  slider3 = createSlider(-3, 3, 0, 0.01);
  slider3.id('effect-slider3');
  
  seriously = new Seriously();
  
  let src = seriously.source('#p5video');
  let target = seriously.target('#p5canvas');
  
  var effect = seriously.effect('tvglitch');
  effect.distortion = '#effect-slider1';
  effect.scanLines = 0;
  effect.lineSync = '#effect-slider3';
  effect.source = src;
  target.source = effect;
  
  // uncomment the following line to see the webcam without effects
  // target.source = src;
  
  
}

function draw() {
  seriously.go();
  //poner la letra PNG al abrir la pagina y ocultar / solo la primera vez
  // conectar efecto 1 y 3 con la velocidad del viento
}

function windowResized() {
  resizeCanvas((windowHeight-50)*9/16, windowHeight-50);
}
