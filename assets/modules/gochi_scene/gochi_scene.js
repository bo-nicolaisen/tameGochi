import myBg from './img/bg.png';
import myStar from './img/star.png';
import * as LocalData from '../localstorage/localstorage_module.js';

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

        // actor
        this.actor = this.add.image(100, 400, 'star');
        this.actor.setOrigin(0, 0);
        this.actor.setScale(0.05);

        this.myGochi = new Gochi(LocalData.ReadLocalStorageData(), this.actor);
    }

    /*   update() {
          this.myGochi.updateGochi();
      } */
}

class Gochi {
    constructor (myProps, myActor) {
        this.name = myProps.name;

    }

    updateGochi() {
        console.log('update' + this.name);
    }
}
