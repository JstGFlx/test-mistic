import { predictions, templateFinal } from '../utils/constants.js';
import { getPersonData } from '../utils/utils.js';

export const renderFinal = () => {
  const finalElement = templateFinal.content
    .querySelector('.final')
    .cloneNode(true);
  const buttonCall = finalElement.querySelector('.btn');
  const alert = finalElement.querySelector('#alert');
  const alertSpan = finalElement.querySelector('.final__alert_span');
  predictions.firstElementChild.remove();
  predictions.append(finalElement);

  const setAlertText = (text, isOk) => {
    if (isOk) {
      alert.textContent = `Вы можете встретить: ${text.name}, ростом: ${text.height}. `;
      alertSpan.textContent = `Вам надо быть готовым, что бы последствия не оказались
    необратимыми.`;
    } else {
      alertSpan.textContent = `Что то пошло не так`;
      alert.textContent = `${text}, Нажмите еще раз на кнопку`;
    }
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
