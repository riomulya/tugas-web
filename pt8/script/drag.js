document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(function (box) {
    makeElementDraggable(box);
  });

  function makeElementDraggable(element) {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mouseup', endDrag);
    element.addEventListener('mousemove', drag);

    function startDrag(e) {
      isDragging = true;
      offset.x = e.clientX - element.getBoundingClientRect().left;
      offset.y = e.clientY - element.getBoundingClientRect().top;
      element.style.zIndex = '999';
    }

    function endDrag() {
      isDragging = false;
      element.style.zIndex = 'auto';
    }

    function drag(e) {
      if (isDragging) {
        element.style.left = e.clientX - offset.x + 'px';
        element.style.top = e.clientY - offset.y + 'px';
      }
    }
  }
});
