let calculator = function(value, value2) {
  let multiply = value * value2;
  let subtract = value - value2;
  let sum = value + value2;
  let divide = value !== 0 || value2 !== 0 ? value / value2 : 'Não é possível dividir por 0';

  return `Multiplicação: ${multiply}\nSubtração: ${subtract}\nSoma: ${sum}\nDivisão: ${divide}`
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
  result.textContent = calculator(parseFloat(document.getElementById("value").value), parseFloat(document.getElementById("value2").value));
  resultDiv.appendChild(result);
})
