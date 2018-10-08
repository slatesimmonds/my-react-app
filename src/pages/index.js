import React from 'react'
import Link from 'gatsby-link'

import Layout from '../layouts/index'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Tunnl</h1>
        <p>Find your route and maximize your commute</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
