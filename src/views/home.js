import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Data Manager</title>
        <meta property="og:title" content="Product Data Manager" />
      </Helmet>
    </div>
  )
}

export default Home
