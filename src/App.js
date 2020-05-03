import React from 'react';
import TodoListTemplate from './components/TodoListTemplate.jsx'
import Form from './components/Form'
function App() {
  return (
    <div>
        <TodoListTemplate form={<Form/>}>
          테믈릿 완성!
        </TodoListTemplate>
    </div>
  );
}

export default App;
