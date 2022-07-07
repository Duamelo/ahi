import { server } from ".";

const baseUrl = `/products`;
export function create(form, callback, error) {
  server.post(`${baseUrl}/create`, form, callback, error);
}

export function get(query, callback, error) {
  if (typeof query == "function") {
    error = callback;
    callback = query;
    query = undefined;
    server.get(baseUrl, callback, error);
    return;
  }
  if (typeof query == "number") {
    server.get(server.get_url(baseUrl, { id: query }), callback, error);
    return;
  }
  server.get(server.get_url(baseUrl, { name: query }), callback, error);
}

export function put(id, form, callback, error) {
  server.put(server.get_url(baseUrl, { id: id }), form, callback, error);
}

export function remove(id, callback, error) {
  server.delete(server.get_url(baseUrl, { id: id }, callback, error));
}
