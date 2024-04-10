import React from "react";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Row className="justify-content-md-center">
          <Col lg="6">
            <AddTask />
            <TaskList />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
