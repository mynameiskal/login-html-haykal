const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const buttonSubmit = document.querySelector('#login')

const credentials = {
    email: 'haykal@devhaus.com.sg',
    password: 'akunmaganggw'
}

console.log(credentials);

buttonSubmit.addEventListener('click', () => {
    if (inputEmail.value === credentials.email) {
        console.log('Emailnya bener')
    }   else {
        console.log('Emailnya salah')
    }

    if (inputPassword.value === credentials.password) {
        console.log('Passwordnya bener')
    }   else {
        console.log('Passwordnya salah')
    }

    if (inputEmail.value === credentials.email && inputPassword.value === credentials.password) {
        alert('Proses login selesai');
    } else {
        alert('Proses login gagal');
    }

   
 } )