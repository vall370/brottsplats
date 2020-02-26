import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import moment from "moment";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const today = new Date()
  var yesterday = moment();
  yesterday = yesterday.subtract(1, "days");
  yesterday = yesterday.format("YYYY-MM-DD");

  console.log(yesterday);
  return (
    <div>
      <Card>

        <Card.Header><h1><b>Aktuella Brott</b></h1></Card.Header>
        <Card.Body>
        <Link
              to={`/date/${yesterday}`}>
  <Card.Title><b>{'<- '}{yesterday}</b></Card.Title>
  </Link>
        <Card.Text>


      {posts.map(post => (

        <div key={post.id}>

            <div>
            <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: 'none' }}
           >
              <p><b>{post.name}</b></p>
              </Link>
              <p>{post.summary} </p>
              <a href={post.url}>Läs mer hos polisen</a>
              <p>{post.location.gps}, {post.location.name}</p>
              <hr></hr>
            </div>
            </div>
      ))}
      </Card.Text>
      </Card.Body>
            </Card>

      </div>
  );
};

export default Posts;