import React, { useState } from "react";
import MyVerticallyCenteredModal from "./UpdateTask";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TaskList = () => {
  const [modalShow, setModalShow] = useState(false);
  const updateTask = () => {
    console.log("updateTask");
    setModalShow(true);
  };
  const deleteTask = () => {
    console.log("deleteTask");
  };
  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button
                varient="primary"
                className="mx-3"
                onClick={() => updateTask()}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button varient="primary" onClick={() => deleteTask()}>
                <i className="bi bi-trash3"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskList;
