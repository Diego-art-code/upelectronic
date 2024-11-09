// Función para mostrar el contador de tiempo de la oferta especial
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 1 día de descuento

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Oferta Expirada";
        } else {
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            countdownElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}

startCountdown();
