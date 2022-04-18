const { response } = require("express");

async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (username && password){
        const responce = await fetch ('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }  else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form'). add addEventListener('submit', loginFormHandler);