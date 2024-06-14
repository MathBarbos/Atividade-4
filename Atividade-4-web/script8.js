let randomNumber = Math.floor(Math.random() * 100) + 1;
let generateRandomNumber = function(value) {
  if (randomNumber < value) {
    return `O número ${value} é maior que o valor a ser advinhado`;
  } else if (randomNumber > value) {
    return `O número ${value} é menor que o valor a ser advinhado`;
  } else {
    return `Parabéns, você acertou o número é igual o aleatório: ${randomNumber}`;
  }
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
  let value = Math.floor(parseFloat(document.getElementById("value").value));
  result.textContent = generateRandomNumber(value);
  resultDiv.appendChild(result);
})

