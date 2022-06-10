import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("UserComponent Yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

// let user1 = new User(1,"Sina","Açıkgöz","Konya")
// let user2 = new User(2,"Baran","Açıkgöz","Ankara")
// userService.add(user1)
// userService.add(user2)
// console.log(userService.list())
// console.log(userService.getById(1))

userService.load()


let customerAdd = new Customer (1,"Sina","Açıkgöz","Konya","21a","987528")
customerAdd.type = "customer"

userService.add(customerAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())




