import * as dashboard from './pages/dashboard/dashboard.js'
import * as register from './pages/register/register.js'
import * as login from './pages/login/login.js'
import * as header from './pages/components/header/header.js';

export function renderDashboard(token){
    dashboard.init(token).then(()=>{
        const btnLogout = document.querySelector('.btnLogout');
        btnLogout.addEventListener('click', renderLogin );

        const imgProfile = document.querySelector('.imageProfile');
        imgProfile.addEventListener('click', header.modalView);
    });
}

export function renderRegister(){
    register.init();

    const anchorToLogin = document.querySelector('.anchorToLogin');
    anchorToLogin.addEventListener('click', renderLogin);

    const btnSubmit = document.querySelector('.btnSubmit');
    btnSubmit.addEventListener('click', register.send)
}

export function renderLogin(){
    login.init();

    const anchorToLogin = document.querySelector('.anchorToLogin');
    anchorToLogin.addEventListener('click', renderRegister);

    const btnSubmit = document.querySelector('.btnSubmit');
    btnSubmit.addEventListener('click', login.send)
}