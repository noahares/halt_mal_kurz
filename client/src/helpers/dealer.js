import Card from './card.js'

export default class Dealer {
    constructor(scene) {
        this.dealCards = () => {
            let playerSprite;
            let opponentSprite;
            playerSprite = 'halt_mal_kurz';
            opponentSprite = 'backside';

            let cards = ['ach_mein_dein', 'duo_schnick', 'gruppen_schnick', 'halt_mal_kurz', 'kapitalismus', 'nazi_kopf', 'not_to_do_liste', 'polizei_kopf', 'razupaltuff', 'vollversammlung'];

            this.shuffle = () => {
                for (let i = cards.length -1; i > 0; i--) {
                    let j = Math.floor(Math.random() * i);
                    let k = cards[i];
                    cards[i] = cards[j];
                    cards[j] = k;
                }
            }
            this.shuffle();
            for (let i = 0; i < 5; i++) {
                let playerCard = new Card(scene);
                let card = cards[i];
                playerCard.render(600 + (i * 120), 760, card);
            }
            for(let i = 0; i < 5; i++) {
                let opponentCard = new Card(scene);
                scene.opponentCards.push(opponentCard.render(600 + (i * 120), 140, 'backside').disableInteractive());
            }
        }
    }
}
