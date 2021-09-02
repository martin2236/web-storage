import { state } from "./estate";
import "./custom-els"
import "./components/todo-item"
import "./components/cards-comp"
import {initPage} from "./page/home"



(function (){
    const contenedor = document.querySelector(".root")
    initPage(contenedor)
})()