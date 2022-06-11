import MongoLogger from "../core/crossCuttingConcerns/logging/mongoLogger.js"
import User from "../models/user.js"
import UserRepository from "../repo/userRepository.js"
import UserService from "../services/userService.js"


console.log("UserComponent Yüklendi")

const userService = new UserService(new UserRepository(), new MongoLogger())
const user = new User(11,"Sina","Açıkgöz","Konya",25)
user.type = "user"
console.log(userService.add(user))
console.log(userService.getAll())
console.log(userService.getById(1))


