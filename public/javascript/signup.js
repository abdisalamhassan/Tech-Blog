const signupFormHandler = async function(event){
    event.preventDefault();

    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
    console.log(username);
    console.log(password);
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

document.querySelector('.signup-form'). addEventListener('submit', signupFormHandler);