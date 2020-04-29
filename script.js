const submitBtn = document.querySelector('.email-submit-btn');

submitBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('.email-input').value;
    const form = document.querySelector('.email-container');
    const errorMessage = document.querySelector('.error-message');

    form.classList.remove('error');
    errorMessage.classList.remove('active');

    if (!inputValue || !emailIsValid(inputValue)) {
        form.classList.add('error');
        errorMessage.classList.add('active');
    }
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}