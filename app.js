// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    alert('clicked the shed');
    handleGuess('shed', getRandomHidingSpot());
    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButton.addEventListener('click', () => {
    alert('clicked the tree');
    handleGuess('tree', getRandomHidingSpot());

    // get a random item to call the 'correct spot'
    
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    alert('clicked the boulder');
    handleGuess('boulder', getRandomHidingSpot());

    // get a random item to call the 'correct spot'
    // don't use const number, use the index below
    // paste the return 'random hiding place string' here 

    // const correctHidingPlaceID = `hidingPlaces-${'random hiding place string'}`

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    // use the random index above and the array of hidingPlaces to get a random hiding place string

    // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoji face from the previous hiding place that way we don't end up with more than one emoji face

    // we can do that by removing the .face class from all containers

    //const div = document.getElementsByClassName("hiding-place");
    //div.classList.remove('face');
    if (userGuess === correctSpot) {
        correctGuesses++
    };
    // then increment the guesses
    totalGuesses++ 

    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    
    let hidingspotEl = document.getElementById(correctSpot + '-container')

    // then add the .face css class to that element so that the face shows up
    
    //const div = document.getElementsByClassName("hiding-place");
    //div.classList.add('face');


    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show the new value of wins, losses and total guesses to the user
    wins++;
    winsEl.textContent = correctGuesses;   
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}