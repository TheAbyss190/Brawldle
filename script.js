const searchBar = document.querySelector('.guess-search');
const winScreen = document.querySelector('.win-screen');
const winCharacterIcon = document.querySelector('.win-char-icon');
const winCharacterName = document.querySelector('.win-char-name');
const winText = document.querySelector('.win-text');
const graphContainer = document.querySelector('.guesses-graph-container');
const numberOfGuessesText = document.querySelector('.number-of-guesses-text');
const table = document.querySelector('.game-table');
const tableHeaderRow = document.querySelector('.table-header');
const NUMBER_OF_ROWS = tableHeaderNames.length;

for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    tableHeaderRow.appendChild(document.createElement('th'));
}

const tableHeaderFields = tableHeaderRow.querySelectorAll('th');
const tableHeaderFieldsArray = Array.from(tableHeaderFields)

const tableHeaderFieldsMap = new Map(tableHeaderFieldsArray.map((element, index) => {
    return [tableHeaderFieldsArray[index], tableHeaderNames[index]]
}))

for (let [field, text] of tableHeaderFieldsMap) {
    field.textContent = text
}

let correctCharacter = characterData[Object.keys(characterData)[Math.floor(Math.random()*Object.keys(characterData).length)]]
console.log(correctCharacter)

let isGameEnd = false;
let isGameWon = false;
let numberOfGuesses = 0;

function validateGuess(inputCharacter) {
    let guessedCharacter = characterData[inputCharacter];
    const guessQuality = {
        icon: undefined,
        name: undefined,
        publisher: undefined,
        franchise: undefined,
        firstAppearance: undefined,
        smashDebut: undefined,
        number: undefined
    };

    if (guessedCharacter == correctCharacter) {
        isGameEnd = true;
        isGameWon = true;
        for (let prop in guessQuality) {
            guessQuality[prop] = 'correct';
        }
        return guessQuality;
    }

    const FIRST_APPEARANCE_THRESHOLD = 5;
    const CHARACTER_NUMBER_THRESHOLD = 2;

    guessQuality.icon = guessQuality.name = 'wrong';

    guessQuality.publisher =
    guessedCharacter.publisher == correctCharacter.publisher
    ? 'correct'
    : 'wrong';

    guessQuality.franchise =
    guessedCharacter.franchise == correctCharacter.franchise
    ? 'correct'
    : 'wrong';

    if (guessedCharacter.firstAppearance == correctCharacter.firstAppearance) {
        guessQuality.firstAppearance = 'correct';
    } else if (Math.abs(Number(guessedCharacter.firstAppearance) - Number(correctCharacter.firstAppearance)) <= FIRST_APPEARANCE_THRESHOLD) {
        guessQuality.firstAppearance = 'close';
    } else {
        guessQuality.firstAppearance = 'wrong';
    }

    if (guessedCharacter.smashDebut == correctCharacter.smashDebut) {
        guessQuality.smashDebut = 'correct';
    } else {
        let guessedGameIndex = smashGames.indexOf(guessedCharacter.smashDebut);
        let correctGameIndex = smashGames.indexOf(correctCharacter.smashDebut);
        if (Math.abs(guessedGameIndex - correctGameIndex) == 1) {
            guessQuality.smashDebut = 'close';
        } else {
            guessQuality.smashDebut = 'wrong';
        }
    }

    if (guessedCharacter.number == correctCharacter.number) {
        guessQuality.number = 'correct';
    } else if (Math.abs(Number(guessedCharacter.number) - Number(correctCharacter.number)) <= CHARACTER_NUMBER_THRESHOLD) {
        guessQuality.number = 'close';
    } else {
        guessQuality.number = 'wrong';
    }

    return guessQuality;
}

function addGuess(character) {
    const guessQuality = validateGuess(character);

    const guessRow = document.createElement('tr');
    guessRow.classList.add('guess');

    const icon = document.createElement('td');
    icon.classList.add(guessQuality.icon);
    icon.innerHTML = `<img class="icon" src="${characterData[character].icon}"></img>`;
    
    const name = document.createElement('td');
    name.classList.add(guessQuality.name);
    name.innerHTML = `${characterData[character].name}`;

    const publisher = document.createElement('td');
    publisher.classList.add(guessQuality.publisher);
    publisher.innerHTML = `${characterData[character].publisher}`;
    
    const franchise = document.createElement('td');
    franchise.classList.add(guessQuality.franchise);
    franchise.innerHTML = `${characterData[character].franchise}`

    const firstAppearance = document.createElement('td');
    firstAppearance.classList.add(guessQuality.firstAppearance);
    firstAppearance.innerHTML = `${characterData[character].firstAppearance}`

    const smashDebut = document.createElement('td');
    smashDebut.classList.add(guessQuality.smashDebut);
    smashDebut.innerHTML = `${characterData[character].smashDebut}`

    const characterNumber = document.createElement('td');
    characterNumber.classList.add(guessQuality.number);
    characterNumber.innerHTML = `${characterData[character].numberDisplay}`

    guessRow.append(icon, name, publisher, franchise, firstAppearance, smashDebut, characterNumber)
    table.appendChild(guessRow)
}

function isCharacterPresent(inputCharacter) {
    if (inputCharacter in characterData) {
        return true
    } else {
        return false
    }
}

function graphGuesses(guesses) {
    const graph = document.createElement('div');
    graph.classList.add('guesses-graph');
    
    const guessesArray = [];

    for (let guessNumber in guesses) {
        guessesArray.push([guessNumber, guesses[guessNumber]]);
    }

    const sortedGuessesArray = [...guessesArray];
    sortedGuessesArray.sort((a, b) => b[1] - a[1]);

    console.log(guessesArray);
    console.log(sortedGuessesArray);

    for (let [guessNumber, guessFreq] of guessesArray) {
        const graphItem = document.createElement('div');
        graphItem.classList.add('guesses-graph-item')

        const numberText = document.createElement('div');
        numberText.classList.add('guesses-number-text');
        const bar = document.createElement('div');
        bar.classList.add('guesses-bar');
    
        numberText.textContent = guessNumber;

        let widthOfBar = Math.round((guessFreq/sortedGuessesArray[0][1])*100)
        bar.style.width = `${widthOfBar}%`;

        if (guessNumber == numberOfGuesses) {
            bar.classList.add('current-guess-number');
        }

        graphItem.append(numberText, bar);
        graph.append(graphItem);
    }

    return graph;
}

function showWinScreen() {
    winCharacterIcon.src = correctCharacter.icon;
    winCharacterName.textContent = correctCharacter.name;

    numberOfGuessesText.textContent = `Number of guesses: ${numberOfGuesses}`;

    if (!localStorage.getItem('guesses')) {
        localStorage.setItem('guesses', JSON.stringify({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
        }))
    }

    const storedGuesses = localStorage.getItem('guesses');

    let storedGuessesObject = JSON.parse(storedGuesses);
    storedGuessesObject[numberOfGuesses] += 1;
    localStorage.setItem('guesses', JSON.stringify(storedGuessesObject))

    graphContainer.append(graphGuesses(storedGuessesObject));

    winScreen.style.display = 'flex';
    setTimeout(() => {
        winScreen.style.opacity = 1;
    }, 25);

    searchBar.placeholder = '';
}

const GUESSES_THRESHOLD = 8
searchBar.placeholder = `Guess ${numberOfGuesses + 1} of ${GUESSES_THRESHOLD}`;

searchBar.onkeydown = event => {
    if (event.key == 'Enter') {
        
        if (!isGameWon && !isGameEnd) {
            let guessedCharacter = searchBar.value
            if (isCharacterPresent(guessedCharacter)) {
                if (numberOfGuesses == GUESSES_THRESHOLD - 1) {
                    isGameWon = false;
                    winText.textContent = 'Sorry, the answer was:'
                    showWinScreen();
                } else {
                    addGuess(guessedCharacter);
                    numberOfGuesses += 1
                    searchBar.placeholder = `Guess ${numberOfGuesses + 1} of ${GUESSES_THRESHOLD}`;
                }  
            }
        }

        if (isGameWon) {
            winText.textContent = "You've won!";
            showWinScreen();
        }

        searchBar.value = '';
    }
}

