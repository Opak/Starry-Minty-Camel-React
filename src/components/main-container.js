import React from 'react'

import PropTypes from 'prop-types'

const MainContainer = (props) => {
  return <div className={`mainContainer ${props.rootClassName} `}></div>
}

MainContainer.defaultProps = {
  rootClassName: '',
}

MainContainer.propTypes = {
  rootClassName: PropTypes.string,
}

export default MainContainer
