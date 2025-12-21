import { describe,test,expect, vi, afterEach } from "vitest";
import { render, screen,} from "@testing-library/react";
import { FirstStepsApp } from "../src/FirstStepsApp";


const mockItemCounter = vi.fn((props:unknown)=> 
    <div
     data-testid="ItemCounter"
    
     />);
vi.mock('../src/shopping-cart/ItemCounter',()=>({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

//  vi.mock('../src/shopping-cart/ItemCounter',()=>({
//     ItemCounter : (props:unknown)=> 
//     <div
//      data-testid="ItemCounter"
//      name= {props.name}
//      quantity= {props.quantity}
//      />
// }))
describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })
    test('Should match snapshoot', () => {
      const {container} = render(<FirstStepsApp />);

       expect(container).toMatchSnapshot();

       
    })

    test('Should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        
        const itemCounters = screen.getAllByTestId('ItemCounter');
        // expect(itemCounters).toHaveLength(3);
        expect(itemCounters.length).toBe(3);
       
        screen.debug();
    })
    test('shoud render with the right props', () => {
        render(<FirstStepsApp />);

         expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name:'Pro Controller',
            quantity:2
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name:'Super Smash',
            quantity:5
        })
    })
});