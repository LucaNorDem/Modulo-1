const { checkSeatStatus, getRowNumber, book } = require('../homework');

describe("checkSeatStatus",()=>{
    it('checkSeatStatus is a function', () => { 
        expect(typeof checkSeatStatus).toBe('function'); 
    });

    it("should throw TypeError if first parameter is not a string", ()=>{
        expect(()=> checkSeatStatus(4)).toThrow(TypeError)
    })
    it("Should throw TypeErroe if second parameter is not a number", ()=>{
        expect(()=> checkSeatStatus("A","2")).toThrow(TypeError)
    })


    it("Should return true if the given seat defined by row and column is booked", ()=>{
        expect(checkSeatStatus('A', 1)).toBe(true);
    })
    it('should return false if the given seat defined by row and column is not booked', () => {
        expect(checkSeatStatus('E', 3)).toBe(false); 
    });
})

describe("getRowNumber", ()=>{
    it("Should return 1 if the letter given is an A", ( )=>{
        expect(getRowNumber("A")).toBe(0);
    })
    it("Should return 3 if the letter given is an C", ( )=>{
        expect(getRowNumber("C")).toBe(2);
    })
})

describe("book", ()=>{
    it("Should return -Seat in E3 successfully booked- if the givin seat is not booked", ()=>{
        expect(checkSeatStatus("E",3)).toBe(false);
        expect(book("E", 3)).toBe("Seat in E3 succesfully booked");
        expect(checkSeatStatus("E",3)).toBe(true);
    })

    it("Should return -Seat in A3 successfully booked- if the givin seat is not booked", ()=>{
        expect(checkSeatStatus("A",3)).toBe(false);
        expect(book("A", 3)).toBe("Seat in A3 succesfully booked");
        expect(checkSeatStatus("A",3)).toBe(true);
    })

    it("Should return -Seat in A1 is already booked- if the givin seat is booked", ()=>{
        expect(book("A", 1)).toBe("Seat in A1 is already booked");
    })
})