import { users } from "../data/users.js";

export default class CustomerRepository {
    constructor() {
        this.customers = users.filter(user => user.type === 'customer')
    }

    getAll() {
        return this.customers
    }

    getById(id) {
        return this.customers.find(customer => customer.id === 'id')
    }

    add(customer) {
        this.customers.push(customer)
    }


}