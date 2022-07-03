import { server } from ".";

export function get_credential(callback, error) {
  fetch(`${server.url}/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(callback)
    .catch(error);
}

export function login(form, callback, error) {
  fetch(`${server.url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((response) => response.json())
    .then(callback)
    .catch(error);
}

export function logout(callback, error) {
  server.post(`${server.url}/login`, {}, callback, error);
}
