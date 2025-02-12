     // Prix par jour de location
     const pricePerDay = 100; // Exemple : 100 € par jour

     // Fonction pour calculer le prix total
     function calculatePrice() {
         const startDate = new Date(document.getElementById('start-date').value);
         const endDate = new Date(document.getElementById('end-date').value);

         // Calcul de la durée en jours
         const timeDiff = endDate - startDate;
         const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

         // Calcul du prix total
         const totalPrice = daysDiff * pricePerDay;

         // Affichage du prix
         document.getElementById('total-price').textContent = totalPrice;
     }

     // Fonction pour confirmer la location
     function confirmLocation() {
         const paymentMethod = document.getElementById('payment-method').value;
         const totalPrice = document.getElementById('total-price').textContent;

         alert(`Location confirmée !\nMoyen de paiement : ${paymentMethod}\nPrix total : ${totalPrice} €`);
     }

     // Gestion du menu déroulant
document.addEventListener("DOMContentLoaded", function() {
    const profileIcon = document.getElementById("profile-icon");
    const dropdownContent = document.getElementById("dropdown-content");

    // Afficher ou masquer le menu déroulant au clic sur l'icône de profil
    profileIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la propagation du clic
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    // Masquer le menu déroulant si on clique ailleurs sur la page
    document.addEventListener("click", function() {
        dropdownContent.style.display = "none";
    });
});