customElements.define( 
    "todo-el",
 class extends HTMLElement{
     shadow:ShadowRoot;
     title:string;
     checked:boolean = false;
  
     constructor(){
         super()
       this.shadow = this.attachShadow({mode:"open"})
        this.title = this.getAttribute("title") || "";
        
        this.checked = this.hasAttribute("checked")
       
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
        .root{
           font.size:18px;
           border-radius:4px;
           padding: 22px 13px;
           background: #FFF599;
           margin-bottom :20px;

        }
        .titulo.checked{
            text-decoration:line-through;
        }
        `
        this.shadow.appendChild(style)
     }
     render(){
         const div = document.createElement("div")
    div.innerHTML = `
     <div class ="root">
     <h4 class =" titulo ${this.checked ? "checked":""}">${this.title}</h4>
     <div>
        <input class= "check-item" type = "checkbox"  ${this.checked ? "checked" : ""} />
     </div>
     </div>
    
     `
    const input = div.querySelector(".check-item")
    input.addEventListener("click",(e)=>{
        const target = e.target as any
            console.log(target.checked)
       }) 
       this.shadow.appendChild(div)
         }
         
     }
 )