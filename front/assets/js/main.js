import * as header from './pages/components/header/header.js'
import * as render from './render.js';

render.renderDashboard();

const imgProfile = document.querySelector('.imageProfile');

imgProfile.addEventListener('mouseover', header.logoutVisible);

imgProfile.addEventListener('mouseout', header.logoutInvisible);
