import {Guerreiro} from "../Entidades/Guerreiro";
import {Mago} from "../Entidades/Mago";
import * as readline from "readline";
import {Necromante} from "../Entidades/Necromante";
class main{
    static start(){
        const p1 = new Guerreiro("Vitor", 40, 2, 100, "Espada do Deus do Trovão", 8);
        console.log(p1.toString());
        console.log("MAGO STATS")
        const p2 = new Mago("maguinho", 30, 20, 65, "Cajado Lendário do dragão", 7);
        console.log(p2.toString());
        console.log("\n");
        console.log("NECROMANTE STATS:");
        const necro = new Necromante("Necrozinho", 25, 25, 50, "Varinha Do Rei Antigo", 9);
        console.log(necro.toString());
        console.log("\nTESTE ATAQUE GUERREIRO");
        p1.calcularDano();
        p1.atacar();
        console.log("\n");
        console.log("TESTE ATAQUE MAGO");
        p2.calcularDano();
        p2.atacar();
        console.log("\n");
        console.log("TESTE ATAQUE NECROMANTE")
        necro.calcularDano();
        necro.atacar();
    }
}
main.start();