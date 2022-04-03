export function component(){
    return `
    <div class="container">
        <form>
            <img src="https://i.imgur.com/hkbVBKu.png" alt="logo heart">
            <div class="inputs">
                <h2>Login</h2>
                <input type="text" name="email" id="email" placeholder="teste@exemplo.com">
                <input type="password" name="password" id="password" placeholder="Senha">
                <p>Não tem uma conta? <a class="anchorToLogin">Registre-se</a></p>
                <div class="submit">
                    <button class="btn btnSubmit">Login</button>
                </div>
            </div>
        </form>    
    </div>
`
}