const { test, expect } = require("@jest/globals");
const { calculator, esMayor } = require("../app");

describe("Pruebas de la Calculadora", () => {
    test("Sumando 3 + 4 debera retornar 7", () => {

        expect(calculator.sum(3, 4)).toBe(7);
    });
    test("Restando 2 de 10 debera retornar 8", () => {
        let resultado = calculator.diff(10, 2);
        expect(resultado).toBe(8);
    });
});

describe("Verificando datos personales", () => {
    test("Varificando que sea mayor de edad (21)", () => {
        expect(esMayor(27)).toBeTruthy()
    });
});