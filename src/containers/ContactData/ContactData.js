import React, {Component} from 'react';
import axiosOrders from "../../axios-orders";
import './ContactData.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class ContactData extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    loading: false,

  };

  valueChanged = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  orderHandler = async (event) => {
    event.preventDefault();

    const order = this.props.submit({
      userOrder: this.props.userOrder,
      userContact: this.state
    });

    this.setState({loading: true});
    await axiosOrders.post('/orders.json', order);
    this.setState({loading: false});
    this.props.history.push('/');

  };

  render() {
    let form = (
      <Form onSubmit={this.orderHandler}>
          <FormGroup>
              <Label>Your Name:</Label>
              <Input className="Input" type="text" name="name" placeholder="Your Name"
                     value={this.state.name} onChange={this.valueChanged}
              />
          </FormGroup>

          <FormGroup>
              <Label>Phone Number:</Label>
              <Input className="Input" type="text" name="phone" placeholder="Your Phone"
                     value={this.state.phone} onChange={this.valueChanged}
              />
          </FormGroup>

          <FormGroup>
              <Label>Your Address:</Label>
              <Input className="Input" type="text" name="address" placeholder="Address"
                     value={this.state.address} onChange={this.valueChanged}
              />
          </FormGroup>
          <Button color="success" type="submit">Подтвердить заказ !</Button>

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
