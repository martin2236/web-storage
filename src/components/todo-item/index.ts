customElements.define( 
    "todo-el",
 class extends HTMLElement{
     shadow:ShadowRoot;
     title:string;
     checked:boolean;
  
     constructor(){
         super()
       this.shadow = this.attachShadow({mode:"open"})
        this.title = this.getAttribute("title") || "";
        this.checked = JSON.parse(this.getAttribute("checked")); 
        
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
        <input type = "checkbox" checkbox = ${this.checked} />
     </div>
     </card-el>
    
     `
        
         }
     }
 )