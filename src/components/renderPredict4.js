import { predictions, templatePredict4 } from '../utils/constants.js';
import { renderPredict5 } from './renderPredict5.js';

export const renderPredict4 = (date) => {
  const predictElement = templatePredict4.content
    .querySelector('.prediction')
    .cloneNode(true);
  console.log(date);
  predictions.append(predictElement);
  const btnsPredict2 = predictions.querySelectorAll('.btn');
  btnsPredict2.forEach((btn) => {
    btn.addEventListener('click', () => {
      renderPredict5(date);
    });
  });
};
