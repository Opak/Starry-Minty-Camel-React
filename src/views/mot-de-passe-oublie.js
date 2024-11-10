import React from 'react'

import { Helmet } from 'react-helmet'

import './mot-de-passe-oublie.css'

const MotDePasseOublie = (props) => {
  return (
    <div className="mot-de-passe-oublie-container">
      <Helmet>
        <title>Mot-de-passe-oublie - starsmanager_ui</title>
        <meta
          property="og:title"
          content="Mot-de-passe-oublie - starsmanager_ui"
        />
      </Helmet>
    </div>
  )
}

export default MotDePasseOublie
