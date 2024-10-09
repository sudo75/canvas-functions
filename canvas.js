import {Btn_Menu} from './btn_menu.js';


class Menu_Renderer {
    constructor(title, subtitle, version, btns) {
        this.title = title;
        this.subtitle = subtitle;
        this.btns = btns;
        this.font = {
            title: {style: 'bold', size: 32, typeface: 'IBM Plex Serif'},
            subtitle: {style: 'italic', size: 16, typeface: 'Arial'},
            version: {style: 'bold', size: 16, typeface: 'Arial'}
        };

        this.version = version;
        
        this.canvas = document.querySelector('.canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    init() {
        this.canvas.width = 300;
        this.canvas.height = 600;

        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
    
        //Title
        const titleX = this.canvas.width / 2;
        const titleY = 20 + this.font.title.size / 2;

        this.ctx.font = `${this.font.title.style} ${this.font.title.size}px ${this.font.title.typeface}`;
        this.ctx.fillText(this.title, titleX, titleY);

        //Subtitle
        const subtitleX = this.canvas.width / 2;
        const subtitleY = 20 + titleY + this.font.subtitle.size / 2;

        this.ctx.font = `${this.font.subtitle.style} ${this.font.subtitle.size}px ${this.font.subtitle.typeface}`;
        this.ctx.fillText(this.subtitle, subtitleX, subtitleY);

        //Version
        this.ctx.textAlign = 'left';
        const versionX = 10;
        const versionY = this.canvas.height - this.font.version.size;

        this.ctx.font = `${this.font.version.style} ${this.font.version.size}px ${this.font.version.typeface}`;
        this.ctx.fillText(this.version, versionX, versionY);

        //Menu
        const menuY = subtitleY + this.font.subtitle.size + 10;
        const menu = new Btn_Menu(this.canvas, this.ctx, this.btns, 10, menuY);
        menu.btn_dimensions.width = this.canvas.width - 20; //margin of 10 on each side
        menu.init();
    }
}


const callback_function = () => {
    console.log('callback executed');
}


const btns = [
    {txt: 'AA', callback: callback_function},
    {txt: 'BB', callback: callback_function},
    {txt: ['CC1', 'CC2', 'CC3'], callback: callback_function},
];
const menu = new Menu_Renderer('Title 12345', 'Subtitle', 'version xyz', btns);
menu.init();