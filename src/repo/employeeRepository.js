import { users } from "../data/users.js";

export default class EmployeeRepository {
    constructor() {
        this.employees = users.filter(user => user.type === 'employee')
    }

    getAll() {
        return this.employees
    }

    getById(id) {
        return this.employees.find(employee => employee.id === 'id')
    }

    add(employee) {
        this.employees.push(employee)
    }


}