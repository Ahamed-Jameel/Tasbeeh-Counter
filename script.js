// Initialize counter and max count
let count = 0;
let maxCount = 33;  // Default max count for Tasbeeh

// Elements from HTML
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const maxCountBtn = document.getElementById('maxCountBtn');
const maxCountDisplay = document.getElementById('maxCountDisplay');

// Update display function
function updateDisplay() {
  counterDisplay.innerText = count; // Update the displayed number

  // Check if count reached max count
  if (count >= maxCount) {
    alert('Max count reached');
    count = 0;  // Reset the count
    updateDisplay();  // Update display again
  }
}

// Increment counter function
incrementBtn.addEventListener('click', () => {
  if (count < maxCount) {
    count++;
    updateDisplay();
  }
});

// Reset counter function
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Set max count function
maxCountBtn.addEventListener('click', () => {
  const userMax = prompt("Enter max count (default is 33):", maxCount);
  if (userMax !== null && !isNaN(userMax) && userMax > 0) {
    maxCount = Number(userMax);
    maxCountDisplay.innerText = `Max: ${maxCount}`;
  }
});

// Initial display setup
maxCountDisplay.innerText = `Max: ${maxCount}`;
updateDisplay();

