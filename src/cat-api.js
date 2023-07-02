import axios from "axios";

export function fetchBreeds() {
  axios.defaults.headers.common["x-api-key"] = "live_In7QA2yESCTx8J4yXaZg4Sa3TTl06kobaNtcsXw3eR1zKeeXrUyQfnHJbMsyMlCy";
  
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => {
      return response.data.map(breed => ({
        value: breed.id,
        label: breed.name
      }));
    })
    .catch(error => {
      console.error("Error fetching breeds:", error);
      return [];
    });
}
