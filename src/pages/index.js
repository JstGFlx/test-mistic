import { btnsPredict1 } from '../utils/constants.js';
import { renderPredict2 } from '../components/renderPredict2.js';
import './index.css';

btnsPredict1.forEach((btn) => btn.addEventListener('click', renderPredict2));
