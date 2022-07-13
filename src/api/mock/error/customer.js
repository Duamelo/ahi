import { faker } from "@faker-js/faker";

export function create(form, callback, error) {
  error({ error: "L'email existe deja" });
}

export function get(query, callback, error) {
  if (typeof query == "number") {
    error({ error: "L'email n'existe pas" });
    return;
  }
  error({ error: "L'email n'existe pas" });
}

export function put(id, form, callback, error) {
  error({ error: "L'email n'existe pas", id: id });
}

export function remove(id, callback, error) {
  error({ error: "L'email n'existe pas", id: id });
}
