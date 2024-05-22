const baseInput = document.getElementById('base');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const triangleElement = document.getElementById('triangle');

calculateButton.addEventListener('click', calculateTriangle);

function calculateTriangle() {
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);
    const area = (base * height) / 2;
    resultElement.textContent = `The area of the triangle is: ${area.toFixed(2)}`;

    // Update triangle image
    const triangleWidth = base * 2;
    const triangleHeight = height * 2;
    triangleElement.style.borderLeftWidth = `${triangleWidth}px`;
    triangleElement.style.borderRightWidth = `${triangleWidth}px`;
    triangleElement.style.borderBottomWidth = `${triangleHeight}px`;
}