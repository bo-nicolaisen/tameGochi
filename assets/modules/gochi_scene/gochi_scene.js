import myBg from './img/bg.png';
import myStar from './img/star.png';
import * as LocalData from '../localstorage/localstorage_module.js';
import Gochi from './gochi.js';
import Food from './food.js';


export default class GochiScene extends Phaser.Scene {

    constructor () {
        super({ key: 'GochiScene' });
    }

    preload() {
        this.load.image('bg', myBg);
        this.load.image('star', myStar);
    }

    create() {
        // background
        this.bg = this.add.image(0, 0, 'bg');
        this.bg.setOrigin(0, 0);

        // add gochi
        this.myGochi = new Gochi(this,LocalData.ReadLocalStorageData());

        this.dropFood()
    }

    dropFood(){
    new Food(this);
    }

       update() {
         // this.myGochi.updateGochi();
      } 
}



   
