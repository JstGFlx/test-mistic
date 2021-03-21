import {
  selectDayHeader,
  selectDayBody,
  selectMonthHeader,
  selectMonthBody,
  selectYearHeader,
  selectYearBody,
} from '../utils/constants.js';

const closeAllSelects = () => {
  selectDayBody.classList.remove('select_opened');
  selectDayHeader.classList.remove('select__header_opened');
  selectMonthHeader.classList.remove('select__header_opened');
  selectMonthBody.classList.remove('select_opened');
  selectYearHeader.classList.remove('select__header_opened');
  selectYearBody.classList.remove('select_opened');
};

const toggleSelect = (selectBody, selectHeader) => {
  if (selectBody.classList.contains('select_opened')) {
    selectBody.classList.remove('select_opened');
    selectHeader.classList.remove('select__header_opened');
  } else {
    closeAllSelects();
    selectBody.classList.add('select_opened');
    selectHeader.classList.add('select__header_opened');
  }
};

const createSelectItem = (template, itemText) => {
  const selectItem = template.content
    .querySelector('.select__item')
    .cloneNode(true);
  selectItem.textContent = itemText;
  return selectItem;
};

export { toggleSelect, createSelectItem };
