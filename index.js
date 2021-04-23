// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name) {
    cats.splice(2,1);
}

function destructivelyRemoveFirstCat(name) {
    cats.splice(0,1);
}

function appendCat(name) {
    const appendCat = [...cats, name]
    return appendCat;
}

function prependCat(name) {
    const prependCat = [name, ...cats]
    return prependCat;
}

function removeLastCat(name) {
    const removeLastCat = cats.slice(0, cats.length - 1)
    return removeLastCat;
}

function removeFirstCat(name) {
    const removeFirstCat = cats.slice(1)
    return removeFirstCat;
}