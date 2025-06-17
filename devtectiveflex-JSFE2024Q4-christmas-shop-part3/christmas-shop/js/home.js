import { getData } from './network-api.js';
import './burger.js';
import './slider.js';
import './timer.js';
import './back-to-top.js';
import { renderBestGifts } from './cards.js';

getData(renderBestGifts, (v) => v)