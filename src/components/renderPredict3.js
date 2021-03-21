import {
  DAYS,
  MONTH,
  YEARS,
  templatePredict3,
  predictions,
} from '../utils/constants.js';
import Section from '../components/Section.js';

export const renderPredict3 = () => {
  const predictElement = templatePredict3.content
    .querySelector('.prediction')
    .cloneNode(true);
  predictions.firstElementChild.remove();
  predictions.append(predictElement);
  const selectDay = document.querySelector('#day');
  const selectDayHeader = selectDay.querySelector('.select__header');
  const selectDayBody = selectDay.querySelector('.select__container');
  const selectMonth = document.querySelector('#month');
  const selectMonthHeader = selectMonth.querySelector('.select__header');
  const selectMonthBody = selectMonth.querySelector('.select__container');
  const selectYear = document.querySelector('#year');
  const selectYearHeader = selectYear.querySelector('.select__header');
  const selectYearBody = selectYear.querySelector('.select__container');
  const templateItem = document.querySelector('.template_item');

  const daysList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = createSelectItem(
          templateItem,
          itemText,
          selectDayHeader
        );
        daysList.appendItem(selectItem);
      },
    },
    '#body_days'
  );

  const monthList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = createSelectItem(
          templateItem,
          itemText,
          selectMonthHeader
        );
        monthList.appendItem(selectItem);
      },
    },
    '#body_month'
  );

  const yearList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = createSelectItem(
          templateItem,
          itemText,
          selectYearHeader
        );
        yearList.appendItem(selectItem);
      },
    },
    '#body_year'
  );

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

  const createSelectItem = (template, itemText, header) => {
    const selectItem = template.content
      .querySelector('.select__item')
      .cloneNode(true);
    header === selectMonthHeader
      ? (selectItem.textContent = itemText[0])
      : (selectItem.textContent = itemText);
    selectItem.addEventListener('click', () => {
      header === selectMonthHeader
        ? (header.textContent = itemText[1])
        : (header.textContent = itemText);
      closeAllSelects();
    });
    return selectItem;
  };

  yearList.renderItems(YEARS);
  monthList.renderItems(MONTH);
  daysList.renderItems(DAYS);

  selectDayHeader.addEventListener('click', () => {
    toggleSelect(selectDayBody, selectDayHeader);
  });

  selectMonthHeader.addEventListener('click', () => {
    toggleSelect(selectMonthBody, selectMonthHeader);
  });

  selectYearHeader.addEventListener('click', () => {
    toggleSelect(selectYearBody, selectYearHeader);
  });
};
