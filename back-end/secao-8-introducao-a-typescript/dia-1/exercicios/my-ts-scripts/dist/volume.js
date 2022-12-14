"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolume(value, baseUnit, conversationUnit) {
    const indexBaseUnit = volumeUnits.indexOf(baseUnit);
    const indexConversationUnit = volumeUnits.indexOf(conversationUnit);
    const exponent = indexConversationUnit - indexBaseUnit;
    return value * Math.pow(1000, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(volumeUnits, 'Indique um número para a unidade base:');
    const conversationUnitIndex = readline_sync_1.default.keyInSelect(volumeUnits, 'Indique um número para a conversão');
    const baseUnit = volumeUnits[baseUnitIndex];
    const conversationUnit = volumeUnits[conversationUnitIndex];
    if (!baseUnit || !conversationUnit) {
        console.log('Função cancelada');
        return 0;
    }
    const response = convertVolume(value, baseUnit, conversationUnit);
    const message = `${value}${baseUnit} é igual a ${response}${conversationUnit}`;
    console.log(message);
}
exec();
