const ProfileOpenPopupButton = document.querySelector('.profile__button')
const Popup = document.querySelector('.popup')
const PopupCloseButton = document.querySelector('.popup__close')


ProfileOpenPopupButton.addEventListener('click' , function () {
    Popup.classList.add('popup_opened')
})

PopupCloseButton.addEventListener('click' , function () {
    Popup.classList.remove('popup_opened')
})

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__fild_name')
let jobInput = document.querySelector('.popup__fild_work')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
        console.log(jobInput.value);
        console.log(nameInput.value);


      
    // Выберите элементы, куда должны быть вставлены значения полей
    let ProfileTitle = document.querySelector('.profile__title');
    let ProfileText = document.querySelector('.profile__text');


    // Вставьте новые значения с помощью textContent
    ProfileTitle.textContent = nameInput.value;
    ProfileText.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
