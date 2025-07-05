
 const inputs = document.querySelectorAll('#input');
  const button = document.getElementById('button');

  function checkInputs() {
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });
    button.disabled = !allFilled;
  }
  inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
  });
  button.disabled = true; 

  console.log(4565645);
  
  