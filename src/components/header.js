import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div id="header" className={`header ${props.rootClassName} `}>
      <div className="cadreTitreHeader">
        <h1 className="texteTitreHeader">
          {props.libelle ?? (
            <Fragment>
              <span className="header-text2">Titre page</span>
            </Fragment>
          )}
        </h1>
      </div>
      <div className="cadreMenuHeader">
        <Link to="/contrats">
          <div className="cadreActionMenuHeader">
            <div className="cadreIconeMenuHeader">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="iconeMenuHeader"
              >
                <path
                  d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3Zm-3 14H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="cadreTexteActionMenuHeader">
              <span>
                {props.retourContrat ?? (
                  <Fragment>
                    <span className="header-text1">Action 1</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </Link>
        <div className="barreRechercheContrat">
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="inputRechercheContrat select1"
          />
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  textinputPlaceholder: 'Rechercher un contrat',
  retourContrat: undefined,
  libelle: undefined,
  rootClassName: '',
}

Header.propTypes = {
  textinputPlaceholder: PropTypes.string,
  retourContrat: PropTypes.element,
  libelle: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Header
