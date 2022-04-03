export function component(type, name, id)
{
    return `
        <input type="${type}" name="${name}" id="${id}">
`;
}
