import React from "react"
import { useRouteData } from "react-static"
import { Link } from "@reach/router"
// import CodeBlock from "./../syntax/codeblock"

const ReactMarkdown = require("react-markdown");

export default () => {
  const { post } = useRouteData();
  return (
    <div className="container">
      <h2>{post.title}</h2>
      <Link to="/blog" className="back">
        <span>Back</span>
        <svg>
          <svg id="rightAlign" x="100%" y="0" width="100%" height="100%">
            <line x1="-5" y1="20%" x2="0" y2="50%"
              strokeWidth="2" markerEnd="url(#m)" stroke="black" strokeLinecap="round" />
            <line x1="-5" y1="80%" x2="0" y2="50%"
              strokeWidth="2" markerEnd="url(#m)" stroke="black" strokeLinecap="round" />
          </svg>
          <line x1="0" y1="50%" x2="100%" y2="50%"
            strokeWidth="2" markerEnd="url(#m)" stroke="black" />
        </svg>
      </Link>
      <ReactMarkdown
        source={post.content}
        escapeHtml={false}
      />
    </div>
  )
}