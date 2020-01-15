import React, {Component} from 'react';
import './MainPage.css';

import {Col, Row} from "reactstrap";
import Dishes from "../Dishes/Dishes";
import Orders from "../Orders/Orders";


class MainPage extends Component {
    render() {
        return (
            <Row>
                <Col md="8" sm="12">
                   <Dishes />
                </Col>
                <Col md="4" sm="12">
                    <Orders />
                 </Col>
            </Row>
        );
    }
}

export default MainPage;