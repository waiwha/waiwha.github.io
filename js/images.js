var canvases = document.getElementsByClassName("cropped");
var context;
var images = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
var pics = ["DOG.png", "SKELE.png", "CRASH.png", "YARN.png", "PICKETS.png", "WOBBLE.png"];
var _x, _y;

images[0].onload = function(){
  cropImage(0);
}
images[0].src = pics[0];

images[1].onload = function(){
  cropImage(1);
}
images[1].src = pics[1];

images[2].onload = function(){
  cropImage(2);
}
images[2].src = pics[2];

images[3].onload = function(){
  cropImage(3);
}
images[3].src = pics[3];

images[4].onload = function(){
  cropImage(4);
}
images[4].src = pics[4];

images[5].onload = function(){
  cropImage(5);
}
images[5].src = pics[5];

function cropImage(val){
    context = canvases[val].getContext("2d");
    _x = Math.floor(Math.random()*1499);
    _y = Math.floor(Math.random()*1499);
    context.drawImage(images[val], _x, _y, 100, 100, 0, 0, canvases[val].width, canvases[val].height);
}