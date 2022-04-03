import * as dashboard from './pages/dashboard/dashboard.js'
import * as register from './pages/register/register.js'

export function renderDashboard(){
    dashboard.init();

    const btnLogout = document.querySelector('.btnLogout');

    btnLogout.addEventListener('click', renderRegister );
}

export function renderRegister(){
    register.init()
}
