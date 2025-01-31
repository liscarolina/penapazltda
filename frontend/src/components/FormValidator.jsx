export default class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }

  _setEventListeners(formSelector) {
    let formItems = Array.from(
      formSelector.querySelectorAll(".register__input")
    );
    let submitButtonSelector = formSelector.querySelector(".register__button");
    this._toggleButtonState(formItems, submitButtonSelector);
    formItems.forEach((formItem) => {
      this._checkInputValidity(formItem, formSelector);

      formItem.addEventListener("input", (evt) => {
        evt.preventDefault();
        this._checkInputValidity(formItem, formSelector);
        this._toggleButtonState(formItems, submitButtonSelector);
      });
    });
  }

  _showInputError(formSelector, formItem) {
    let formError = formSelector.querySelector(
      `.register__error-${formItem.name}`
    );

    formError.textContent = formItem.validationMessage;
    formItem.classList.add("register__input_invalid");
  }

  _hideInputError(formSelector, formItem) {
    let formError = formSelector.querySelector(
      `.register__error-${formItem.name}`
    );
    formError.textContent = "";
    formItem.classList.remove("register__input_invalid");
  }

  _toggleButtonState(formItems, submitButtonSelector) {
    if (this._hasInvalidInput(formItems)) {
      submitButtonSelector.classList.add("register__button-inactive");
    } else {
      submitButtonSelector.classList.remove("register__button-inactive");
    }
  }

  _hasInvalidInput(formItems) {
    return formItems.some((formItem) => {
      return !formItem.validity.valid;
    });
  }

  _checkInputValidity(formItem, formSelector) {
    if (!formItem.validity.valid) {
      this._showInputError(formSelector, formItem);
    } else {
      this._hideInputError(formSelector, formItem);
    }
  }
}
