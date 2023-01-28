import {render, screen, cleanup} from '@testing-library/react'
import Todo from '../components/Todo';

afterEach(() => cleanup())

describe('Testing the Todo component', () => {
    it('should retrieve data-testid for todo-1', () => {
        render(<Todo/>)
        const todoElement = screen.getByTestId("todo-1");
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('wash the dishes');
    });
    it('should retrieve data-testid for todo-2', () => {
        render(<Todo/>)
        const todoElement = screen.getByTestId("todo-2");
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('clean the house');
    });
    it('should retrieve data-testid for todo-3', () => {
        render(<Todo/>)
        const todoElement = screen.getByTestId("todo-3");
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent('cook hamburguer');
    });
})