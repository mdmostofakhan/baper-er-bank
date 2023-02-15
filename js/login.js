
// stop.1: add click event handker with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // stop-2: get the email address inside the emaill input field
    // always remenber to use .value to get text from input field
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // stop-3: get password
    // 3.a: set on the html wlement
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordFiled = document.getElementById('user-password');
    const  password = passwordFiled.value;
        
    // DANGER: SO NOT VERIFY email password onthe client side
    // stop-4: verify email and password and chek whether valid user or not
    if (email === 'sontan@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vhule gechos !! ami tke tejjo puttoh korlam');
    }

})