document.getElementById('login-btn').addEventListener('click', function () {
    // user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check email and password
    if (userEmail == 'shontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';

    }
});





