import React, { Component } from 'react'
import Car from './Car/Car'

export default class Cars extends Component {

    state = {
        cars: []
    }


    componentDidMount() {
        this.loadCarsFromDB();
    }

    loadCarsFromDB = () => (
        this.props.firebase.accessFirebase("cars").get()
            .then(snapshot => {
                let cars = [];
                snapshot.docs.forEach(doc => {
                    let car = doc.data();
                    car.key = doc.id;
                    cars.push(car);
                })
                return cars;
            })
            .then(cars => {
                this.setState({ cars: cars });
            })
            .catch(err => {
                console.log(err);
            })
    )



    renderCars = () => {
        return this.state.cars.map(car => <Car
            key={car.key}
            brandName={car.brandName}
            model={car.model}
            color={car.color}
            price={car.price} />)
    }

    render() {
        return (
            <div className="car-item">
                {this.renderCars()}

            </div>
        );
    }
}
