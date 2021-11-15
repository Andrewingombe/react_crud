import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem className="d-flex" key={user.id}>
          <strong>{user.name}</strong>
          <div className="ms-auto">
            <Link className="btn btn-warning me-2" to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button onClick={() => deleteUser(user.id)} color="danger">
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserList;
