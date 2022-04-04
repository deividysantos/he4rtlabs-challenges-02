import * as header from '../components/header/header.js'
import * as form from './formLogin/formLogin.js'
import * as verify from "../verifyInputs.js";
import * as render from "../../render.js";

export function init()
{
    document.title = 'Login';

    const app = document.querySelector('.app');
    app.innerHTML = header.component() + form.component()

    verify.inputsIsOkInRealTime(getCredential(), getCallableVerify());
}

function getCredential(){
    return [
        document.querySelector('#email'),
        document.querySelector('#password')
    ];
}

function getCallableVerify(){
    return [
        verify.emailOk,
        verify.passwordOk
    ];
}

export function send(event){
    event.preventDefault();

    const credentials = getCredential();

    if(!verify.inputsIsOkNow(credentials, getCallableVerify()))
    {
        alert('Preencha os campos corretamente!');
        return;
    }

    const url = 'http://127.0.0.1:8000/api/auth/login';

    const body = {
        email: credentials[0].value,
        password: credentials[1].value,
    }

    axios.post(url, body)
        .then(response => {
            if(response){
                if(response.data.message === 'user logged successfully'){
                    render.renderDashboard(response.data.token)
                }
            }
        })
        .catch(function(error){
            alert(error.response.data.message);
        });
}