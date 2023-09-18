const id = (a)=>{
    return document.getElementById(a);
}

const language = id('language');
const password = id('password');
const repeat = id('repeat');
const valid = id('valid-title');
const terms = id('terms-checkbox');

//--------Text to be changed---------//
const submitBtn = id('submit-btn');

const formTitle = id('form-title');
const langTitle = id('lang-title');
const userTitle = id('user-title');
const passTitle = id('pass-title');
const repeatTitle = id('repeat-title');
const termsTitle = id('terms-title');
//-----------------------------------//

submitBtn.addEventListener('click', (e) => {

    if(!terms.checked) return;
    e.preventDefault();

    valid.style.display = 'block';

    if(repeat.value === password.value && language.value == 'español') {

        valid.textContent = 'La contraseña coincide.';
        valid.style.color = '#22ee66';

    }   else if(repeat.value !== password.value) {

            valid.style.color = '#ee2288';
            if(language.value == 'español') valid.textContent = 'La contraseña NO coincide. Reintente.';

        };

    
    if(repeat.value === password.value && language.value == 'english') {

        valid.textContent = 'The password matches.';
        valid.style.color = '#22ee66';

    }   else if (repeat.value !== password.value) {

            valid.style.color = '#ee2288';
            if(language.value == 'english') valid.textContent = 'The password does NOT match. Try again. ';

        }

    if(repeat.value === password.value && language.value == 'deutsch') {

        valid.textContent = 'Das Passwort stimmt überein.';
        valid.style.color = '#22ee66';

    }   else if (repeat.value !== password.value) {

            valid.style.color = '#ee2288';
            if(language.value == 'deutsch') valid.textContent = 'Das Passwort stimmt NICHT überein'

        }

    if(repeat.value === password.value && language.value == 'italiano') {

        valid.textContent = 'La password corrisponde';
        valid.style.color = '#22ee66';

    }   else if (repeat.value !== password.value) {
            valid.style.color = '#ee2288';
            if(language.value == 'italiano') valid.textContent = 'La password NON corrisponde.'
        }

});

    language.addEventListener('change', ()=>{
    if(language.value == 'español'){
        formTitle.textContent = 'Registro';
        langTitle.textContent = 'Idioma';
        userTitle.textContent = 'Usuario';
        passTitle.textContent = 'Contraseña';
        repeatTitle.textContent = 'Repetir Contraseña';
        termsTitle.textContent = 'Acepto los terminos y condiciones';
        submitBtn.textContent = 'Enviar';
    }
    else if(language.value == 'english'){
        formTitle.textContent = 'Register';
        langTitle.textContent = 'Lenguage';
        userTitle.textContent = 'Username';
        passTitle.textContent = 'Password';
        repeatTitle.textContent = 'Repeat password';
        termsTitle.textContent = 'I accept the terms and conditions';
        submitBtn.textContent = 'Submit';
    }
    else if(language.value == 'deutsch'){
        formTitle.textContent = 'Registrierung';
        langTitle.textContent = 'Sprache';
        userTitle.textContent = 'Nutzername';
        passTitle.textContent = 'Passwort';
        repeatTitle.textContent = 'Passwort wiederholen.';
        termsTitle.textContent = 'Ich akzeptiere die allgemeinen Geschäftsbedingungen';
        submitBtn.textContent = 'Schicken.';
    }

    else if(language.value == 'italiano') {
        formTitle.textContent = 'Registrazione';
        langTitle.textContent = 'Lingua';
        userTitle.textContent = 'Nome Utente';
        passTitle.textContent = 'Password';
        repeatTitle.textContent = 'Ripeti la password';
        termsTitle.textContent = 'Accetto i Termini e le Condizioni';
        submitBtn.textContent = 'Inviare';
    }
});