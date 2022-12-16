const buttons = document.querySelectorAll('button');
const input = document.getElementById('input');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.innerText;
    if (value === 'Clear') {
      input.value = '';
    } else if (value === '=') {
      input.value = eval(input.value);
    } else {
      input.value += value;
    }
  });
});
