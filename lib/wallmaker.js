var add = function(what) {
  switch(what) {
    case 'door':
      canvas.add(rect(100, 100, 60, 100));
      break;

    case 'window':
      canvas.add(rect(100, 100, 100, 100));
      break;
  }
}

var rect = function(top, left, width, height) {
  return new fabric.Rect({
      top: top,
      left: left,
      width: width,
      height: height,
      fill: 'red'
  });
}


var canvas = new fabric.Canvas('canvas');

$(function() {
  $('.control').on('click', function() {
    add($(this).data('add'));
  })
})