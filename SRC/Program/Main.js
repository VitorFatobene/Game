"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("../Entidades/Guerreiro");
var Mago_1 = require("../Entidades/Mago");
var Necromante_1 = require("../Entidades/Necromante");
var main = /** @class */ (function () {
    function main() {
    }
    main.start = function () {
        var p1 = new Guerreiro_1.Guerreiro("Vitor", 40, 2, 100, "Espada do Deus do Trovão", 8);
        console.log(p1.toString());
        console.log("MAGO STATS");
        var p2 = new Mago_1.Mago("maguinho", 30, 20, 65, "Cajado Lendário do dragão", 7);
        console.log(p2.toString());
        console.log("\n");
        console.log("NECROMANTE STATS:");
        var necro = new Necromante_1.Necromante("Necrozinho", 25, 25, 50, "Varinha Do Rei Antigo", 9);
        console.log(necro.toString());
        console.log("\nTESTE ATAQUE GUERREIRO");
        p1.calcularDano();
        p1.atacar();
        console.log("\n");
        console.log("TESTE ATAQUE MAGO");
        p2.calcularDano();
        p2.atacar();
        console.log("\n");
        console.log("TESTE ATAQUE NECROMANTE");
        necro.calcularDano();
        necro.atacar();
    };
    return main;
}());
main.start();
