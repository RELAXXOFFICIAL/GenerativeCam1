// Get the canvas element
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Create a new audio context
const audioCtx = new AudioContext();

// Create a buffer source node
const source = audioCtx.createBufferSource();

// Connect the source to the destination
source.connect(audioCtx.destination);

// Start the source
source.start();

// Define the draw function
function draw() {
  // Get the current time
  const now = audioCtx.currentTime;

  // Calculate the frequency
  const frequency = source.frequency;

  // Calculate the amplitude
  const amplitude = source.amplitude;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set the stroke style
  ctx.strokeStyle = `hsl(${frequency}, 100%, 50%)`;

  // Set the line width
  ctx.lineWidth = amplitude;

  // Draw a line from the top left to the bottom right
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.stroke();

  // Schedule the next frame
  requestAnimationFrame(draw);
}

// Start the animation loop
requestAnimationFrame(draw);

// Clean up
return () => {
  // Stop the source
  source.stop();

  // Close the audio context
  audioCtx.close();

  // Cancel the animation loop
  cancelAnimationFrame(requestId);
};
