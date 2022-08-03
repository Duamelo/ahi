import { server,ERROR } from ".";

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

export function login(form, callback, error,remember_me = false) {
  let form_data = new FormData();

  for ( var key in form ) {
      form_data.append(key, form[key]);
  }
  fetch(`${server.url}/authentication/login`, {
    method: "POST",
    body: form_data,
  })
  .then((response) => {
    if (!response.ok) {
      response.json().then(error).catch(ERROR.e_json)
    }
    else {
      server.storeToken( response.headers.get("Set-Cookie"),remember_me);
      response.json().then(callback).catch(ERROR.e_json)
    }
  })
}

export function logout(callback, error) {
  server.post(`${server.url}/login`, {}, callback, error);
}
