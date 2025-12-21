import { describe, expect, test } from "vitest";
import{fireEvent, render,screen} from '@testing-library/react';
import { ItemCounter } from "../../src/shopping-cart/ItemCounter";


describe('ItemCounter', () => {
    test('should render with the default values',() => {

        const name ="Test item"
        render(<ItemCounter name= {name}/>)

        
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })

    test('should render with quantity',()=>{
        
        const quantity = 10;

        render(<ItemCounter name= "Test item" quantity={quantity}/>);

        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('should increase when click on +1',()=>{
        
        render(<ItemCounter name= "Test item" quantity={1}/>);

        const [buttonAdd]= screen.getAllByRole('button');
       fireEvent.click(buttonAdd);

       expect(screen.getByText("2")).toBeDefined();
    })

    test("should decrease -1 when click on -1",()=>{

        render(<ItemCounter name= "Test item" quantity={5}/>);
        const [,buttondecrease] = screen.getAllByRole('button');

        fireEvent.click(buttondecrease);

        expect(screen.getByText("4")).toBeDefined();
    })

    test('should not decrease  when quantity less than 1',()=>{
        render(<ItemCounter name= "Test item" quantity={1}/>);
        const [,buttondecrease] = screen.getAllByRole('button');

        fireEvent.click(buttondecrease)

        expect(screen.getAllByText("1")).toBeDefined();
    })

    test('should change color when quantity is 1',()=>{
        const quantity = 1
        const name = "Test item"
        render(<ItemCounter name= "Test item" quantity={quantity}/>);

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('red')
        
    })

    test('shoould change to black when quantity greater than 1',()=>{

        const quantity = 3
        const name = "Test item"
        render(<ItemCounter name= "Test item" quantity={quantity}/>);

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('black')
    })
})