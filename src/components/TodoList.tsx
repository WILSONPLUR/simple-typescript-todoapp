import React from "react";
import { Container, ListGroup } from "react-bootstrap";

export interface ITodo {
  name: string;
  desc: string;
}

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {todos.map((item, i) => {
        return (
          <ListGroup style={{ marginLeft: "20px", marginTop: "20px" }}>
            <ListGroup.Item>
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
};

export default TodoList;
