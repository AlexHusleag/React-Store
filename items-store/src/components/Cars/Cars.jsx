import React, { Component } from 'react'
import Car from './Car/Car'

export default class Cars extends Component {

    constructor(){
        super();

        this.state = {
            cars: []
        }
    }


    componentDidMount(){
        this.loadCarsFromDB();
    }

    loadCarsFromDB = () => (
            this.props.firebase.accessFirebase("cars").get()
                    .then(snapshot => {
                        let cars = [];
                        snapshot.docs.forEach(doc => {
                          cars.push(doc.data());
                        })
                        return cars;
                    })
                    .then(cars => {
                        this.setState({cars: cars});
                    })
                    .catch(err => {
                        console.log(err);
                    })
    )




    // loadCarsFromDB = () => (
    //     <FirebaseContext.Consumer>
    //         {firebase => {
    //             firebase.accessFirebase("cars").get()
    //                 .then(snapshot => {
    //                     let cars = [];
    //                     snapshot.docs.forEach(doc => {
    //                       cars.push(doc.data());
    //                     })
    //                     return cars;
    //                 })
    //                 .then(cars => {
    //                     this.setState({cars: cars});
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 });
    //         }
    //         }
    //     </FirebaseContext.Consumer>
    // )

    renderCars = () => {
        return this.state.cars.map(car => <Car
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
