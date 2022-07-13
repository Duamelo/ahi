import { faker } from "@faker-js/faker";

export function create(form, callback, error) {
  callback({ category: form });
}

export function get(query, callback, error) {
  if (typeof query == "function") {
    error = callback;
    callback = query;
    query = undefined;
    let result = Array.from(Array(10), (_, id) => ({
      id: id,
      name: faker.commerce.department(), 
      description: faker.commerce.productDescription(), 
      image: faker.image.fashion() 
    }));
    callback(result);
    return;
  }
  if (typeof query == "number") {
    callback({ id: query, name: faker.commerce.department(), 
      description: faker.commerce.productDescription(), 
      image: faker.image.fashion() });
    return;
  }
  callback({ id: faker.datatype.number(), name: query , 
    description: faker.commerce.productDescription(), 
    image: faker.image.fashion() });
}

export function put(id, form, callback, error) {
  callback({ category: form });
}

export function remove(id, callback, error) {
  callback(id);
}
