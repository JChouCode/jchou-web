import React from "react"
import GitHubButton from 'react-github-btn'


export class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer">
        <div>Copyright © Jeffrey Chou</div>
        {/* <GitHubButton href="https://github.com/JChouCode" data-size="large" data-show-count="true" aria-label="Follow @JChouCode on GitHub">Follow @JChouCode</GitHubButton> */}
        <GitHubButton href="https://github.com/jchoucode/jchou-web" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star jchoucode/jchou-web on GitHub">Star</GitHubButton>
      </div>
    )
  }
}