import myImg from './img/star.png';

export default class myTest extends Phaser.Scene {

    constructor () {
        super({ key: 'StartScreen' });
        this.state = 1;
    }

    preload() {

        this.load.image('star', myImg);
    }

    create() {
        console.log('Hello from start');


        this.add.image(400, 200, 'star');

    }

}