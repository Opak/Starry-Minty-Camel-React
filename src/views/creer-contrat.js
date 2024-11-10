import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MenuLatral from '../components/menu-latral'
import './creer-contrat.css'

const CreerContrat = (props) => {
  return (
    <div id="pageCreerContrat" className="creer-contrat-container10">
      <Helmet>
        <title>Creer-Contrat - starsmanager_ui</title>
        <meta property="og:title" content="Creer-Contrat - starsmanager_ui" />
      </Helmet>
      <MenuLatral rootClassName="menu-latralroot-class-name3"></MenuLatral>
      <div className="header">
        <div className="creer-contrat-titre1 cadreTitreHeader">
          <h1 className="texteTitreHeader">Nouveau contrat</h1>
        </div>
        <Link to="/contrats">
          <div
            id="boutonListeContrats"
            className="creer-contrat-menu cadreMenuHeader"
          >
            <div className="creer-contrat-action1 cadreActionMenuHeader">
              <span className="creer-contrat-retour-contrat texteOptionMenuHeader">
                Liste des contrats
              </span>
            </div>
            <div className="creer-contrat-container11 cadreIconeMenuHeader">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="iconeMenuHeader"
              >
                <path
                  d="m2 11l7-9v5c11.953 0 13.332 9.678 13 15c-.502-2.685-.735-7-13-7v5z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div
        id="newContratContainer"
        className="creer-contrat-main-container mainContainer"
      >
        <div
          id="infosClient"
          className="creer-contrat-informations-client mediumContainer firstContainer containerCentral"
        >
          <div className="ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">Informations client</span>
          </div>
          <div
            id="choixClient"
            className="creer-contrat-choix-client sousContainer containerCentral"
          >
            <div id="clientExistant" className="choixClient">
              <div>
                <span className="texteInfoLogement1">
                  <span>Client existant</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div id="nouveauClient" className="choixClient">
              <div>
                <span className="texteInfoLogement1">
                  <span>Nouveau client</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div
            id="rechercherClient"
            className="creer-contrat-rechercher-client sousContainer toggle-div containerCentral"
          >
            <div className="ligneInfo">
              <div>
                <input
                  type="text"
                  id="inputRechercheClient"
                  placeholder="Rechercher un client..."
                  className="barreRecherche select1"
                />
              </div>
            </div>
            <div
              id="tableauListeClients"
              className="creer-contrat-tableau-liste-clients"
            ></div>
          </div>
          <div
            id="creerClient"
            className="sousContainer toggle-div containerCentral"
          >
            <div className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Statut</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie210">
                <div className="radioContrat">
                  <input
                    type="radio"
                    id="particulier"
                    name="statutProprietaire"
                    value="1"
                    required="true"
                    className="creer-contrat-radiobutton1"
                  />
                  <label htmlFor="particulier">
                    <span>Particulier</span>
                    <br></br>
                  </label>
                </div>
                <div className="radioContrat">
                  <input
                    type="radio"
                    id="professionnel"
                    name="statutProprietaire"
                    value="2"
                    required="true"
                    className="creer-contrat-radiobutton2"
                  />
                  <label htmlFor="professionnel">
                    <span>Professionnel</span>
                    <br></br>
                  </label>
                </div>
              </div>
            </div>
            <div className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Civilité</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie211">
                <div className="radioContrat">
                  <input
                    type="radio"
                    id="monsieur"
                    name="civilite"
                    value="Monsieur"
                    className="creer-contrat-radiobutton3"
                  />
                  <label htmlFor="monsieur">
                    <span>Monsieur</span>
                    <br></br>
                  </label>
                </div>
                <div className="creer-contrat-container15 radioContrat">
                  <input
                    type="radio"
                    id="madame"
                    name="civilite"
                    value="Madame"
                    className="creer-contrat-radio"
                  />
                  <label htmlFor="madame">
                    <span>Madame</span>
                    <br></br>
                  </label>
                </div>
                <div className="creer-contrat-container16 radioContrat">
                  <input
                    type="radio"
                    id="mademoiselle"
                    name="civilite"
                    value="Mademoiselle"
                    className="creer-contrat-radiobutton4"
                  />
                  <label htmlFor="mademoiselle">
                    <span>Mademoiselle</span>
                    <br></br>
                  </label>
                </div>
              </div>
            </div>
            <div id="infosClientPart" className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Nom</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie212 partieInfoContrat2">
                <textarea
                  id="nomClient"
                  rows="1"
                  placeholder="Nom"
                  className="textareaContrat"
                ></textarea>
              </div>
              <div className="partieInfoContrat3">
                <span className="texteInfoLogement1">Prénom</span>
              </div>
              <div className="creer-contrat-partie41 partieInfoContrat4">
                <textarea
                  id="prenomClient"
                  rows="1"
                  placeholder="Prénom"
                  className="textareaContrat"
                ></textarea>
              </div>
            </div>
            <div id="infosClientPro" className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Raison sociale</span>
                  <br></br>
                </span>
              </div>
              <div className="partieInfoContrat2">
                <textarea
                  id="raisonSocialeClient"
                  rows="1"
                  placeholder="Raison sociale"
                  className="textareaContrat"
                ></textarea>
              </div>
              <div className="creer-contrat-partie32 partieInfoContrat3">
                <span className="texteInfoLogement1">SIRET</span>
              </div>
              <div className="creer-contrat-partie42 partieInfoContrat4">
                <textarea
                  id="SIRETClient"
                  rows="1"
                  placeholder="SIRET"
                  className="textareaContrat"
                ></textarea>
              </div>
            </div>
            <div className="separateur"></div>
            <div className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Adresse</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie214 partieInfoContrat2">
                <textarea
                  id="adresse1Client"
                  rows="1"
                  placeholder="Adresse"
                  className="textareaContrat"
                ></textarea>
                <div>
                  <div className="creer-contrat-container19">
                    <React.Fragment>
                      <React.Fragment>
                        <ul id="adresseSuggestions" className="suggestions" />

                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n    .suggestions {\n    display: none; /* Cacher par défaut */\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #ccc;\n    max-height: 150px;\n    overflow-y: auto;\n    background-color: white;\n    position: absolute;\n    width: 400px; /* Largeur fixe de 400px */\n    max-width: 80vw; /* Maximum 80% de la largeur de l'écran */\n    z-index: 1000;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n    }\n\n    .suggestions li {\n    padding: 5px;\n    cursor: pointer;\n    }\n\n    .suggestions li:hover {\n    background-color: #f0f0f0;\n    }\n",
                          }}
                        />
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              </div>
              <div className="creer-contrat-partie33 partieInfoContrat3">
                <span className="texteInfoLogement1">Adresse (suite)</span>
              </div>
              <div className="partieInfoContrat4">
                <textarea
                  id="adresse2Client"
                  rows="1"
                  placeholder="Adresse (suite)"
                  className="textareaContrat"
                ></textarea>
              </div>
            </div>
            <div className="ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Code postal</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie215 partieInfoContrat2">
                <textarea
                  id="CPClient"
                  rows="1"
                  placeholder="Code postal"
                  className="textareaContrat"
                ></textarea>
              </div>
              <div className="creer-contrat-partie34 partieInfoContrat3">
                <span className="texteInfoLogement1">Ville</span>
              </div>
              <div className="creer-contrat-partie44 partieInfoContrat4">
                <textarea
                  id="villeClient"
                  rows="1"
                  placeholder="Ville"
                  className="textareaContrat"
                ></textarea>
              </div>
            </div>
            <div className="creer-contrat-ligne-infos-contact1 ligneInfo">
              <div className="partieInfoContrat1">
                <span className="texteInfoLogement1">
                  <span>Adresse email</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie216 partieInfoContrat2">
                <textarea
                  id="emailClient"
                  rows="1"
                  placeholder="Adresse email"
                  className="textareaContrat"
                ></textarea>
              </div>
              <div className="creer-contrat-partie35 partieInfoContrat3">
                <span className="texteInfoLogement1">
                  <span>Téléphone</span>
                  <br></br>
                </span>
              </div>
              <div className="creer-contrat-partie45 partieInfoContrat4">
                <textarea
                  id="telephoneClient"
                  rows="1"
                  placeholder="Téléphone"
                  className="textareaContrat"
                ></textarea>
              </div>
            </div>
            <div
              id="ligneErreurs1"
              className="ligneErreurCreatContrat ligneInfo"
            ></div>
            <div className="creer-contrat-container20 containerBoutons">
              <div
                id="boutonAnnulerClient"
                className="creer-contrat-bouton-rouge1 boutonActionGrille actionGrilleDeControle boutonRouge"
              >
                <span>
                  <span>Annuler</span>
                  <br></br>
                </span>
              </div>
              <div
                id="boutonCreerClient"
                className="creer-contrat-bouton-bleu1 boutonActionGrille actionGrilleDeControle boutonVert"
              >
                <span>
                  <span>Créer client</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="infosBien"
          className="creer-contrat-informations-meubl mediumContainer firstContainer containerCentral"
        >
          <div id="boiteRappel" className="boiteRappel"></div>
          <div className="creer-contrat-titre-infos-logement1 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Informations du bien à classer
            </span>
          </div>
          <div className="ligneInfo">
            <div className="creer-contrat-partie120 partieInfoLogement1">
              <input type="checkbox" id="sameAdresse" />
              <label htmlFor="sameAdresse" className="texteInfoLogement1">
                <span>Même adresse que le client</span>
                <br></br>
              </label>
            </div>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Adresse</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie217 partieInfoContrat2">
              <textarea
                id="adresse1Bien"
                rows="1"
                placeholder="Adresse"
                className="textareaContrat"
              ></textarea>
              <div>
                <div className="creer-contrat-container22">
                  <React.Fragment>
                    <ul id="adresse2Suggestions" className="suggestions" />
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className="creer-contrat-partie36 partieInfoContrat3">
              <span className="texteInfoLogement1">Adresse (suite)</span>
            </div>
            <div className="creer-contrat-partie46 partieInfoContrat4">
              <textarea
                id="adresse2Bien"
                rows="1"
                placeholder="Adresse (suite)"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Code postal</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie218 partieInfoContrat2">
              <textarea
                id="CPBien"
                rows="1"
                placeholder="Code postal"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="creer-contrat-partie37 partieInfoContrat3">
              <span className="texteInfoLogement1">Ville</span>
            </div>
            <div className="creer-contrat-partie47 partieInfoContrat4">
              <textarea
                id="villeBien"
                rows="1"
                placeholder="Ville"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="creer-contrat-ligne-infos-contact3 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Site web</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie219 partieInfoContrat2">
              <textarea
                id="siteWebBien"
                rows="1"
                placeholder="Site web"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="creer-contrat-partie38 partieInfoContrat3">
              <span className="texteInfoLogement1">
                <span>Nombre de pièces</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie48 partieInfoContrat4">
              <textarea
                id="nbPiecesBien"
                rows="1"
                placeholder="Nombre de pièces"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div
            id="ligneErreurs2"
            className="ligneErreurCreatContrat ligneInfo"
          ></div>
        </div>
        <div
          id="infosAdd"
          className="creer-contrat-informations-additionnelles mediumContainer containerCentral"
        >
          <div className="creer-contrat-titre-infos-logement2 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              <span>Informations additionnelles</span>
              <br></br>
            </span>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Montant facturé</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie220 partieInfoContrat2">
              <textarea
                id="montantFacture"
                rows="1"
                placeholder="Montant facturé TTC"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="creer-contrat-partie39 partieInfoContrat3">
              <span className="texteInfoLogement1">Mode de règlement</span>
            </div>
            <div className="creer-contrat-partie49 partieInfoContrat4">
              <select id="modeReglement" className="select1">
                <option id="NA" value="NA">
                  --
                </option>
                <option id="1" value="1">
                  Virement
                </option>
                <option id="2" value="2">
                  Chèque
                </option>
              </select>
            </div>
          </div>
          <div className="creer-contrat-ligne-infos-adresse24 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Date de visite</span>
                <br></br>
              </span>
            </div>
            <div className="creer-contrat-partie221 partieInfoContrat2">
              <input
                type="text"
                id="dateVisite"
                placeholder="Date de visite"
                className="textareaContrat"
              />
              <div>
                <div className="creer-contrat-container24">
                  <React.Fragment>
                    <Script>{`
  (function() {
    const dateVisiteInput = document.getElementById("dateVisite");

    flatpickr("#dateVisite", {
      enableTime: true,           // Active la sélection de l'heure
      dateFormat: "d/m/Y H:i",    // Format de date et heure
      time_24hr: true,            // Format 24h
      minuteIncrement: 5,         // Incrémentation des minutes par 5
      minDate: "today",           // Bloquer les dates passées
      locale: "fr",
      onOpen: function(selectedDates, dateStr, instance) {
        const hourInput = instance.hourElement; // Sélectionne l'input pour les heures
        const minuteInput = instance.minuteElement; // Sélectionne l'input pour les minutes
        
        // Ajoute un listener sur le champ de l'heure
        hourInput.addEventListener('input', function() {
          if (hourInput.value.length === 2) { // Vérifie si deux chiffres ont été saisis
            minuteInput.focus(); // Transfère le focus au champ des minutes
          }
        });
      }
    });
  })();
`}</Script>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
          <div
            id="ligneErreurs3"
            className="ligneErreurCreatContrat ligneInfo"
          ></div>
          <div className="creer-contrat-container25 containerBoutons">
            <div
              id="boutonAnnuler"
              className="creer-contrat-bouton-rouge2 boutonActionGrille actionGrilleDeControle boutonRouge"
            >
              <span>
                <span>Annuler</span>
                <br></br>
              </span>
            </div>
            <div
              id="boutonCreerContrat"
              className="creer-contrat-bouton-bleu2 boutonActionGrille actionGrilleDeControle boutonVert"
            >
              <span>
                <span>Créer contrat</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container27">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour attacher les événements lorsque la page est prête
        function attachClientOptionEvents() {
            const pageCreerContrat = document.getElementById('pageCreerContrat');

            if (pageCreerContrat && !pageCreerContrat.dataset.clientOptionEventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les doublons
                pageCreerContrat.dataset.clientOptionEventsAttached = 'true';

                var existingOption = document.getElementById('clientExistant');
                var newOption = document.getElementById('nouveauClient');
                var rechercherClientDiv = document.getElementById('rechercherClient');
                var creerClientDiv = document.getElementById('creerClient');

                if (existingOption) {
                    existingOption.addEventListener('click', function(event) {
                        event.preventDefault();
                        setActiveOption('clientExistant');
                        toggleClientDivs('existing');
                    });
                }

                if (newOption) {
                    newOption.addEventListener('click', function(event) {
                        event.preventDefault();
                        setActiveOption('nouveauClient');
                        toggleClientDivs('new');
                    });
                }

                function setActiveOption(selectedId) {
                    var options = document.querySelectorAll('.choixClient');

                    // Retire la classe choixClientActive de toutes les options
                    options.forEach(function(option) {
                        option.classList.remove('choixClientActive');
                    });

                    // Ajoute la classe choixClientActive à l'élément sélectionné
                    var selectedOption = document.getElementById(selectedId);
                    if (selectedOption) {
                        selectedOption.classList.add('choixClientActive');
                    }
                }

                function toggleClientDivs(option) {
                    if (option === 'existing') {
                        // Affiche rechercherClient et masque creerClient
                        expandDiv(rechercherClientDiv);
                        collapseDiv(creerClientDiv);
                    } else if (option === 'new') {
                        // Affiche creerClient et masque rechercherClient
                        expandDiv(creerClientDiv);
                        collapseDiv(rechercherClientDiv);
                    }
                }

                function expandDiv(div) {
                    div.classList.add('toggle-divActive');
                    adjustHeight(div);

                    // Surveiller les changements dans la div pour ajuster la hauteur dynamiquement
                    const observer = new MutationObserver(function() {
                        adjustHeight(div);
                    });
                    observer.observe(div, { childList: true, subtree: true });
                }

                function collapseDiv(div) {
                    div.style.maxHeight = div.scrollHeight + 'px'; // Fixer la hauteur actuelle pour déclencher la transition
                    div.classList.remove('toggle-divActive');

                    // Utiliser un délai pour garantir la transition fluide
                    setTimeout(function() {
                        div.style.maxHeight = '0px';
                    }, 10);
                }

                function adjustHeight(div) {
                    // Fixer maxHeight à 'auto' pour forcer le recalcul de la hauteur réelle
                    div.style.maxHeight = 'auto';
                    const scrollHeight = div.scrollHeight + 'px';
                    div.style.maxHeight = scrollHeight; // Ajuster la hauteur pour la transition
                }
            }
        }

        // Fonction pour vérifier si la page "pageCreerContrat" est présente
        function checkPageCreerContrat() {
            const pageCreerContrat = document.getElementById('pageCreerContrat');
            if (pageCreerContrat) {
                attachClientOptionEvents();
            }
        }

        // Appeler la fonction initialement
        checkPageCreerContrat();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container29">
          <React.Fragment>
            <Script>{`
    (function() {
        // Fonction principale pour attacher les événements
        function attachValidationEvents() {
            const siretTextarea = document.getElementById("SIRETClient");
            const cpClientTextarea = document.getElementById("CPClient");
            const emailTextarea = document.getElementById("emailClient");
            const telTextarea = document.getElementById("telephoneClient");
            const cpBienTextarea = document.getElementById("CPBien");
            const nbPiecesBienTextarea = document.getElementById("nbPiecesBien");
            const montantFactureTextarea = document.getElementById("montantFacture");
            const dateVisiteTextarea = document.getElementById("dateVisite");
            const errorContainer1 = document.getElementById("ligneErreurs1");
            const errorContainer2 = document.getElementById("ligneErreurs2");
            const errorContainer3 = document.getElementById("ligneErreurs3");

            if (errorContainer1 && errorContainer2 && errorContainer3) {
                // Fonction pour vérifier si les conteneurs d'erreurs doivent être masqués
                function checkErrors() {
                    if (!errorContainer1.querySelector(".siret-error") &&
                        !errorContainer1.querySelector(".cp-client-error") &&
                        !errorContainer1.querySelector(".email-error") &&
                        !errorContainer1.querySelector(".tel-error")) {
                        errorContainer1.style.display = "none";
                    }
                    if (!errorContainer2.querySelector(".cp-bien-error") &&
                        !errorContainer2.querySelector(".nb-pieces-error")) {
                        errorContainer2.style.display = "none";
                    }
                    if (!errorContainer3.querySelector(".montant-facture-error") &&
                        !errorContainer3.querySelector(".date-visite-error")) {
                        errorContainer3.style.display = "none";
                    }
                }

                // Fonction de validation pour le SIRET
                function validateSiret() {
                    let value = siretTextarea.value.split(' ').join('');

                    const existingSiretError = errorContainer1.querySelector(".siret-error");
                    if (existingSiretError) existingSiretError.remove();

                    if (value === "") {
                        siretTextarea.classList.remove("na-value");
                    } else if (/^(?:[0-9] *){14}\$/.test(value)) {
                        siretTextarea.classList.remove("na-value");
                        value = value.split(' ').join('');
                        value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9) + ' ' + value.slice(9);
                        siretTextarea.value = value;
                    } else {
                        siretTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "Le SIRET doit comporter 14 chiffres";
                        errorText.classList.add("siret-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer1.appendChild(errorText);
                        errorContainer1.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour le Code Postal
                function validateCP(textarea, errorClass, errorMessage, container) {
                    const value = textarea.value.split(' ').join('');

                    const existingCPError = container.querySelector(\`.\${errorClass}\`);
                    if (existingCPError) existingCPError.remove();

                    if (value === "") {
                        textarea.classList.remove("na-value");
                    } else if (/^[0-9]{5}\$/.test(value)) {
                        textarea.classList.remove("na-value");
                        textarea.value = value;
                    } else {
                        textarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = errorMessage;
                        errorText.classList.add(errorClass);
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        container.appendChild(errorText);
                        container.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour l'email
                function validateEmail() {
                    let value = emailTextarea.value.split(' ').join('');

                    const existingEmailError = errorContainer1.querySelector(".email-error");
                    if (existingEmailError) existingEmailError.remove();

                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\$/;

                    if (value === "") {
                        emailTextarea.classList.remove("na-value");
                    } else if (emailRegex.test(value)) {
                        emailTextarea.classList.remove("na-value");
                        emailTextarea.value = value;
                    } else {
                        emailTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "L'adresse email n'est pas valide";
                        errorText.classList.add("email-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer1.appendChild(errorText);
                        errorContainer1.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour le téléphone
                function validateTel() {
                    let value = telTextarea.value.split(' ').join('');

                    const existingTelError = errorContainer1.querySelector(".tel-error");
                    if (existingTelError) existingTelError.remove();

                    if (value === "") {
                        telTextarea.classList.remove("na-value");
                    } else if (/^0[0-9]{9}\$/.test(value)) {
                        telTextarea.classList.remove("na-value");
                        value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8);
                        telTextarea.value = value;
                    } else {
                        telTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "Le numéro de téléphone doit comporter 10 chiffres et commencer par 0";
                        errorText.classList.add("tel-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer1.appendChild(errorText);
                        errorContainer1.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour le nombre de pièces
                function validateNbPieces() {
                    const value = nbPiecesBienTextarea.value.split(' ').join('');

                    const existingNbPiecesError = errorContainer2.querySelector(".nb-pieces-error");
                    if (existingNbPiecesError) existingNbPiecesError.remove();

                    if (value === "") {
                        nbPiecesBienTextarea.classList.remove("na-value");
                    } else if (/^[0-9]+\$/.test(value)) {
                        nbPiecesBienTextarea.classList.remove("na-value");
                        nbPiecesBienTextarea.value = value;
                    } else {
                        nbPiecesBienTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "Le nombre de pièces doit être une suite de chiffres";
                        errorText.classList.add("nb-pieces-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer2.appendChild(errorText);
                        errorContainer2.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour le montant de la facture
                function validateMontantFacture() {
                    let value = montantFactureTextarea.value.split(' ').join('');

                    const existingError = errorContainer3.querySelector(".montant-facture-error");
                    if (existingError) existingError.remove();

                    if (value === "") {
                        montantFactureTextarea.classList.remove("na-value");
                    } else if (/^[0-9]+€?\$/.test(value)) {
                        montantFactureTextarea.classList.remove("na-value");
                        if (!value.endsWith('€')) {
                            montantFactureTextarea.value = value + '€';
                        } else {
                            montantFactureTextarea.value = value;
                        }
                    } else {
                        montantFactureTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "Le montant doit être une suite de chiffres, éventuellement terminée par '€'";
                        errorText.classList.add("montant-facture-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer3.appendChild(errorText);
                        errorContainer3.style.display = "block";
                    }
                    checkErrors();
                }

                // Fonction de validation pour la date de visite
                function validateDateVisite() {
                    // Supprimer tous les espaces pour la validation
                    let value = dateVisiteTextarea.value.split(' ').join('');

                    const existingError = errorContainer3.querySelector(".date-visite-error");
                    if (existingError) existingError.remove();

                    if (value === "") {
                        dateVisiteTextarea.classList.remove("na-value");
                    } else if (new RegExp('^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])[0-9]{4}\$').test(value) || 
                            new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}\$').test(value)) {
                        dateVisiteTextarea.classList.remove("na-value");

                        // Reformatage au format JJ/MM/AAAA si nécessaire
                        value = value.split(' ').join(''); // Supprimer les espaces
                        if (!value.includes('/')) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
                        }
                        dateVisiteTextarea.value = value;
                    } else {
                        dateVisiteTextarea.classList.add("na-value");
                        const errorText = document.createElement("div");
                        errorText.textContent = "La date doit être au format JJ/MM/AAAA";
                        errorText.classList.add("date-visite-error");
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer3.appendChild(errorText);
                        errorContainer3.style.display = "block";
                    }
                    checkErrors();
                }

                // Attacher les événements 'blur' pour vérifier lorsque l'utilisateur quitte les textareas
                if (siretTextarea) siretTextarea.addEventListener("blur", validateSiret);
                if (cpClientTextarea) cpClientTextarea.addEventListener("blur", function() {
                    validateCP(cpClientTextarea, "cp-client-error", "Le code postal doit comporter 5 chiffres", errorContainer1);
                });
                if (cpBienTextarea) cpBienTextarea.addEventListener("blur", function() {
                    validateCP(cpBienTextarea, "cp-bien-error", "Le code postal doit comporter 5 chiffres", errorContainer2);
                });
                if (emailTextarea) emailTextarea.addEventListener("blur", validateEmail);
                if (telTextarea) telTextarea.addEventListener("blur", validateTel);
                if (nbPiecesBienTextarea) nbPiecesBienTextarea.addEventListener("blur", validateNbPieces);
                if (montantFactureTextarea) montantFactureTextarea.addEventListener("blur", validateMontantFacture);
                //if (dateVisiteTextarea) dateVisiteTextarea.addEventListener("blur", validateDateVisite);
            } // Fin du if (errorContainer1 && errorContainer2 && errorContainer3)

        } // **Ajout de l'accolade manquante pour fermer attachValidationEvents**

        // Fonction pour vérifier si la page est présente et attacher les événements
        function checkAndAttachValidationEvents() {
            const pageContrat = document.getElementById("pageDetailsContrat") || document.getElementById("pageCreerContrat");
            if (pageContrat) {
                attachValidationEvents();
            }
        }

        // Appeler la fonction initialement
        checkAndAttachValidationEvents();
    })();
`}</Script>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container31">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .slide-in {\n        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;\n        transform: translateX(100%); /* Cache le conteneur */\n        opacity: 0;\n    }\n    \n    .slide-inActive {\n        transform: translateX(0); /* Position finale après l'animation */\n        opacity: 1;\n        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Durée et style de transition */\n    }\n\n    .hidden {\n        display: none;\n    }\n",
                }}
              />

              <Script>{`
    (function() {
        // Fonction pour attacher les événements lorsque la page est prête
        function attachCreerClientEvents() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");

            if (pageCreerContrat && !pageCreerContrat.dataset.creerClientEventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les doublons
                pageCreerContrat.dataset.creerClientEventsAttached = 'true';

                // Variable pour stocker l'ID du client
                pageCreerContrat.dataset.clientID = null;

                // Fonction pour vérifier les champs à la création d'un client
                function verifierChampsCreerClient() {
                    const statutParticulier = document.getElementById("particulier");
                    const statutProfessionnel = document.getElementById("professionnel");
                    const civiliteRadios = document.querySelectorAll('input[name="civilite"]');
                    const nomClient = document.getElementById("nomClient");
                    const prenomClient = document.getElementById("prenomClient");
                    const raisonSocialeClient = document.getElementById("raisonSocialeClient");
                    const siretClient = document.getElementById("SIRETClient");
                    const adresse1Client = document.getElementById("adresse1Client");
                    const cpClient = document.getElementById("CPClient");
                    const villeClient = document.getElementById("villeClient");
                    const emailClient = document.getElementById("emailClient");
                    const errorContainer = document.getElementById("ligneErreurs1");

                    // Fonction pour ajouter un message d'erreur
                    function ajouterMessageErreur(message) {
                        const errorText = document.createElement("div");
                        errorText.textContent = message;
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer.appendChild(errorText);
                        errorContainer.style.display = "block";
                    }

                    // Réinitialiser les messages d'erreur
                    errorContainer.innerHTML = '';
                    errorContainer.style.display = "none";

                    let erreurTrouvee = false;

                    // Vérification que la radio "civilite" est bien sélectionnée
                    let civiliteSelectionnee = false;
                    civiliteRadios.forEach(radio => {
                        if (radio.checked) {
                            civiliteSelectionnee = true;
                        }
                    });
                    if (!civiliteSelectionnee) {
                        ajouterMessageErreur("Veuillez sélectionner une civilité.");
                        erreurTrouvee = true;
                    }

                    // Vérification que l'un des statuts "particulier" ou "professionnel" est bien sélectionné
                    if (!statutParticulier.checked && !statutProfessionnel.checked) {
                        ajouterMessageErreur("Veuillez sélectionner le statut du client.");
                        erreurTrouvee = true;
                    }

                    // Vérifications selon le statut
                    if (!nomClient.value.trim()) {
                        ajouterMessageErreur("Le nom du client est requis.");
                        erreurTrouvee = true;
                    }
                    if (!prenomClient.value.trim()) {
                        ajouterMessageErreur("Le prénom du client est requis.");
                        erreurTrouvee = true;
                    }

                    if (statutProfessionnel.checked) {
                        if (!raisonSocialeClient.value.trim()) {
                            ajouterMessageErreur("La raison sociale est requise.");
                            erreurTrouvee = true;
                        }
                        if (!siretClient.value.trim()) {
                            ajouterMessageErreur("Le SIRET est requis.");
                            erreurTrouvee = true;
                        }
                    }

                    // Vérification des champs communs
                    if (!adresse1Client || !adresse1Client.value.trim()) {
                        ajouterMessageErreur("L'adresse du client est requise.");
                        erreurTrouvee = true;
                    }
                    if (!cpClient || !cpClient.value.trim()) {
                        ajouterMessageErreur("Le code postal du client est requis.");
                        erreurTrouvee = true;
                    }
                    if (!villeClient || !villeClient.value.trim()) {
                        ajouterMessageErreur("La ville du client est requise.");
                        erreurTrouvee = true;
                    }
                    if (!emailClient || !emailClient.value.trim()) {
                        ajouterMessageErreur("L'email du client est requis.");
                        erreurTrouvee = true;
                    }

                    // Si aucune erreur trouvée, retourner true, sinon false
                    return !erreurTrouvee;
                }

                // Fonction pour envoyer les données au back
                function creerClient() {
                    // Récupérer le token depuis localStorage
                    const token = localStorage.getItem('jwtToken');

                    // Vérifier si le token existe
                    if (!token) {
                        sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                        window.location.href = '/';
                        return;
                    }

                    const statutParticulier = document.getElementById("particulier");
                    const statutProfessionnel = document.getElementById("professionnel");
                    const civiliteRadios = document.querySelectorAll('input[name="civilite"]');
                    let civilite = '';

                    // Récupérer la valeur de la radio "civilite" sélectionnée
                    civiliteRadios.forEach(radio => {
                        if (radio.checked) {
                            civilite = radio.value; // La valeur sera "Madame", "Monsieur" ou "Mademoiselle"
                        }
                    });

                    const data = {
                        nom: document.getElementById("nomClient")?.value || '',
                        prenom: document.getElementById("prenomClient")?.value || '',
                        adresse: document.getElementById("adresse1Client")?.value || '',
                        complement_adresse: document.getElementById("adresse2Client")?.value || '',
                        code_postal: document.getElementById("CPClient")?.value || '',
                        ville: document.getElementById("villeClient")?.value || '',
                        telephone: document.getElementById("telephoneClient")?.value || '',
                        email: document.getElementById("emailClient")?.value || '',
                        raison_sociale: document.getElementById("raisonSocialeClient")?.value || '',
                        num_siret: document.getElementById("SIRETClient")?.value || '',
                        type: statutParticulier.checked ? "PARTICULIER" : statutProfessionnel.checked ? "PROFESSIONNEL" : '',
                        civilite: civilite // Ajouter la civilité au payload envoyé au back        
                    };

                    console.log("Envoi de la réponse au back : ", data);

                    const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients\`;

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Authorization': \`Bearer \${token}\`,  // Ajout du token ici
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => {
                        // Si le token est périmé ou invalide, renvoyer à la page de connexion
                        if (response.status === 401) {
                            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                            window.location.href = '/';
                            return Promise.reject("Unauthorized");
                        }

                        if (!response.ok) {
                            throw new Error(\`HTTP error! status: \${response.status}\`);
                        }
                        return response.json();
                    })
                    .then(responseData => {
                        pageCreerContrat.dataset.clientID = responseData.id;
                        console.log("ID du client créé :", pageCreerContrat.dataset.clientID);

                        const infosClient = document.getElementById("infosClient");
                        const infosBien = document.getElementById("infosBien");
                        const infosAdd = document.getElementById("infosAdd");

                        infosClient.classList.add("hidden");
                        infosBien.style.display = "block";
                        infosAdd.style.display = "block";

                        infosBien.classList.add("slide-in");
                        infosAdd.classList.add("slide-in");

                        setTimeout(() => {
                            infosBien.classList.add("slide-inActive");
                            infosAdd.classList.add("slide-inActive");
                        }, 10);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }

                // Attacher l'événement au bouton de création
                const boutonCreerClient = document.getElementById("boutonCreerClient");
                if (boutonCreerClient) {
                    boutonCreerClient.addEventListener("click", function(event) {
                        event.preventDefault();
                        // Vérifier les champs et si aucune erreur, envoyer les données au back
                        if (verifierChampsCreerClient()) {
                            creerClient();
                        }
                    });
                }
            }
        }

        // Fonction pour vérifier si la page "pageCreerContrat" est présente
        function checkPageCreerContrat() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");
            if (pageCreerContrat) {
                attachCreerClientEvents();
            }
        }

        // Appeler la fonction initialement
        checkPageCreerContrat();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container33">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour attacher les événements lorsque la page est prête
        function attachCreerContratEvents() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");

            if (pageCreerContrat && !pageCreerContrat.dataset.creerContratEventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les doublons
                pageCreerContrat.dataset.creerContratEventsAttached = 'true';

                // Fonction pour vérifier les champs à la création d'un contrat
                function verifierChampsCreerContrat() {
                    const adresse1Bien = document.getElementById("adresse1Bien");
                    const cpBien = document.getElementById("CPBien");
                    const villeBien = document.getElementById("villeBien");
                    const errorContainer = document.getElementById("ligneErreurs2");

                    // Fonction pour ajouter un message d'erreur
                    function ajouterMessageErreur(message) {
                        const errorText = document.createElement("div");
                        errorText.textContent = message;
                        errorText.style.color = "red";
                        errorText.style.padding = "8px";
                        errorContainer.appendChild(errorText);
                        errorContainer.style.display = "block";
                    }

                    // Réinitialiser les messages d'erreur
                    errorContainer.innerHTML = '';
                    errorContainer.style.display = "none";

                    let erreurTrouvee = false;

                    // Vérification des champs obligatoires
                    if (!adresse1Bien || !adresse1Bien.value.trim()) {
                        ajouterMessageErreur("L'adresse du bien est requise.");
                        erreurTrouvee = true;
                    }
                    if (!cpBien || !cpBien.value.trim()) {
                        ajouterMessageErreur("Le code postal du bien est requis.");
                        erreurTrouvee = true;
                    }
                    if (!villeBien || !villeBien.value.trim()) {
                        ajouterMessageErreur("La ville du bien est requise.");
                        erreurTrouvee = true;
                    }

                    // Si aucune erreur trouvée, retourner true, sinon false
                    return !erreurTrouvee;
                }

                // Fonction pour envoyer les données du contrat au back
                function creerContrat() {
                    // Récupérer le token depuis localStorage
                    const token = localStorage.getItem('jwtToken');

                    // Vérifier si le token existe
                    if (!token) {
                        sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                        window.location.href = '/';
                        return;
                    }

                    // Vérifier que clientID est défini
                    // On suppose que clientID est stocké dans un attribut de données sur pageCreerContrat
                    const clientID = pageCreerContrat.dataset.clientID;

                    if (!clientID) {
                        console.error("Client ID non défini. Veuillez créer un client d'abord.");
                        return;
                    }

                    // Récupérer la valeur de la checkbox sameAdresse
                    const sameAdresseCheckbox = document.getElementById("sameAdresse");

                    const data = {
                        adresse: document.getElementById("adresse1Bien")?.value || '',
                        complement_adresse: document.getElementById("adresse2Bien")?.value || '',
                        code_postal: document.getElementById("CPBien")?.value || '',
                        ville: document.getElementById("villeBien")?.value || '',
                        nombre_pieces: document.getElementById("nbPiecesBien")?.value || '', // Champ non obligatoire
                        date_visite: document.getElementById("dateVisite")?.value || '', // Champ non obligatoire
                        client_id: clientID, // Utiliser l'ID récupéré lors de la création du client
                        meme_adresse_que_client: sameAdresseCheckbox.checked // Envoyer la valeur de la checkbox sameAdresse
                    };

                    console.log("Envoi du contrat au back : ", data);

                    const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats\`;

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Authorization': \`Bearer \${token}\`,  // Ajout du token ici
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => {
                        // Si le token est périmé ou invalide, renvoyer à la page de connexion
                        if (response.status === 401) {
                            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                            window.location.href = '/';
                            return Promise.reject("Unauthorized");
                        }

                        if (!response.ok) {
                            throw new Error(\`HTTP error! status: \${response.status}\`);
                        }
                        return response.json();
                    })
                    .then(responseData => {
                        const idContrat = responseData.id;
                        console.log("Contrat créé avec succès, ID : ", idContrat);

                        // Rediriger vers la page des détails du contrat
                        sessionStorage.setItem('message', JSON.stringify({ type: 'success', text: 'Contrat créé avec succès !' }));
                        window.location.href = \`/details-contrat?id=\${idContrat}\`;
                    })
                    .catch(error => {
                        console.error('Erreur lors de la création du contrat:', error);
                    });
                }

                // Attacher l'événement au bouton de création
                const boutonCreerContrat = document.getElementById("boutonCreerContrat");
                if (boutonCreerContrat) {
                    boutonCreerContrat.addEventListener("click", function(event) {
                        event.preventDefault();
                        // Vérifier les champs et si aucune erreur, envoyer les données au back
                        if (verifierChampsCreerContrat()) {
                            creerContrat();
                        }
                    });
                }
            }
        }

        // Fonction pour vérifier si la page "pageCreerContrat" est présente
        function checkPageCreerContrat() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");
            if (pageCreerContrat) {
                attachCreerContratEvents();
            }
        }

        // Appeler la fonction initialement
        checkPageCreerContrat();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container35">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
(function() {
    document.getElementById("boutonAnnuler").addEventListener("click", function() {
        window.location.reload();
    });

    document.getElementById("boutonAnnulerClient").addEventListener("click", function() {
        window.location.reload();
    });
})();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container37">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour attacher les événements lorsque la page est prête
        function attachRechercheClientEvents() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");

            if (pageCreerContrat && !pageCreerContrat.dataset.rechercheClientEventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les doublons
                pageCreerContrat.dataset.rechercheClientEventsAttached = 'true';

                const inputRechercheClient = document.getElementById("inputRechercheClient");

                if (inputRechercheClient) {
                    // Fonction principale pour afficher les clients
                    function afficherClients(chaineRecherche) {
                        // Récupérer le token depuis localStorage
                        const token = localStorage.getItem('jwtToken');

                        // Vérifier si le token existe
                        if (!token) {
                            sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                            window.location.href = '/';
                            return;
                        }

                        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/recherche?requete=\${chaineRecherche}\`;

                        fetch(url, {
                            method: 'GET',
                            headers: {
                                'Authorization': \`Bearer \${token}\`,  // Ajout du token ici
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => {
                            // Si le token est périmé ou invalide, renvoyer à la page de connexion
                            if (response.status === 401) {
                                sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                                window.location.href = '/';
                                return Promise.reject("Unauthorized");
                            }

                            if (!response.ok) {
                                throw new Error(\`HTTP error! status: \${response.status}\`);
                            }
                            return response.json();
                        })
                        .then(clients => {
                            // Sélectionner la div où afficher les clients
                            const tableauListeClients = document.getElementById("tableauListeClients");

                            // Vider la liste précédente
                            tableauListeClients.innerHTML = '';

                            // Traiter chaque client et générer les lignes
                            clients.forEach(client => {
                                // Préparer l'adresse complète du client
                                let adresseComplete = '';
                                const villeMajuscule = client.ville.toUpperCase();

                                if (!client.complement_adresse) {
                                    adresseComplete = \`\${client.adresse} - \${client.code_postal} \${villeMajuscule}\`;
                                } else {
                                    adresseComplete = \`\${client.adresse}, \${client.complement_adresse} - \${client.code_postal} \${villeMajuscule}\`;
                                }

                                // Déterminer ce qu'il faut afficher dans cellule nomClient en fonction du type
                                let affichageClient = '';
                                if (client.type === 'PARTICULIER') {
                                    affichageClient = \`\${client.prenom} \${client.nom}\`;
                                } else if (client.type === 'PROFESSIONNEL') {
                                    affichageClient = client.raison_sociale || '';  // Afficher raison sociale pour les professionnels
                                }

                                // Créer la div pour chaque client
                                const ligneClient = document.createElement("div");
                                ligneClient.classList.add("hoverLigne", "ligneContrats", "flex");

                                // Créer la structure HTML pour chaque client
                                ligneClient.innerHTML = \`
                                    <div class="celluleLigneContrat celluleNomClient">
                                        <span class="texteligneContrats">\${affichageClient}</span>
                                    </div>
                                    <div class="celluleLigneContrat celluleAdresseClient">
                                        <span class="texteligneContrats">\${adresseComplete}</span>
                                    </div>
                                    <div class="celluleLigneContrat celluleEmailClient">
                                        <span class="texteligneContrats">\${client.email || ''}</span>
                                    </div>
                                \`;

                                // Ajouter un événement de clic sur chaque ligne de client
                                ligneClient.addEventListener("click", function() {
                                    // Stocker l'ID du client sélectionné dans un attribut de données
                                    pageCreerContrat.dataset.clientID = client.id;
                                    console.log("ID du client sélectionné :", client.id);

                                    // Affecter les valeurs du client aux champs correspondants
                                    document.getElementById("adresse1Client").value = client.adresse || '';
                                    console.log("Adresse du client :", client.adresse);
                                    document.getElementById("adresse2Client").value = client.complement_adresse || '';
                                    document.getElementById("CPClient").value = client.code_postal || '';
                                    document.getElementById("villeClient").value = client.ville || '';

                                    // Masquer infosClient et afficher infosBien et infosAdd avec transition
                                    const infosClient = document.getElementById("infosClient");
                                    const infosBien = document.getElementById("infosBien");
                                    const infosAdd = document.getElementById("infosAdd");

                                    infosClient.classList.add("hidden");
                                    infosBien.style.display = "block";
                                    infosAdd.style.display = "block";

                                    infosBien.classList.add("slide-in");
                                    infosAdd.classList.add("slide-in");

                                    setTimeout(() => {
                                        infosBien.classList.add("slide-inActive");
                                        infosAdd.classList.add("slide-inActive");
                                    }, 10);

                                    // Afficher la div boiteRappel
                                    const boiteRappel = document.getElementById("boiteRappel");
                                    if (boiteRappel) {
                                        boiteRappel.style.display = "block";

                                        // Insérer le texte dynamique dans la div boiteRappel
                                        boiteRappel.innerHTML = \`
                                            <span>
                                                Création d'un contrat pour <strong>\${client.prenom} \${client.nom}</strong>, \${client.adresse} - \${client.code_postal} \${client.ville}
                                            </span>
                                        \`;
                                    }
                                });

                                // Ajouter la ligne client dans la div principale
                                tableauListeClients.appendChild(ligneClient);
                            });

                            // Re-sélectionner toutes les lignes de client créées dynamiquement
                            const lignesClient = tableauListeClients.querySelectorAll(".hoverLigne");

                            // Réappliquer la classe pour forcer le rechargement du style
                            lignesClient.forEach((ligne) => {
                                ligne.classList.remove("hoverLigne");
                                ligne.classList.add("hoverLigne");
                            });
                        })
                        .catch(error => {
                            console.error('Erreur lors de la récupération des clients:', error);
                        });
                    }

                    // Ajouter un écouteur d'événement sur l'input
                    inputRechercheClient.addEventListener("input", function() {
                        const valeurRecherche = inputRechercheClient.value.trim();

                        // Si la chaîne a au moins 2 caractères, lancer la requête
                        if (valeurRecherche.length >= 2) {
                            afficherClients(valeurRecherche);
                        } else {
                            // Si la chaîne est trop courte, on vide la liste
                            document.getElementById("tableauListeClients").innerHTML = '';
                        }
                    });
                } else {
                    console.error("L'élément 'inputRechercheClient' est introuvable.");
                }
            }
        }

        // Fonction pour vérifier si la page "pageCreerContrat" est présente
        function checkPageCreerContrat() {
            const pageCreerContrat = document.getElementById("pageCreerContrat");
            if (pageCreerContrat) {
                attachRechercheClientEvents();
            }
        }

        // Appeler la fonction initialement
        checkPageCreerContrat();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container39">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Première série d'adresses et de suggestions
        const adresseInput = document.getElementById('adresse1Client');
        const adresse2Input = document.getElementById('adresse2Client');
        const adresseSuggestions = document.getElementById('adresseSuggestions');
        const CPInput = document.getElementById('CPClient');
        const villeInput = document.getElementById('villeClient');

        // Deuxième série d'adresses et de suggestions
        const adresse1Bien = document.getElementById('adresse1Bien');
        const adresse2Bien = document.getElementById('adresse2Bien');
        const adresse2Suggestions = document.getElementById('adresse2Suggestions');
        const CPBien = document.getElementById('CPBien');
        const villeBien = document.getElementById('villeBien');

        // Fonction générique pour gérer les suggestions
        function handleSuggestions(inputField, suggestionList, CPField, villeField) {
            inputField.addEventListener('input', () => {
                const adresse = inputField.value;
                if (adresse.length > 3) {
                    fetch(\`https://api-adresse.data.gouv.fr/search/?q=\${encodeURIComponent(adresse)}&limit=10\`)
                        .then(response => response.json())
                        .then(data => {
                            suggestionList.innerHTML = ''; // Vider les suggestions précédentes

                            if (data.features.length > 0) {
                                suggestionList.style.display = 'block'; // Afficher la liste si des suggestions existent
                                data.features.forEach(feature => {
                                    const li = document.createElement('li');
                                    li.textContent = feature.properties.label; // L'adresse suggérée
                                    li.addEventListener('click', () => {
                                        const adresseComplete = feature.properties; // Propriétés de l'adresse
                                        
                                        // Remplir les champs avec les attributs retournés
                                        inputField.value = adresseComplete.name || ''; // Nom complet de la voie ou lieu-dit
                                        CPField.value = adresseComplete.postcode || ''; // Code postal
                                        villeField.value = adresseComplete.city || ''; // Ville

                                        suggestionList.innerHTML = ''; // Masquer les suggestions
                                        suggestionList.style.display = 'none';
                                    });
                                    suggestionList.appendChild(li);
                                });
                            } else {
                                suggestionList.style.display = 'none'; // Masquer la liste s'il n'y a pas de suggestions
                            }
                        })
                        .catch(error => console.error('Erreur lors de la récupération des données :', error));
                } else {
                    suggestionList.style.display = 'none'; // Masquer la liste si moins de 3 caractères sont saisis
                }
            });

            // Masquer la liste quand on perd le focus
            inputField.addEventListener('blur', () => {
                setTimeout(() => {
                    suggestionList.style.display = 'none';
                }, 200); // Délai pour permettre le clic sur une suggestion
            });
        }

        // Appeler la fonction pour les deux séries de champs
        handleSuggestions(adresseInput, adresseSuggestions, CPInput, villeInput);
        handleSuggestions(adresse1Bien, adresse2Suggestions, CPBien, villeBien);
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="creer-contrat-container41">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction principale pour attacher les événements
        function attachClientInfoEvents() {
            // Vérifier si on est sur la page "pageDetailsContrat" ou "pageCreerContrat"
            const pageContrat = document.getElementById("pageDetailsContrat") || document.getElementById("pageCreerContrat");

            if (pageContrat && !pageContrat.dataset.clientInfoEventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les attachements multiples
                pageContrat.dataset.clientInfoEventsAttached = 'true';

                const particulierRadio = document.getElementById("particulier");
                const professionnelRadio = document.getElementById("professionnel");
                const infosClientPart = document.getElementById("infosClientPart");
                const infosClientPro = document.getElementById("infosClientPro");

                // Vérifier que les éléments existent avant de leur ajouter un listener
                if (particulierRadio && professionnelRadio && infosClientPart && infosClientPro) {

                    // Fonction pour afficher ou cacher les lignes en fonction de la sélection
                    function afficherInfosClient() {
                        if (particulierRadio.checked) {
                            infosClientPart.style.display = "flex";  // Afficher les informations du particulier
                            infosClientPro.style.display = "none";   // Cacher les informations du professionnel
                        } else if (professionnelRadio.checked) {
                            infosClientPart.style.display = "flex";  // Afficher les informations du particulier (si nécessaire)
                            infosClientPro.style.display = "flex";   // Afficher les informations du professionnel
                        }
                    }

                    // Ajouter les événements aux radios
                    particulierRadio.addEventListener("change", afficherInfosClient);
                    professionnelRadio.addEventListener("change", afficherInfosClient);

                    // Appeler la fonction une première fois au chargement de la page
                    afficherInfosClient();
                } else {
                    console.error("Élément(s) introuvable(s) pour la gestion du formulaire client.");
                }
            }
        }

        // Fonction pour vérifier si la page est présente et attacher les événements
        function checkAndAttachClientInfoEvents() {
            const pageContrat = document.getElementById("pageDetailsContrat") || document.getElementById("pageCreerContrat");
            if (pageContrat) {
                attachClientInfoEvents();
            }
        }

        // Appeler la fonction principale pour attacher les événements
        checkAndAttachClientInfoEvents();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default CreerContrat
