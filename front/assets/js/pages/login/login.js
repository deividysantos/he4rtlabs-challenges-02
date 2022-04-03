import * as header from '../components/header/header.js'
import * as form from './formLogin/formLogin.js'

export function init()
{
    document.title = 'Login';

    const app = document.querySelector('.app');
    app.innerHTML = header.component() + form.component()
}