import { Route, Switch } from 'react-router-dom'

import Layout from "../Layout/Layout"
import ShowcaseItem from '../Navigation/HomePage/Item/Showcase-Item/Showcase-Item'


export default class AllRoutes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Layout} />
                <Route path="/products" component={ShowcaseItem} />
            </React.Fragment>
        )
    }
}