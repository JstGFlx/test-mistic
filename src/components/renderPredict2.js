import { renderPredict3 } from '../components/renderPredict3.js';
import { predictions, templatePredict2 } from '../utils/constants.js';

export const renderPredict2 = () => {
  const predictElement = templatePredict2.content
    .querySelector('.prediction')
    .cloneNode(true);
  predictions.firstElementChild.remove();
  predictions.append(predictElement);
  const btnsPredict2 = predictions.querySelectorAll('.btn');
  btnsPredict2.forEach((btn) => btn.addEventListener('click', renderPredict3));
};
