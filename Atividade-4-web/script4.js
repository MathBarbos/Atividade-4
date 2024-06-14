  let calculatorAVG = function(value, value2, value3) {
    let avg = (value + value2 + value3) / 3;
    return avg >= 7 ? 'Aprovado' : 'Reprovado';
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
    result.textContent = calculatorAVG(parseFloat(document.getElementById("value").value), parseFloat(document.getElementById("value2").value), parseFloat(document.getElementById("value3").value));
    resultDiv.appendChild(result);
  })
  