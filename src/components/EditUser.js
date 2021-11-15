import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditUser = (props) => {
  const [selectedUser, setSeletedUser] = useState({
    name: "",
    email: "",
    id: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const userId = id;
    const selectedUser = users.find((user) => user.id === userId);
    setSeletedUser(selectedUser);
  }, [users, id]);

  const onSubmit = () => {
    editUser(selectedUser);
    navigate("/");
  };

  const onChangeName = (e) => {
    setSeletedUser({ ...selectedUser, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setSeletedUser({ ...selectedUser, email: e.target.value });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={onChangeName}
            placeholder="Enter name"
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={selectedUser.email}
            onChange={onChangeEmail}
            placeholder="Enter email"
          />
        </FormGroup>
        <Button type="submit">Edit User</Button>
        <Link to="/" className="btn btn-danger ms-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
