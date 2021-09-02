const state = {
    data:{
        tasks:[
            {title:"primer-titulo", completed:false},
            {title:"segundo-titulo", completed:true},
            {title:"tercer-titulo", deleted:true}
        ]
    },
    listeners:[],
    getState(){
       return this.data
    },
    getEnabledTasks(){
        const currentState = this.getState()
        return this.data.tasks.filter((t)=>!t.deleted)
    },
    addTask(title){
        const currentState = this.getState()
        currentState.tasks.push({title, completed:false})
        this.setState(currentState)

    },
    setState(newState){
        this.data = newState
       for(const cb of this.listeners){
           cb(newState);
        } 
        console.log("soy el state eh cambiado" + this.data)  
    },
    subscribe(callback:(any)=>any){
       return this.listeners.push(callback)
    }
    
}
export {state}