import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <settion className="todos-wrapper">
                {children}
            </settion>
        </main>
    );
};

export default TodoListTemplate;