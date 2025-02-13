// Script de validation du formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Désactiver les dates passées dans le sélecteur de date
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Simuler l'envoi du formulaire
            setTimeout(() => {
                confirmationMessage.style.display = 'block';
                form.reset();
                // Faire défiler jusqu'au message de confirmation
                confirmationMessage.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }

        form.classList.add('was-validated');
    });
});