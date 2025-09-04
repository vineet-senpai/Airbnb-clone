const editBtn=document.querySelector('.editBtn');

editBtn.addEventListener('click', async () => {
    const confirmationId = prompt('Enter the confirmation ID'); // (better: use a modal)
    if (!confirmationId) return; // User cancelled

    try {
        const response = await fetch('/Airbnb/admin/verify-key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: confirmationId })
        });

        const result = await response.json();

        if (result.success) {
            // Redirect to admin page
            window.location.href = '/Airbnb/admin';
        } else {
            alert('Invalid key!');
        }
    } catch (err) {
        console.error(err);
        alert('Something went wrong, please try again.');
    }
});