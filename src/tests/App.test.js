import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
  })

  it('should add two numbers together', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('add');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('2');
    });

    it('should subtract two numbers together', () => {
      const button1 = container.getByTestId('number1');
      const button2 = container.getByTestId('number2');
      const subtract = container.getByTestId('subtract');
      const equals = container.getByTestId('equals');
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button2);
      fireEvent.click(subtract);
      fireEvent.click(button1);
      fireEvent.click(equals);
      expect(runningTotal).toHaveTextContent('1');
      });

      it('should multiply two numbers together', () => {
        const button4 = container.getByTestId('number4');
        const button6 = container.getByTestId('number6');
        const multiply = container.getByTestId('multiply');
        const equals = container.getByTestId('equals');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button4);
        fireEvent.click(multiply);
        fireEvent.click(button6);
        fireEvent.click(equals);
        expect(runningTotal).toHaveTextContent('24');
        });

        it('should divide two numbers together', () => {
          const button2 = container.getByTestId('number2');
          const button6 = container.getByTestId('number6');
          const divide = container.getByTestId('divide');
          const equals = container.getByTestId('equals');
          const runningTotal = container.getByTestId('running-total');
          fireEvent.click(button6);
          fireEvent.click(divide);
          fireEvent.click(button2);
          fireEvent.click(equals);
          expect(runningTotal).toHaveTextContent('3');
          });


          it('should concatenate multiple number button clicks', () => {
            const button2 = container.getByTestId('number2');
            const button6 = container.getByTestId('number6');
            const runningTotal = container.getByTestId('running-total');
            fireEvent.click(button6);
            fireEvent.click(button2);
            fireEvent.click(button2);
            expect(runningTotal).toHaveTextContent('622');
            });

            it('should chain multiple operations together', () => {
              const button1 = container.getByTestId('number1');
              const add = container.getByTestId('add');
              const equals = container.getByTestId('equals');
              const runningTotal = container.getByTestId('running-total');
              fireEvent.click(button1);
              fireEvent.click(add);
              fireEvent.click(button1);
              fireEvent.click(add);
              fireEvent.click(button1);
              fireEvent.click(equals);
              expect(runningTotal).toHaveTextContent('2');
              });


      
})

