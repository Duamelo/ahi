export const server = {
    url:"localhost:3000/api/v1",
    get_url(base,params){
       let searchParam = new URLSearchParams(params);
       return `${base}?${searchParam}`;
    },
    secret(){
        return 'secret'
    },
    get(uri,callback,error){
        fetch(this.url + uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': this.secret()
            },
        }).then(response => response.json())
        .then(callback)
        .catch(error)
    },
    post(url,form,callback,error){
        fetch(this.url+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': this.secret()
            },
            body: JSON.stringify(form)
        }).then(response => response.json())
            .then(callback)
            .catch(error)
    },
    put(url,form,callback,error){
        fetch(this.url+url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': this.secret()
            },
            body: JSON.stringify(form)
        }).then(response => response.json())
            .then(callback)
            .catch(error)
    },
    delete(uri,callback,error){
        fetch(this.url + uri, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': this.secret()
            },
        }).then(response => response.json())
        .then(callback)
        .catch(error)
    },
}