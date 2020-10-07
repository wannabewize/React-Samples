import React from "react";
import {withRouter, Link} from "react-router-dom";

class ActorsComponent extends React.Component {
    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const gender = params.get('gender');
        console.log('gender:', gender);

        return (
            <div>
            <h2>Actors</h2>
            <h5>gender: {gender}</h5>
            <ul>
                <li><Link to="/actors/1">헨리 카빌</Link></li>
                <li><Link to="/actors/2">서예지</Link></li>
            </ul>
            </div>
        );
    }
}
const Actors = withRouter(ActorsComponent);

export default Actors;