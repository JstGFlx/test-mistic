import {
  DAYS,
  MONTH,
  YEARS,
  selectDayHeader,
  selectDayBody,
  selectMonthHeader,
  selectMonthBody,
  selectYearHeader,
  selectYearBody,
  templateItem,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import { toggleSelect, createSelectItem } from '../utils/utils.js';

const daysList = new Section(
  {
    renderer: (itemText) => {
      const selectItem = createSelectItem(templateItem, itemText);
      daysList.appendItem(selectItem);
    },
  },
  '#body_days'
);

const monthList = new Section(
  {
    renderer: (itemText) => {
      const selectItem = createSelectItem(templateItem, itemText);
      monthList.appendItem(selectItem);
    },
  },
  '#body_month'
);

const yearList = new Section(
  {
    renderer: (itemText) => {
      const selectItem = createSelectItem(templateItem, itemText);
      yearList.appendItem(selectItem);
    },
  },
  '#body_year'
);

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
