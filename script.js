const arrow = document.getElementById("arrow");
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Listen for the space key to shoot the arrow
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        shootArrow();
    }
});

// Function to shoot the arrow
function shootArrow() {
    arrow.style.display = "block";  // Make the arrow visible
    arrow.style.left = "60px";  // Reset arrow position to start

    const arrowInterval = setInterval(() => {
        let arrowPosition = parseInt(arrow.style.left.replace("px", ""));
        arrow.style.left = arrowPosition + 10 + "px";  // Move the arrow to the right

        // Check for collision with target
        const arrowRect = arrow.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        if (
            arrowRect.right >= targetRect.left &&
            arrowRect.top < targetRect.bottom &&
            arrowRect.bottom > targetRect.top
        ) {
            clearInterval(arrowInterval);  // Stop the arrow movement
            increaseScore();  // Increase score
            resetArrow();  // Reset arrow after hit
        }

        // If the arrow goes off-screen, reset it
        if (arrowPosition > 800) {
            clearInterval(arrowInterval);
            resetArrow();
        }
    }, 20);
}

// Function to increase score when the target is hit
function increaseScore() {
    score += 10;
    scoreDisplay.textContent = score;
    alert("Hit! Your score: " + score);
}

// Reset the arrow to the starting position
function resetArrow() {
    arrow.style.display = "none";  // Hide the arrow
    arrow.style.left = "60px";  // Reset to initial position
}
