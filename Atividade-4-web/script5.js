form.addEventListener('submit', (event) => {
  event.preventDefault();
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';
  let result = document.createElement("p");
  resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  resultDiv.style.borderRadius = '15px';
  resultDiv.style.padding = '9px';
  resultDiv.style.width = '25vw'
  let value = parseFloat(document.getElementById("value").value);
  
  let resultOperation = "";
  for(let i = 0; i <= value;i++) {
    let even = i % 2 === 0 ? i : ', ';
      resultOperation += `${even}`;
  }
  resultOperation += '.'
  result.textContent = resultOperation;
  resultDiv.appendChild(result);
  
})
