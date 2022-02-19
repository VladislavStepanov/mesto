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

const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close');
const popupCloseImage = document.querySelector('.popup__container_image')
const popupClosePlace = document.querySelector('.popup__close_place')
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
const popupZoomImage = document.querySelector('.popup__zoom-image')
const popupImageDescription = document.querySelector('.popup__description')

function doClosePopap (element) {
  element.classList.remove('popup_opened')
}

function doOpenPopap (element) {
  element.classList.add('popup_opened')
}

profileOpenPopupButton.addEventListener('click', function(){
    doOpenPopap(popupName)
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
});

submitName.addEventListener('submit', function (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  doClosePopap(popupName)
});

placeOpenPoppupButton.addEventListener('click', function () {
  submitNamePlace.reset()
  doOpenPopap(popupPlace)
});

popupCloseImage.addEventListener('click', function() {
  doClosePopap(popupImage)
});

popupClosePlace.addEventListener('click', function() {
  doClosePopap(popupPlace)
});

popupCloseButton.addEventListener('click', function() {
  doClosePopap(popupName)
});

function openPopupImage(event) {
  popupImage.classList.add('popup_opened')
  popupZoomImage.src= event.target.src; 
  popupImageDescription.textContent= event.target.alt;
  popupZoomImage.alt= event.target.alt;
}

function createCard(item) {
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__img').alt = item.name;
  cardElement.querySelector('.element__img').src = item.link;
  addListeners(cardElement); 
  return cardElement
}

function addCard (element) {
  const cardElement = createCard (element)
  elementCard.prepend(cardElement)
}

function addListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', deleteCard); 
  element.querySelector('.element__like').addEventListener('click', likeCard); 
  element.querySelector('.element__img').addEventListener('click', openPopupImage); 
}

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function likeCard(event) {
  event.target.classList.toggle('element__like_active');
}

submitNamePlace.addEventListener('submit', function(event) {
  event.preventDefault();
  addCard({name: elementInputText.value, link: elementInputLink.value})
  doClosePopap(popupPlace); 
});

items.forEach(addCard);
