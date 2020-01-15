import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

import Dishes from "../Dishes/Dishes";
import Orders from "../Orders/Orders";


class MainPage extends Component {
    render() {
        return (
          <Container>
            <Row>
              <Col md="8">
                <Dishes />
              </Col>
              <Col md="4">
                <Orders />
              </Col>
            </Row>
          </Container>
        );
    }
}

export default MainPage;