// Get references to the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up the audio context
const audioCtx = new AudioContext();
const source = audioCtx.createBufferSource();
source.connect(audioCtx.destination);
source.start();

// Define the draw function
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get the current time from the audio context
    const now = audioCtx.currentTime;

    // Calculate the frequency and amplitude of the audio signal
    const frequency = source.frequency;
    const amplitude = source.amplitude;

    // Draw a line based on the frequency and amplitude
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${frequency}, 100%, 50%)`;
    ctx.lineWidth = amplitude;
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
}

// Call the draw function repeatedly
setInterval(draw, 1000 / 60);
