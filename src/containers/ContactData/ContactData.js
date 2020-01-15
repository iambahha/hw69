import React, {Component} from 'react';

import './ContactData.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class ContactData extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
  };

  valueChanged = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  orderHandler = event => {
    event.preventDefault();
    if (this.state.name || this.state.phone || this.state.address) {
        this.props.submit({userOrder: this.props.userOrder, userContact: this.state});
    }

  };

  render() {
    let form = (
      <Form onSubmit={this.orderHandler}>
          <FormGroup>
              <Label>Full Name:</Label>
              <Input className="Input" type="text" name="name" placeholder="Your Name"
                     value={this.state.name} onChange={this.valueChanged}
              />
          </FormGroup>

          <FormGroup>
              <Label>Telephone:</Label>
              <Input className="Input" type="text" name="phone" placeholder="Your Phone"
                     value={this.state.phone} onChange={this.valueChanged}
              />
          </FormGroup>

          <FormGroup>
              <Label>Address:</Label>
              <Input className="Input" type="text" name="address" placeholder="Address"
                     value={this.state.address} onChange={this.valueChanged}
              />
          </FormGroup>
          <Button color="success" type="submit">Place order !</Button>

      </Form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
