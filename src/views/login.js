import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container1">
      <Helmet>
        <title>starsmanager_ui</title>
        <meta property="og:title" content="starsmanager_ui" />
      </Helmet>
      <div className="login-container2 thq-section-padding">
        <div className="login-max-width thq-section-max-width">
          <div className="login-form-root">
            <div className="login-form1">
              <div className="login-title-root">
                <h2 className="thq-heading-2">
                  Connexion
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <div className="login-have-an-account-login"></div>
              </div>
              <form className="login-form2">
                <div className="login-email">
                  <label
                    htmlFor="thq-sign-in-1-email"
                    className="thq-body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required="true"
                    placeholder="Adresse email"
                    className="login-textinput1 thq-input thq-body-large"
                  />
                </div>
                <div className="login-password">
                  <div className="login-container3">
                    <label
                      htmlFor="thq-sign-in-1-password"
                      className="thq-body-large"
                    >
                      Mot de passe
                    </label>
                    <div className="login-hide-password"></div>
                  </div>
                  <input
                    type="password"
                    id="password"
                    required="true"
                    placeholder="Mot de passe"
                    className="login-textinput2 thq-input thq-body-large"
                  />
                </div>
                <div className="login-container4">
                  <div className="login-container5">
                    <button
                      id="boutonLogin"
                      type="button"
                      className="login-button thq-button-filled"
                    >
                      <span className="thq-body-small">Se connecter</span>
                    </button>
                  </div>
                  <div className="login-container6">
                    <Link
                      to="/mot-de-passe-oublie"
                      className="login-navlink thq-body-small"
                    >
                      Mot de passe oublié
                    </Link>
                  </div>
                  <div id="erreurLogin" className="login-container7"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="login-container9">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour se connecter et recevoir le JWT
        function login(email, password) {
            const data = {
                username: email,
                password: password
            };
            
            console.log("Envoi de la réponse au back :", data);

            const url = 'https://starsmanager-edefd7b34118.herokuapp.com/login';
        
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    // Affichage du message d'erreur si login échoué
                    showMessage("error", "Echec de connexion. Vérifiez vos informations.");
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Réponse du serveur :", data);
                const token = data.token;
                
                // Stocker le token JWT dans le localStorage
                localStorage.setItem('jwtToken', token);

                // Redirection vers la page /contrats
                window.location.href = "/contrats";
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        // Gérer l'événement de clic sur le bouton Login
        document.getElementById("boutonLogin").addEventListener("click", function(event) {
            event.preventDefault(); // Empêcher l'actualisation de la page
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            login(email, password);
        });

        // Gérer l'événement "Enter" sur les champs "email" et "password"
        document.getElementById("email").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Empêcher l'actualisation de la page
                document.getElementById("boutonLogin").click(); // Simuler le clic sur le bouton login
            }
        });

        document.getElementById("password").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Empêcher l'actualisation de la page
                document.getElementById("boutonLogin").click(); // Simuler le clic sur le bouton login
            }
        });
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Login
