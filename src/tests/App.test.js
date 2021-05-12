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
})

