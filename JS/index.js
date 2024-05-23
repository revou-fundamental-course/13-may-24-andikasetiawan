const aInput = document.getElementById('Alas');
const bInput = document.getElementById('Tinggi');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', calculateTrapezoid);

function calculateTrapezoid() {
  const a = parseFloat(aInput.value);
  const b = parseFloat(bInput.value);
  const area = calculateTrapezoidArea(Alas, Tinggi);
  resultElement.textContent = `The area of the trapezoid is: ${area}`;
}

function calculateTrapezoidArea(Alas, Tinggi) {
  return (1/2) * (Alas + Tinggi);
}