let getRandomNumber = function(value, randomValue) {
  if(value === randomValue) {
    return 'Parabéns você acertou o número';
  } else if (value2 > value3) {
    return theGreatNumber = `O número ${value2} é o maior`;
  } else {
    return theGreatNumber = `O número ${value3} é o maior`;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';
  let randomNumber = Math.random(1, 100)
  let result = document.createElement("p");
  resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  resultDiv.style.borderRadius = '15px';
  resultDiv.style.padding = '9px';
  resultDiv.style.width = '90%'
  result.textContent = searchGreatNumber(parseFloat(document.getElementById("value").value), parseFloat(document.getElementById("value2").value), parseFloat(document.getElementById("value3").value));
  resultDiv.appendChild(result);
})

