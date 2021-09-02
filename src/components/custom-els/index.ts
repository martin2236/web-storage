
    class Input extends HTMLElement{
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
        }
        render(){
            const rootEl = document.createElement(this.tag)
            rootEl.textContent = this.textContent
            this.shadow.appendChild(rootEl)
           
        }
    }
    customElements.define("text-el",Input)
