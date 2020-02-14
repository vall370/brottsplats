import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
    <h1 class="border-bottom">Aktuella Brott</h1>
      {posts.map(post => (
        <div key={post.id}>
            <div>
              <h6>{post.summary} {post.name}</h6>
              <a href={post.url}>Läs mer hos polisen</a>
              <p class="border-bottom">{post.location.gps}, {post.location.name}</p>

            </div>
            </div>
      ))}
      </div>
  );
};

export default Posts;