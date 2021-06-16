window.supportCustomElements="customElements" in window;



import {InitAction} from './components/initaction.js';
import {LegoDrop} from './components/legodrop.js';
import {LegoColchets} from './components/legocolchets.js';
import {LegoEmpty} from './components/legoempty.js';
import {LegoFirst} from './components/legofirst.js';
import {LegoVert} from './components/legovert.js';
import {LegoLateral} from './components/legolateral.js';
import {LegoAngle} from './components/legoangle.js'


window.customElements.define('init-action',InitAction);
window.customElements.define('lego-drop',LegoDrop);
window.customElements.define('lego-colchets',LegoColchets);
window.customElements.define('lego-empty',LegoEmpty);
window.customElements.define('lego-first',LegoFirst);
window.customElements.define('lego-vert',LegoVert);
window.customElements.define('lego-lateral',LegoLateral);
window.customElements.define('lego-angle',LegoAngle);





