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

export function modalView(){
    const modalLogout = document.querySelector('.modalLogout');
    const avatar = document.querySelector('.avatar');

    if(modalLogout.classList.contains('invisible')){
        modalLogout.classList.add('visible');
        modalLogout.classList.remove('invisible');
        avatar.style.borderColor = 'white'
    }else{
        modalLogout.classList.add('invisible');
        modalLogout.classList.remove('visible');
        avatar.style.borderColor = ''
    }



}