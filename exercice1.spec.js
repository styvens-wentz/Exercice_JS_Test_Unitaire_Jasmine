import { maFonction } from './exercice1.js';

describe('maFonction', function() {

   it('should return true if param1 is defined', function() {
        expect(maFonction("anything")).toBe(true);
   });

    it('should return 5 ( string ) if param1==5', function() {
        expect(maFonction(5)).toBe('5');
    });

    /* Ecrire le reste des tests ci dessous */
    it('should return 65 ( string ) if param1==65', function() {
        expect(maFonction(65)).toBe(65);
    });

    it('should return bang ( string ) if param1==bing', function() {
        expect(maFonction('bing')).toBe('bang');
    });
});