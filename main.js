const blocks = document.querySelectorAll('.second-item');

const changeHeight = () => {
  blocks.forEach(block => {
    block.style.height = Math.round(block.offsetWidth * 0.78) + 'px';
  });
};

window.addEventListener('resize', () => {
  changeHeight();
});

changeHeight();
