import { state } from "../../estate"
export function initPage(contEl){
    const div = document.createElement("div")
    const items = state.getEnabledTasks()


    function createTasks(tasks){
        const lista = items.map((t)=>{ return `<todo-el title=${t.title}  ${t.completed ? "checked" : ""} ></todo-el>`})
   
        div.innerHTML = `
        <button class="boton">agregar</button>
        <ul>
        ${lista.join("")}
        </ul>
        `
    }
    
    state.subscribe((state)=>{
        
        createTasks(state.tasks)
    })

    createTasks(items)
    
    div.querySelector(".boton").addEventListener("click",()=>{
        state.addTask("desde el boton")
    })

    contEl.appendChild(div)
}