import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex">
        <strong>User One</strong>
        <div className="ms-auto">
          <Link className="btn btn-warning me-2" to="/edit/1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;
