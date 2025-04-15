document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const btnBack = document.getElementById('back');
    const btnLogin = document.getElementById('login');
    const spanEmail = document.querySelector('.span-email');
    const spanPass = document.querySelector('.span-pass');
  
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    btnBack.addEventListener('click', function()  {
        location.href = 'index.html';
    })

    btnLogin.addEventListener('click', function() {



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

   

        /* Almeno una cifra (da 0 a 9).

            Almeno una lettera minuscola (da a a z).

            Almeno una lettera maiuscola (da A a Z).

            Almeno una lettera alfabetica (sia minuscola che maiuscola).

            Almeno 8 caratteri di lunghezza. */
    })
})