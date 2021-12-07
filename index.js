/* Drag and Drop code adapted from http://www.html5rocks.com/en/tutorials/dnd/basics/ */

var org_image_url = "./1.jpg";

var canvas = (this.__canvas = new fabric.Canvas("canvas", {
  hoverCursor: "pointer",
  selection: false,
  targetFindTolerance: 2,
  backgroundColor: "green"
}));

// removing borders to Fabric items

// adding background image (i.e. image with text boundings) to the canvas
fabric.Image.fromURL(org_image_url, function (img) {
  img.set({
    top: 0,
    left: 0,
    scaleX: canvas.getWidth() / img.width / 2, //new update
    scaleY: canvas.getHeight() / img.height //new update
  });
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
    // Optionally add an opacity lvl to the image
    backgroundImageOpacity: 0.3
  });

  // leaving blank after the text has been dragged to the category div
  /* var rect = new fabric.Rect({
    left: (244 * canvas.getWidth()) / 2 / img.width,
    top: (103 * canvas.getHeight()) / img.height,
    width: 369,
    height: 52,
    scaleX: canvas.getWidth() / 2 / img.width, //new update
    scaleY: canvas.getHeight() / img.height, //new update
    fill: "#fff",
    globalCompositeOperation: "destination-out",
    lockMovementX: true,
    lockMovementY: true,
    selectable: false
  });
  canvas.add(rect);  */
});

function getImageDimensions(img_url) {
  var img = new Image();
  img.src = img_url;
  var img_dims = {
    img_width: img.width,
    img_height: img.height
  };
  return img_dims;
}

const img_dims = getImageDimensions(org_image_url);

// calculating the text's position on the image, and stack on the canvas background.
// fabric.Image.fromURL(org_image_url, function (myImg) {
//   var img1 = myImg.set({
//     left: (244 * canvas.getWidth()) / 2 / myImg.width,
//     top: (103 * canvas.getHeight()) / myImg.height,
//     width: 369,
//     height: 52,
//     scaleX: canvas.getWidth() / myImg.width / 2, //new update
//     scaleY: canvas.getHeight() / myImg.height, //new update
//     borderColor: "green",
//     lockMovementX: true,
//     lockMovementY: true,
//     selectable: false,
//     customLayer: 0
//   });

//   img1.cropX = 244; // cropping image in x-axis
//   img1.cropY = 103; // cropping image in y-axis
//   canvas.add(img1);
// });

var text = new fabric.Textbox("MORENO", {
  left: (244 * canvas.getWidth()) / 2 / img_dims.img_width,
  top: (103 * canvas.getHeight()) / img_dims.img_height,
  width: 369,
  height: 52,
  scaleX: canvas.getWidth() / img_dims.img_width / 2, //new update
  scaleY: canvas.getHeight() / img_dims.img_height, //new update
  borderColor: "green",
  fontSize: 25,
  fill: "transparent",
  textAlign: "center",
  customLayer: 1,
  scalable: false
});
canvas.add(text);

canvas.on("mouse:over", function (e) {
  e.target.set({
    backgroundColor: "blue",
    fill: "white"
  });
});

canvas.on("mouse:out", function (e) {
  e.target.set({
    backgroundColor: "transparent"
  });
});

/* var brand_rect = new fabric.Rect({
  left: 520,
  top: 0,
  width: 480,
  height: 200,
  fill: "#9042f5",
  globalCompositeOperation: "destination-out",
  lockMovementX: true,
  lockMovementY: true,
  selectable: false,
  borderColor: "blue"
});
canvas.add(brand_rect); */

// this is for the 'discard' button on each draggable image.
/* var deleteIcon =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";


var img = document.createElement("img");
img.src = deleteIcon;

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = "blue";
fabric.Object.prototype.cornerStyle = "circle";

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: "pointer",
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
}) */

// function deleteObject(eventData, transform) {
//   var target = transform.target;
//   var canvas = target.canvas;
//   canvas.remove(target);
//   canvas.requestRenderAll();
// }

// function renderIcon(ctx, left, top, styleOverride, fabricObject) {
//   var size = this.cornerSize;
//   ctx.save();
//   ctx.translate(left, top);
//   ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
//   ctx.drawImage(img, -size / 2, -size / 2, size, size);
//   ctx.restore();
// }
