form.addEventListener('submit', (event) => {
  event.preventDefault();
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';
  let result = document.createElement("p");
  resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  resultDiv.style.borderRadius = '15px';
  resultDiv.style.padding = '9px';
  resultDiv.style.width = '90%'
  for(let i = 1; i <= 10;i++) {
    result = document.createElement("p");
    let value = parseFloat(document.getElementById("value").value);
    result.textContent = `${value} x ${i} = ${value * i}`;
    resultDiv.appendChild(result);
  }
  
})
