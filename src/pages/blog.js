import React from 'react'
import { Link, Router } from 'components/Router'
import { useRouteData } from "react-static"
import { Footer } from 'components/Footer'

const ReactMarkdown = require("react-markdown");



export default () => {
  const { posts } = useRouteData();
  return (
    <div className="container">
      <h2>Blogs</h2>
      {
        posts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="post">
            <div>
              <h3>{post.title}</h3>
              <ReactMarkdown
                source={post.content}
                escapeHtml={false}
              />
            </div>
          </Link>
        ))}
      {/* <Footer /> */}
    </div>
  );
}

