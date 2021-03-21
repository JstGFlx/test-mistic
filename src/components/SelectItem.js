export default class SelectItem {
  constructor(templateItem, textItem, hederSelector, { handleItemClick }) {
    this._templateItem = templateItem;
    this._textItem = textItem;
    this._hederSelector = hederSelector;
    this._elementItem = this._getTemplate();
    this._handleItemClick = handleItemClick;
  }

  _getTemplate() {
    return this._templateItem.content
      .querySelector('.select__item')
      .cloneNode(true);
  }

  generateItem() {
    this._elementItem.textContent = this._textItem;
    this._setEventListeners();
    return this._elementItem;
  }

  _setEventListeners() {
    this._elementItem.addEventListener('click', () => {
      this._hederSelector.textContent = this._textItem;
      this._handleItemClick();
    });
  }
}
