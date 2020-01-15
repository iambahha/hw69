import React, {Component, Fragment} from 'react';

import './Orders.css';
import {connect} from "react-redux";
import {removeDish} from "../../store/actions/dishAction";
import ContactData from "../../containers/ContactData/ContactData";
import Modal from "../../components/UI/Modal/Modal";
import {createOrder} from "../../store/actions/orderAction";

const DELIVERY_COST = 150;

class Orders extends Component {
    state = {
        purchasing: false
    };

    purchase = () => {
        this.setState({purchasing: true});
    };

    purchaseCancel = () => {
        this.setState({purchasing: false});
    };

    render() {
        if (Object.keys(this.props.userOrder).length === 0) {
            return <h1>Ваш заказ пуст!</h1>;
        }

        let totalPrice = DELIVERY_COST;
        const userOrder = Object.keys(this.props.userOrder).map((dishId) => {
            totalPrice += this.props.dishes[dishId].cost * this.props.userOrder[dishId];

            return (
                <li className="order" key={dishId}>
                    {this.props.dishes[dishId].title}
                    <p><span className="qty">x{this.props.userOrder[dishId]}</span> {this.props.dishes[dishId].cost} KGS</p>
                    <button onClick={() => {
                        this.props.removeDish(dishId)
                    }} />
                </li>
            );
        });

        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    close={this.purchaseCancel}

                >
                    <h3>Total price: <b>{totalPrice} KGS</b></h3>
                    <ContactData
                        userOrder={this.props.userOrder}
                        submit={this.props.createOrder}
                    />
                </Modal>

                <div className="userOrder">
                    <h2>Ваш заказ:</h2>
                    <ol>
                        {userOrder}
                    </ol>
                </div>

                <div className="orderSummary">
                    <p>Delivery cost: {DELIVERY_COST} KGS</p>
                    <p>Total: {totalPrice} KGS</p>
                </div>
                <button className="checkout" onClick={this.purchase}>CHECK OUT</button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        userOrder: state.orders.userOrder,
        dishes: state.dishes.dishes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeDish: (dishID) => dispatch(removeDish(dishID)),
        createOrder: (orderData) => dispatch(createOrder(orderData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);