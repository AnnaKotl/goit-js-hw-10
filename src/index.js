import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const errorEl = document.querySelector('.error');
const loaderEl = document.querySelector('.loader');
const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');

selectEl.onchange = createInfo;
errorEl.style.display = 'none';
loaderEl.style.display = 'none';
infoEl.style.display = 'none';

function selectCat() {
  loaderEl.style.display = 'block';
  fetchBreeds()
    .then(data => {
      loaderEl.style.display = 'none';
      selectEl.innerHTML = data
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join('');
      selectEl.style.display = 'block';
    })
    .catch(() => {
      errorEl.style.display = 'block';
    });
}

selectCat();

function createInfo() {
  infoEl.innerHTML = '';
  infoEl.style.display = 'none';
  loaderEl.style.display = 'block';
  fetchCatByBreed(selectEl.value)
    .then(data => {
      loaderEl.style.display = 'none';
      infoEl.style.display = 'block';
      showCatInfo(data);
    })
    .catch(() => {
      errorEl.style.display = 'block';
      Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}

function showCatInfo(catData) {
  const breed = catData.breeds[0];
  const imgEl = document.createElement('img');
  imgEl.src = catData.url;
  imgEl.alt = breed.name;
  imgEl.height = 600;
  imgEl.width = 500;

  const nameEl = document.createElement('h1');
  nameEl.textContent = breed.name;

  const descEl = document.createElement('p');
  descEl.textContent = breed.description;

  const temperamentEl = document.createElement('h2');
  temperamentEl.textContent = `Temperament: ${breed.temperament}`;

  infoEl.appendChild(imgEl);
  infoEl.appendChild(nameEl);
  infoEl.appendChild(descEl);
  infoEl.appendChild(temperamentEl);
}
