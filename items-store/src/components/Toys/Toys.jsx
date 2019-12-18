import React, { Component } from 'react'
import Toy from './Toy/Toy'


export default class Toys extends Component {

    state = {
        toys: []
    }


    componentDidMount() {
        this.loadCarsFromDB();
    }

    loadCarsFromDB = () => (
        this.props.firebase.accessFirebase("toys").get()
            .then(snapshot => {
                let toys = [];
                snapshot.docs.forEach(doc => {
                    let toy = doc.data();
                    toy.key = doc.id;
                    toys.push(toy);
                })
                return toys;
            })
            .then(toys => {
                this.setState({ toys: toys });
            })
            .catch(err => {
                console.log(err);
            })
    )



    renderToys = () => {
        return this.state.toys.map(toy => <Toy
            key={toy.key}
            model={toy.model}
            color={toy.color}
            price={toy.price} />)
    }

    render() {
        return (
            <div className="toy-item">
                {this.renderToys()}
            </div>
        );
    }
}
