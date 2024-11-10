import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MenuLatral from '../components/menu-latral'
import './valider-contrat.css'

const ValiderContrat = (props) => {
  return (
    <div id="pageValiderContrat" className="valider-contrat-container10">
      <Helmet>
        <title>Valider-Contrat - starsmanager_ui</title>
        <meta property="og:title" content="Valider-Contrat - starsmanager_ui" />
      </Helmet>
      <MenuLatral rootClassName="menu-latralroot-class-name5"></MenuLatral>
      <div className="MainCadreOnglets">
        <div id="ongletDocuments" className="cadreOnglet actif">
          <h1 className="texteOnglet">Vérification des documents</h1>
        </div>
        <div id="ongletInfos" className="cadreOnglet">
          <h1 className="texteOnglet">Informations contrat</h1>
        </div>
      </div>
      <div className="header--onglets header">
        <div className="valider-contrat-titre3 cadreTitreHeader">
          <h1 id="nomContrat" className="texteTitreHeader">
             
          </h1>
        </div>
        <Link to="/contrats">
          <div className="valider-contrat-menu cadreMenuHeader">
            <div className="valider-contrat-action1 cadreActionMenuHeader">
              <span className="valider-contrat-retour-contrat texteOptionMenuHeader">
                Liste des contrats
              </span>
            </div>
            <div className="valider-contrat-container11 cadreIconeMenuHeader">
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
      <div id="docsContainer" className="mainContainer--onglets">
        <div className="valider-contrat-tableau-documents-contrat mediumContainer firstContainer containerCentral">
          <div className="valider-contrat-documents-obligatoires ligneTitreSousChapitre sousTitreContainer">
            <span>Documents à vérifier</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="valider-contrat-contrat-de-service3">
                <span>Grille de contrôle</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-actions1 actionDocumentContrat">
              <div
                id="boutonEditer"
                className="valider-contrat-bouton-bleu boutonActionGrillePetit actionGrilleDeControle boutonBleu"
              >
                <span>
                  <span>Vérifier</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="valider-contrat-contrat-de-service6">
                <span>Contrat de service</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-actions2 actionDocumentContrat">
              <div
                id="voirContrat"
                className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
              >
                <span>
                  <span>Voir</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="valider-contrat-grille-de-contrle2">
                <span>Bordereau d&apos;exécution de mission</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-actions3 actionDocumentContrat">
              <div
                id="voirBordereau"
                className="boutonActionGrillePetit actionGrilleDeControle boutonBleu"
              >
                <span>
                  <span>Voir</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="valider-contrat-grille-de-contrle4">
                <span>Facture</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-actions4 actionDocumentContrat">
              <div
                id="voirFacture"
                className="valider-contrat-generer3 boutonActionGrillePetit actionGrilleDeControle boutonBleu"
              >
                <span>
                  <span>Voir</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="valider-contrat-grille-de-contrle5 ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="valider-contrat-grille-de-contrle7">
                <span>Justificatifs</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-actions5 actionDocumentContrat">
              <div className="valider-contrat-liste-docs divListeDocs">
                <ul id="docsJustificatifs" className="listeDocsUpload"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="valider-contrat-decision1 mediumContainer containerCentral">
          <div className="valider-contrat-decision2 ligneTitreSousChapitre sousTitreContainer">
            <span>Décision</span>
          </div>
          <div className="valider-contrat-options-de-decision ligneBilanPoints">
            <div className="valider-contrat-actions6 actionDocumentContratGrille">
              <div
                id="boutonValidationInit"
                className="valider-contrat-bouton-vert1 boutonActionGrille actionGrilleDeControle boutonVert"
              >
                <span>
                  <span>Valider le dossier</span>
                  <br></br>
                </span>
              </div>
              <div
                id="boutonCorrectionInit"
                className="valider-contrat-bouton-rouge1 boutonActionGrille actionGrilleDeControle boutonRouge"
              >
                <span>
                  <span>Demander des corrections</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div id="divValidation" className="toggle-div">
            <div className="messageInspecteur">
              <span>Ajouter un message à l&apos;inspecteur (optionnel):</span>
            </div>
            <div className="valider-contrat-message-pour-inspecteur3 messageInspecteur">
              <textarea
                id="messageValidation"
                placeholder="Remarques éventuelles :"
                className="textareaMessageInspecteur"
              ></textarea>
            </div>
            <div className="valider-contrat-points-corriger1 messageInspecteur">
              <div
                id="boutonValidation"
                className="valider-contrat-bouton-vert2 boutonActionGrille actionGrilleDeControle boutonVert"
              >
                <span>
                  <span>Valider le dossier</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div id="divCorrection" className="toggle-div">
            <div className="messageInspecteur">
              <span>Ajouter un message à l&apos;inspecteur :</span>
            </div>
            <div className="valider-contrat-message-pour-inspecteur6 messageInspecteur">
              <textarea
                id="messageCorrection"
                placeholder="Corrections à apporter :"
                className="textareaMessageInspecteur"
              ></textarea>
            </div>
            <div
              id="ligneErreurCorrection"
              className="ligneErreurCreatContrat ligneInfo"
            ></div>
            <div className="valider-contrat-points-corriger2 messageInspecteur">
              <div
                id="boutonCorrection"
                className="valider-contrat-bouton-rouge2 boutonActionGrille actionGrilleDeControle boutonRouge"
              >
                <span>Demander des corrections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="infosContainer"
        className="valider-contrat-infos mainContainer--onglets"
      >
        <div className="valider-contrat-informations-client mediumContainer firstContainer containerCentral">
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
            <div className="valider-contrat-partie210">
              <div className="valider-contrat-container12 radioContrat">
                <input
                  type="radio"
                  id="particulier"
                  name="statutProprietaire"
                  value="1"
                  disabled="true"
                  className="valider-contrat-radiobutton1"
                />
                <label htmlFor="particulier">
                  <span>Particulier</span>
                  <br></br>
                </label>
              </div>
              <div className="valider-contrat-container13 radioContrat">
                <input
                  type="radio"
                  id="professionnel"
                  name="statutProprietaire"
                  value="2"
                  disabled="true"
                  className="valider-contrat-radiobutton2"
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
            <div className="valider-contrat-partie211">
              <div className="radioContrat">
                <input
                  type="radio"
                  id="monsieur"
                  name="civilite"
                  value="Monsieur"
                  disabled="true"
                  className="valider-contrat-radiobutton3"
                />
                <label htmlFor="monsieur">
                  <span>Monsieur</span>
                  <br></br>
                </label>
              </div>
              <div className="valider-contrat-container15 radioContrat">
                <input
                  type="radio"
                  id="madame"
                  name="civilite"
                  value="Madame"
                  disabled="true"
                  className="valider-contrat-radio"
                />
                <label htmlFor="madame">
                  <span>Madame</span>
                  <br></br>
                </label>
              </div>
              <div className="valider-contrat-container16 radioContrat">
                <input
                  type="radio"
                  id="mademoiselle"
                  name="civilite"
                  value="Mademoiselle"
                  disabled="true"
                  className="valider-contrat-radiobutton4"
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
            <div className="valider-contrat-partie212 partieInfoContrat2">
              <textarea
                id="nomClient"
                rows="1"
                disabled="true"
                placeholder="Nom"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="partieInfoContrat3">
              <span className="texteInfoLogement1">Prénom</span>
            </div>
            <div className="valider-contrat-partie410 partieInfoContrat4">
              <textarea
                id="prenomClient"
                rows="1"
                disabled="true"
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
                disabled="true"
                placeholder="Raison sociale"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie311 partieInfoContrat3">
              <span className="texteInfoLogement1">SIRET</span>
            </div>
            <div className="partieInfoContrat4">
              <textarea
                id="SIRETClient"
                rows="1"
                disabled="true"
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
            <div className="valider-contrat-partie214 partieInfoContrat2">
              <textarea
                id="adresse1Client"
                rows="1"
                disabled="true"
                placeholder="Adresse"
                className="textareaContrat"
              ></textarea>
              <div>
                <div className="valider-contrat-container19">
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
            <div className="valider-contrat-partie312 partieInfoContrat3">
              <span className="texteInfoLogement1">Adresse (suite)</span>
            </div>
            <div className="partieInfoContrat4">
              <textarea
                id="adresse2Client"
                rows="1"
                disabled="true"
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
            <div className="valider-contrat-partie215 partieInfoContrat2">
              <textarea
                id="CPClient"
                rows="1"
                disabled="true"
                placeholder="Code postal"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie313 partieInfoContrat3">
              <span className="texteInfoLogement1">Ville</span>
            </div>
            <div className="valider-contrat-partie413 partieInfoContrat4">
              <textarea
                id="villeClient"
                rows="1"
                disabled="true"
                placeholder="Ville"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="valider-contrat-ligne-infos-contact2 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Adresse email</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-partie216 partieInfoContrat2">
              <textarea
                id="emailClient"
                rows="1"
                disabled="true"
                placeholder="Adresse email"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie314 partieInfoContrat3">
              <span className="texteInfoLogement1">
                <span>Téléphone</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-partie414 partieInfoContrat4">
              <textarea
                id="telephoneClient"
                rows="1"
                disabled="true"
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
        <div className="valider-contrat-informations-meubl mediumContainer containerCentral">
          <div className="valider-contrat-titre-infos-logement2 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Informations du bien à classer
            </span>
          </div>
          <div className="ligneInfo">
            <div className="valider-contrat-partie117 partieInfoLogement1">
              <input type="checkbox" id="sameAdresse" disabled="true" />
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
            <div className="valider-contrat-partie217 partieInfoContrat2">
              <textarea
                id="adresse1Bien"
                rows="1"
                disabled="true"
                placeholder="Adresse"
                className="textareaContrat"
              ></textarea>
              <div>
                <div className="valider-contrat-container21">
                  <React.Fragment>
                    <ul id="adresse2Suggestions" className="suggestions" />
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className="valider-contrat-partie315 partieInfoContrat3">
              <span className="texteInfoLogement1">Adresse (suite)</span>
            </div>
            <div className="valider-contrat-partie415 partieInfoContrat4">
              <textarea
                id="adresse2Bien"
                rows="1"
                disabled="true"
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
            <div className="valider-contrat-partie218 partieInfoContrat2">
              <textarea
                id="CPBien"
                rows="1"
                disabled="true"
                placeholder="Code postal"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie316 partieInfoContrat3">
              <span className="texteInfoLogement1">Ville</span>
            </div>
            <div className="valider-contrat-partie416 partieInfoContrat4">
              <textarea
                id="villeBien"
                rows="1"
                disabled="true"
                placeholder="Ville"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div className="valider-contrat-ligne-infos-contact4 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Site web</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-partie219 partieInfoContrat2">
              <textarea
                id="siteWebBien"
                rows="1"
                disabled="true"
                placeholder="Site web"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie317 partieInfoContrat3">
              <span className="texteInfoLogement1">
                <span>Nombre de pièces</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-partie417 partieInfoContrat4">
              <textarea
                id="nbPiecesBien"
                rows="1"
                disabled="true"
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
        <div className="valider-contrat-informations-additionnelles mediumContainer containerCentral">
          <div className="valider-contrat-titre-infos-logement3 ligneTitreSousChapitre sousTitreContainer">
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
            <div className="valider-contrat-partie220 partieInfoContrat2">
              <textarea
                id="numeroContrat"
                rows="1"
                disabled="true"
                placeholder="Numéro de contrat"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie318 partieInfoContrat3">
              <span className="texteInfoLogement1">Date de création</span>
            </div>
            <div className="valider-contrat-partie418 partieInfoContrat4">
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
            <div className="valider-contrat-partie221 partieInfoContrat2">
              <textarea
                id="montantFacture"
                rows="1"
                disabled="true"
                placeholder="Montant facturé TTC"
                className="textareaContrat"
              ></textarea>
            </div>
            <div className="valider-contrat-partie319 partieInfoContrat3">
              <span className="texteInfoLogement1">Mode de règlement</span>
            </div>
            <div className="valider-contrat-partie419 partieInfoContrat4">
              <select id="modeReglement" disabled="true" className="select1">
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
          <div className="valider-contrat-ligne-infos-adresse24 ligneInfo">
            <div className="partieInfoContrat1">
              <span className="texteInfoLogement1">
                <span>Date de visite</span>
                <br></br>
              </span>
            </div>
            <div className="valider-contrat-partie222 partieInfoContrat2">
              <input
                type="text"
                id="dateVisiteContrat"
                disabled="true"
                placeholder="Date de visite"
                className="textareaContrat"
              />
              <div>
                <div className="valider-contrat-container23">
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
            <div className="valider-contrat-partie320 partieInfoContrat3">
              <span className="texteInfoLogement1">Inspecteur</span>
            </div>
            <div className="valider-contrat-partie420 partieInfoContrat4">
              <textarea
                id="nomInspecteur"
                rows="1"
                disabled="true"
                placeholder="Nom inspecteur"
                className="textareaContrat"
              ></textarea>
            </div>
          </div>
          <div
            id="ligneErreurs3"
            className="ligneErreurCreatContrat ligneInfo"
          ></div>
        </div>
      </div>
      <div id="popupValidation" className="popup">
        <div className="lignePopup">
          <span className="titrePopup">
            Envoyer la grille pour validation ?
          </span>
        </div>
        <div className="valider-contrat-avertissement lignePopup">
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
      <div id="overlay" className="valider-contrat-overlay overlay"></div>
      <div>
        <div className="valider-contrat-container27">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Gestion des contrats et clients
        window.getContratIdFromUrl = function() {
            const params = new URLSearchParams(window.location.search);
            return params.get("id");
        }

        let currentStatut = ''; // Variable globale pour stocker le statut du contrat

        function fetchContratDetails() {
            const contratId = getContratIdFromUrl();
            const boutonEditer = document.getElementById("boutonEditer");
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
                    throw new Error("Contrat introuvable");
                }
                return response.json();
            })
            .then(contrat => {
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
                switch (contrat.statut) {
                    case 'Visite programmée':
                        classeStatut = 'statut1';
                        iconeStatut = '<i class="fa-regular fa-calendar-check"></i>';
                        break;
                    case 'A valider':
                        classeStatut = 'statut2';
                        iconeStatut = '<i class="fa-solid fa-pencil"></i>';
                        break;
                    case 'En cours de validation':
                        classeStatut = 'statut3';
                        iconeStatut = '<i class="fa-solid fa-magnifying-glass"></i>';
                        break;
                    case 'Documents à envoyer':
                        classeStatut = 'statut4';
                        iconeStatut = '<i class="fa-regular fa-envelope"></i>';
                        break;
                    case 'Contrat clôturé':
                        classeStatut = 'statut5';
                        iconeStatut = '<i class="fa-regular fa-circle-check"></i>';
                        break;
                    default:
                        classeStatut = '';
                        iconeStatut = '';
                }

                if (statutContratElement) {
                    statutContratElement.innerHTML = \`
                        <div class="texteligneContrats \${classeStatut}">
                            \${iconeStatut}
                            <span>\${contrat.statut || ''}</span>
                        </div>\`;
                }

                // Coche la checkbox sameAdresse si meme_adresse_que_client est true
                    const sameAdresseCheckbox = document.getElementById("sameAdresse");
                    if (contrat.meme_adresse_que_client) {
                        sameAdresseCheckbox.checked = true;
                    } else {
                        sameAdresseCheckbox.checked = false;
                    }

                // Récupérer l'élément bouton et appeler la fonction pour le transformer en lien
                const boutonEditer = document.getElementById("boutonEditer");
                if (contrat.grille_controles && contrat.grille_controles.length > 0) {
                    const grilleControleId = contrat.grille_controles[0].id;  // Exemple d'accès à l'ID de la grille de contrôle
                    mettreAJourBoutonEditer(boutonEditer, grilleControleId);
                }

                // Récupérer les détails du client
                fetchClientDetails(contrat.client_id);

                // Émettre un événement personnalisé après avoir rempli les données
                const event = new Event('dataLoaded');
                document.dispatchEvent(event);
            })

            .catch(error => {
                console.error('Erreur:', error.message);
                //window.location.href = '/contrats?error=notFound';
            });
        }

        // Fonction pour transformer la div bouton en lien et mettre à jour le href
        function mettreAJourBoutonEditer(boutonEditer, grilleControleId) {
            if (boutonEditer && grilleControleId) {
                const boutonLien = document.createElement('a');
                boutonLien.className = boutonEditer.className;
                boutonLien.href = \`/grille-de-controle?id=\${grilleControleId}\`;
                boutonLien.innerHTML = boutonEditer.innerHTML;
                boutonEditer.parentNode.replaceChild(boutonLien, boutonEditer);
            } else {
                console.warn("Élément boutonEditer ou grilleControleId manquant.");
            }
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

                const particulierRadio = document.getElementById("particulier");
                const professionnelRadio = document.getElementById("professionnel");
                if (client.type === "PARTICULIER") {
                    particulierRadio.checked = true;
                } else if (client.type === "PROFESSIONNEL") {
                    professionnelRadio.checked = true;
                }

                // Appeler la fonction pour afficher/cacher les informations selon le statut
                afficherInfosClient();

                // Émettre un événement personnalisé après avoir rempli les données
                const event2 = new Event('dataLoaded');
                document.dispatchEvent(event2);

            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données client:', error);
            });
        }

        // Appel des fonctions principales
        fetchContratDetails();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="valider-contrat-container29">
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

                const boutonValidation = document.getElementById("boutonValidation");
                const fermerPopupValidation = document.getElementById("fermerPopupValidation");
                const popupValidation = document.getElementById("popupValidation");

                const sameAdresseCheckbox = document.getElementById("sameAdresse");
                const popupSameAdresse = document.getElementById("popupSameAdresse");
                const boutonAnnulerSameAdresse = document.getElementById("boutonAnnulerSameAdresse");
                const boutonValiderSameAdresse = document.getElementById("boutonValiderSameAdresse");

                const adresse1Bien = document.getElementById("adresse1Bien");
                const adresse2Bien = document.getElementById("adresse2Bien");
                const CPBien = document.getElementById("CPBien");
                const villeBien = document.getElementById("villeBien");

                const overlay = document.getElementById("overlay");

                function ouvrirPopup(popup) {
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

                    boutonValidation.addEventListener("click", function() {
                        ouvrirPopup(popupValidation);
                    });

                    fermerPopupValidation.addEventListener("click", function() {
                        fermerPopup(popupValidation);
                    });

                    overlay.addEventListener("click", function() {
                        if (popupReinitGrille.style.display === "flex") {
                            fermerPopup(popupReinitGrille);
                        } else if (popupValidation.style.display === "flex") {
                            fermerPopup(popupValidation);
                        } else if (popupSameAdresse.style.display === "flex") {
                            fermerPopup(popupSameAdresse);
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
        <div className="valider-contrat-container31">
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
        <div className="valider-contrat-container33">
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
        <div className="valider-contrat-container35">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
(function() {
    // Ajout des écouteurs d'événements
    document.getElementById("boutonCorrection").addEventListener("click", function() {
        const messageInspecteur = document.getElementById("messageCorrection").value.trim();
        const ligneErreurCorrection = document.getElementById("ligneErreurCorrection");
        const checkboxes = [
            document.getElementById("corrigerGrille"),
            document.getElementById("corrigerContrat"),
            document.getElementById("corrigerBordereau"),
            document.getElementById("corrigerJustificatifs")
        ];

        // Initialisation des messages d'erreur
        let errorMessage = "";

        // Vérification du champ messageInspecteur
        if (messageInspecteur === "") {
            errorMessage += "Décrivez à l'inspecteur les corrections à apporter.<br>";
        }

        // Vérification des checkboxes
        const atLeastOneChecked = checkboxes.some(checkbox => checkbox.checked);
        if (!atLeastOneChecked) {
            errorMessage += "Sélectionnez au moins un point à corriger.";
        }

        // Affichage ou suppression du message d'erreur
        if (errorMessage !== "") {
            ligneErreurCorrection.style.display = "block";
            ligneErreurCorrection.innerHTML = \`<span style="color: red;">\${errorMessage}</span>\`;
        } else {
            ligneErreurCorrection.style.display = "none";
        }
    });

    // Gestion des boutons d'initialisation de validation et correction
    document.getElementById("boutonValidationInit").addEventListener("click", function() {
        const divValidation = document.getElementById("divValidation");
        const divCorrection = document.getElementById("divCorrection");
        expandDiv(divValidation);
        collapseDiv(divCorrection);
    });

    document.getElementById("boutonCorrectionInit").addEventListener("click", function() {
        const divValidation = document.getElementById("divValidation");
        const divCorrection = document.getElementById("divCorrection");
        expandDiv(divCorrection);
        collapseDiv(divValidation);
    });

    // Fonctions pour les transitions dynamiques
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

})();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="valider-contrat-container37">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function () {
    // Fonction générique pour ouvrir un document dans le navigateur sans téléchargement
    function openDocument(url, token) {
      fetch(url, {
        method: "GET",
        headers: {
          Authorization: \`Bearer \${token}\`
        }
      })
        .then((response) => response.ok ? response.text() : Promise.reject("Erreur lors de la génération du lien de visualisation"))
        .then((openLink) => {
          window.open(openLink, '_blank');
        })
        .catch((error) => console.error("Erreur:", error));
    }


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
          }
        })
        .then((data) => {
          // Effacer le contenu existant
          document.getElementById("docsJustificatifs").innerHTML = "";

          // Ajouter les documents à l'emplacement approprié
          let contratLink = "";
          let bordereauLink = "";

          data.forEach((doc) => {
            if (!doc.nom_modele) {
              const listItem = document.createElement("li");
              const link = document.createElement("a");

              link.href = "#";
              link.textContent = doc.nom;

              listItem.appendChild(link);

              // Gestion d'ouverture du document
              link.addEventListener("click", function (e) {
                e.preventDefault();
                openDocument(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${doc.id}/generer-lien\`, token);
              });

              document.getElementById("docsJustificatifs").appendChild(listItem);
            } else if (doc.nom_modele === "contrat") {
              contratLink = doc.id;
            } else if (doc.nom_modele === "bordereau") {
              bordereauLink = doc.id;
            }
          });

          // Ajouter les liens d'ouverture pour contrat et bordereau aux boutons appropriés
          document.getElementById("voirContrat").addEventListener("click", function () {
            if (contratLink) {
              openDocument(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${contratLink}/generer-lien\`, token);
            }
          });

          document.getElementById("voirBordereau").addEventListener("click", function () {
            if (bordereauLink) {
              openDocument(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${bordereauLink}/generer-lien\`, token);
            }
          });

          // Ajouter le lien d'ouverture pour la facture au bouton voirFacture
          document.getElementById("voirFacture").addEventListener("click", function () {
            fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/\${idContrat}/generer-lien?modele=facture\`, {
              method: "POST",
              headers: {
                Authorization: \`Bearer \${token}\`
              }
            })
              .then((response) => response.ok ? response.text() : Promise.reject("Erreur lors de la génération du lien de visualisation de la facture"))
              .then((openLink) => {
                const newWindow = window.open("", '_blank');
                newWindow.location.href = openLink;
              })
              .catch((error) => console.error("Erreur:", error));
          });
        })
        .catch((error) => console.error("Erreur:", error));
    }

    // Charger initialement les documents
    fetchAndDisplayDocuments();
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="valider-contrat-container39">
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

export default ValiderContrat
