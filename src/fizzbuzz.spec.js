import {generarFizzBuzz, generarSecuencia} from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("generar el mismo numero si no sigue ninguna regla",() => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("generar el mismo numero si no sigue ninguna regla",() => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("generar el fizz para el 3",() => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("generar el fizz para el 6",() => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
    });
    it("generar el buzz para el 5",() => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
    it("generar el buzz para el 10",() => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });
    it("generar el fizzbuzz para multiplos de 3 y 5",() => {
        expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("generar la secuencia hasta el 5",() => {
        expect(generarSecuencia(5)).toEqual("1 2 Fizz 4 Buzz");
    });
});