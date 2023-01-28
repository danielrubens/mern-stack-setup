import {render, screen, cleanup} from '@testing-library/react'
import Todo from '../components/Todo';

it('should render Todo component', () => {
    render(<Todo/>)
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument()
});