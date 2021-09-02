export function initPage(contEl){
    const div = document.createElement("div")
    div.innerHTML = `
    <todo-el></todo-el>
    <todo-el></todo-el>
    <todo-el></todo-el>
    <todo-el></todo-el>
    `
    contEl.appendChild(div)
}