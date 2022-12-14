"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convertArea(value, baseUnit, conversationUnit) {
    const indexBaseUnit = areaUnits.indexOf(baseUnit);
    const indexConversationUnit = areaUnits.indexOf(conversationUnit);
    const exponent = indexConversationUnit - indexBaseUnit;
    return value * Math.pow(100, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(areaUnits, 'Indique um número para a unidade base:');
    const conversationUnitIndex = readline_sync_1.default.keyInSelect(areaUnits, 'Indique um número para a conversão');
    const baseUnit = areaUnits[baseUnitIndex];
    const conversationUnit = areaUnits[conversationUnitIndex];
    if (!baseUnit || !conversationUnit) {
        console.log('Função cancelada');
        return 0;
    }
    const response = convertArea(value, baseUnit, conversationUnit);
    const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;
    console.log(message);
}
exec();
