const str1Input = document.getElementById("str1");
const arrTxt = document.getElementById("arrTxt");
const sumTxt = document.getElementById("sumTxt");
const highestTxt = document.getElementById("highestTxt");
const lowestTxt = document.getElementById("lowestTxt");

let numbers = [];

function Insert() {
    const inputNumber = parseFloat(str1Input.value);

    if (!isNaN(inputNumber)) {
        numbers.push(inputNumber);
        updateDisplay();
    } else {
        alert("Please enter a valid number.");
    }

    str1Input.value = "";
}

function DeleteAll() {
    numbers = [];
    updateDisplay();
}

function updateDisplay() {
    arrTxt.textContent = numbers.join(", ");
    
    if (numbers.length > 0) {
        sumTxt.textContent = calculateSum();
        highestTxt.textContent = findHighest();
        lowestTxt.textContent = findLowest();
    } else {
        sumTxt.textContent = "";
        highestTxt.textContent = "";
        lowestTxt.textContent = "";
    }
}



function calculateSum() {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function findHighest() {
    return numbers.length > 0 ? Math.max(...numbers) : "";
}

function findLowest() {
    return numbers.length > 0 ? Math.min(...numbers) : "";
}