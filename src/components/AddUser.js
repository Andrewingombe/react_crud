import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    const newUser = {
      name: name,
      email: email,
      id: uuid(),
    };
    addUser(newUser);
    navigate("/");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name"
          onChange={onChangeName}
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="Enter email"
        />
      </FormGroup>
      <Button type="submit">Submit User</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
