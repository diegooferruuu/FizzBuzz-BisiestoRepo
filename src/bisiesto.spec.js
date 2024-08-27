import anioBisiesto from "./bisiesto";

describe("anioBisiesto", () => {
    it("Responder si 2000 es bisiesto",() => {
        expect(anioBisiesto(2000)).toEqual("Bisiesto");
    });
    
}); 