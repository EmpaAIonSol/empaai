// Licznik czasu
const countdownDate = new Date("2025-02-27T18:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("launched").classList.add("visible");
        clearInterval(interval);
    } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerText = 
            `${Math.floor(hours)}h ${Math.floor(minutes)}m ${seconds}s`;
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Wywołaj od razu, aby uniknąć opóźnienia

// Skrypt do kopiowania
document.getElementById("copy-button").addEventListener("click", () => {
    const text = document.getElementById("contact-text").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    });
});
