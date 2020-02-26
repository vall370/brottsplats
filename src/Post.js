import React, { Component } from "react";
import axios from "axios";
import { Card} from "react-bootstrap";
import Graph from "./Graph";

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
      .get(
        `http://brottapi.valjoh.se/public/index.php/getLocationDataId?id=${this.props.match.params.id}`
      )
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
      <div>
        <div>
          <div class="container">
            <div class="row">
              <div class="col-7">
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
              </div>
              <div class="col-5">
                <Card>
                  <Card.Body>
                    <Card.Title>Brottsstatistik</Card.Title>
                    <Graph />
                  </Card.Body>
                </Card>
                <br></br>
                <Card>
                  <Card.Header>
                    <b>Följ Brottsplatsen på sociala medier</b>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <li>
                        Följ @Brottsplatser för att få alla rapporterade brott i
                        ditt Twitterflöde.
                      </li>
                      <li>
                        Följ @StockholmsBrott för att bara få brott i Stockholms
                        län.
                      </li>
                      <li>
                        Gilla Brottsplatskartan på Facebook för att få nyheter,
                        händelser, och knasiga brott i ditt flöde.
                      </li>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card>
                  <Card.Header>
                    <b>Senaste händelserna & brotten i ditt län</b>
                  </Card.Header>

                  <Card.Body>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card>
                  <Card.Header>
                    <b>Senast hänt i din stad</b>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
                <Card>
                  <Card.Header>
                    <b>Senaste inläggen från vår blogg</b>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
