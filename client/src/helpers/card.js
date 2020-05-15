export default class Card {
    constructor(scene, category, symbol, sprite) {
        this.category = category;
        this.symbol = symbol;
        this.sprite = sprite;
        this.render = (x, y) => {
            let card = scene.add.image(x, y, this.sprite).setScale(0.1, 0.1).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}
