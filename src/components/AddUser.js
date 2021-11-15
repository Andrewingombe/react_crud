import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter name" />
      </FormGroup>
      <Button type="submit">Submit User</Button>
      <Link to="/" className="btn btn-danger ms-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
