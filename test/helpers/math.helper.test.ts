import {expect, test, describe} from 'vitest';
import {add, multiply, subtract} from '../../src/helpers/math.helper';

describe('Add',()=>{
   test('should add two positive numbers',()=>{
       const a = 1;
       const b = 2

       const result= add(a,b)

       console.log(result);


       expect(result).toBe(3);
   })

   
})

describe('Substract',()=>{
     test('should substract teo positive numbers',()=>{
        const a= 2;
        const b = 1;

        const result= subtract(a,b);
        console.log(result);

        expect(result).toBe(1)
     })
})

describe('Multiply',()=>{
    test('should multiply two positive numbers',()=>{
        const a = 2;
        const b = 3;

        const result = multiply(a,b);

        console.log(result);

        expect(result).toBe(6);
    })
})