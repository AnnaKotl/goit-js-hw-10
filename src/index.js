import { fetchBreeds } from "./cat-api.js";

const errorEl = document.querySelector('.error');
const loaderEl = document.querySelector('.loader');
const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');

errorEl.style.display = 'none';
loaderEl.style.display = 'none';
selectEl.onchange = makeInf;
infoEl.style.display = 'none';


fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const optionEl = document.createElement("option");
      optionEl.value = breed.value;
      optionEl.textContent = breed.label;
      selectEl.appendChild(optionEl);
    });
  })
  .catch(error => {
    console.error("Error:", error);
});

function makeInf() {
  catInfo.style.display = 'none'
  loadingMessage.style.display = 'block' 
  fetchCatByBreed(catBreed.value)
    .then((data) => {
      loadingMessage.style.display = 'none' 
      catInfo.style.display = 'block'
      showCatInfo(data[0]);
    })
    .catch(() => {
      errorMessage.style.display = 'block';
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}


// import SlimSelect from "slim-select";
// import Notiflix from "notiflix";

// import { fetchBreeds, fetchCatByBreed } from "./cat-api";
// import { showSpinner, hideSpinner } from "./spinner";

// const breedSelect = document.querySelector(".breed-select");
// const loader = document.querySelector(".loader");
// const error = document.querySelector(".error");
// const catInfo = document.querySelector(".cat-info");
// const spinnerContainer = document.getElementById("spinner-container");

// const slimSelect = new SlimSelect({
//   select: breedSelect,
// });

// function showLoader() {
//   loader.style.display = "block";
// }

// function hideLoader() {
//   loader.style.display = "none";
// }

// function showError(message) {
//   error.textContent = message;
//   error.style.display = "block";
// }

// function hideError() {
//   error.style.display = "none";
// }

// function showCatInfo(imageUrl, breedName, description, temperament) {
//   const img = document.createElement("img");
//   img.src = imageUrl;

//   const name = document.createElement("p");
//   name.textContent = `Breed: ${breedName}`;

//   const desc = document.createElement("p");
//   desc.textContent = `Description: ${description}`;

//   const temp = document.createElement("p");
//   temp.textContent = `Temperament: ${temperament}`;

//   catInfo.innerHTML = "";
//   catInfo.appendChild(img);
//   catInfo.appendChild(name);
//   catInfo.appendChild(desc);
//   catInfo.appendChild(temp);
//   catInfo.style.display = "block";
// }

// function hideCatInfo() {
//   catInfo.innerHTML = "";
//   catInfo.style.display = "none";
// }

// function handleBreedSelectChange() {
//   const selectedBreed = breedSelect.selected(); // Змінено з selected() на getSelected()
//   if (selectedBreed.length > 0) {
//     showSpinner(spinnerContainer);
//     fetchCatByBreed(selectedBreed[0].value)
//       .then((data) => {
//         hideSpinner(spinnerContainer);
//         renderCatInfo(data);
//       })
//       .catch((error) => {
//         hideSpinner(spinnerContainer);
//         showError();
//         console.error(error);
//       });
//   } else {
//     hideCatInfo();
//   }
// }


// function initializeApp() {
//   showSpinner(spinnerContainer);

//   fetchBreeds()
//     .then((breeds) => {
//       slimSelect.setData(
//         breeds.map((breed) => ({
//           value: breed.id,
//           text: breed.name,
//         }))
//       );
//     })
//     .catch((error) => {
//       showError(error.message);
//     })
//     .finally(() => {
//       hideSpinner(spinnerContainer);
//     });

//   breedSelect.addEventListener("change", handleBreedSelectChange);
// }

// initializeApp();
