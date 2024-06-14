document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.operator');
  const fields = document.getElementById('fields');
  calculator = function(value1, value2, operator) {
    switch (operator) {
      case 'Somar':
        return value1 + value2;
        break;
      case 'Subtrair':
        return value1 - value2;
        break;
      case 'Multiplicação':
        return value1 * value2;
        break;
      case 'Divisão':
        if (value2 === 0) {
          return 'Divisão por zero não é permitida.';
        }
        return value1 / value2;
        break;
      default:
        return 'Por favor, selecione uma operação.';
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      fields.style.opacity = '1';
      fields.style.width = '22vw';
      fields.style.height = '25vw';
      fields.style.display = 'flex';
      fields.style.flexDirection = 'column';
      fields.style.justifyContent = 'center';
      fields.style.alignItems = 'center';
      fields.style.marginTop = '20px';

      const operationName = document.querySelectorAll('.operation');
      operationName.forEach(operation => {
        operation.textContent = button.textContent;
      });
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';
    let result = document.createElement("p");
    resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    resultDiv.style.borderRadius = '15px';
    resultDiv.style.padding = '9px';
    resultDiv.style.marginTop = '30px'
    resultDiv.style.width = '90%'
    result.textContent = calculator(parseFloat(document.getElementById("value").value), parseFloat(document.getElementById("value2").value), document.querySelector('.operation').textContent);
    resultDiv.appendChild(result);
  })
});