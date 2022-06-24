const fs = require('fs')

const Words = {}

const map = new Map();

function createWordMap() {
    const words = fs.readFileSync('backend/controllers/wordList.txt', 'utf-8').toString().split('\r\n');
    console.log(words.length);
    //const map = new Map();
    for (let i = 0; i < words.length; i++) {
        let sortedWord = words[i].split('').sort().join("");
        if (!map.has(sortedWord)) {
            let arr = [words[i]];
            map.set(sortedWord, arr);
        } else {
            map.get(sortedWord).push(words[i])
        }
    }
}

createWordMap();
Words.map = map;

Words.getWords = function getAllWords(word) {
    word = word.toUpperCase()
    const sortedWord = word.split('').sort().join('');
    const searchedLetters = []
    let scrabbleAnswers = []
    searchedLetters.concat(map.get(sortedWord));
    findShorterWords(map, sortedWord, sortedWord, searchedLetters, scrabbleAnswers)
    return scrabbleAnswers;
}
function findShorterWords(map, newKey, originalKey, searchedLetters, scrabbleAnswers) {
    //console.log(newKey);
    if (newKey <= 0) {
        return;
    }
    if (newKey != originalKey && map.get(newKey)) {
        //console.log(map.get(newKey))
        scrabbleAnswers.push(map.get(newKey));
    }
    for (let i = 0; i < newKey.length; i++) {
        let cutKey = newKey.substring(0, i) + newKey.substring(i + 1, newKey.length);
        if (!searchedLetters.includes(cutKey)) {
            searchedLetters.push(cutKey)
            findShorterWords(map, cutKey, originalKey, searchedLetters, scrabbleAnswers);
        }
    }
}
console.log(Words.map.get("DGO"))

//console.log(Words.getWords("begin"))
module.exports = Words;