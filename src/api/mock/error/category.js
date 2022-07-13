import { faker } from "@faker-js/faker";

export function create(form, callback, error) {
  error({ error: "Cette catégorie existe deja" });
}

export function get(query, callback, error) {
  if (typeof query == "number") {
    error({ error: "Cette catégorie n'existe pas" });
    return;
  }
  error({ error: "Cette catégorie n'existe pas" });
}

export function put(id, form, callback, error) {
  error({ error: "Cette catégorie n'existe pas", id: id });
}

export function remove(id, callback, error) {
  error({ error: "Cette catégorie n'existe pas", id: id });
}
