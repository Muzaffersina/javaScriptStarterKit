import Result from "./result.js"

export default class DataResult extends Result{
    constructor(message,success,data){
        super(message,success)
        this.data = data
    }
}