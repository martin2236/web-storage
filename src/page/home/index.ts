import { state } from "../../estate"
export function initPage(contEl){
    const div = document.createElement("div")
    const items = state.getEnabledTasks()
    console.log(items);
    
        div.innerHTML = `
        <button class="boton">agregar</button>
        <ul class="lista"></ul>
        `

    const list = div.querySelector(".lista")

    function createTasks(items){
        const lista = items.map((t)=>{ return `<todo-el title=${t.title}  ${t.completed ? "checked" : ""} ></todo-el>`})
        list.innerHTML = ""
        for(const item of items){
            const todoEl = document.createElement("todo-el")
            todoEl.setAttribute("title", item.title)
            todoEl.setAttribute("id",item.id)
            if(item.completed){
                todoEl.setAttribute("checked", "true")
            }
            todoEl.addEventListener("change",(e:any)=>{
                //console.log(e)
                state.changeItemState(e.detail.id, e.detail.target)
            })
            list.appendChild(todoEl)
        }
 }
    state.subscribe(()=>{
        
        createTasks(state.getEnabledTasks())
    })

    createTasks(items)
    
    div.querySelector(".boton").addEventListener("click",()=>{
        state.addTask(Math.random(),"desde el boton")
    })

    contEl.appendChild(div)
}