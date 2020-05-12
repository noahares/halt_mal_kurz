import Card from '../helpers/card.js';
import Zone from '../helpers/zone.js';
import Dealer from '../helpers/dealer.js';
import io from 'socket.io-client';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('backside', 'src/assets/backside.jpg');
        this.load.image('ach_mein_dein', 'src/assets/ach_mein_dein.jpg');
        this.load.image('duo_schnick', 'src/assets/duo_schnick.jpg');
        this.load.image('gruppen_schnick', 'src/assets/gruppen_schnick.jpg');
        this.load.image('halt_mal_kurz', 'src/assets/halt_mal_kurz.jpg');
        this.load.image('kapitalismus', 'src/assets/kapitalismus.jpg');
        this.load.image('kommunismus', 'src/assets/kommunismus.jpg');
        this.load.image('nazi_kopf', 'src/assets/nazi_kopf.jpg');
        this.load.image('not_to_do_liste', 'src/assets/not_to_do_liste.jpg');
        this.load.image('polizei_kopf', 'src/assets/polizei_kopf.jpg');
        this.load.image('razupaltuff', 'src/assets/razupaltuff.jpg');
        this.load.image('vollversammlung', 'src/assets/vollversammlung.jpg');
    }

    create() {
        let self = this;

        this.isPlayerA = false;
        this.opponentCards = [];

        this.zone = new Zone(this);
        this.dropZone = this.zone.renderZone();
        this.outline = this.zone.renderOutline(this.dropZone);
        this.dealer = new Dealer(this);

        this.socket = io('http://localhost:3000');

        this.socket.on('connect', function () {
            console.log('Connected!');
        });

        this.socket.on('isPlayerA', function () {
            self.isPlayerA = true;
        });

        this.socket.on('dealCards', function () {
            self.dealer.dealCards();
            self.dealText.disableInteractive();
        });

        this.socket.on('cardPlayed', function (gameObject, isPlayerA) {
            console.log(self.isPlayerA);
            if (isPlayerA !== self.isPlayerA) {
            console.log('A card was played');
                let sprite = gameObject.textureKey;
                self.opponentCards.shift().destroy();
                self.dropZone.data.values.cards++;
                let card = new Card(self);
                card.render(self.dropZone.x, self.dropZone.y, sprite).disableInteractive();
            }
        });

        this.reset = () => {

        }

            this.dealText = this.add.text(75, 350, ['Deal Cards']).setFontSize(18).setColor('#00ffff').setInteractive();

            this.dealText.on('pointerdown', function () {
                self.socket.emit('dealCards');
            });

            this.dealText.on('pointerover', function () {
                self.dealText.setColor('#ff69b4');
            });

            this.dealText.on('pointerout', function () {
                self.dealText.setColor('#00ffff');
            });

            this.resetText = this.add.text(75, 300, ['Reset']).setFontSize(18).setColor('#0000ff').setInteractive();

            this.resetText.on('pointerdown', function () {
                self.reset();
            });

            this.input.on('dragstart', function (pointer, gameObject) {
                gameObject.setTint(0xff69b4);
                self.children.bringToTop(gameObject);
            });

            this.input.on('dragend', function (pointer, gameObject, dropped) {
                gameObject.setTint();
                /*if (!dropped) {
                    gameObject.x = gameObject.input.dragStartX;
                    gameObject.y = gameObject.input.dragStartY;
                }*/
            });

            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            this.input.on('drop', function (pointer, gameObject, dropZone) {
                /*if (dropZone.data.values.card != null) {
                    dropZone.data.values.card.x = gameObject.input.dragStartX;
                    dropZone.data.values.card.y = gameObject.input.dragStartY;
                    dropZone.data.values.card.setInteractive();
                }*/
                dropZone.data.values.cards++;
                gameObject.x = dropZone.x
                gameObject.y = dropZone.y;
                gameObject.disableInteractive();
                self.socket.emit('cardPlayed', gameObject, self.isPlayerA);
            });
        }

        update() {

        }
    }
