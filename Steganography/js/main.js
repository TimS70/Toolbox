var start = null;
var hide = null;
var output = null;

function upload(bId) {
  if (bId == "fMessage") {
    hide = new SimpleImage(document.getElementById("fMessage"));
    hide.drawTo(document.getElementById("canMessage"));
  }
  else if (bId == "fCover") {
    start = new SimpleImage(document.getElementById("fCover"));
    start.drawTo(document.getElementById("canCover"));
  }
}

function ClickCrop() {
  var minWidth = Math.min(hide.getWidth(), start.getWidth());
  var minHeight = Math.min(hide.getHeight(), start.getHeight());
  hide = crop(hide, minWidth, minHeight);
  start = crop(start, minWidth, minHeight);
  hide.drawTo(document.getElementById("canMessage"));
  start.drawTo(document.getElementById("canCover"));

}

function crop(image, width, height) {
  var CroppedImage = new SimpleImage(width, height);

  for (var pixel of image.values()) {
    if ((pixel.getX() < width) && (pixel.getY() < height)) {
      CroppedImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
  }
  image = CroppedImage;
  return image;
}

function encrypt() {
  start = chop2Hide(start);
  hide = shift(hide);
  output = combine(start, hide);
  output.drawTo(document.getElementById("canOutput"));
  ClickTest();
}

function ClickTest() {
    var x = hide.getWidth()/2;
    var y = hide.getHeight()/2;
    document.getElementById("HideText").innerHTML=test(hide, x, y);
    document.getElementById("StartText").innerHTML=test(start, x, y);
    document.getElementById("OutputText").innerHTML=test(output, x, y);
}

function test(image, x, y) {
  var pixel = image.getPixel(x, y);
  var r = pixel.getRed();
  var g = pixel.getGreen();
  var b = pixel.getBlue();
  var rgb = "r:" + r + "; g:" + g + "; b:" + b + ";";
  return rgb;
}

function clearbits(colorval) {
  var x = Math.floor(colorval/16)*16;
  return x;
}

function shift(image) {
  for (var pixel of image.values()) {
    pixel.setRed(Math.floor(pixel.getRed()/16));
    pixel.setGreen(Math.floor(pixel.getGreen()/16));
    pixel.setBlue(Math.floor(pixel.getBlue()/16));
  }
  return image;
}

function chop2Hide(image) {
  for (var pixel of image.values()) {
    pixel.setRed(clearbits(pixel.getRed()));
    pixel.setGreen(clearbits(pixel.getGreen()));
    pixel.setBlue(clearbits(pixel.getBlue()));
  }
  return image;
}

function combine(show, hide) {
  var output = new SimpleImage(show.getWidth(), show.getHeight());

  for (var pixel of output.values()) {
    var showPixel = show.getPixel(pixel.getX(), pixel.getY());
    var hidePixel = hide.getPixel(pixel.getX(), pixel.getY());

    var r = showPixel.getRed() + hidePixel.getRed();
    var g = showPixel.getGreen() + hidePixel.getGreen();
    var b = showPixel.getBlue() + hidePixel.getBlue();

    pixel.setRed(r);
    pixel.setGreen(g);
    pixel.setBlue(b);
  }
  return output;
}
