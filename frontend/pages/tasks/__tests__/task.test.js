import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task from '../Task';

const mockTask = {
    _id: '1',
    title: 'Test Task',
    description: 'This is a test task description',
};

const mockUpdate = jest.fn();
const mockDelete = jest.fn();

test('renders task with correct title and description', () => {
    render(<Task task={mockTask} onUpdate={mockUpdate} onDelete={mockDelete} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test task description')).toBeInTheDocument();
});

test('calls onUpdate when save button is clicked in edit mode', async () => {
    render(<Task task={mockTask} onUpdate={mockUpdate} onDelete={mockDelete} />);
    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Updated Task' } });
    fireEvent.click(screen.getByText('Save'));

    expect(mockUpdate).toHaveBeenCalledWith({ ...mockTask, title: 'Updated Task' });
});

test('calls onDelete when delete button is clicked', () => {
    render(<Task task={mockTask} onUpdate={mockUpdate} onDelete={mockDelete} />);
    fireEvent.click(screen.getByText('Delete'));

    expect(mockDelete).toHaveBeenCalledWith(mockTask._id);
});
