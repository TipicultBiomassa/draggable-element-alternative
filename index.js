const movableDiv = document.getElementById("draggable-div");
const borderDiv = document.getElementById("border-div");

movableDiv.addEventListener('mousedown',pickup);
window.addEventListener('mousemove',move);
movableDiv.addEventListener('mouseup',drop);

let draggableElement = null;

function pickup(event) {
    draggableElement = event.target;
}
function drop() {
    if (draggableElement) {
        draggableElement = null;
    }
}
const borderRect = borderDiv.getBoundingClientRect();
const movableRect = movableDiv.getBoundingClientRect();


var limits = {
    top: borderDiv.offsetTop,
    right: borderDiv.offsetWidth + borderDiv.offsetLeft - movableDiv.offsetWidth,
    bottom: borderDiv.offsetHeight + borderDiv.offsetTop - movableDiv.offsetHeight,
    left:borderRect.left 
};
function move(event) {
    if (draggableElement) {
          let offsetX 
          let offsetY;
          const leftBorder = limits.left + (draggableElement.clientWidth/2);
          if (event.clientX > limits.right) {
            offsetX = limits.right;
          } else if (event.clientX > leftBorder) {
            offsetX = event.clientX - draggableElement.clientWidth/2;
          } 
         
          if (!offsetX) {
            offsetX = limits.left;
          }
          console.log(event.clientX, limits.left + (draggableElement.clientWidth/2))
          if (event.pageY > limits.bottom) {
            offsetY = limits.bottom;
          } else if (event.pageY > limits.top) {
            offsetY = event.pageY;
          }
          
        draggableElement.style.left =offsetX   + 'px';
        draggableElement.style.top = offsetY + 'px';
    }
}
