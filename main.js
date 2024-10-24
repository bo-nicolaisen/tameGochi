import './style.css'

import * as Phazer from 'phaser';
import StartScreen from './assets/modules/start_scene/start_scene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      }
    }
  }
};


let Game = new Phaser.Game(config);
export default Game


Game.scene.add('StartScreen', StartScreen);
Game.scene.start('StartScreen', { mode: "active" });

