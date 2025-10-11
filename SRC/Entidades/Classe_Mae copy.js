"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe_Mae = void 0;
var Classe_Mae = /** @class */ (function () {
    function Classe_Mae(nome, forca, mana, vida, equipamento) {
        this.nome = nome;
        this.forca = forca;
        this.mana = mana;
        this.vida = vida;
        this.equipamento = equipamento;
    }
    Classe_Mae.prototype.getNome = function () {
        return this.nome;
    };
    Classe_Mae.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Classe_Mae.prototype.getForca = function () {
        return this.forca;
    };
    Classe_Mae.prototype.setForca = function (forca) {
        this.forca = forca;
    };
    Classe_Mae.prototype.getMana = function () {
        return this.mana;
    };
    Classe_Mae.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Classe_Mae.prototype.getVida = function () {
        return this.vida;
    };
    Classe_Mae.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Classe_Mae.prototype.getEquipamento = function () {
        return this.equipamento;
    };
    Classe_Mae.prototype.setEquipamento = function (equipamento) {
        this.equipamento = equipamento;
    };
    Classe_Mae.prototype.toString = function () {
        return "Nome: " + this.nome + "Mana: " + this.mana + ", Força: " + this.forca +
            ", vida: " + this.vida + ", Equipamento: " + this.equipamento;
    };
    return Classe_Mae;
}());
exports.Classe_Mae = Classe_Mae;
