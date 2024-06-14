let getEvenOrOdd = function(value) {
  let valueIsEven = value % 2 === 0 ? `O número ${value} é par` : `O número ${value} é impar`;
  return valueIsEven;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';
  let result = document.createElement("p");
  resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  resultDiv.style.borderRadius = '15px';
  resultDiv.style.padding = '9px';
  resultDiv.style.width = '90%'
  result.textContent = getEvenOrOdd(parseFloat(document.getElementById("value").value));
  resultDiv.appendChild(result);
})
