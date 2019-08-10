import React from 'react'
import { Link, Router } from 'components/Router'
import GitHubButton from 'react-github-btn'
// import { ScrollToTopController } from 'components/scroll'

export default () => (
  <div className="index">
    <img alt="dog" src={require("./../assets/dog-noball.gif")}></img>
    <h1>Jeffrey Chou</h1>
    <p>Hi, I’m a student at <span>Cornell University</span> studying Computer Science and Physics.<br></br>
      My interests include software/fullstack dev, and data science.<br></br>
      Built with React & GraphQL
    </p>
    <div className="row">
      <div className="column">
        <Link to="/about" >
          <p>→     <span>About</span></p>
          <ul>
            <li>Who am I?</li>
            <li>What is my background?</li>
            <li>What are my interests?</li>
          </ul>
        </Link>
        <Link to="/experience" >
          <p>→     <span>Experience</span></p>
          <ul>
            <li>Previous internships</li>
            <li>Languages</li>
            <li>Frameworks</li>
          </ul>
        </Link>
      </div>
      <div className="column">
        <Link to="/blog" >
          <p>→     <span>Blog</span></p>
          <ul>
            <li>Visit my blogs</li>
            <li>My thoughts</li>
            <li>My day-to-day</li>
          </ul>
        </Link>
        <Link to="/contact" >
          <p>→     <span>Contact</span></p>
          <ul>
            <li>Social Media</li>
            <li>Where I'm located</li>
          </ul>
        </Link>
      </div>
    </div>
    <div className="footer">
      <GitHubButton href="https://github.com/jchoucode/jchou-web" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star jchoucode/jchou-web on GitHub">Star</GitHubButton>
      <p>Artwork by @Somosgalitos</p>
      <a href="https://github.com">Download Resume</a>
      <p>Copyright © Jeffrey Chou</p>
    </div>
  </div>

)
