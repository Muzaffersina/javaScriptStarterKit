import ElasticLogger from "../core/crossCuttingConcerns/logging/ElasticLogger.js"
import Employee from "../models/employee.js"
import EmployeeRepository from "../repo/employeeRepository.js"
import EmployeeService from "../services/employeeService.js"


console.log("EmployeeComponent Yüklendi")

const employeeService = new EmployeeService(new EmployeeRepository(), new ElasticLogger())
const employee = new Employee (15,"C Sina","C Açıkgöz","C Konya",22,12555 )
employee.type = "employee"
console.log(employeeService.add(employee))
console.log(employeeService.getAll())
console.log(employeeService.getById(15))