export class Classe_Mae{
    private nome: String;
    private forca: number;
    private mana: number;
    private vida: number;
    private equipamento: String;

    constructor(nome: String, forca: number, mana: number, vida: number, equipamento: String){
        this.nome = nome;
        this.forca = forca;
        this.mana = mana;
        this.vida = vida;
        this.equipamento = equipamento;
    }

    public getNome(): String{
        return this.nome;
    }

    public setNome(nome: String): void{
        this.nome = nome;        
    }

    
    public getForca(): number {
        return this.forca;
    }

    public setForca(forca : number): void {
        this.forca = forca
    }

    public getMana() : number {
        return this.mana;
    }
    
    public setMana(mana : number) {
        this.mana = mana;
    }

    
    public getVida() : number {
        return this.vida; 
    }
    
    public setVida(vida : number) {
        this.vida = vida;
    }

    
    public getEquipamento() : String {
        return this.equipamento;
    }

    public setEquipamento(equipamento : String) {
        this.equipamento = equipamento;
    }

    public toString(): String{
        return "Nome: " + this.nome + "Mana: " + this.mana + ", Força: " + this.forca +
        ", vida: " + this.vida + ", Equipamento: " + this.equipamento;
    }
}