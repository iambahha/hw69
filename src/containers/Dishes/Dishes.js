import React, {Component} from 'react';
import {Button, Card, CardBody, CardDeck, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import {connect} from "react-redux";
import {addDish, fetchDishes} from "../../store/actions/dishAction";
import Spinner from "../../components/UI/Spinner/Spinner";

class Dishes extends Component {
    componentDidMount(){
        this.props.fetchDishes();
    }

    render() {
        if (this.props.loading) {
            return <Spinner />
        }
        const dishes = Object.keys(this.props.dishes).map(id => {
            const dish = this.props.dishes[id];

            return (
                    <Card key={id}>
                        <CardImg top width="100%" height="40%" src={dish.image} alt={dish.name} />
                        <CardBody className="text-center">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardSubtitle style={{fontSize: '18px', fontWeight: 'bold', margin: '10px 0'}}>{dish.cost} KGS</CardSubtitle>
                            <Button color="success" onClick={() => this.props.addDish(id)}>В корзину</Button>
                        </CardBody>
                    </Card>
                );
        });

        return (
                <CardDeck>
                    {dishes}
                </CardDeck>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        addDish: (dishId) => dispatch(addDish(dishId)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dishes);