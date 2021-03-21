export default class SelectValidator {
  constructor(select) {
    this._select = select;
  }

  _showError(select) {
    select.classList.add('select_not-filling');
  }

  _hideError(select) {
    select.classList.remove('select_not-filling');
  }

  _checkInvalidSelect() {
    return this._selectList.some((select) => {
      return isNaN(Number(select.textContent));
    });
  }

  checkInputValidity() {
    if (checkInvalidSelect(this._select)) {
      showError(this._select);
    } else {
      hideError(this._select);
    }
  }
}
