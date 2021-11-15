import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex align-items-center" key={user.id}>
              <div className="d-flex flex-column">
                <h4>{user.name}</h4>
                <p>Email: {user.email}</p>
              </div>
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
        </>
      ) : (
        <h6 className="text-center">No users found... please enter a user</h6>
      )}
    </ListGroup>
  );
};

export default UserList;
