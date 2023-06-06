import { useEffect, useState } from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormField from './components/todoList/prebuilt/FormField';
import Todo from './components/todoList/todo';
import { getAll, createList, updateList, deleteList } from './services/todoService';

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const fetchList = async () => {
    return getAll().then((value: any) => setTodos(value.list));
  }


  useEffect(() => {
    fetchList();
  },[])

  const addTodo = (description: string) => {
    const newTodos = [...todos, { description }];
    createList(description, false);
    setTodos(newTodos);
  };

  const markTodo = (data: any) => {
    if (data && data.todo !== undefined) {
      updateList(data.todo.id, true);
      const newTodos = [...todos];
      newTodos[data.index].isDone = true;
      setTodos(newTodos);
    }
  };

  const removeTodo = (data: any) => {
    const newTodos = [...todos];
    if (data && data.todo !== undefined) {
      deleteList(data.todo.id);
      newTodos.splice(data.index, 1);
      setTodos(newTodos);
    }

  };

  return (
    <>
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormField addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={'card-' + index}>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
