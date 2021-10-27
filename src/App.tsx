import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { ITodo } from "./components/TodoList";
import { Button, Container, InputGroup, FormControl } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const addTodo = () => {
    if (name !== "" || desc !== "") {
      const newTodo = { name: name, desc: desc };
      setTodos([...todos, newTodo]);

      setName("");
      setDesc("");
    } else {
      alert("error");
    }
  };
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
        marginTop: "200px",
        alignContent: "center",
      }}
      fluid="lg"
    >
      {/* <input type="text" name="name" onChange={handleName} value={name} /> */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Todo Name:{" "}
        </InputGroup.Text>
        <FormControl
          value={name}
          onChange={handleName}
          aria-label="Text input with checkbox"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Todo Description:{" "}
        </InputGroup.Text>
        <FormControl
          value={desc}
          onChange={handleDesc}
          aria-label="Text input with checkbox"
        />
      </InputGroup>
      {/* <input
        type="radio"
        name="isCompleted"
        onClick={handleCompleted}
        value={isCompleted.toString()}
      /> */}
      <br />
      <Button onClick={addTodo}>Add Todo</Button>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TodoList todos={todos} />
      </div>
    </Container>
  );
}

export default App;
