import { users } from "../data/users.js";

export default class UserRepository {
    constructor() {
        this.users = users.filter(user => user.type === 'user')
    }

    getAll() {
        return this.users
    }

    getById(id) {
        return this.users.find(user => user.id === 'id')
    }

    add(user) {
        this.users.push(user)
    }


}