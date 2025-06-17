import {renderGiftsSection} from './cards.js'
import { getData } from './network-api.js'
import './burger.js';
import './back-to-top.js';
import './gifts-section.js';
getData(renderGiftsSection, (v) => v);