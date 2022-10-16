import fetch from "node-fetch";

let userAccessTocen;
const client_id = "7c2f3a94d92c4bc781fb2c27861fe2e3";
const redirect_uri = "http://localhost:3000/callback";
const Spotify = {
  getAccessToken() {
    if (userAccessTocen) {
      return userAccessTocen;
    }

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    fetch(url)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jssonResponse) => {
        console.log(jssonResponse);
      });
  },
};
console.log("hello");
Spotify.getAccessToken();
