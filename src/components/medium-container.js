import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './medium-container.css'

const MediumContainer = (props) => {
  return (
    <div className="mediumContainer containerCentral">
      <div className="medium-container-titre-infos-logement titreMediumContainer">
        <span className="titreRubrique">
          {props.texteInfosLogement ?? (
            <Fragment>
              <span className="medium-container-text19">
                Informations client
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="ligneInfo">
        <div className="partieInfoLogement1">
          <span className="texteInfoLogement1">
            {props.propritaire1 ?? (
              <Fragment>
                <span className="medium-container-propritaire12">
                  <span>Propriétaire</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie21 partieInfoLogement2">
          <span className="medium-container-propritaire2">
            {props.propritaire2 ?? (
              <Fragment>
                <span className="medium-container-text11">Roger Federer</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie31 partieInfoLogement3">
          <span className="texteInfoLogement1">
            {props.adresse1 ?? (
              <Fragment>
                <span className="medium-container-text17">Adresse</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie41 partieInfoLogement4">
          <span className="medium-container-adresse2">
            {props.adresse2 ?? (
              <Fragment>
                <span className="medium-container-text12">
                  18 allée du Gymnase - 13120 GARDANNE
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="medium-container-ligne2-infos ligneInfo">
        <div className="medium-container-partie12 partieInfoLogement1">
          <span className="texteInfoLogement1">
            {props.typeDhabitation1 ?? (
              <Fragment>
                <span className="medium-container-text13">
                  Type d&apos;habitation
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie22 partieInfoLogement2">
          <select id="select1" className="select1">
            <option id="NA" value="NA">
              --
            </option>
            <option id="1" value="1">
              Individuelle
            </option>
            <option id="2" value="2">
              Collective
            </option>
          </select>
        </div>
        <div className="medium-container-partie32 partieInfoLogement3">
          <span className="texteInfoLogement1">
            {props.etage ?? (
              <Fragment>
                <span className="medium-container-text18">Etage</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie42 partieInfoLogement4">
          <select
            id="select2"
            className="medium-container-select-etage select1"
          >
            <option value="NA" multiple="NA">
              --
            </option>
            <option value="0">RDC</option>
            <option value="1">1er étage</option>
            <option value="2">2ème étage</option>
            <option value="3">3ème étage</option>
            <option value="4">4ème étage ou plus</option>
          </select>
        </div>
      </div>
      <div className="medium-container-ligne3-infos ligneInfo">
        <div className="medium-container-partie13 partieInfoLogement1">
          <span className="texteInfoLogement1">
            {props.classementDemand ?? (
              <Fragment>
                <span className="medium-container-text10">
                  Classement demandé
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie23 partieInfoLogement2">
          <select
            id="select3"
            className="medium-container-select-classement select1"
          >
            <option value="NA">--</option>
            <option value="1">1*</option>
            <option value="2">2*</option>
            <option value="3">3*</option>
            <option value="4">4*</option>
            <option value="5">5*</option>
          </select>
        </div>
        <div className="medium-container-partie33 partieInfoLogement3">
          <span className="texteInfoLogement1">
            {props.capacitDaccueil ?? (
              <Fragment>
                <span className="medium-container-text14">
                  Capacité d&apos;accueil
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="medium-container-partie43 partieInfoLogement4">
          <input
            type="text"
            id="input0"
            placeholder={props.textinputPlaceholder}
            className="medium-container-textinput select1"
          />
        </div>
      </div>
    </div>
  )
}

MediumContainer.defaultProps = {
  classementDemand: undefined,
  propritaire2: undefined,
  adresse2: undefined,
  typeDhabitation1: undefined,
  capacitDaccueil: undefined,
  propritaire1: undefined,
  adresse1: undefined,
  etage: undefined,
  texteInfosLogement: undefined,
  textinputPlaceholder: '--',
  rootClassName: '',
}

MediumContainer.propTypes = {
  classementDemand: PropTypes.element,
  propritaire2: PropTypes.element,
  adresse2: PropTypes.element,
  typeDhabitation1: PropTypes.element,
  capacitDaccueil: PropTypes.element,
  propritaire1: PropTypes.element,
  adresse1: PropTypes.element,
  etage: PropTypes.element,
  texteInfosLogement: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MediumContainer
