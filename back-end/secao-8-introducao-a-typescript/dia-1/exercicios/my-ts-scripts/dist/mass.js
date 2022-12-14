"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(value, baseUnit, conversationUnit) {
    const indexBaseUnit = massUnits.indexOf(baseUnit);
    const indexConversationUnit = massUnits.indexOf(conversationUnit);
    const exponent = indexConversationUnit - indexBaseUnit;
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(massUnits, 'Indique um número para a unidade base:');
    const conversationUnitIndex = readline_sync_1.default.keyInSelect(massUnits, 'Indique um número para a conversão');
    const baseUnit = massUnits[baseUnitIndex];
    const conversationUnit = massUnits[conversationUnitIndex];
    if (!baseUnit || !conversationUnit) {
        console.log('Função cancelada');
        return 0;
    }
    const response = convertMass(value, baseUnit, conversationUnit);
    const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;
    console.log(message);
}
exec();
