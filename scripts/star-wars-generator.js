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