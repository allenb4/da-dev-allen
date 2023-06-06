import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


function FormField(props: { addTodo: (arg0: string) => void; }) {
    const [value, setValue] = useState<string>("");
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      if (!value) return;
      props.addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button className="submit-button" variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

  export default FormField;