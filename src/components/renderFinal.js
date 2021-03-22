import { predictions, templateFinal } from '../utils/constants.js';
import { getPersonData } from '../utils/utils.js';

export const renderFinal = () => {
  const finalElement = templateFinal.content
    .querySelector('.final')
    .cloneNode(true);
  const buttonCall = finalElement.querySelector('.btn');
  const alert = finalElement.querySelector('#alert');
  predictions.firstElementChild.remove();
  predictions.append(finalElement);

  const setAlertText = (text, isOk) => {
    isOk
      ? (alert.textContent = `Вы можете встретить: ${text.name}, ростом: ${text.height}. Вам надо быть готовым, чтобы последствия не оказались
      необратимыми.`)
      : (alert.textContent = `Что то пошло не так ${text}, Нажмите еще раз на кнопку`);
  };

  buttonCall.addEventListener('click', () => {
    getPersonData()
      .then((res) => {
        setAlertText(res, true);
      })
      .catch((err) => {
        setAlertText(err, false);
      });
  });
};
