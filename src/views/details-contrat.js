import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MenuLatral from '../components/menu-latral'
import './details-contrat.css'

const DetailsContrat = (props) => {
  return (
    <div id="pageDetailsContrat" className="details-contrat-container10">
      <Helmet>
        <title>Details-Contrat - starsmanager_ui</title>
        <meta property="og:title" content="Details-Contrat - starsmanager_ui" />
      </Helmet>
      <MenuLatral rootClassName="menu-latralroot-class-name2"></MenuLatral>
      <div className="MainCadreOnglets">
        <div id="ongletDocuments" className="cadreOnglet actif">
          <h1 className="texteOnglet">Workflow</h1>
        </div>
        <div id="ongletInfos" className="cadreOnglet">
          <h1 className="texteOnglet">Informations</h1>
        </div>
      </div>
      <div className="header--onglets header">
        <div className="details-contrat-titre3 cadreTitreHeader">
          <h1 id="nomContrat" className="texteTitreHeader">
             
          </h1>
        </div>
        <Link to="/contrats">
          <div className="details-contrat-menu cadreMenuHeader">
            <div className="details-contrat-action110 cadreActionMenuHeader">
              <span className="details-contrat-retour-contrat texteOptionMenuHeader">
                Liste des contrats
              </span>
            </div>
            <div className="details-contrat-container11 cadreIconeMenuHeader">
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
        id="infosContainer"
        className="details-contrat-infos mainContainer--onglets"
      >
        <div className="details-contrat-informations-client mediumContainer firstContainer containerCentral">
          <div className="ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">Informations client</span>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Statut</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie210">
              <div className="details-contrat-container12 radioContrat">
                <input
                  type="radio"
                  id="particulier"
                  name="statutProprietaire"
                  value="1"
                  className="details-contrat-radiobutton1"
                />
                <label htmlFor="particulier">
                  <span>Particulier</span>
                  <br></br>
                </label>
              </div>
              <div className="details-contrat-container13 radioContrat">
                <input
                  type="radio"
                  id="professionnel"
                  name="statutProprietaire"
                  value="2"
                  className="details-contrat-radiobutton2"
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
            <div className="details-contrat-partie211">
              <div className="radioContrat">
                <input
                  type="radio"
                  id="monsieur"
                  name="civilite"
                  value="Monsieur"
                  className="details-contrat-radiobutton3"
                />
                <label htmlFor="monsieur">
                  <span>Monsieur</span>
                  <br></br>
                </label>
              </div>
              <div className="details-contrat-container15 radioContrat">
                <input
                  type="radio"
                  id="madame"
                  name="civilite"
                  value="Madame"
                  className="details-contrat-radio"
                />
                <label htmlFor="madame">
                  <span>Madame</span>
                  <br></br>
                </label>
              </div>
              <div className="details-contrat-container16 radioContrat">
                <input
                  type="radio"
                  id="mademoiselle"
                  name="civilite"
                  value="Mademoiselle"
                  className="details-contrat-radiobutton4"
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
            <div className="details-contrat-partie212 partieInfoContrat2">
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
            <div className="details-contrat-partie410 partieInfoContrat4">
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
            <div className="details-contrat-partie311 partieInfoContrat3">
              <span className="texteInfoLogement1">SIRET</span>
            </div>
            <div className="partieInfoContrat4">
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
            <div className="details-contrat-partie214 partieInfoContrat2">
              <textarea
                id="adresse1Client"
                rows="1"
                placeholder="Adresse"
                className="textareaContrat"
              ></textarea>
              <div>
                <div className="details-contrat-container19">
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
            <div className="details-contrat-partie312 partieInfoContrat3">
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
            <div className="details-contrat-partie215 partieInfoContrat2">
              <textarea
                id="CPClient"
                rows="1"
                placeholder="Code postal"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie313 partieInfoContrat3">
              <span className="texteInfoLogement1">Ville</span>
            </div>
            <div className="details-contrat-partie413 partieInfoContrat4">
              <textarea
                id="villeClient"
                rows="1"
                placeholder="Ville"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="details-contrat-ligne-infos-contact1 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Adresse email</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie216 partieInfoContrat2">
              <textarea
                id="emailClient"
                rows="1"
                placeholder="Adresse email"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie314 partieInfoContrat3">
              <span className="texteInfoLogement1">
                <span>Téléphone</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie414 partieInfoContrat4">
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
        </div>
        <div className="details-contrat-informations-meubl mediumContainer containerCentral">
          <div className="details-contrat-titre-infos-logement2 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Informations du bien à classer
            </span>
          </div>
          <div className="ligneInfo">
            <div className="details-contrat-partie117 partieInfoLogement1">
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
            <div className="details-contrat-partie217 partieInfoContrat2">
              <textarea
                id="adresse1Bien"
                rows="1"
                placeholder="Adresse"
                className="textareaContrat"
              ></textarea>
              <div>
                <div className="details-contrat-container21">
                  <React.Fragment>
                    <ul id="adresse2Suggestions" className="suggestions" />
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className="details-contrat-partie315 partieInfoContrat3">
              <span className="texteInfoLogement1">Adresse (suite)</span>
            </div>
            <div className="details-contrat-partie415 partieInfoContrat4">
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
            <div className="details-contrat-partie218 partieInfoContrat2">
              <textarea
                id="CPBien"
                rows="1"
                placeholder="Code postal"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie316 partieInfoContrat3">
              <span className="texteInfoLogement1">Ville</span>
            </div>
            <div className="details-contrat-partie416 partieInfoContrat4">
              <textarea
                id="villeBien"
                rows="1"
                placeholder="Ville"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="details-contrat-ligne-infos-contact3 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Site web</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie219 partieInfoContrat2">
              <textarea
                id="siteWebBien"
                rows="1"
                placeholder="Site web"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie317 partieInfoContrat3">
              <span className="texteInfoLogement1">
                <span>Nombre de pièces</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie417 partieInfoContrat4">
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
        <div className="details-contrat-informations-additionnelles mediumContainer containerCentral">
          <div className="details-contrat-titre-infos-logement3 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              <span>Informations additionnelles</span>
              <br></br>
            </span>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>N° de contrat</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie220 partieInfoContrat2">
              <textarea
                id="numeroContrat"
                rows="1"
                disabled="true"
                placeholder="Numéro de contrat"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie318 partieInfoContrat3">
              <span className="texteInfoLogement1">Date de création</span>
            </div>
            <div className="details-contrat-partie418 partieInfoContrat4">
              <textarea
                id="dateCreationContrat"
                rows="1"
                disabled="true"
                placeholder="Date de création"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Montant facturé</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie221 partieInfoContrat2">
              <textarea
                id="montantFacture"
                rows="1"
                placeholder="Montant facturé TTC"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="details-contrat-partie319 partieInfoContrat3">
              <span className="texteInfoLogement1">Mode de règlement</span>
            </div>
            <div className="details-contrat-partie419 partieInfoContrat4">
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
          <div className="details-contrat-ligne-infos-adresse24 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Date de visite</span>
                <br></br>
              </span>
            </div>
            <div className="details-contrat-partie222 partieInfoContrat2">
              <input
                type="text"
                id="dateVisiteContrat"
                placeholder="Date de visite"
                className="textareaContrat"
              />
              <div>
                <div className="details-contrat-container23">
                  <React.Fragment>
                    <React.Fragment>
                      <Script>{`
  (function() {
    const dateVisiteInput = document.getElementById("dateVisiteContrat");

    // Vérifier si une valeur est déjà présente et l'utiliser comme valeur par défaut
    const defaultDate = dateVisiteInput.value || null;

    flatpickr("#dateVisiteContrat", {
      enableTime: true,           // Active la sélection de l'heure
      dateFormat: "d/m/Y H:i",    // Format de date et heure
      time_24hr: true,            // Format 24h
      minuteIncrement: 5,         // Incrémentation des minutes par 5
      defaultDate: defaultDate,   // Initialiser avec la valeur récupérée du back
      locale: "fr",               // Définit la langue en français
      onOpen: function(selectedDates, dateStr, instance) {
        const hourInput = instance.hourElement; // Sélectionne l'input pour les heures
        const minuteInput = instance.minuteElement; // Sélectionne l'input pour les minutes
        
        // Ajoute un listener sur le champ de l'heure
        hourInput.addEventListener('input', function() {
          if (hourInput.value.length === 2) { // Vérifie si deux chiffres ont été saisis
            minuteInput.focus(); // Transfère le focus au champ des minutes
          }
        });
      },
      onClose: function(selectedDates, dateStr, instance) {
        const contratId = getContratIdFromUrl();
        updateContract(contratId);  // Appeler la mise à jour du contrat quand le datepicker se ferme
      }
    });
  })();
`}</Script>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className="details-contrat-partie420 partieInfoContrat2">
              <div
                id="statutContrat"
                className="details-contrat-container24"
              ></div>
            </div>
          </div>
          <div
            id="ligneErreurs3"
            className="ligneErreurCreatContrat ligneInfo"
          ></div>
        </div>
      </div>
      <div
        id="docsContainer"
        className="details-contrat-workflow mainContainer--onglets"
      >
        <div className="details-contrat-liste-etapes mediumContainer firstContainer containerCentral">
          <div className="details-contrat-etape1">
            <div className="progressBar">
              <div className="cercleContainer">
                <div className="details-contrat-cercle1 etapeCompleted">
                  <div>
                    <div className="details-contrat-container27">
                      <React.Fragment>
                        <span style={{ fontSize: '30px', color: 'white' }}>
                          <i className="fa-regular fa-calendar-check" />
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ligneProgressBarBasOK"></div>
            </div>
            <div className="actionsEtape">
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>
                    Télécharger le contrat de service, le bordereau et la
                    facture
                  </span>
                </div>
                <div className="boutonAction">
                  <div
                    id="DLContrat"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Contrat</span>
                      <br></br>
                    </span>
                  </div>
                  <div
                    id="DLBordereau"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Bordereau</span>
                      <br></br>
                    </span>
                  </div>
                  <div
                    id="DLFacture"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Facture</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox1-1"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Envoyer les documents au client</span>
                </div>
                <div className="boutonAction"></div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox1-2"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="details-contrat-action113 actionEtape">
                <div className="intituleAction">
                  <span>
                    Uploader le contrat de service signé par le client
                  </span>
                </div>
                <div className="details-contrat-bouton12 boutonAction">
                  <div
                    id="ULContrat"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Uploader</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="divListeDocs">
                    <ul id="docsContrat" className="listeDocsUpload"></ul>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox1-3"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="details-contrat-etape2">
            <div className="progressBar">
              <div className="ligneProgressBarHautOK"></div>
              <div className="cercleContainer">
                <div className="details-contrat-cercle2 etapeCompleted">
                  <div>
                    <div className="details-contrat-container30">
                      <React.Fragment>
                        <span style={{ fontSize: '30px', color: 'white' }}>
                          <i className="fa-solid fa-pencil" />
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ligneProgressBarBasEnCours"></div>
            </div>
            <div className="actionsEtape">
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Remplir la grille de contrôle</span>
                </div>
                <div className="boutonAction">
                  <div
                    id="boutonEditer"
                    className="details-contrat-bouton-bleu boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Éditer</span>
                      <br></br>
                    </span>
                  </div>
                  <div
                    id="boutonVerifier"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonVert"
                  >
                    <span>
                      <span>Vérifier</span>
                      <br></br>
                    </span>
                  </div>
                  <div
                    id="boutonReinitGrille"
                    className="details-contrat-bouton-rouge boutonActionGrillePetit actionGrilleDeControle boutonRouge"
                  >
                    <span>
                      <span>Réinitialiser</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox2-1"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="details-contrat-action115 actionEtape">
                <div className="intituleAction">
                  <span>
                    Uploader le bordereau d&apos;exécution de mission signé par
                    le client
                  </span>
                </div>
                <div className="details-contrat-bouton14 boutonAction">
                  <div
                    id="ULBordereau"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Uploader</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="details-contrat-liste-docs2 divListeDocs">
                    <ul id="docsBordereau" className="listeDocsUpload"></ul>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox2-2"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="details-contrat-intitul15 intituleAction">
                  <span>Uploader des justificatifs (optionnel)</span>
                </div>
                <div className="details-contrat-bouton15 boutonAction">
                  <div
                    id="ULJustificatif"
                    className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
                  >
                    <span>
                      <span>Uploader</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="divListeDocs">
                    <ul id="docsJustificatifs" className="listeDocsUpload"></ul>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox2-3"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Valider le dossier par le référent technique</span>
                </div>
                <div className="boutonAction">
                  <div
                    id="boutonValidation"
                    className="details-contrat-bouton-vert1 boutonActionGrillePetit actionGrilleDeControle boutonVert"
                  >
                    <span>
                      <span>Envoyer pour validation</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox2-4"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="details-contrat-etape3">
            <div className="progressBar">
              <div className="ligneProgressBarHautEnCours"></div>
              <div className="cercleContainer">
                <div className="details-contrat-cercle3 etapeEnCours">
                  <div>
                    <div className="details-contrat-container33">
                      <React.Fragment>
                        <span style={{ fontSize: '30px', color: 'black' }}>
                          <i className="fa-solid fa-magnifying-glass" />
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ligneProgressBarBas"></div>
            </div>
            <div className="actionsEtape">
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>En attente du retour du référent technique...</span>
                </div>
                <div className="boutonAction"></div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox3-1"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span className="details-contrat-text172">
                    Dossier validé
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="boutonAction"></div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox3-2"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span className="details-contrat-text173">
                    Corrections à apporter
                  </span>
                </div>
                <div className="boutonAction">
                  <div
                    id="boutonValidation2"
                    className="details-contrat-bouton-vert2 boutonActionGrillePetit actionGrilleDeControle boutonVert"
                  >
                    <span>
                      <span>Valider les corrections</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction"></div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Message du référent technique :</span>
                </div>
                <div className="boutonAction"></div>
              </div>
            </div>
          </div>
          <div className="details-contrat-etape4">
            <div className="progressBar">
              <div className="ligneProgressBarHaut"></div>
              <div className="cercleContainer">
                <div className="details-contrat-cercle4 etapeAVenir">
                  <div>
                    <div className="details-contrat-container36">
                      <React.Fragment>
                        <span style={{ fontSize: '30px', color: 'black' }}>
                          <i className="fa-regular fa-envelope" />
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ligneProgressBarBas"></div>
            </div>
            <div className="actionsEtape">
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Télécharger la grille et le rapport de contrôle</span>
                </div>
                <div className="boutonAction">
                  <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                    <span>
                      <span>Grille de contrôle</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                    <span>
                      <span>Rapport</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox4-1"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>
                    Télécharger la décision de classement et le courrier client
                  </span>
                </div>
                <div className="boutonAction">
                  <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                    <span>
                      <span>Décision</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                    <span>
                      <span>Courrier</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox4-2"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Envoyer les documents au client</span>
                </div>
                <div className="boutonAction"></div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox4-3"
                    className="checkboxWF"
                  />
                </div>
              </div>
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Clôturer le contrat</span>
                </div>
                <div className="boutonAction">
                  <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                    <span>
                      <span>Clôturer</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="checkboxAction">
                  <input
                    type="checkbox"
                    id="checkbox4-4"
                    disabled="true"
                    className="checkboxWF"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="details-contrat-etape5">
            <div className="progressBar">
              <div className="ligneProgressBarHaut"></div>
              <div className="cercleContainer">
                <div className="details-contrat-cercle5 etapeAVenir">
                  <div>
                    <div className="details-contrat-container39">
                      <React.Fragment>
                        <span style={{ fontSize: '30px', color: 'black' }}>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actionsEtape">
              <div className="actionEtape">
                <div className="intituleAction">
                  <span>Contrat clôturé</span>
                </div>
                <div className="boutonAction"></div>
                <div className="checkboxAction"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="boutonDeleteContrat"
          className="details-contrat-supprimer-contrat boutonActionGrillePetit actionGrilleDeControle boutonRouge"
        >
          <div>
            <div className="details-contrat-container41">
              <React.Fragment>
                <React.Fragment>
                  <span style={{ fontSize: '1em', color: 'white' }}>
                    <i className="fa-solid fa-trash" />
                  </span>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <span>
            <span>Supprimer le contrat</span>
            <br></br>
          </span>
        </div>
      </div>
      <div
        id="popupReinitGrille"
        className="details-contrat-popup-reinit-grille popup"
      >
        <div className="lignePopup">
          <span className="titrePopup">
            Êtes-vous sûr de vouloir réinitialiser la grille ?
          </span>
        </div>
        <div className="details-contrat-avertissement1 lignePopup">
          <span>
            <span>
              Toutes les données saisies seront perdues. Cette action est
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="details-contrat-text197">irréversible</span>
            <span>.</span>
          </span>
        </div>
        <div className="details-contrat-boutons-choix1 choixPopup lignePopup">
          <div
            id="fermerPopupReinit"
            className="boutonActionGrille actionGrilleDeControle boutonBleu"
          >
            <span>Annuler</span>
          </div>
          <div
            id="reinitGrille"
            className="boutonActionGrille actionGrilleDeControle boutonRouge"
          >
            <span>Réinitialiser la grille</span>
          </div>
        </div>
      </div>
      <div id="popupValidation" className="popup">
        <div className="lignePopup">
          <span className="titrePopup">
            Envoyer la grille pour validation ?
          </span>
        </div>
        <div className="details-contrat-avertissement2 lignePopup">
          <span>
            Vous ne pourrez plus effectuer de modifications sur le dossier.
          </span>
        </div>
        <div className="choixPopup lignePopup">
          <div
            id="fermerPopupValidation"
            className="boutonActionGrille actionGrilleDeControle boutonBleu"
          >
            <span>Annuler</span>
          </div>
          <div className="boutonActionGrille actionGrilleDeControle boutonVert">
            <span>Confirmer</span>
          </div>
        </div>
      </div>
      <div
        id="popupSameAdresse"
        className="details-contrat-popup-same-adresse popup"
      >
        <div className="lignePopup">
          <span className="titrePopup">Attention</span>
        </div>
        <div className="details-contrat-avertissement3 lignePopup">
          <span>
            L&apos;adresse actuellement renseignée pour le meublée sera perdue.
          </span>
        </div>
        <div className="details-contrat-boutons-choix3 choixPopup lignePopup">
          <div
            id="boutonAnnulerSameAdresse"
            className="boutonActionGrille actionGrilleDeControle boutonBleu"
          >
            <span>Annuler</span>
          </div>
          <div
            id="boutonValiderSameAdresse"
            className="details-contrat-container47 boutonActionGrille actionGrilleDeControle boutonVert"
          >
            <span>Confirmer</span>
          </div>
        </div>
      </div>
      <div
        id="popupEditionGrille"
        className="details-contrat-popup-edition-grille popup"
      >
        <div className="lignePopup">
          <span className="titrePopup">Attention</span>
        </div>
        <div className="details-contrat-avertissement4 lignePopup">
          <span id="messagePopupEditionGrille">Text</span>
        </div>
        <div className="details-contrat-boutons-choix4 choixPopup lignePopup">
          <div
            id="fermerPopupEditionGrille"
            className="boutonActionGrille actionGrilleDeControle boutonBleu"
          >
            <span>Annuler</span>
          </div>
          <div
            id="validerEditionGrille"
            className="details-contrat-container49 boutonActionGrille actionGrilleDeControle boutonVert"
          >
            <span>Confirmer</span>
          </div>
        </div>
      </div>
      <div id="popupDeleteContrat" className="popup">
        <div className="lignePopup">
          <span className="titrePopup">
            Êtes-vous sûr de vouloir supprimer le contrat ?
          </span>
        </div>
        <div className="details-contrat-avertissement5 lignePopup">
          <span>
            <span>
              Toutes les données et documents seront perdus. Cette action est
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="details-contrat-text208">irréversible</span>
            <span>.</span>
          </span>
        </div>
        <div className="details-contrat-boutons-choix5 choixPopup lignePopup">
          <div
            id="fermerPopupDeleteContrat"
            className="boutonActionGrille actionGrilleDeControle boutonBleu"
          >
            <span>Annuler</span>
          </div>
          <div
            id="validerDeleteContrat"
            className="boutonActionGrille actionGrilleDeControle boutonRouge"
          >
            <span>Supprimer le contrat</span>
          </div>
        </div>
      </div>
      <div id="overlay" className="details-contrat-overlay overlay"></div>
      <div>
        <div className="details-contrat-container53">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Définir toutes les fonctions de validation
        function validateSiret() {
            const siretTextarea = document.getElementById("SIRETClient");
            const errorContainer1 = document.getElementById("ligneErreurs1");
            let value = siretTextarea.value.split(' ').join('');

            const existingSiretError = errorContainer1.querySelector(".siret-error");
            if (existingSiretError) existingSiretError.remove();

            if (value === "") {
                siretTextarea.classList.remove("na-value");
                return true;
            } else if (/^(?:[0-9] *){14}\$/.test(value)) {
                siretTextarea.classList.remove("na-value");
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9) + ' ' + value.slice(9);
                siretTextarea.value = value;
                return true;
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

        function validateCP(textarea, errorClass, errorMessage, container) {
            const value = textarea.value.split(' ').join('');

            const existingCPError = container.querySelector(\`.\${errorClass}\`);
            if (existingCPError) existingCPError.remove();

            if (value === "") {
                textarea.classList.remove("na-value");
                return true;
            } else if (/^[0-9]{5}\$/.test(value)) {
                textarea.classList.remove("na-value");
                textarea.value = value;
                return true;
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

        function validateEmail() {
            const emailTextarea = document.getElementById("emailClient");
            const errorContainer1 = document.getElementById("ligneErreurs1");
            let value = emailTextarea.value.split(' ').join('');

            const existingEmailError = errorContainer1.querySelector(".email-error");
            if (existingEmailError) existingEmailError.remove();

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\$/;

            if (value === "") {
                emailTextarea.classList.remove("na-value");
                return true;
            } else if (emailRegex.test(value)) {
                emailTextarea.classList.remove("na-value");
                emailTextarea.value = value;
                return true;
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

        function validateTel() {
            const telTextarea = document.getElementById("telephoneClient");
            const errorContainer1 = document.getElementById("ligneErreurs1");
            let value = telTextarea.value.split(' ').join('');

            const existingTelError = errorContainer1.querySelector(".tel-error");
            if (existingTelError) existingTelError.remove();

            if (value === "") {
                telTextarea.classList.remove("na-value");
                return true;
            } else if (/^0[0-9]{9}\$/.test(value)) {
                telTextarea.classList.remove("na-value");
                value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8);
                telTextarea.value = value;
                return true;
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

        // Validation pour le nombre de pièces
        function validateNbPieces() {
            const nbPiecesBienTextarea = document.getElementById("nbPiecesBien");
            const errorContainer2 = document.getElementById("ligneErreurs2");
            let value = nbPiecesBienTextarea.value.split(' ').join('');

            const existingNbPiecesError = errorContainer2.querySelector(".nb-pieces-error");
            if (existingNbPiecesError) existingNbPiecesError.remove();

            if (value === "") {
                nbPiecesBienTextarea.classList.remove("na-value");
                return true;
            } else if (/^[0-9]+\$/.test(value)) {
                nbPiecesBienTextarea.classList.remove("na-value");
                nbPiecesBienTextarea.value = value;
                return true;
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

        // Validation pour le montant de la facture
        function validateMontantFacture() {
            const montantFactureTextarea = document.getElementById("montantFacture");
            const errorContainer3 = document.getElementById("ligneErreurs3");
            let value = montantFactureTextarea.value.split(' ').join('');

            const existingError = errorContainer3.querySelector(".montant-facture-error");
            if (existingError) existingError.remove();

            if (value === "") {
                montantFactureTextarea.classList.remove("na-value");
                return true;
            } else if (/^[0-9]+€?\$/.test(value)) {
                montantFactureTextarea.classList.remove("na-value");
                if (!value.endsWith('€')) {
                    montantFactureTextarea.value = value + '€';
                } else {
                    montantFactureTextarea.value = value;
                }
                return true;
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

        function checkErrors() {
            const errorContainer1 = document.getElementById("ligneErreurs1");
            const errorContainer2 = document.getElementById("ligneErreurs2");
            const errorContainer3 = document.getElementById("ligneErreurs3");

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

        // Attacher les événements de validation
        function attachValidationEvents() {
            const siretTextarea = document.getElementById("SIRETClient");
            const cpClientTextarea = document.getElementById("CPClient");
            const emailTextarea = document.getElementById("emailClient");
            const telTextarea = document.getElementById("telephoneClient");
            const cpBienTextarea = document.getElementById("CPBien");
            const nbPiecesBienTextarea = document.getElementById("nbPiecesBien");
            const montantFactureTextarea = document.getElementById("montantFacture");
            const dateVisiteTextarea = document.getElementById("dateVisiteContrat");

            if (siretTextarea) siretTextarea.addEventListener("blur", validateSiret);
            if (cpClientTextarea) cpClientTextarea.addEventListener("blur", function() {
                validateCP(cpClientTextarea, "cp-client-error", "Le code postal doit comporter 5 chiffres", document.getElementById("ligneErreurs1"));
            });
            if (cpBienTextarea) cpBienTextarea.addEventListener("blur", function() {
                validateCP(cpBienTextarea, "cp-bien-error", "Le code postal doit comporter 5 chiffres", document.getElementById("ligneErreurs2"));
            });
            if (emailTextarea) emailTextarea.addEventListener("blur", validateEmail);
            if (telTextarea) telTextarea.addEventListener("blur", validateTel);
            if (nbPiecesBienTextarea) nbPiecesBienTextarea.addEventListener("blur", validateNbPieces);
            if (montantFactureTextarea) montantFactureTextarea.addEventListener("blur", validateMontantFacture);
        }

        window.contrat = null; // Pour stocker l'objet contrat
        window.client = null;  // Pour stocker l'objet client

        // Gestion des contrats et clients
        window.getContratIdFromUrl = function() {
            const params = new URLSearchParams(window.location.search);
            return params.get("id");
        }

        let currentStatut = ''; // Variable globale pour stocker le statut du contrat

        function fetchContratDetails() {
            const contratId = getContratIdFromUrl();
            if (!contratId) {
                console.error("ID du contrat non trouvé dans l'URL.");
                return;
            }

            // Récupérer le token depuis localStorage
            const token = localStorage.getItem('jwtToken');

            // Vérifier si le token existe
            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats/\${contratId}\`;

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
                    sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Contrat introuvable' }));
                    window.location.href = '/contrats';
                }
                return response.json();
            })
            .then(contrat => {
                window.contrat = contrat; // Stocker l'objet contrat dans une variable globale
                console.log("Détails du contrat : ", contrat);
                document.getElementById("adresse1Bien").value = contrat.adresse || '';
                document.getElementById("CPBien").value = contrat.code_postal || '';
                document.getElementById("adresse2Bien").value = contrat.complement_adresse || '';
                document.getElementById("nbPiecesBien").value = contrat.nombre_pieces || '';
                document.getElementById("numeroContrat").value = contrat.num_contrat || '';
                document.getElementById("siteWebBien").value = contrat.site_web || '';
                document.getElementById("villeBien").value = contrat.ville || '';
                document.getElementById("dateCreationContrat").value = contrat.date_creation || '';
                document.getElementById("dateVisiteContrat").value = contrat.date_visite || '';
                currentStatut = contrat.statut || '';
                
                // Affichage du statut du contrat
                const statutContratElement = document.getElementById("statutContrat");
                let classeStatut = '';
                let iconeStatut = '';
                let texteStatut = '';

                switch (contrat.statut) {
                    case 'DEMANDE_RECUE':
                        classeStatut = 'statut0';
                        iconeStatut = '<i class="fa-regular fa-comment-dots"></i>';
                        texteStatut = 'Demande reçue';
                        break;
                    case 'VISITE_PROGRAMMEE':
                        classeStatut = 'statut1';
                        iconeStatut = '<i class="fa-regular fa-calendar-check"></i>';
                        texteStatut = 'Visite programmée';
                        break;
                    case 'VISITE_EFFECTUEE':
                        classeStatut = 'statut2';
                        iconeStatut = '<i class="fa-solid fa-pencil"></i>';
                        texteStatut = 'Visite effectuée';
                        break;
                    case 'EN_COURS_DE_VALIDATION':
                        classeStatut = 'statut3';
                        iconeStatut = '<i class="fa-solid fa-magnifying-glass"></i>';
                        texteStatut = 'En cours de validation';
                        break;
                    case 'DECISIONS_A_ENVOYER':
                        classeStatut = 'statut4';
                        iconeStatut = '<i class="fa-regular fa-envelope"></i>';
                        texteStatut = 'Décision à envoyer';
                        break;
                    case 'CONTRAT_CLOTURE':
                        classeStatut = 'statut5';
                        iconeStatut = '<i class="fa-regular fa-circle-check"></i>';
                        texteStatut = 'Contrat clôturé';
                        break;
                    default:
                        classeStatut = '';
                        iconeStatut = '';
                        texteStatut = 'Statut inconnu';
                }

                if (statutContratElement) {
                    statutContratElement.innerHTML = \`
                        <div class="texteligneContrats \${classeStatut}">
                            \${iconeStatut}
                            <span>\${texteStatut}</span>
                        </div>\`;
                }

                // Coche la checkbox sameAdresse si meme_adresse_que_client est true
                    const sameAdresseCheckbox = document.getElementById("sameAdresse");
                    if (contrat.meme_adresse_que_client) {
                        sameAdresseCheckbox.checked = true;
                    } else {
                        sameAdresseCheckbox.checked = false;
                    }

                let grilleControleId = null;

                // Fonction pour vérifier la grille de contrôle
                function verifierGrilleControle(grilleControleId) {
                    if (!grilleControleId) {
                        console.error("ID de la grille de contrôle manquant.");
                        return;
                    }

                    // Récupérer le token depuis localStorage
                    const token = localStorage.getItem('jwtToken');

                    // Vérifier si le token existe
                    if (!token) {
                        sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                        window.location.href = '/';
                        return;
                    }

                    const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${grilleControleId}/verifier\`;

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Authorization': \`Bearer \${token}\`,
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
                        return response.text();
                    })
                    .then(data => {
                        console.log("Réponse de la vérification de la grille de contrôle :", data);
                    })
                    .catch(error => {
                        console.error('Erreur lors de la vérification de la grille de contrôle:', error);
                    });
                }

                // Ajouter l'événement de clic pour le bouton "boutonVerifier"
                const boutonVerifier = document.getElementById("boutonVerifier");
                if (boutonVerifier && grilleControleId) {
                    boutonVerifier.addEventListener("click", function() {
                        verifierGrilleControle(grilleControleId);
                    });
                }

                // Gérer le bouton reinitGrille comme boutonEditer
                const reinitGrille = document.getElementById("reinitGrille");
                if (contrat.grille_controles && contrat.grille_controles.length > 0) {
                    const grilleControleId = contrat.grille_controles[0].id;

                    // Ajouter un événement pour le clic sur reinitGrille
                    reinitGrille.addEventListener("click", function(e) {
                        e.preventDefault();  // Empêcher la navigation immédiate
                        const urlDelete = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${grilleControleId}\`;
                        
                        // Envoyer la requête DELETE
                        fetch(urlDelete, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(() => {
                            showMessage("success", "Grille de contrôle réinitialisée avec succès.")
                            // Désactiver la redirection temporairement
                        })
                        .catch(error => {
                            showMessage("erreur", 'Erreur lors de la suppression de la grille de contrôle:');
                        });
                    });

                }

                attachBlurEventsToContractFields(contrat.id);

                // Attacher l'événement pour la checkbox sameAdresse
                sameAdresseCheckbox.addEventListener("change", function() {
                    updateContract(contrat.id); // Mise à jour du contrat que la checkbox soit cochée ou décochée
                });

                if (boutonValiderSameAdresse) {
                    boutonValiderSameAdresse.addEventListener("addressesSynchronized", function() {
                        updateContract(contratId);  // Appeler la mise à jour du contrat après la synchronisation des adresses
                    });
                }

                // Récupérer les détails du client
                fetchClientDetails(contrat.client_id);

                // Émettre un événement personnalisé après avoir rempli les données
                //const event = new Event('dataLoaded');
                //document.dispatchEvent(event);
            })

            

            .catch(error => {
                console.error('Erreur:', error.message);
                //window.location.href = '/contrats?error=notFound';
            });
        }

        function attachBlurEventsToContractFields(contratID) {
            const contractFieldsWithValidation = {
                "CPBien": function() {
                    return validateCP(document.getElementById("CPBien"), "cp-bien-error", "Le code postal doit comporter 5 chiffres", document.getElementById("ligneErreurs2"));
                },
                "nbPiecesBien": validateNbPieces,
                "montantFacture": validateMontantFacture,
                //"dateVisiteContrat": validateDateVisite
            };

            const contractFieldsNoValidation = [
                "adresse1Bien",
                "adresse2Bien",
                "numeroContrat",
                "siteWebBien",
                "villeBien",
                "dateCreationContrat"
            ];

            // Pour les champs avec validation
            for (const [fieldId, validateFunc] of Object.entries(contractFieldsWithValidation)) {
                const fieldElement = document.getElementById(fieldId);
                if (fieldElement) {
                    fieldElement.addEventListener("blur", function() {
                        if (validateFunc()) {
                            updateContract(contratID);
                        } else {
                            console.error(\`Validation échouée pour le champ \${fieldId}\`);
                        }
                    });
                }
            }

            // Pour les champs sans validation
            contractFieldsNoValidation.forEach(function(fieldId) {
                const fieldElement = document.getElementById(fieldId);
                if (fieldElement) {
                    fieldElement.addEventListener("blur", function() {
                        updateContract(contratID);  // Mise à jour directement
                    });
                }
            });
        }


        window.updateContract = function(contratID) {
            // Récupérer le token depuis localStorage
            const token = localStorage.getItem('jwtToken');

            // Vérifier si le token existe
            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));;
                window.location.href = '/';
                return;
            }

            const data = {
                adresse: document.getElementById("adresse1Bien")?.value || '',
                complement_adresse: document.getElementById("adresse2Bien")?.value || '',
                code_postal: document.getElementById("CPBien")?.value || '',
                ville: document.getElementById("villeBien")?.value || '',
                nombre_pieces: document.getElementById("nbPiecesBien")?.value || '',
                num_contrat: document.getElementById("numeroContrat")?.value || '',
                site_web: document.getElementById("siteWebBien")?.value || '',
                date_creation: document.getElementById("dateCreationContrat")?.value || '',
                date_visite: document.getElementById("dateVisiteContrat")?.value || '',
                meme_adresse_que_client: document.getElementById("sameAdresse").checked,  // Envoyer la valeur de la checkbox
                statut: currentStatut
            
            };

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats/\${contratID}\`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': \`Bearer \${token}\`,  // Ajout du token ici
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                // Gestion du cas où le token est invalide ou expiré (code 401)
                if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                    window.location.href = '/';
                    return Promise.reject("Unauthorized");  // On rejette la promesse pour arrêter l'exécution
                }
                
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                return response.json();
            })
            .then(() => {
                console.log("Contrat mis à jour avec succès.");
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour du contrat:', error);
            });
        }

        // Fonction pour gérer l'affichage des infos client en fonction du statut
        function afficherInfosClient() {
            const particulierRadio = document.getElementById("particulier");
            const professionnelRadio = document.getElementById("professionnel");
            const infosClientPart = document.getElementById("infosClientPart");
            const infosClientPro = document.getElementById("infosClientPro");

            if (particulierRadio && professionnelRadio && infosClientPart && infosClientPro) {
                if (particulierRadio.checked) {
                    infosClientPart.style.display = "flex";  // Afficher la ligne particulier
                    infosClientPro.style.display = "none";   // Cacher la ligne professionnel
                } else if (professionnelRadio.checked) {
                    infosClientPart.style.display = "flex";  // Laisser la ligne particulier
                    infosClientPro.style.display = "flex";   // Afficher la ligne professionnel
                }
            }
        }

        function fetchClientDetails(clientID) {
            // Récupérer le token depuis localStorage
            const token = localStorage.getItem('jwtToken');

            // Vérifier si le token existe
            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${clientID}\`;

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
                    throw new Error("Client introuvable");
                }
                return response.json();
            })
            .then(client => {
                window.client = client; // Stocker l'objet client dans une variable globale
                console.log("Détails du client : ", client);
                document.getElementById("nomClient").value = client.nom || '';
                document.getElementById("prenomClient").value = client.prenom || '';
                document.getElementById("adresse1Client").value = client.adresse || '';
                document.getElementById("adresse2Client").value = client.complement_adresse || '';
                document.getElementById("CPClient").value = client.code_postal || '';
                document.getElementById("villeClient").value = client.ville || '';
                document.getElementById("telephoneClient").value = client.telephone || '';
                document.getElementById("emailClient").value = client.email || '';
                document.getElementById("raisonSocialeClient").value = client.raison_sociale || '';
                document.getElementById("SIRETClient").value = client.num_siret || '';

                // Afficher la valeur correcte dans nomContrat en fonction du type de client
                const nomContratElement = document.getElementById("nomContrat");

                if (nomContratElement) {
                    if (client.type === "PROFESSIONNEL" && client.raison_sociale) {
                        nomContratElement.textContent = client.raison_sociale;  // Pour un professionnel, on affiche la raison sociale
                    } else if (client.type === "PARTICULIER" && client.prenom && client.nom) {
                        nomContratElement.textContent = \`\${client.prenom} \${client.nom}\`;  // Pour un particulier, on affiche prénom + nom
                    }
                } else {
                    console.error("Élément nomContrat non trouvé dans le DOM.");
                }

                // Afficher la civilité correcte
                if (client.civilite === "Madame") {
                    document.getElementById("madame").checked = true;
                } else if (client.civilite === "Monsieur") {
                    document.getElementById("monsieur").checked = true;
                } else if (client.civilite === "Mademoiselle") {
                    document.getElementById("mademoiselle").checked = true;
                }

                // Attacher les événements pour chaque radio civilité
                const radiosCivilite = document.querySelectorAll('input[name="civilite"]');
                radiosCivilite.forEach(radio => {
                    radio.addEventListener("change", function() {
                        updateClient(client.id); // Appeler la fonction de mise à jour du client quand la civilité change
                    });
                });

                const particulierRadio = document.getElementById("particulier");
                const professionnelRadio = document.getElementById("professionnel");
                if (client.type === "PARTICULIER") {
                    particulierRadio.checked = true;
                } else if (client.type === "PROFESSIONNEL") {
                    professionnelRadio.checked = true;
                }

                // Ajouter un événement pour envoyer une mise à jour lorsque le statut change
                particulierRadio.addEventListener("change", function() {
                    updateClient(client.id); // Appeler la fonction de mise à jour du client
                });

                professionnelRadio.addEventListener("change", function() {
                    updateClient(client.id); // Appeler la fonction de mise à jour du client
                });

                // Appeler la fonction pour afficher/cacher les informations selon le statut
                afficherInfosClient();

                attachBlurEventsToClientFields(client.id);

                // Émettre un événement personnalisé pour notifier que la mise à jour est terminée
                const sameAdresseCheckbox = document.getElementById("sameAdresse");
                const event = new Event('sameAdresseUpdated');
                sameAdresseCheckbox.dispatchEvent(event);

                // Émettre un événement personnalisé après avoir rempli les données
                const event2 = new Event('dataLoaded');
                document.dispatchEvent(event2);

            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données client:', error);
            });
        }

        function attachBlurEventsToClientFields(clientID) {
            const clientFieldsWithValidation = {
                "CPClient": function() {
                    return validateCP(document.getElementById("CPClient"), "cp-client-error", "Le code postal doit comporter 5 chiffres", document.getElementById("ligneErreurs1"));
                },
                "SIRETClient": validateSiret,
                "telephoneClient": validateTel,
                "emailClient": validateEmail
            };

            const clientFieldsNoValidation = [
                "nomClient",
                "prenomClient",
                "adresse1Client",
                "adresse2Client",
                "complementAdresseClient",
                "villeClient",
                "raisonSocialeClient"
            ];

            // Pour les champs avec validation
            for (const [fieldId, validateFunc] of Object.entries(clientFieldsWithValidation)) {
                const fieldElement = document.getElementById(fieldId);
                if (fieldElement) {
                    fieldElement.addEventListener("blur", function() {
                        if (validateFunc()) {
                            updateClient(clientID);
                        } else {
                            console.error(\`Validation échouée pour le champ \${fieldId}\`);
                        }
                    });
                }
            }

            // Pour les champs sans validation
            clientFieldsNoValidation.forEach(function(fieldId) {
                const fieldElement = document.getElementById(fieldId);
                if (fieldElement) {
                    fieldElement.addEventListener("blur", function() {
                        updateClient(clientID);  // Mise à jour directement
                    });
                }
            });
        }

        function updateClient(clientID) {
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
            const sameAdresseCheckbox = document.getElementById("sameAdresse");

            // Récupérer la valeur de la civilité
            const civilite = document.querySelector('input[name="civilite"]:checked')?.value || '';


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
                civilite: civilite // Ajout de la clé civilité
            };

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${clientID}\`;

            fetch(url, {
                method: 'PUT',
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
            .then(() => {
                console.log("Client mis à jour avec succès.");

                // Si la checkbox sameAdresse est cochée, on met aussi à jour le contrat
                if (sameAdresseCheckbox && sameAdresseCheckbox.checked) {
                    const contratId = getContratIdFromUrl();  // Récupérer l'ID du contrat actuel
                    updateContract(contratId);  // Mettre à jour le contrat
                }
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour du client:', error);
            });
        }

        // Appel des fonctions principales
        attachValidationEvents();
        fetchContratDetails();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container55">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction centrale pour rafraîchir les détails du contrat et du workflow
        function refreshWorkflow() {
            fetchWorkflowDetails(contrat.workflow_id);
        }

        // Fonction pour récupérer les détails du workflow et afficher dans la console
        function fetchWorkflowDetails(workflowId) {
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/workflows/\${workflowId}\`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': \`Bearer \${token}\`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                    window.location.href = '/';
                    return Promise.reject("Unauthorized");
                }

                if (!response.ok) {
                    throw new Error("Workflow introuvable");
                }
                return response.json();
            })
            .then(workflow => {
                console.log("Détails du workflow :", workflow);
                updateCheckboxes(workflow.etapes, workflow.id);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails du workflow:', error);
            });
        }

        function handleContratLoaded() {
            if (window.contrat && window.contrat.workflow_id) {
                fetchWorkflowDetails(window.contrat.workflow_id);
                document.removeEventListener('dataLoaded', handleContratLoaded);
            }
        }

        document.addEventListener('dataLoaded', handleContratLoaded);


        // Fonction pour mettre à jour les checkboxes en fonction des états du workflow
        function updateCheckboxes(etapes, workflowId) {
            const mapping = {
                "ETAPE1_TELECHARGER_DOCUMENTS": "checkbox1-1",
                "ETAPE1_ENVOYER_DOCUMENTS": "checkbox1-2",
                "ETAPE1_UPLOAD_CONTRAT_SIGNE": "checkbox1-3",
                "ETAPE2_UPLOAD_JUSTIFICATIFS": "checkbox2-3",
                "ETAPE2_VERIFIER_GRILLE": "checkbox2-1",
                "ETAPE2_UPLOAD_BORDEREAU": "checkbox2-2",
                "ETAPE3": "checkbox2-4"
            };

            etapes.forEach(etat => {
                const checkboxId = mapping[etat.nom];
                if (checkboxId) {
                    const checkbox = document.getElementById(checkboxId);
                    if (checkbox) {
                        // Cocher ou décocher en fonction de l'état terminé ou non
                        checkbox.checked = etat.terminee;
                    } else {
                        console.warn(\`Checkbox avec l'ID \${checkboxId} non trouvée pour l'étape \${etat.nom}\`);
                    }
                }
            });

            // Ajouter un event listener pour checkbox1-2
            const checkbox1_2 = document.getElementById("checkbox1-2");
            if (checkbox1_2) {
                checkbox1_2.addEventListener("change", function() {
                    if (checkbox1_2.checked) {
                        sendDocumentSentRequest(workflowId);
                    }
                });
            }
            window.dispatchEvent(new Event('MAJCheckbox')); // On surligne les lignes validées
        }

        // Fonction pour envoyer la requête POST lorsque checkbox1-2 est cochée
        function sendDocumentSentRequest(workflowId) {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                console.error("Jeton non disponible. Veuillez vous reconnecter.");
                return;
            }

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/workflows/\${workflowId}/documents-envoyes\`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': \`Bearer \${token}\`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi de la requête documents-envoyes");
                }
                console.log("Requête documents-envoyes envoyée avec succès.");
                triggerWorkflowUpdatedEvent(); // Déclencher l'événement personnalisé
            })
            .catch(error => {
                console.error("Erreur lors de l'envoi de la requête documents-envoyes :", error);
            });
        }

        // Fonction pour extraire l'ID du contrat depuis l'URL
        function getContratIdFromUrl() {
            const params = new URLSearchParams(window.location.search);
            return params.get("id");
        }

        // Ajouter un écouteur d'événement custom 'workflowUpdated'
        window.addEventListener('workflowUpdated', () => {
            refreshWorkflow();
        });
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container57">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour attacher les événements des popups
        function attachPopupEvents() {
            const pageDetailsContrat = document.getElementById("pageDetailsContrat");

            // Vérifier si nous sommes sur la page "pageDetailsContrat"
            if (pageDetailsContrat && !pageDetailsContrat.dataset.eventsAttached) {
                // Marquer que les événements ont été attachés pour éviter les doublons
                pageDetailsContrat.dataset.eventsAttached = 'true';

                const boutonReinitGrille = document.getElementById("boutonReinitGrille");
                const fermerPopupReinit = document.getElementById("fermerPopupReinit");
                const popupReinitGrille = document.getElementById("popupReinitGrille");
                const reinitGrille = document.getElementById("reinitGrille");

                const boutonValidation = document.getElementById("boutonValidation");
                const fermerPopupValidation = document.getElementById("fermerPopupValidation");
                const popupValidation = document.getElementById("popupValidation");

                const sameAdresseCheckbox = document.getElementById("sameAdresse");
                const popupSameAdresse = document.getElementById("popupSameAdresse");
                const boutonAnnulerSameAdresse = document.getElementById("boutonAnnulerSameAdresse");
                const boutonValiderSameAdresse = document.getElementById("boutonValiderSameAdresse");

                const fermerPopupEditionGrille = document.getElementById("fermerPopupEditionGrille");
                const popupEditionGrille = document.getElementById("popupEditionGrille");

                const boutonDeleteContrat = document.getElementById("boutonDeleteContrat");
                const fermerPopupDeleteContrat = document.getElementById("fermerPopupDeleteContrat");
                const popupDeleteContrat = document.getElementById("popupDeleteContrat");
                const validerDeleteContrat = document.getElementById("validerDeleteContrat");

                const adresse1Bien = document.getElementById("adresse1Bien");
                const adresse2Bien = document.getElementById("adresse2Bien");
                const CPBien = document.getElementById("CPBien");
                const villeBien = document.getElementById("villeBien");

                const overlay = document.getElementById("overlay");

                window.ouvrirPopup = function(popup) {
                    popup.style.display = "flex";
                    overlay.style.display = "block";
                }

                function fermerPopup(popup) {
                    popup.style.display = "none";
                    overlay.style.display = "none";
                }

                if (boutonReinitGrille && fermerPopupReinit && popupReinitGrille && boutonValidation && fermerPopupValidation && popupValidation && overlay) {
                    boutonReinitGrille.addEventListener("click", function() {
                        ouvrirPopup(popupReinitGrille);
                    });

                    fermerPopupReinit.addEventListener("click", function() {
                        fermerPopup(popupReinitGrille);
                    });

                    reinitGrille.addEventListener("click", function() {
                        fermerPopup(popupReinitGrille);
                    });

                    boutonValidation.addEventListener("click", function() {
                        ouvrirPopup(popupValidation);
                    });

                    fermerPopupValidation.addEventListener("click", function() {
                        fermerPopup(popupValidation);
                    });

                    fermerPopupEditionGrille.addEventListener("click", function() {
                        fermerPopup(popupEditionGrille);
                    });

                    boutonDeleteContrat.addEventListener("click", function() {
                        ouvrirPopup(popupDeleteContrat);
                    });

                    fermerPopupDeleteContrat.addEventListener("click", function() {
                        fermerPopup(popupDeleteContrat);
                    });

                    validerDeleteContrat.addEventListener("click", function() {
                        fermerPopup(popupDeleteContrat);
                    });

                    overlay.addEventListener("click", function() {
                        if (popupReinitGrille.style.display === "flex") {
                            fermerPopup(popupReinitGrille);
                        } else if (popupValidation.style.display === "flex") {
                            fermerPopup(popupValidation);
                        } else if (popupSameAdresse.style.display === "flex") {
                            fermerPopup(popupSameAdresse);
                        } else if (popupEditionGrille && popupEditionGrille.style.display === "flex") {
                            fermerPopup(popupEditionGrille);
                        } else if (popupDeleteContrat && popupDeleteContrat.style.display === "flex") {
                            fermerPopup(popupDeleteContrat);
                        }
                    });
                }

                // Gestion du popup pour sameAdresse
                if (sameAdresseCheckbox) {
                    sameAdresseCheckbox.addEventListener("change", function(e) {
                        if (sameAdresseCheckbox.checked && (
                            adresse1Bien.value !== "" ||
                            adresse2Bien.value !== "" ||
                            CPBien.value !== "" ||
                            villeBien.value !== ""
                        )) {
                            ouvrirPopup(popupSameAdresse);  // Ouvrir le popup
                            sameAdresseCheckbox.checked = false;
                        }
                    });
                }

                // Fermer le popupSameAdresse avec bouton "Annuler"
                if (boutonAnnulerSameAdresse) {
                    boutonAnnulerSameAdresse.addEventListener("click", function() {
                        fermerPopup(popupSameAdresse);
                    });
                }

                // Fermer le popup avec le bouton "Valider"
                if (boutonValiderSameAdresse) {
                    boutonValiderSameAdresse.addEventListener("click", function() {
                        fermerPopup(popupSameAdresse); // Fermer le popup quand on clique sur "Valider"
                    });
                }
            }
        }

        // Fonction pour vérifier si la page "pageDetailsContrat" est présente
        function checkPageDetailsContrat() {
            const pageDetailsContrat = document.getElementById("pageDetailsContrat");
            if (pageDetailsContrat) {
                attachPopupEvents();
            }
        }
        
        // Appeler initialement la fonction au cas où l'élément est déjà présent
        checkPageDetailsContrat();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container59">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function() {
    document.addEventListener("DOMContentLoaded", () => {
      const boutonEditer = document.getElementById("boutonEditer");
      const boutonValiderEditionGrille = document.getElementById("validerEditionGrille");
      const popupEditionGrille = document.getElementById("popupEditionGrille");
      const messagePopupEditionGrille = document.getElementById("messagePopupEditionGrille");
      
      if (boutonEditer) {
        boutonEditer.addEventListener("click", () => {
          const dateActuelle = new Date();
          if (!window.contrat || !window.contrat.date_visite) {
            console.error("La propriété 'date_visite' est manquante dans 'window.contrat'.");
            return;
          }
          const dateContrat = window.contrat.date_visite.split(" ")[0];

          // Format de la date actuelle en "JJ/MM/AAAA"
          const dateFormatee = \`\${String(dateActuelle.getDate()).padStart(2, "0")}/\${String(dateActuelle.getMonth() + 1).padStart(2, "0")}/\${dateActuelle.getFullYear()}\`;

          // Comparaison des dates
          if (dateFormatee === dateContrat) {
            console.log("La date actuelle correspond à la date de visite du contrat.");
            // Redirige vers la page /grille-de-controle avec l'ID approprié
            window.location.href = \`/grille-de-controle?id=\${window.contrat.grille_controles[0].id}\`;
          } else {
            console.log("La date actuelle ne correspond pas à la date de visite du contrat.");
            // Afficher le popup avec le message
            messagePopupEditionGrille.innerHTML = \`Vous allez éditer une grille pour une visite prévue le <strong>\${window.contrat.date_visite}</strong>.\`;
            window.ouvrirPopup(popupEditionGrille);
          }
        });
      } else {
        console.error("Le bouton 'boutonEditer' n'a pas été trouvé sur la page.");
      }

      if (boutonValiderEditionGrille) {
        boutonValiderEditionGrille.addEventListener("click", () => {
          // Redirige vers la page /grille-de-controle avec l'ID approprié
          window.location.href = \`/grille-de-controle?id=\${window.contrat.grille_controles[0].id}\`;
        });
      } else {
        console.error("Le bouton 'validerEditionGrille' n'a pas été trouvé sur la page.");
      }
    });
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container61">
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
      <div>
        <div className="details-contrat-container63">
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
        <div className="details-contrat-container65">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour mettre à jour la couleur de la ligne en fonction de l'état de la checkbox
        function updateLineColor(checkbox) {
            const ligne = checkbox.closest('.actionEtape'); // Récupérer la ligne parent
            if (checkbox.checked) {
                ligne.classList.add('ligneValidee'); // Ajouter la classe si cochée
            } else {
                ligne.classList.remove('ligneValidee'); // Retirer la classe si décochée
            }
        }

        // Parcours de toutes les checkboxes pour mettre à jour leur couleur et les masquer si nécessaire
        function updateAllCheckboxes() {
            document.querySelectorAll('.checkboxWF').forEach(function(checkbox) {
                updateLineColor(checkbox); // Met à jour la couleur de chaque ligne
                if (checkbox.disabled && !checkbox.checked) {
                    checkbox.style.display = 'none'; // Masquer la checkbox si elle est désactivée et non cochée
                } else {
                    checkbox.style.display = ''; // Afficher la checkbox dans les autres cas
                }
            });
        }

        // Ajout d'écouteurs de changement pour toutes les checkboxes pour mise à jour en temps réel
        document.querySelectorAll('.checkboxWF').forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                updateLineColor(checkbox); // Met à jour la couleur au changement manuel
                if (checkbox.disabled && !checkbox.checked) {
                    checkbox.style.display = 'none'; // Masquer la checkbox si elle est désactivée et non cochée
                } else {
                    checkbox.style.display = ''; // Afficher la checkbox dans les autres cas
                }
            });
        });

        // Écouteur global pour l'événement "MAJCheckbox" sur le document
        window.addEventListener('MAJCheckbox', function() {
            updateAllCheckboxes(); // Met à jour toutes les checkboxes quand l'événement est déclenché
        });

        // Initialisation au chargement de la page pour une vérification initiale
        updateAllCheckboxes();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container67">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function () {
    const downloadDocument = (modele) => {
      // Récupérer la valeur de idContrat dans l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const idContrat = urlParams.get("id");

      // Vérifier que idContrat est bien présent
      if (!idContrat) {
        alert("L'identifiant du contrat est manquant dans l'URL.");
        return;
      }

      // Récupérer le token depuis localStorage
      const token = localStorage.getItem("jwtToken");

      // Vérifier si le token existe
      if (!token) {
        sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
        window.location.href = "/";
        return;
      }

      // Envoyer la requête POST pour générer le lien de téléchargement
      fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${idContrat}/generer-lien?modele=\${modele}\`, {
        method: "POST",
        headers: {
          Authorization: \`Bearer \${token}\`, // Transmettre le token dans les en-têtes
          "Content-Type": "application/x-www-form-urlencoded", // Type de contenu
        },
      })
        .then((response) => {
          if (response.status === 401) {
            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
            window.location.href = "/";
            return Promise.reject("Unauthorized");
          } else if (response.ok) {
            return response.text(); // Récupérer la réponse comme texte (le lien)
          } else {
            throw new Error("Erreur lors de la génération du lien");
          }
        })
        .then((downloadLink) => {
          // Utiliser le lien reçu pour télécharger le fichier
          const a = document.createElement("a");
          a.href = downloadLink; // Utiliser le lien de téléchargement retourné par la requête POST
          a.setAttribute("download", ""); // Laisser le serveur gérer le nom du fichier via les en-têtes
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.dispatchEvent(new Event('workflowUpdated')); // Mettre à jour le workflow
        })
        .catch((error) => console.error("Erreur:", error));
    };

    // Attacher des événements de clic pour chaque bouton de téléchargement
    document.getElementById("DLContrat").addEventListener("click", function () {
      downloadDocument("contrat");
    });

    document.getElementById("DLBordereau").addEventListener("click", function () {
      downloadDocument("bordereau");
    });

    document.getElementById("DLFacture").addEventListener("click", function () {
      downloadDocument("facture");
    });
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container69">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function () {
    // Fonction générique pour l'upload de fichier
    function uploadFile(modele, urlSuffix, acceptTypes) {
      // Récupérer la valeur de idContrat dans l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const idContrat = urlParams.get("id");

      // Vérifier que idContrat est bien présent
      if (!idContrat) {
        showMessage("error", "L'identifiant du contrat est manquant dans l'URL.");
        return;
      }

      // Récupérer le token depuis localStorage
      const token = localStorage.getItem("jwtToken");

      // Vérifier si le token existe
      if (!token) {
        sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
        window.location.href = "/";
        return;
      }

      // Créer un input de fichier pour sélectionner le fichier
      const inputFile = document.createElement("input");
      inputFile.type = "file";
      inputFile.accept = acceptTypes; // Accepter les types de fichiers spécifiés

      // Simuler le clic sur l'input file pour sélectionner un fichier
      inputFile.click();

      // Quand un fichier est sélectionné
      inputFile.addEventListener("change", function () {
        const file = inputFile.files[0]; // Récupérer le fichier sélectionné

        if (!file) {
          showMessage("error", "Aucun fichier sélectionné.");
          return;
        }

        // Créer un objet FormData pour envoyer le fichier et les données associées
        const formData = new FormData();
        formData.append("modele", modele); // Ajouter "modele=contrat", "modele=bordereau", etc.
        formData.append("fichier", file, file.name); // Ajouter le fichier sélectionné

        // Envoyer la requête POST pour uploader le fichier
        fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${idContrat}/\${urlSuffix}\`, {
          method: "POST",
          headers: {
            Authorization: \`Bearer \${token}\`, // Transmettre le token dans les en-têtes
          },
          body: formData,
        })
          .then((response) => {
            if (response.status === 401) {
              sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
              window.location.href = "/";
              return Promise.reject("Unauthorized");
            } else if (response.ok) {
              showMessage('success', 'Le document a été uploadé avec succès !');

              // Envoi de l'événement personnalisé après l'upload réussi
              const uploadEvent = new CustomEvent("documentUploaded", { detail: { modele: modele } });
              window.dispatchEvent(uploadEvent); // Émettre l'événement
              window.dispatchEvent(new Event('workflowUpdated')); // On surligne les lignes validées

            } else {
              showMessage('error', "Une erreur est survenue lors de l'upload.");
            }
          })
          .catch((error) => console.error("Erreur:", error));
      });
    }

    // Ajout des événements click pour chaque bouton
    document.getElementById("ULContrat").addEventListener("click", function () {
      uploadFile("contrat", "upload", "application/pdf"); // URL d'upload pour les contrats, accepte seulement PDF
    });

    document.getElementById("ULBordereau").addEventListener("click", function () {
      uploadFile("bordereau", "upload", "application/pdf"); // URL d'upload pour les bordereaux, accepte seulement PDF
    });

    document.getElementById("ULJustificatif").addEventListener("click", function () {
      uploadFile("justificatif", "upload-divers", "application/pdf, image/jpeg, image/png"); // URL différente pour justificatifs, accepte PDF et images
    });
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container71">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function () {
    // Fonction pour récupérer et afficher les documents
    function fetchAndDisplayDocuments() {
      // Récupérer la valeur de idContrat dans l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const idContrat = urlParams.get("id");

      // Vérifier que idContrat est bien présent
      if (!idContrat) {
        console.error("L'identifiant du contrat est manquant dans l'URL.");
        return;
      }

      // Récupérer le token depuis localStorage
      const token = localStorage.getItem("jwtToken");

      // Vérifier si le token existe
      if (!token) {
        sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Vous devez être connecté pour accéder à cette page." }));
        window.location.href = "/"; // Rediriger l'utilisateur
        return;
      }

      // Effectuer la requête GET pour obtenir les documents
      fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${idContrat}\`, {
        method: "GET",
        headers: {
          Authorization: \`Bearer \${token}\`
        },
      })
        .then((response) => {
          if (response.status === 401) {
            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
            window.location.href = "/"; // Rediriger l'utilisateur
            return Promise.reject("Unauthorized");
          } else if (response.ok) {
            return response.json();
          } else {
            throw new Error("Erreur lors de la récupération des documents");
            showMessage("error", "Erreur lors de la récupération des documents");
          }
        })
        .then((data) => {
          //console.log(data);
          // Effacer le contenu existant
          document.getElementById("docsContrat").innerHTML = "";
          document.getElementById("docsBordereau").innerHTML = "";
          document.getElementById("docsJustificatifs").innerHTML = "";

          // Ajouter les documents à l'emplacement approprié
          data.forEach((doc) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            const icon = document.createElement("i");

            link.href = "#";
            link.textContent = doc.nom;
            icon.className = "fa-solid fa-trash deleteDoc";

            listItem.appendChild(link);
            listItem.appendChild(icon);

            // Gestion de suppression
            icon.addEventListener("click", function () {
              fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${doc.id}\`, {
                method: "DELETE",
                headers: {
                  Authorization: \`Bearer \${token}\`
                }
              })
                .then((response) => {
                  if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                    window.location.href = "/";
                    return Promise.reject("Unauthorized");
                  } else if (response.ok) {
                    listItem.remove(); // Retirer l'élément de la liste après suppression
                    showMessage("info", "Document supprimé.");
                    window.dispatchEvent(new Event('workflowUpdated')); // On surligne les lignes validées
                  } else {
                    console.error("Erreur lors de la suppression du document");
                    showMessage("error", "Erreur lors de la suppression du document.");
                  }
                });
            });

            // Gestion de téléchargement
            link.addEventListener("click", function (e) {
              e.preventDefault(); // Empêcher le comportement par défaut du lien

              fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${doc.id}/generer-lien\`, {
                method: "GET",
                headers: {
                  Authorization: \`Bearer \${token}\`
                }
              })
                .then((response) => {
                  if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                    window.location.href = "/";
                    return Promise.reject("Unauthorized");
                  } else if (response.ok) {
                    return response.text(); // Récupérer le lien de téléchargement en texte brut
                  } else {
                    throw new Error("Erreur lors de la génération du lien de téléchargement");
                    showMessage("error", "Erreur lors de la génération du lien de téléchargement");
                  }
                })
                .then((downloadLink) => {
                  // Utiliser le lien reçu pour télécharger le fichier dans un nouvel onglet
                  window.open(downloadLink, '_blank');
                })
                .catch((error) => console.error("Erreur:", error));
            });

            // Ajouter l'élément de document dans la liste appropriée
            if (doc.nom_modele === "contrat") {
              document.getElementById("docsContrat").appendChild(listItem);
            } else if (doc.nom_modele === "bordereau") {
              document.getElementById("docsBordereau").appendChild(listItem);
            } else if (!doc.nom_modele) {
              document.getElementById("docsJustificatifs").appendChild(listItem);
            }
          });
        })
        .catch((error) => console.error("Erreur:", error));
    }

    // Écouter l'événement "documentUploaded" pour actualiser la liste
    window.addEventListener("documentUploaded", function () {
      fetchAndDisplayDocuments(); // Actualiser la liste des documents
    });

    // Charger initialement les documents
    fetchAndDisplayDocuments();
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="details-contrat-container73">
          <React.Fragment>
            <Script>{`
    // Script pour la page Détails Contrat
    (function() {
        const ongletInfos = document.getElementById("ongletInfos");
        const ongletDocuments = document.getElementById("ongletDocuments");
        const infosContainer = document.getElementById("infosContainer");
        const docsContainer = document.getElementById("docsContainer");

        // Fonction pour changer d'onglet sur la page Détails Contrat
        function afficherInfos() {
            infosContainer.style.display = "flex";  // Afficher le contenu d'Infos
            docsContainer.style.display = "none";  // Cacher le contenu de Documents
            ongletInfos.classList.add("actif");
            ongletDocuments.classList.remove("actif");

            // Émettre un événement personnalisé après avoir rempli les données
            const event = new Event('dataLoaded');
            document.dispatchEvent(event);
        }

        function afficherDocuments() {
            infosContainer.style.display = "none";  // Cacher le contenu d'Infos
            docsContainer.style.display = "flex";  // Afficher le contenu de Documents
            ongletDocuments.classList.add("actif");
            ongletInfos.classList.remove("actif");
        }

        // Ajouter les écouteurs d'événements sur les onglets
        ongletInfos.addEventListener("click", afficherInfos);
        ongletDocuments.addEventListener("click", afficherDocuments);

        // Activer l'onglet Infos par défaut au chargement de la page
        afficherDocuments();
    })();
`}</Script>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default DetailsContrat
