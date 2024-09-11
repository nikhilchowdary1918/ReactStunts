import { Sum } from "../sum";

test('Sum should calculate the sum of two number', () => {
    const result = Sum(2,3)

    //Assertion
    expect(result).toBe(5);
  
})
