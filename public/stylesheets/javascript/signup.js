const signupFormHandler = async function(event){
    event.preventDefault();

    const username = document.querySelector('#username-signup').ariaValueMax.trim();
    const password = document.querySelector('#password-signup').ariaValueMax.trim();

    if (username && password){
        const response = await fetch ('/api/users',{
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            header: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form'). addEventListener('submit', signupFormHandler);