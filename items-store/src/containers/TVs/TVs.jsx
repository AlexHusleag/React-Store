import React, { Component } from 'react'
import TV from './TV/TV';

export default class TVs extends Component {

    state = {
        TVs: []
    }

    componentDidMount() {
        this.loadTVsFromDB();
    }

    loadTVsFromDB = () => (
        this.props.firebase.accessFirebase("TVs").get()
            .then(snapshot => {
                let TVs = [];
                snapshot.docs.forEach(doc => {
                    let TV = doc.data();
                    TV.key = doc.id;
                    TVs.push(TV);
                })
                return TVs;
            })
            .then(TVs => {
                this.setState({ TVs: TVs });
            })
            .catch(err => {
                console.log(err);
            })
    )



    renderTVs = () => {
        return this.state.TVs.map(tv => <TV
            key={tv.key}
            brandName={tv.brandName}
            model={tv.model}
            resolution={tv.resolution}
            price={tv.price} />)
    }

    render() {
        return (
            <div className="TV-item">
                {this.renderTVs()}
            </div>
        );
    }
}
