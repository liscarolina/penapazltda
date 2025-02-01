class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: { "Content-type": "application/json" },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this.baseUrl}${endpoint}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  register(email, name, lastname, telef) {
    return this._makeRequest("/register", "POST", {
      email,
      name,
      lastname,
      telef,
    });
  }
}

const api = new Api({
  // baseUrl: "http://localhost:3000",
  baseUrl: "https://api.penapaz.com",
});

export default api;
