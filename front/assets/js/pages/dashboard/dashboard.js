import * as header from '../components/header/header.js'
import * as actions from './actions/actions.js'

export function init()
{
    document.title = 'Dashboard';

    let data = {
        image: 'https://pbs.twimg.com/profile_images/1474809284168933376/bqhOArHH_400x400.jpg'
    }

    let content = `
        <div class="imageProfile">
            <div class="btnProfile">
                <img class="avatar" src="${data.image}"  alt="imagem de perfil"/>
                    <button class="btnLogout invisible">
                        Logout
                    </button>
            </div>
        </div>
    `;

    const app = document.querySelector('.app');
    app.innerHTML = header.component(content) + actions.component();
}