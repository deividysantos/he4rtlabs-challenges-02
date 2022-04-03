import * as header from '../components/header/header.js'
import * as form from './form/form.js'

export function init()
{
    document.title = 'Resgiter';

    const app = document.querySelector('.app');
    app.innerHTML = header.component() + form.component();
}