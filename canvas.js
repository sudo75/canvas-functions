const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 600;


import {Btn} from './button.js';

class Menu {
    constructor(canvas, ctx, btns) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.btns = btns;
        this.btn_margin = 5;
    }

    init() {
        
        this.draw();
    }
    draw() {
        for (let i = 0; i < this.btns.length; i++) {
            const btnWidth = 200;
            const btnHeight = 50;
            const btnX = 5;
            const btnY = 5 + i * (btnHeight + 2 * this.btn_margin);

            const callback_function = btns[i].callback;
            const btn = new Btn(canvas, ctx, btnX, btnY, btnWidth, btnHeight, btns[i].txt, callback_function);
            btn.init(); 
        }
    }
}

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
const menu = new Menu(canvas, ctx, btns);
menu.init();