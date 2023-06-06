import { Button } from 'react-bootstrap';


function Todo(props:any) {
    return (
      <div className="todo">
        <span style={{ textDecoration: props.todo.isDone ? "line-through" : "" }}>{props.todo.description}</span>
        <div>
          <Button className="add-remove-button" variant="outline-success" onClick={() => props.markTodo(props)}>✓ Complete</Button>
          <Button variant="outline-danger" onClick={() => props.removeTodo(props)}>✕ Remove</Button>
        </div>
      </div>
    );
  }

  export default Todo;