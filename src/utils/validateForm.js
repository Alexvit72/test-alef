const validateForm = (form) => {
  let result = 0;
  for (let input of form.elements) {
    if (input.type === 'text') {
      let wrap = input.closest('.my-input');
      let errorMessage = wrap.nextElementSibling;
      wrap.classList.remove('error');
      wrap.classList.remove('valid');
      errorMessage.innerHTML = '';
      if (!input.value) {
        errorMessage.innerHTML = 'Это поле обязательно!';
      } else {
        if (input.id === 'userAge') {
          if (!+input.value || +input.value > 100 || +input.value < 0) {
            errorMessage.innerHTML = 'Введите корректное значение!';
          }
        } else if (input.id === 'childAge') {
          if ((!+input.value && +input.value !== 0) || +input.value > 18 || +input.value < 0) {
            errorMessage.innerHTML = 'Введите корректное значение!';
          }
        }
      }
      if (errorMessage.innerHTML) {
        wrap.classList.add('error');
        result++;
      } else {
        wrap.classList.add('valid');
      }
    }
  }
  return !result;
};

export default validateForm;
