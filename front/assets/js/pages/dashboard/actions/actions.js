import * as button from '../../components/button/button.js'

export function component()
{
    return `
<div class="container">
    <div class="actions">
        <div class="inputPrice">
            <input class="hourPrice" type="number" name="hourPrice" placeholder="Preço por hora" id="hourPrice">
        </div>
        <div>
        
        ${button.component('Adicionar')}
        ${button.component('Exportar')}
           
        </div>
    </div>
</div>
   
 `
}
