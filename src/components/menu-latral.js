import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './menu-latral.css'

const MenuLatral = (props) => {
  return (
    <div id="menuLat" className="menuLateral">
      <div className="containerMenuLatHaut">
        <Link to="/contrats">
          <div className="menu-latral-cadre-menu11 cadreImgMenu">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="menu-latral-image imgMenu"
            />
          </div>
        </Link>
      </div>
      <div className="containerMenuLatBas">
        <Link to="/contrats">
          <div className="cadreImgMenu">
            <div>
              <div className="menu-latral-container12">
                <React.Fragment>
                  <React.Fragment>
                    <span style={{ fontSize: '2em', color: 'white' }}>
                      <i className="fa-solid fa-bars-staggered menuImg" />
                    </span>
                    <span className="menu-label">Contrats</span>
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
        </Link>
        <div className="cadreImgMenu">
          <div>
            <div className="menu-latral-container14">
              <React.Fragment>
                <React.Fragment>
                  <span style={{ fontSize: '2em', color: 'white' }}>
                    <i className="fa-solid fa-gears menuImg" />
                  </span>
                  <span className="menu-label">Paramètres</span>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div id="boutonLogout" className="cadreImgMenu">
          <div>
            <div className="menu-latral-container16">
              <React.Fragment>
                <React.Fragment>
                  <span style={{ fontSize: '2em', color: 'white' }}>
                    <i className="fa-solid fa-right-from-bracket menuImg" />
                  </span>
                  <span className="menu-label">Déconnexion</span>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <div>
            <div className="menu-latral-container18">
              <React.Fragment>
                <Script>{`
    (function() {
        // Fonction pour gérer la déconnexion
        function logout() {
            // Vérifier si le token existe
            const token = localStorage.getItem('jwtToken');

            if (token) {
                // Supprimer le token du localStorage
                localStorage.removeItem('jwtToken');
                console.log('Déconnexion réussie, token supprimé.');
            } else {
                console.log('Aucun token trouvé, vous êtes déjà déconnecté.');
            }

            // Rediriger vers la page de login ou d'accueil
            window.location.href = '/'; // Redirige vers la page d'accueil ou une autre page de ton choix
        }

        // Attacher l'événement au bouton de déconnexion
        document.getElementById("boutonLogout").addEventListener("click", function(event) {
            event.preventDefault(); // Prévenir tout comportement par défaut (utile si dans un formulaire, par exemple)
            logout(); // Appeler la fonction logout
        });
    })();
`}</Script>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="menu-latral-container20">
          <React.Fragment>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /* Style des éléments de menu */\n    .cadreImgMenu {\n    position: relative;\n    margin: 15px 0;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    }\n\n    .menuImg {\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    border-radius: 12px;\n    transition: background-color 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease;\n    }\n\n    .menuImg:hover {\n    background-color: #444444; /* Couleur de survol */\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Ombre portée */\n    width: 55px; /* Augmentation de la largeur sur hover */\n    height: 55px; /* Augmentation de la hauteur sur hover */\n    border-radius: 15px; /* Border radius plus marqué */\n    }\n\n    /* Label pour le texte sur hover */\n    .cadreImgMenu .menu-label {\n    position: absolute;\n    left: 60px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #444444; /* Couleur de l'encadré du label */\n    color: white;\n    padding: 6px 12px;\n    border-radius: 6px;\n    white-space: nowrap;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease, visibility 0.3s ease;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.9rem;\n    font-weight: 500;\n    }\n\n    /* Faire apparaître le label sur hover */\n    .cadreImgMenu:hover .menu-label {\n    opacity: 1;\n    visibility: visible;\n    }\n\n    .cadreImgMenu:hover .menuImg {\n    background-color: #444444; /* Met en valeur l'icône sur survol */\n    }\n",
              }}
            />
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

MenuLatral.defaultProps = {
  imageAlt3: 'image',
  rootClassName: '',
  imageSrc3: '/logo-removebg-preview-200h.png',
}

MenuLatral.propTypes = {
  imageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default MenuLatral
