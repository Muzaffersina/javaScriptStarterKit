import ErrorResult from "../core/result/errorResult.js"
import SuccessDataResult from "../core/result/successDataResult.js"
import SuccessResult from "../core/result/successResult.js"

export default class EmployeeService{
    constructor(employeeRepository, loggerService){
        this.employeeRepository = employeeRepository
        this.loggerService = loggerService
    }

    getAll(){
        let employees = this.employeeRepository.getAll()
        return new SuccessDataResult("Employees listed", employees)
    }

    add(employee){
        this.employeeRepository.add(employee)
        this.loggerService.log(employee)
        return new SuccessResult("Employee Added")
    }

    getById(id){
        let employee = this.employeeRepository.getById(id)
        if(!employee) return new ErrorResult("Employee not found");
        return new SuccessDataResult("Employee listed",employee)
    }

    getAllSorted(){
        
    }
}