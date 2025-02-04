document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Web Developer";
    let index = 0;

    function type() {
        textElement.textContent = text.substring(0, index);
        index = (index + 1) % (text.length + 1);
        setTimeout(type, 150);
    }

    type();
});