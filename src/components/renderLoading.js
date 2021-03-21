import { predictions, templateLoading } from '../utils/constants.js';
import { renderPredict4 } from '../components/renderPredict4.js';

const renderLoading = (date) => {
  const loadingElement = templateLoading.content
    .querySelector('.loading')
    .cloneNode(true);
  predictions.firstElementChild.remove();
  predictions.append(loadingElement);
  setTimeout(() => {
    predictions.firstElementChild.remove();
    renderPredict4(date);
  }, 2000);
};

export { renderLoading };
