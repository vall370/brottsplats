import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        posts: [],
        events: [],
        isLoading: true,
        errors: null
    };
    // Now we're going to make a request for data using axios

    getCrimes() {
        axios
            // This is where the data is hosted
            .get(`http://brottapi.valjoh.se/public/index.php/getLocationDataId?id=${this.props.match.params.id}`)
            // Once we get a response and store data, let's change the loading state
            .then(response => {
                console.log(response);
                this.setState({
                    events: response.data.posts,
                    isLoading: false
                });
            })
            // If we catch any errors connecting, let's update accordingly
            .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getCrimes();
    }
    // Putting that data to use
    render() {
        const { isLoading, events } = this.state;
        return (
            <React.Fragment>
                <h2>Random Post</h2>
                <div>
                    {!isLoading ? (
                        events.map(post => {
                            const { id, name, summary } = post;
                            return (
                                <div key={id}>
                                    <h2>{name}</h2>
                                    <p>{summary}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ) : (
                            <p>Loading...</p>
                        )}
                </div>
            </React.Fragment>
        );
    }
}

export default Post;