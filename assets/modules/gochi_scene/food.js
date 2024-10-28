
export default class Food extends Phaser.GameObjects.Container {

    #myFood;
 
 

  constructor(scene, myData) {
    super(scene,scene.scale.width*0.5,scene.scale.height-(scene.scale.height-scene.scale.height*0.1), [])
    

    // adds the container to the calling scene
    this.scene.add.existing(this);

    console.log("food");

    this.#myFood = this.scene.add.sprite(0, 0, "star");
    this.#myFood.setOrigin(0.5, 0.5);
    this.#myFood.setScale(0.05);
    this.add([this.#myFood]);
  }

}
