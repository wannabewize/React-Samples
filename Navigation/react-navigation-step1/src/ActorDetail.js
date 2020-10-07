import React from 'react';
import {withRouter} from "react-router-dom";

class ActorDetailComponent extends React.Component {
    render() {
        console.log('props :', this.props);
        const params = this.props.match.params;
        const {actorId} = params;
        return (<h2>Actor Detail for {actorId}</h2>)
    }
}

const ActorDetail = withRouter(ActorDetailComponent);

export default ActorDetail;