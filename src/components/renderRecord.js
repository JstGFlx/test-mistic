import { predictions, templateRecord } from '../utils/constants.js';
import { renderFinal } from './renderFinal.js';

export const renderRecord = () => {
  const recordElement = templateRecord.content
    .querySelector('.record')
    .cloneNode(true);
  const progress = recordElement.querySelector('.record__progress');
  const progressValue = recordElement.querySelector('.record__value');
  predictions.firstElementChild.remove();
  predictions.append(recordElement);

  const recordInterval = setInterval(() => {
    progress.value++;
    progressValue.textContent = `${progress.value}%`;
    if (progress.value === progress.max) {
      clearInterval(recordInterval);
      renderFinal();
    }
  }, 35);
};
