
export const ERROR = {
  e_i: {message:"La requete a echoue"},
  e_json: {message:"La réponse est mal formatter"}
}

export const server = {
  url: "http://localhost:5000/api/v1",
  get_url(base, params) {
    let searchParam = new URLSearchParams(params);
    return `${base}?${searchParam}`;
  },
  storeToken(token){
    localStorage.setItem("token",token)
  },
  secret() {
    return localStorage.getItem("token");
  },
  get(uri, callback, error) {
    fetch(this.url + uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: this.secret(),
      },
    })
    .then((response) => {
      if (!response.ok) {
        response.json().then(error).catch(ERROR.e_json)
      }
      else 
        response.json().then(callback).catch(ERROR.e_json)
    })
  },
  post(url, form, callback, error) {
    fetch(this.url + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: this.secret(),
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then(error).catch(ERROR.e_json)
        }
        else 
          response.json().then(callback).catch(ERROR.e_json)
      })
  },
  put(url, form, callback, error) {
    fetch(this.url + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authentication: this.secret(),
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then(error).catch(ERROR.e_json)
        }
        else 
          response.json().then(callback).catch(ERROR.e_json)
      })
  },
  delete(uri, callback, error) {
    fetch(this.url + uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authentication: this.secret(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then(error).catch(ERROR.e_json)
        }
        else 
          response.json().then(callback).catch(ERROR.e_json)
      })
  },
};
