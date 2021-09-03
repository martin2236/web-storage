import { state } from "./estate";
import "./components/custom-els"
import "./components/todo-item"
import {initPage} from "./page/home"




(function (){
    state.init()
    const contenedor = document.querySelector(".root")
    initPage(contenedor)
    
})()