const state = {
    data:{
        tasks:[
            {id:1, title:"primer-titulo", completed:false},
            {id:2, title:"segundo-titulo", completed:true},
            {id:3, title:"tercer-titulo", deleted:true}
        ]
    },
    listeners:[],
    init(){
        const localData = localStorage.getItem("estado guardado")
        this.setState(JSON.parse(localData))
    },
    getState(){
       return this.data
    },
    getEnabledTasks(){
        const currentState = this.getState()
        return this.data.tasks.filter((t)=>!t.deleted)
    },
    addTask(id,title){
        const currentState = this.getState()
        currentState.tasks.push({id,title, completed:false})
        this.setState(currentState)

    },changeItemState(id, value){
        const currentState = this.getState()
       const found =  currentState.tasks.find((t)=>t.id == id)
       found.completed = value 
       this.setState(currentState)
    },
    setState(newState){
        this.data = newState
       for(const cb of this.listeners){
           cb(newState);
           localStorage.setItem("estado guardado",JSON.stringify(newState))
        } 
        //console.log("soy el state eh cambiado", this.data)  
    },
    subscribe(callback:(any)=>any){
       return this.listeners.push(callback)
    }
    
}
export {state}