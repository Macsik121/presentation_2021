import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {
    Introduction,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5
} from './Page/Pages';

class NotFound extends React.Component {
    render() {
        return (
            <div className="notfound">
                <div className="container">
                    <div>This page not found!</div>
                    <Link to={'/'}>Return to the homepage</Link>
                </div>
            </div>
        )
    }
}

class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/introduction' component={Introduction} />
                <Route exact path='/slide1' component={Slide1} />
                <Route exact path='/slide2' component={Slide2} />
                <Route exact path='/slide3' component={Slide3} />
                <Route exact path='/slide4' component={Slide4} />
                <Route exact path='/slide5' component={Slide5} />
                <Redirect exact from='/' to='/introduction' />
                <Redirect exact from='/presentation_2021' to='/introduction' />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routing;