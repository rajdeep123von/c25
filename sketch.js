var rain = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    rain[i] = new Rain();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < rain.length; i++) {
    rain[i].fall();
    rain[i].show();
  }
}
