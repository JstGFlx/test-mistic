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

  checkInvalidSelect() {
    return isNaN(Number(this._select.textContent));
  }

  setSelectValidStatus() {
    if (this.checkInvalidSelect()) {
      this._showError(this._select);
    } else {
      this._hideError(this._select);
    }
  }
}
