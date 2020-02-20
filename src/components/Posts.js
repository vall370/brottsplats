import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
    <h1 class="border-bottom">Aktuella Brott</h1>
      {posts.map(post => (

        <div key={post.id}>
                              <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: 'none' }}
            >
            <div>
              <h6>{post.summary} {post.name}</h6>
              <a href={post.url}>Läs mer hos polisen</a>
              <p class="border-bottom">{post.location.gps}, {post.location.name}</p>

            </div>
            </Link>
            </div>
      ))}
      </div>
  );
};

export default Posts;