import React, { Component } from 'react';


class Post extends Component {


    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render () {
        return (
        <div>
            <p>{this.props.match.params.summary}</p>
            <p>{this.props.match.params.id.summary}</p>

          </div>
        );
    }

}

export default Post;