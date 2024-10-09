const callback_function = () => {
    console.log('callback executed');
}

import {Menu_Renderer} from './menu_renderer.js';

const btns = [ //txt property must be an array
    {txt: ['AA'], callback: callback_function},
    {txt: ['BB'], callback: callback_function},
    {txt: ['CC1', 'CC2', 'CC3'], callback: callback_function},
];
const menu = new Menu_Renderer('Title 12345', 'Subtitle', 'version xyz', btns, 300, 600);
menu.init();