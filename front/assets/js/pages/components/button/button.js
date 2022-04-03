export function component(text, className = ''){

    return `
    <button class="btn ${className}" type="button">
        ${text}
    </button>`
}