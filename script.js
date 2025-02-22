// Skrypt do kopiowania "SOON"
document.getElementById("copy-button").addEventListener("click", () => {
    const text = document.getElementById("contact-text").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    });
});
