"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Classe_Mae_1 = require("./Classe_Mae");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome, forca, mana, vida, equipamento, inteligencia) {
        var _this = _super.call(this, nome, forca, mana, vida, equipamento) || this;
        _this.inteligencia = inteligencia;
        return _this;
    }
    Mago.prototype.getNome = function () {
        return this.nome;
    };
    Mago.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Mago.prototype.getForca = function () {
        return this.forca;
    };
    Mago.prototype.setForca = function (forca) {
        this.forca = forca;
    };
    Mago.prototype.getMana = function () {
        return this.mana;
    };
    Mago.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Mago.prototype.getVida = function () {
        return this.vida;
    };
    Mago.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Mago.prototype.getDano = function () {
        return this.dano;
    };
    Mago.prototype.setDano = function (dano) {
        this.dano = dano;
    };
    Mago.prototype.getEquipamento = function () {
        return this.equipamento;
    };
    Mago.prototype.setEquipamento = function (equipamento) {
        this.equipamento = equipamento;
    };
    Mago.prototype.toString = function () {
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento + ", Inteligencia: " + this.inteligencia;
    };
    Mago.prototype.getInteligencia = function () {
        return this.inteligencia;
    };
    Mago.prototype.setInteligencia = function (inteligencia) {
        this.inteligencia = inteligencia;
    };
    //provavelmente terei de fazer o método retornar o dano para que no futuro eu 
    //consiga criar o sistema de batalha onde o heroi vai dar dano no inimigo e a vida do inimigo
    //seja diminuida.
    Mago.prototype.calcularDano = function () {
        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));
    };
    Mago.prototype.atacar = function () {
        console.log("Mago atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) +
            " de dano");
    };
    return Mago;
}(Classe_Mae_1.Classe_Mae));
exports.Mago = Mago;
