document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  const drags = new Map();

  boxes.forEach(function (box) {
    makeElementDraggable(box);
  });

  function makeElementDraggable(element) {
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mouseup', endDrag);
    element.addEventListener('mousemove', drag);

    function startDrag(e) {
      const boxId = element.dataset.id;
      drags.set(boxId, {
        isDragging: true,
        offset: {
          x: e.clientX - element.getBoundingClientRect().left,
          y: e.clientY - element.getBoundingClientRect().top,
        },
      });
      element.style.zIndex = '999';
    }

    function endDrag(e) {
      const boxId = element.dataset.id;
      const dragData = drags.get(boxId);
      if (dragData && dragData.isDragging) {
        dragData.isDragging = false;
        element.style.zIndex = 'auto';
      }
    }

    function drag(e) {
      const boxId = element.dataset.id;
      const dragData = drags.get(boxId);
      if (dragData && dragData.isDragging) {
        element.style.left = '0.' + e.clientX - dragData.offset.x + 'px';
        element.style.top = '0.' + e.clientY - dragData.offset.y + 'px';
      }
    }
  }
});
