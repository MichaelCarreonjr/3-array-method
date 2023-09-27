const array = [1, 2, 3, 4, 5];
const resultElement = document.getElementById("result");

function showLength() {
    resultElement.textContent = "Array Length: " + array.length;
}

function showToString() {
    resultElement.textContent = "Array as String: " + array.toString();
}

function popElement() {
    array.pop();
    resultElement.textContent = "After pop: " + array.toString();
}
