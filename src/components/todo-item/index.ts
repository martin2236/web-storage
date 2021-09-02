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
        }
        `
        this.shadow.appendChild(style)
     }
     render(){
     this.shadow.innerHTML = `
     <card-el>
     <h4>${this.title}</h4>
     <div>
        <input type = "checkbox"  ${this.checked ? "checked" : ""} />
     </div>
     </card-el>
    
     `
        
         }
     }
 )