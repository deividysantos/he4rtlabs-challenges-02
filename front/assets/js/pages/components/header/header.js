export function component(content)
{
    if(!content)
        content = ''

    return `
        <header>
            <div class="container">
                <div class="content">
                    <div class="logo">
                        <a href="https://heartdevs.com/">
                            <img src="https://i.imgur.com/VgSjV8j.png"  alt="logo heart"/>
                        </a>
                    </div>
                
               
                    ${content}    
                </div>
            </div>
        </header>  
`;
}

export function logoutVisible(){
    const el = document.querySelector('.btnLogout');
    el.classList.add('visible');
    el.classList.remove('invisible');
}

export function logoutInvisible(){
    const el = document.querySelector('.btnLogout');
    el.classList.add('invisible');
    el.classList.remove('visible');
}