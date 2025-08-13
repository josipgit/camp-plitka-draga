document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Dohvati podatke iz forme
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Ovdje možete dodati AJAX poziv prema backendu
            console.log('Forma poslana:', data);
            
            // Simulacija uspješnog slanja
            alert('Hvala na poruci! Javit ćemo vam se u najkraćem mogućem roku.');
            contactForm.reset();
            
            // Stvarni AJAX poziv bi izgledao otprilike ovako:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Poruka uspješno poslana!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Došlo je do greške pri slanju poruke.');
            });
            */
        });
    }
});