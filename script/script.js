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