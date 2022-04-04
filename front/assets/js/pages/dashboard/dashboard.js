import * as header from '../components/header/header.js'
import * as actions from './actions/actions.js'

export async function init(token)
{
    document.title = 'Dashboard';

    let content = ``;

    await getData(token)
        .then(function (response){

            content = `
                <div class="imageProfile">
                    <div class="btnProfile">
                        <img class="avatar" src="https://pbs.twimg.com/profile_images/1474809284168933376/bqhOArHH_400x400.jpg"  alt="imagem de perfil"/>
                        ${response.name}
                            <button class="btnLogout invisible">
                                Logout
                            </button>
                    </div>
                </div>
            `;
        })

    const app = document.querySelector('.app');
    app.innerHTML = header.component(content) + actions.component();
}

async function getData(token) {
    try {
        let res = await axios({
            url: 'http://127.0.0.1:8000/api/user',
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            }
        })
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}