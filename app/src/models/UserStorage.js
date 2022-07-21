"use strict";

class UserStorage {
    static #users = {
        id: ["chiyoung", "minhee", "abc"],
        pswd: ["1234", "2345", "3456"],
        name: ["최치영", "김민희", "최치찡"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;