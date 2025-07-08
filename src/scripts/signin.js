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

        const buttonn = document.getElementById('button');

        if (buttonn) {
            buttonn.addEventListener('click', () => {
                window.location.href = '/';
            });
        }




  