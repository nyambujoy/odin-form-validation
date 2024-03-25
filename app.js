const myform = document.querySelector('#form')
const email = document.querySelector('#email')
const counrty = document.querySelector('#country')
const zipcode = document.querySelector('#zipcode')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const container = document.querySelector('.container')

myform.addEventListener('submit', (e) => {
    e.preventDefault()
    chechValidation()

    const h1 = document.createElement('h1')
    h1.textContent = "welcome wizard we've been waiting for you"

})

function chechValidation() {
    const emailValue = email.value.trim()
    const counrtyValue = counrty.value.trim()
    const zipcodeValue = zipcode.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (emailValue === '') {
        setError(email, 'email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setError(email, 'please use a valid email')
    } else {
        setSuccess(email)
    }

    if (counrtyValue === '') {
        setError(counrty, 'country cannot be blank');
    } else if (counrtyValue.toLowerCase() === 'kenya') {
        setSuccess(counrty);
    } else {
        setError(counrty, 'only Kenyan citizens');
    }

    if (zipcodeValue === '') {
        setError(zipcode, 'zipcode cannot be blank')
    } else {
        setSuccess(zipcode)
    }
    if (passwordValue === '') {
        setError(password, 'password cannot be blank')
    } else {
        setSuccess(password)
    }

    if (password2Value === '') {
        setError(password2, 'please confirm password')
    } else if (passwordValue !== password2Value) {
        setError(password2, " passwords don't match")
    }
    else {
        setSuccess(password2)
    }



}


function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.textContent = message
    formControl.className = 'form-control-error'
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control-success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

