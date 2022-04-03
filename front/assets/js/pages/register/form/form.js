import * as button from '../../components/button/button.js'

export function component(){
    return `
    <div class="container">
        <form>
            <img src="https://i.imgur.com/hkbVBKu.png" alt="logo heart">
            <div class="inputs">
                <h2>Cadastre-se</h2>
                <input type="text" name="name" id="name" placeholder="Nome">
                <input type="text" name="email" id="email" placeholder="teste@exemplo.com">
                <input type="password" name="password" id="password" placeholder="Senha">
                <div class="submit">
                    <button class="btn btnSubmit" >Cadastrar</button>
                </div>
                
            </div>
            
        </form>    
    </div>
`
}