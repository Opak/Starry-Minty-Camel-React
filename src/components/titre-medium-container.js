import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './titre-medium-container.css'

const TitreMediumContainer = (props) => {
  return (
    <div
      className={`titre-medium-container-titre-infos-logement titreMediumContainer ${props.rootClassName} `}
    >
      <span className="titreRubrique">
        {props.texteInfosLogement ?? (
          <Fragment>
            <span className="titre-medium-container-text">Titre</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

TitreMediumContainer.defaultProps = {
  rootClassName: '',
  texteInfosLogement: undefined,
}

TitreMediumContainer.propTypes = {
  rootClassName: PropTypes.string,
  texteInfosLogement: PropTypes.element,
}

export default TitreMediumContainer
