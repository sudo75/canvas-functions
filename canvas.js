const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 600;


import {Btn_Menu} from './btn_menu.js';


class renderer {
    constructor() {

    }
}

const callback_function = () => {
    console.log('callback executed');
}

/*

const btn = new Btn(canvas, ctx, 5, 5, 200, 50, 'TEST Button', callback_function);
btn.init();

*/

const btns = [
    {txt: 'AA', callback: callback_function},
    {txt: 'BB', callback: callback_function},
    {txt: 'CC', callback: callback_function},
];
const btn_menu = new Btn_Menu(canvas, ctx, btns, 5, 5);
btn_menu.init();