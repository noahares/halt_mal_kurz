import Card from './card.js'

export default class Dealer {
    constructor(scene) {
        this.dealCards = () => {
            let opponentSprite = 'backside';
            let cards = [];

            cards.push(new Card(scene, 'witzig', 'kaenguru', 'halt_mal_kurz_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'halt_mal_kurz_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'vollversammlung_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'vollversammlung_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'duo_schnick_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'duo_schnick_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'gruppen_schnick_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'ach_mein_dein_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'not_to_do_liste_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kaenguru', 'not_to_do_liste_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'nazi_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'nazi_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'nazi_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'nazi_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'nazi_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'polizei_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'polizei_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'polizei_kaenguru'));
            cards.push(new Card(scene, 'nicht_witzig', 'kaenguru', 'kapitalismus_kaenguru'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'halt_mal_kurz_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'halt_mal_kurz_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'vollversammlung_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'vollversammlung_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'duo_schnick_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'duo_schnick_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'gruppen_schnick_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'ach_mein_dein_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'not_to_do_liste_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'kleinkuenstler', 'not_to_do_liste_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'nazi_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'nazi_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'nazi_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'nazi_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'nazi_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'polizei_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'polizei_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'polizei_kleinkuenstler'));
            cards.push(new Card(scene, 'nicht_witzig', 'kleinkuenstler', 'kapitalismus_kleinkuenstler'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'halt_mal_kurz_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'halt_mal_kurz_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'vollversammlung_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'vollversammlung_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'duo_schnick_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'duo_schnick_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'gruppen_schnick_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'ach_mein_dein_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'not_to_do_liste_pinguin'));
            cards.push(new Card(scene, 'witzig', 'pinguin', 'not_to_do_liste_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'nazi_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'nazi_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'nazi_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'nazi_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'nazi_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'polizei_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'polizei_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'polizei_pinguin'));
            cards.push(new Card(scene, 'nicht_witzig', 'pinguin', 'kapitalismus_pinguin'));
            cards.push(new Card(scene, 'witzig', 'alle', 'kommunismus'));
            cards.push(new Card(scene, 'neutral', 'keines', 'razupaltuff'));
            cards.push(new Card(scene, 'neutral', 'keines', 'razupaltuff'));

            this.shuffle = () => {
                for (let i = cards.length -1; i > 0; i--) {
                    let j = Math.floor(Math.random() * i);
                    let k = cards[i];
                    cards[i] = cards[j];
                    cards[j] = k;
                }
            }
            this.shuffle();
            for(let i = 0; i < scene.numPlayers; i++) {
                scene.cards.push([]);
            }
            for (let i = 0; i < 10 - scene.numPlayers; i++) {
                let card = cards[i];
                card.render(600 + (i * 120), 760);
                scene.cards[scene.playerId].push(card);
            }
            if (scene.numPlayers > 0) {

                for(let i = 0; i < scene.numPlayers; i++) {
                    for(let j = 0; j < 10 - scene.numPlayers; j++) {
                        if (i === scene.playerId) {
                            continue;
                        }
                        let opponentCard = new Card(scene, 'neutral', 'keines', 'backside');
                        scene.cards[i].push(opponentCard.render(300 + (300 * i) + (j * 20), 140).disableInteractive());
                    }
                }
            }
        }
    }
}
