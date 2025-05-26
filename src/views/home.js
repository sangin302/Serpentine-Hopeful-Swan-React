import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Serpentine Hopeful Swan</title>
        <meta property="og:title" content="Serpentine Hopeful Swan" />
      </Helmet>
    </div>
  )
}

export default Home
