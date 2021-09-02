const state = {
    data:{},
    listeners:[],
    getState(){
        this.data
    },
    setState(newState){
        this.data = newState
    },
    subscribe(callback:(any)=>any){
        this.listener.push(callback)
    }
}
export {state}