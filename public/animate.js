const el = document.getElementById('animated');

// Define the animation properties
const animation = el.animate([
  // Keyframes
  { transform: 'scale(1)', backgroundColor: 'blue', left: '50px', top: '50px' },
  { transform: 'scale(1.5)', backgroundColor: 'red', left: '200px', top: '200px' }
], {
  // Timing options
  duration: 1000,
  fill: 'forwards'
});

// Set the animation's playback rate to 0 to pause it
animation.playbackRate = 0;

// Add a click event listener to the element
el.addEventListener('click', () => {
  // If the animation is paused, play it
  if (animation.playbackRate === 0) {
    animation.playbackRate = 1;
  } else {
    // If the animation is playing, reverse it
    animation.reverse();
  }
});

// Add a mouseover event listener to the element
export {
  el
};