import { btnsPredict1 } from '../utils/constants.js';
import { renderPredict2 } from '../components/renderPredict2.js';

btnsPredict1.forEach((btn) => btn.addEventListener('click', renderPredict2));
