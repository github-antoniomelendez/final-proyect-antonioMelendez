/* Final Project: Antonio Meléndez */

document.querySelector('#button').addEventListener('click', starWars);
document.querySelector('#button').textContent = 'Change Story';

function starWars() {
    const randomNum = Math.floor(Math.random() *10);
    people(randomNum);
    planets(randomNum);
    starships(randomNum);
    species(randomNum);
    vehicles(randomNum);
    movies()
    filmArray()
    document.querySelector('button').textContent = 'New Story';
}

async function people(randomNum){
    let response = await fetch('https://swapi.dev/api/people');
    let peopleData = await response.json()

    let response2 = await fetch(peopleData.next)
    let peopleData2 = await response2.json()

    let response3 = await fetch(peopleData2.next)
    let peopleData3 = await response3.json()

    let response4 = await fetch(peopleData3.next)
    let peopleData4 = await response4.json()

    let response5 = await fetch(peopleData4.next)
    let peopleData5 = await response5.json()

    let response6 = await fetch(peopleData5.next)
    let peopleData6 = await response6.json()

    let person1 = peopleData.results[randomNum];
    let person2 = peopleData2.results[randomNum];
    let person3 = peopleData3.results[randomNum];
    let person4 = peopleData4.results[randomNum];
    let person5 = peopleData5.results[randomNum];
    let person6 = peopleData6.results[randomNum];

    document.querySelector("#person1").textContent = person1.name;
    document.querySelector("#person2").textContent = person2.name;
    document.querySelector("#person3").textContent = person3.name;
    document.querySelector("#person4").textContent = person4.name;
    document.querySelector("#person5").textContent = person5.name;
    document.querySelector("#person6").textContent = person6.name;
    

    if(person1.gender === 'male'){
        document.querySelector("#pronoun1").textContent = 'he';
    }
    else if(person1.gender === 'female'){
        document.querySelector("#pronoun1").textContent = 'she';
    }
    else{
        document.querySelector("#pronoun1").textContent = 'it';
    }

    if (person2.gender === 'male'){
        document.querySelector('#pronoun2').textContent = 'his';
    }
    else if(person2.gender === 'female'){
        document.querySelector('#pronoun2').textContent = 'her';
    }
    else{
        document.querySelector('#pronoun2').textContent = 'its';
    }

    if (person3.gender === 'male'){
        document.querySelector('#pronoun3').textContent = 'his';
    }
    else if(person3.gender === 'female'){
        document.querySelector('#pronoun3').textContent = 'her';
    }
    else{
        document.querySelector('#pronoun3').textContent = 'its';
    }
}

async function planets(randomNum){
    let response = await fetch('https://swapi.dev/api/planets');
    let planetData = await response.json()
    document.querySelector('#planet').textContent = planetData.results[randomNum].name
}

async function starships(randomNum){
    let response = await fetch('https://swapi.dev/api/starships');
    let starshipData = await response.json()
    document.querySelector('#starship').textContent = starshipData.results[randomNum].name
}

async function species(randomNum){
    let response = await fetch('https://swapi.dev/api/species');
    let speciesData = await response.json()
    document.querySelector('#species').textContent = speciesData.results[randomNum].name
}

async function vehicles(randomNum){
    let response = await fetch('https://swapi.dev/api/vehicles');
    let vehiclesData = await response.json()
    document.querySelector('#vehicles').textContent = vehiclesData.results[randomNum].name
}

async function movies(){
    const randomInt = Math.floor(Math.random() * 6)
    let response = await fetch('https://swapi.dev/api/films');
    let moviesData = await response.json()
    document.querySelector('#movies').textContent = moviesData.results[randomInt].title
}

function filmArray() {
    const films = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
    const result = films.filter((film) => film.length > 7);
    document.querySelector('#array').textContent = result
}

//code for calculating the number of visits to the page

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// footer and last modification code
const today1 = document.querySelector('#today1');

const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    min: "numeric",
    sec: "numeric"
};


today1.innerHTML = new Date().toLocaleDateString("en-US", options);

alert(document.lastModified);

const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("This page has changed!");
}

const year1 = document.querySelector('#year1');

const options1 = {
  year: "numeric"
};

year1.innerHTML = new Date().toLocaleDateString("en-US", options1);

const pattern1 = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern1)?.[1]) || 0)
);

//weather code

//select elements in document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//create required variables for url
const myKey = "b9391e7aa1a3538c762bfd6297dbde24";
const myLat = "25.54266";
const myLong = "-103.42496";

//construct url to call
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
      const response = await fetch (myURL);
      if (response.ok) {
          const data = await response.json ();
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  myGraphic.setAttribute('SRC', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();

//dark mode button code
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});