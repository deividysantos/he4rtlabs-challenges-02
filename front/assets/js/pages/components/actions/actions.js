import * as button from '../../components/button/button.js'

export function component()
{
    return `
<div class="container">
    <div class="actions">
        
        ${button.component('Adicionar', 'btnCreate')}
    </div>
</div>
   
 `
}
