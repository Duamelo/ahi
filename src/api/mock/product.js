import { faker } from "@faker-js/faker";

export function create(form, callback, error) {
  callback({ product: form });
}

export function get(query, callback, error) {
  if (typeof query == "function") {
    error = callback;
    callback = query;
    query = undefined;
    let result = Array.from(Array(100), (_, id) => ({
      id: id,
      name:faker.commerce.productName(),
      description:faker.commerce.productDescription(),
      price:faker.commerce.price()
    }));
    callback(result);
    return;
  }
  if (typeof query == "number") {
    callback({
      id: query,
      name:faker.commerce.productName(),
      description:faker.commerce.productDescription(),
      price:faker.commerce.price()
    });
    return;
  }
  callback({
    id: id,
    name:query,
    description:faker.commerce.productDescription(),
    price:faker.commerce.price()
  });
}

export function put(id, form, callback, error) {
  callback({ product: form });
}

export function remove(id, callback, error) {
  callback(id);
}
