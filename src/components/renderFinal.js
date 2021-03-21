import { predictions, templateFinal } from '../utils/constants.js';

export const renderFinal = () => {
  const finalElement = templateFinal.content
    .querySelector('.final')
    .cloneNode(true);
  predictions.firstElementChild.remove();
  predictions.append(finalElement);
};
