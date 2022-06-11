import ErrorResult from "../core/result/errorResult.js"
import SuccessDataResult from "../core/result/successDataResult.js"
import SuccessResult from "../core/result/successResult.js"

export default class CustomerService{
    constructor(customerRepository, loggerService){
        this.customerRepository = customerRepository
        this.loggerService = loggerService
    }

    getAll(){
        let customers = this.customerRepository.getAll()
        return new SuccessDataResult("Customers listed", customers)
    }

    add(customer){
        this.customerRepository.add(customer)
        this.loggerService.log(customer)
        return new SuccessResult("Customer Added")
    }

    getById(id){
        let customer = this.customerRepository.getById(id)
        if(!customer) return new ErrorResult("Customer not found");
        return new SuccessDataResult("Customer listed",customer)
    }

    getAllSorted(){
        
    }
}