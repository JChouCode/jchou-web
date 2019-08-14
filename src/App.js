import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router, Match } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import Header from 'components/Header'
import { Helmet } from 'react-helmet'
import './app.css'
import { ScrollToTop } from "components/ScrollToTop"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Jeffrey Chou</title>
        <meta name="description" content="Hi, I’m a student at Cornell University studying Computer Science and Physics.
        My interests include software/fullstack dev, and data science.
        Built with React & GraphQL"></meta>
      </Helmet>
      <Header></Header>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router primary={false}>
            <ScrollToTop path="/">
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </ScrollToTop>
          </Router>
        </React.Suspense>
      </div>
    </Root >
  )
}



export default App
