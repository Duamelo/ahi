import { faker } from "@faker-js/faker";

export function create(form, callback, error) {
  callback({ category: form });
}

export function get(query, callback, error) {
  if (typeof query == "function") {
    error = callback;
    callback = query;
    query = undefined;
    let result = Array.from(Array(100), (_, id) => ({
      id: id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.city(),
    }));
    callback(result);
    return;
  }
  if (typeof query == "number") {
    callback({
      id: query,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.city()
    });
    return;
  }
  callback({
    id: id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: query,
    phone: faker.phone.number(),
    address: faker.address.city(),
  });
}

export function put(id, form, callback, error) {
  callback({ category: form });
}

export function remove(id, callback, error) {
  callback(id);
}
