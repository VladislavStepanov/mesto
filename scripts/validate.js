// функция запускающая валидацию
const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);//псевдомассив
  formList.forEach((formElement) => { //навешивание событий
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, formElement);
  })
};

function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(config, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(config, inputList, buttonElement);
    });
  })
};

// Смена класса
function toggleButtonState(config, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  } else { 
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// Проверка
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// проверка
function isValid(formElement, inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(config, formElement, inputElement)
  } else {
    showInputError(config, formElement, inputElement, inputElement.validationMessage)
  }
};

// выдает ошибку
function showInputError(config, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`span[name=${inputElement.name}-error]`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
};

// скрывает ошибку
function hideInputError(config, formElement, inputElement) {
  const errorElement = formElement.querySelector(`span[name=${inputElement.name}-error]`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

enableValidation(config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__fild',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-error',
});