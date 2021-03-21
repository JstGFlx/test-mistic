import {
  DAYS,
  MONTH,
  YEARS,
  templatePredict3,
  predictions,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import SelectValidator from '../components/SelectValidator.js';
import SelectItem from '../components/SelectItem.js';
import { renderLoading } from '../components/renderLoading.js';

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
  const btnsPredict3 = predictions.querySelector('.btn');

  const daysList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = new SelectItem(
          templateItem,
          itemText,
          selectDayHeader,
          {
            handleItemClick: () => {
              closeAllSelects();
              validatorDay.setSelectValidStatus();
            },
          }
        );
        daysList.appendItem(selectItem.generateItem());
      },
    },
    '#body_days'
  );

  const monthList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = new SelectItem(
          templateItem,
          itemText,
          selectMonthHeader,
          {
            handleItemClick: () => {
              closeAllSelects();
              validatorMonth.setSelectValidStatus();
            },
          }
        );
        monthList.appendItem(selectItem.generateItem());
      },
    },
    '#body_month'
  );

  const yearList = new Section(
    {
      renderer: (itemText) => {
        const selectItem = new SelectItem(
          templateItem,
          itemText,
          selectYearHeader,
          {
            handleItemClick: () => {
              closeAllSelects();
              validatorYear.setSelectValidStatus();
            },
          }
        );
        yearList.appendItem(selectItem.generateItem());
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

  const handleSelectClick = (selectBody, selectHeader) => {
    if (selectBody.classList.contains('select_opened')) {
      selectBody.classList.remove('select_opened');
      selectHeader.classList.remove('select__header_opened');
    } else {
      closeAllSelects();
      selectBody.classList.add('select_opened');
      selectHeader.classList.add('select__header_opened');
    }
  };

  const validatorDay = new SelectValidator(selectDayHeader);
  const validatorMonth = new SelectValidator(selectMonthHeader);
  const validatorYear = new SelectValidator(selectYearHeader);

  const getDateOfBirth = () => {
    return `${selectYearHeader.textContent}/${selectMonthHeader.textContent}/${selectDayHeader.textContent}`;
  };

  yearList.renderItems(YEARS);
  monthList.renderItems(MONTH);
  daysList.renderItems(DAYS);

  selectDayHeader.addEventListener('click', () => {
    handleSelectClick(selectDayBody, selectDayHeader);
  });

  selectMonthHeader.addEventListener('click', () => {
    handleSelectClick(selectMonthBody, selectMonthHeader);
  });

  selectYearHeader.addEventListener('click', () => {
    handleSelectClick(selectYearBody, selectYearHeader);
  });

  btnsPredict3.addEventListener('click', () => {
    validatorDay.setSelectValidStatus();
    validatorMonth.setSelectValidStatus();
    validatorYear.setSelectValidStatus();
    if (
      !(
        validatorDay.checkInvalidSelect() ||
        validatorMonth.checkInvalidSelect() ||
        validatorYear.checkInvalidSelect()
      )
    ) {
      const userDateOfBirth = getDateOfBirth();
      renderLoading(userDateOfBirth);
    }
  });
};
