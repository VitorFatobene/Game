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
exports.Necromante = void 0;
var Classe_Mae_1 = require("./Classe_Mae");
var Necromante = /** @class */ (function (_super) {
    __extends(Necromante, _super);
    function Necromante(nome, forca, mana, vida, equipamento, inteligencia) {
        var _this = _super.call(this, nome, forca, mana, vida, equipamento) || this;
        _this.inteligencia = inteligencia;
        return _this;
    }
    Necromante.prototype.getNome = function () {
        return this.nome;
    };
    Necromante.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Necromante.prototype.getForca = function () {
        return this.forca;
    };
    Necromante.prototype.setForca = function (forca) {
        this.forca = forca;
    };
    Necromante.prototype.getMana = function () {
        return this.mana;
    };
    Necromante.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Necromante.prototype.getVida = function () {
        return this.vida;
    };
    Necromante.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Necromante.prototype.getDano = function () {
        return this.dano;
    };
    Necromante.prototype.setDano = function (dano) {
        this.dano = dano;
    };
    Necromante.prototype.getEquipamento = function () {
        return this.equipamento;
    };
    Necromante.prototype.setEquipamento = function (equipamento) {
        this.equipamento = equipamento;
    };
    Necromante.prototype.toString = function () {
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento + ", Inteligencia: " + this.inteligencia;
    };
    Necromante.prototype.getInteligencia = function () {
        return this.inteligencia;
    };
    Necromante.prototype.setInteligencia = function (inteligencia) {
        this.inteligencia = inteligencia;
    };
    Necromante.prototype.calcularDano = function () {
        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));
    };
    Necromante.prototype.atacar = function () {
        console.log("Necromante atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) +
            " de dano");
    };
    return Necromante;
}(Classe_Mae_1.Classe_Mae));
exports.Necromante = Necromante;
