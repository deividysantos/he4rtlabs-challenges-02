import * as header from '../components/header/header.js'
import * as form from './formRegister/formRegister.js'
import * as verify from '../verifyInputs.js'
import * as render from '../../render.js'

export function init()
{
    document.title = 'Resgiter';

    const app = document.querySelector('.app');
    app.innerHTML = header.component() + form.component();

    verify.inputsIsOkInRealTime(getCredential(), getCallableVerify());
}


function getCredential(){
    return [
        document.querySelector('#name'),
        document.querySelector('#email'),
        document.querySelector('#password')
    ];
}

function getCallableVerify(){
    return [
        verify.nameOk,
        verify.emailOk,
        verify.passwordOk
    ];
}

export function send(event){
    event.preventDefault();

    const credentials = getCredential();

    if(!verify.inputsIsOkNow(credentials))
    {
        alert('Preencha os campos corretamente!');
        return;
    }

    const url = 'http://127.0.0.1:8000/api/users';

    const body = {
        name: credentials[0].value,
        email: credentials[1].value,
        password: credentials[2].value,
    }

    axios.post(url, body)
        .then(response => {
            if(response){
                if(response.data.message === 'user created successfully'){
                    //todo: visual response to registered
                    render.renderLogin()
                }
            }
        })
        .catch(function(error){
            let errors = [];

            if(error.response.data.details.name)
                errors.push(error.response.data.details.name)

            if(error.response.data.details.email)
               errors.push(error.response.data.details.email)

            if(error.response.data.details.password)
                errors.push(error.response.data.details.password)

            //todo: notifications to errors
            alert(errors);
        });
}