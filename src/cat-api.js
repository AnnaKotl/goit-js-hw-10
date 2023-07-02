import axios from "axios";

const API_KEY = "live_In7QA2yESCTx8J4yXaZg4Sa3TTl06kobaNtcsXw3eR1zKeeXrUyQfnHJbMsyMlCy";
axios.defaults.headers.common["x-api-key"] = API_KEY;

export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching breeds:", error);
      return [];
    });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data[0];
    })
    .catch(error => {
      console.error("Error fetching cat:", error);
      return null;
    });
}
