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
                        <CardImg top width="100%" src={dish.imageURL} alt={dish.title} />
                        <CardBody className="text-center">
                            <CardTitle>{dish.title}</CardTitle>
                            <CardSubtitle style={{color: 'red', fontWeight: 'bold', margin: '10px 0'}}>{dish.cost} KGS</CardSubtitle>
                            <Button onClick={() => this.props.addDish(id)}>Add to card</Button>
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