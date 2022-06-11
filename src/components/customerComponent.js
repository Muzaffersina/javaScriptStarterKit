import MongoLogger from "../core/crossCuttingConcerns/logging/mongoLogger.js"
import Customer from "../models/customer.js"
import CustomerRepository from "../repo/customerRepository.js"
import CustomerService from "../services/customerService.js"

console.log("CustomerComponent Yüklendi")

const customerService = new CustomerService(new CustomerRepository(), new MongoLogger())
const customer = new Customer (15,"C Sina","C Açıkgöz","C Konya",22,"987654")
customer.type = "customer"
console.log(customerService.add(customer))
console.log(customerService.getAll())
console.log(customerService.getById(15))