document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const btnBack = document.getElementById('back');
    const btnRegister = document.getElementById('register');
    const spanEmail = document.querySelector('.span-email');
    const spanPass = document.querySelector('.span-pass');
    const spanName = document.querySelector('.span-Name');
    const Name = document.getElementById('Name');
    const confirmPass = document.querySelector('.span-confirm')
    const confirm = document.getElementById('confirm');


    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    btnBack.addEventListener('click', function()  {
        location.href = 'index.html';
    })

    btnRegister.addEventListener('click', function() {

        if (Name.value.trim().length > 3 == '') {
            spanName.style.display = 'block';
            Name.style.borderColor = 'red';

        } else {
            spanName.style.display = 'none';
            Name.style.borderColor = 'green';
        }
     

        if (email.value.trim() == '') {
            spanEmail.style.display = 'block';
            email.style.borderColor = 'red';
            
            
        } else {
            spanEmail.style.display = 'none';
            email.style.borderColor = 'green';
        }

        if (!regex.test(password.value.trim())) {
            spanPass.style.display = 'block';
            password.style.borderColor = 'red';
            
        } else {
            spanPass.style.display = 'none';
            password.style.borderColor = 'green';
        }

        if (confirm.value.trim() !== password.value.trim()) {
            confirmPass.style.display = 'block';
            confirm.style.borderColor = 'red';
            
        } else {
            confirmPass.style.display = 'none';
            confirm.style.borderColor = 'green';
        }

        /* Almeno una cifra (da 0 a 9).

            Almeno una lettera minuscola (da a a z).

            Almeno una lettera maiuscola (da A a Z).

            Almeno una lettera alfabetica (sia minuscola che maiuscola).

            Almeno 8 caratteri di lunghezza. */
    })
})