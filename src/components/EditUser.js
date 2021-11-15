import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditUser = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter name" />
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
