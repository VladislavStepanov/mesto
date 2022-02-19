const items = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileOpenPopupButton = document.querySelector('.profile__button');
const popupName = document.querySelector('.popup_name');
const popupNameCloseButton = popupName.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const submitName = popupName.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__fild_text_name');
const jobInput = document.querySelector('.popup__fild_text_work');
const placeOpenPoppupButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close');
const titleInput = popupPlace.querySelector('.popup__fild_text_name');
const imageInput = popupPlace.querySelector('.popup__fild_text_work');
const submitNamePlace = popupPlace.querySelector('.popup__form');
const elementTemplate = document.querySelector('#template').content;
const elementCard = document.querySelector('.elements');
const elementInputText = popupPlace.querySelector('.popup__fild_text_title');
const elementInputLink = popupPlace.querySelector('.popup__fild_text_link');
const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close_image')


function popupOpenClosePlace () {
    popupPlace.classList.toggle('popup_opened');
  }

placeOpenPoppupButton.addEventListener('click' , popupOpenClosePlace)
popupPlaceCloseButton.addEventListener('click' , popupOpenClosePlace)

function popupNameOpen () {
    popupName.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
}
function popupNameClose () {
    popupName.classList.remove('popup_opened')
}

profileOpenPopupButton.addEventListener('click' , popupNameOpen)
popupNameCloseButton.addEventListener('click' , popupNameClose)

function formSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    popupNameClose()
}

submitName.addEventListener('submit', formSubmitHandler)

function popupImageClose() {
  popupImage.classList.remove('popup_opened')
}

function popupImageOpen(event) {
  popupImage.classList.add('popup_opened')
  document.querySelector('.popup__zoom-image').src= event.target.src;
  document.querySelector('.popup__description').textContent= event.target.alt;

}

popupImageCloseButton.addEventListener('click', popupImageClose)

function render() {
  items.forEach(renderCard);
}

function renderCard(element) {
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__img').alt = element.name;
  cardElement.querySelector('.element__img').src = element.link;
  addListeners(cardElement);
  elementCard.appendChild(cardElement);
}

function addListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', cardDelete);
  element.querySelector('.element__like').addEventListener('click', likeCard);
  element.querySelector('.element__img').addEventListener('click', popupImageOpen);
}

function cardDelete(event) {
  event.target.closest('.element').remove();
}

function likeCard(event) {
  event.target.classList.toggle('element__like_active');
}

function addCard(event) {
  event.preventDefault();
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element__img').src= elementInputLink.value;
  cardElement.querySelector('.element__img').alt= elementInputText.value;
  cardElement.querySelector('.element__title').textContent= elementInputText.value;
  addListeners(cardElement);
  elementCard.prepend(cardElement);
  popupOpenClosePlace();  
}

submitNamePlace.addEventListener('submit', addCard);

render();