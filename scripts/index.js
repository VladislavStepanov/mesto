const profileOpenPopupButton = document.querySelector('.profile__button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close')
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__fild_text_name')
const jobInput = document.querySelector('.popup__fild_text_work')

function popupOpen () {
    popup.classList.add('popup__opened')
}
function popupClose () {
    popup.classList.remove('popup__opened')
}

profileOpenPopupButton.addEventListener('click' , popupOpen)
popupCloseButton.addEventListener('click' , popupClose)

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    popupClose()
}

formElement.addEventListener('submit', formSubmitHandler); 
