import * as dashboard from './pages/dashboard/dashboard.js'
import * as register from './pages/register/register.js'
import * as login from './pages/login/login.js'

export function renderDashboard(){
    dashboard.init();

    const btnLogout = document.querySelector('.btnLogout');

    btnLogout.addEventListener('click', renderLogin );
}

export function renderRegister(){
    register.init();

    const anchorToLogin = document.querySelector('.anchorToLogin');
    anchorToLogin.addEventListener('click', renderLogin);
}

export function renderLogin(){
    login.init();

    const anchorToLogin = document.querySelector('.anchorToLogin');
    anchorToLogin.addEventListener('click', renderRegister);
}