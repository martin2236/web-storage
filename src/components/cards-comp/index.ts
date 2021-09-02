customElements.define( 
   "card-el",
class extends HTMLElement{
    shadow:ShadowRoot;
    tagName:string;
    tags:string[]= ["h1","p"]
    tag:string = "p"
    constructor(){
        super()
      this.shadow = this.attachShadow({mode:"open"})
        //revisa chequea en tags y pone el atributo que asignamos en el HTML
      if( this.tags.includes(this.getAttribute("tag"))){
           console.log(this.getAttribute("tag"))
          this.tag = this.getAttribute("tag") || this.tag
      }
       
       this.render()
       const style = document.createElement("style")
       style.innerHTML = `
       .root{
           border-radius:4px;
           padding: 22px 13px;
           background: #FFF599;

       }
       `
       this.shadow.appendChild(style)
    }
    render(){
    this.shadow.innerHTML = this.innerHTML
       
        }
    }
)

