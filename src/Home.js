import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";
import Graph from "./Graph";
import { Card, Button } from "react-bootstrap";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://polisen.se/api/events?DateTime=2020-02-10"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  var todayTimeStamp = +new Date(); // Unix timestamp in milliseconds
  var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
  var diff = todayTimeStamp - oneDayTimeStamp;
  var yesterdayDate = new Date(diff);
  var date = new Date(diff)
    .toISOString()
    .substr(0, 10)
    .replace("T", " ");

  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-7">
              <Posts posts={currentPosts} loading={loading} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
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
                  <Card.Header><b>Följ Brottsplatsen på sociala medier</b></Card.Header>
                  <Card.Body>
                      <Card.Text>
                      <li>Följ @Brottsplatser för att få alla rapporterade brott i ditt Twitterflöde.</li>
                      <li>Följ @StockholmsBrott för att bara få brott i Stockholms län.</li>
                      <li>Gilla Brottsplatskartan på Facebook för att få nyheter, händelser, och knasiga brott i ditt flöde.</li>
                      </Card.Text>
                  </Card.Body>
              </Card>
              <br></br>
              <Card>
              <Card.Header><b>Senaste händelserna & brotten i ditt län</b></Card.Header>

                  <Card.Body>
                  <Card.Text></Card.Text>
                  </Card.Body>
              </Card>
              <br></br>
              <Card>
              <Card.Header><b>Senast hänt i din stad</b></Card.Header>
                  <Card.Body>
                  <Card.Text></Card.Text>

                  </Card.Body>
              </Card>
              <br></br>
              <Card>
              <Card.Header><b>Senaste inläggen från vår blogg</b></Card.Header>
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
};

export default Home;
