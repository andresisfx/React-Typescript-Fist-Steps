import {test,describe,expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import {MyAwesomeApp} from '../src/MyAwesomeApp';

describe('MyAwesomeApp',()=>{
    test('should render firtsname and lastname',()=>{
      const {container}= render (<MyAwesomeApp />);
      // screen.debug();
      const h1Element = container.querySelector('h1');
      expect(h1Element?.innerHTML).toContain('Fernando');      
      const h3Element = container.querySelector('h3');
      expect(h3Element?.innerHTML).toContain('Herrera'); 
    })
    test('should render firtsname and lastname-SCreen',()=>{
       render (<MyAwesomeApp />);
      // screen.debug();

      // const h1= screen.getByRole('heading',{
      //   level:1
      // });
      //* aquí nos da error porque existen dos h1

      const h1= screen.getByTestId('firstName');
      // console.log(h1);

      expect(h1.innerHTML).toContain('Fernando');
      
    })
    test('should match snapshoot 1',()=>{
       
      const {container} = render(<MyAwesomeApp />);

      expect(container).toMatchSnapshot();
    })
})