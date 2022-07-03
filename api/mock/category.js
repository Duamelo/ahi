import { faker } from '@faker-js/faker';

export function create(form, callback, error) {
    callback({ category: form })
}


export function get(query, callback, error) {
    if (typeof query == "function") {
        let result = Array.form(Array(length), (_, id) => ({ id: id, name: faker.commerce.department() }))
        callback(result)
        return
    }
    if (typeof query == "number") {        
        callback({ id: query, name: faker.commerce.department() })
        return
    }
    callback({ id: faker.datatype.number(), query})
}

export function put(id,form, callback, error) {
    callback({ category: form })
}

export function remove(id, callback, error) {
    callback(id);
}