import { predictions, templatePredict5 } from '../utils/constants.js';
import { getAge } from '../utils/utils.js';

export const renderPredict5 = (date) => {
  const predictElement = templatePredict5.content
    .querySelector('.prediction')
    .cloneNode(true);
  const textMassage = predictElement.querySelector('.prediction__text');
  const btnsPredict4 = predictElement.querySelector('.btn');
  predictions.firstElementChild.remove();
  predictions.append(predictElement);
  const userAge = getAge(date);
  if (userAge > 18 && userAge < 36) {
    textMassage.textContent =
      'По вам скучает очень близкий человек, которого больше нет в мире живых.';
  } else if (userAge > 35 && userAge < 46) {
    textMassage.textContent =
      'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.';
  } else {
    textMassage.textContent =
      'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.';
  }
  btnsPredict4.addEventListener('click', () => {});
};
