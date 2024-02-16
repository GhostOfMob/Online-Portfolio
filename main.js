const form = document.getElementById('submit-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setTimeout(() => {
        successMessage.classList.add('show');
        form.reset();
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000); 
    }, 1000);
});