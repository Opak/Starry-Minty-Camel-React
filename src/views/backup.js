import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './backup.css'

const Backup = (props) => {
  return (
    <div className="backup-container10">
      <Helmet>
        <title>Backup - starsmanager_ui</title>
        <meta property="og:title" content="Backup - starsmanager_ui" />
      </Helmet>
      <div>
        <div className="backup-container12">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    function creerClient(String nom, String prenom, String adresse, String complementAdresse,
                              String codePostal, String ville, String telephone, String email,
                              String raisonSociale, String numSiret, String type) {
            
            const data = {
                nom: nom,
                prenom: prenom,
                adresse: adresse,
                complementAdresse: complementAdresse,
                codePostal: codePostal,
                ville: ville,
                telephone: telephone,
                email: email,
                raisonSociale: raisonSociale,
                numSiret: numSiret,
                type: type
            };
            
            console.log("Envoi de la réponse au back : " + data;

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients\`;            

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="backup-container14">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    function creerContrat() {
            
            const contrat = {                  
                adresse: "12 rue de la Paix",                
                complementAdresse: "Appartement 5B",         
                codePostal: "75001",                         
                ville: "Paris",                              
                siteWeb: "https://www.example.com",          
                nombrePieces: 3,                             
                client_id: "987e6543-e21a-43d3-a456-426614174abc"
            };
            
            console.log("Envoi du contrat au back : " + contrat); 

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats\`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="backup-container16">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
document.addEventListener("DOMContentLoaded", function() {
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
                    !errorContainer1.querySelector(".cp-client-error")) {
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

                // Supprimer les messages d'erreur existants pour l'email
                const existingEmailError = errorContainer.querySelector(".email-error");
                if (existingEmailError) existingEmailError.remove();

                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\$/;

                if (value === "") {
                    emailTextarea.classList.remove("na-value");
                } else if (emailRegex.test(value)) {
                    emailTextarea.classList.remove("na-value");
                    emailTextarea.value = value; // Supprimer les espaces restants après validation
                } else {
                    emailTextarea.classList.add("na-value");
                    const errorText = document.createElement("div");
                    errorText.textContent = "L'adresse email n'est pas valide";
                    errorText.classList.add("email-error");
                    errorText.style.color = "red";
                    errorText.style.padding = "8px";
                    errorContainer.appendChild(errorText);
                    errorContainer.style.display = "block";
                }
                checkErrors();
            }

            // Fonction de validation pour le téléphone
            function validateTel() {
                let value = telTextarea.value.split(' ').join('');

                // Supprimer les messages d'erreur existants pour le téléphone
                const existingTelError = errorContainer.querySelector(".tel-error");
                if (existingTelError) existingTelError.remove();

                if (value === "") {
                    telTextarea.classList.remove("na-value");
                } else if (/^0[0-9]{9}\$/.test(value)) {
                    telTextarea.classList.remove("na-value");

                    // Reformater le téléphone sous la forme "XX XX XX XX XX"
                    value = value.slice(0, 2) + ' ' + value.slice(2, 4) + ' ' + value.slice(4, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8);
                    telTextarea.value = value;

                } else {
                    telTextarea.classList.add("na-value");
                    const errorText = document.createElement("div");
                    errorText.textContent = "Le numéro de téléphone doit comporter 10 chiffres et commencer par 0";
                    errorText.classList.add("tel-error");
                    errorText.style.color = "red";
                    errorText.style.padding = "8px";
                    errorContainer.appendChild(errorText);
                    errorContainer.style.display = "block";
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
            if (nbPiecesBienTextarea) nbPiecesBienTextarea.addEventListener("blur", validateNbPieces);
            if (montantFactureTextarea) montantFactureTextarea.addEventListener("blur", validateMontantFacture);
            if (dateVisiteTextarea) dateVisiteTextarea.addEventListener("blur", validateDateVisite);
        }
    }

    // Appeler la fonction principale pour attacher les événements de validation
    attachValidationEvents();
});
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div
        id="tableauListeContrats"
        className="backup-tableau-contrats grilleDeControle firstContainer"
      >
        <div className="backup-titre-des-colonnes1 ligneTitreColonnesContrats">
          <div className="celluleNumContrat titreColonnesContrats">
            <span className="texteTitreColonnesContrats">
              Numéro de contrat
            </span>
          </div>
          <div className="celluleClient titreColonnesContrats">
            <span className="texteTitreColonnesContrats">
              <span>Client</span>
              <br></br>
            </span>
          </div>
          <div className="celluleAdresse titreColonnesContrats">
            <span className="texteTitreColonnesContrats">Adresse</span>
          </div>
          <div className="celluleDateCreation titreColonnesContrats">
            <span className="texteTitreColonnesContrats">Date de création</span>
          </div>
          <div className="celluleDateVisite titreColonnesContrats">
            <span className="backup-text106 texteTitreColonnesContrats">
              <span>Date de visite</span>
              <br></br>
            </span>
          </div>
          <div className="celluleStatutCont titreColonnesContrats">
            <span className="texteTitreColonnesContrats">Statut</span>
          </div>
        </div>
        <Link to="/details-contrat" className="backup-navlink1">
          <div className="hoverLigne ligneContrats">
            <div className="celluleLigneContrat celluleNumContrat">
              <span className="texteligneContrats">0000145824</span>
            </div>
            <div className="celluleClient celluleLigneContrat">
              <span className="texteligneContrats">
                <span>Roger Federer</span>
                <br></br>
              </span>
            </div>
            <div className="celluleLigneContrat celluleAdresse">
              <span className="texteligneContrats">
                18 allée du Gymnase - 13120 GARDANNE
              </span>
            </div>
            <div className="celluleDateCreation celluleLigneContrat">
              <span className="texteligneContrats">18/09/2024</span>
            </div>
            <div className="celluleLigneContrat celluleDateVisite">
              <span className="backup-text116 texteligneContrats">
                <span>28/09/2024</span>
                <br></br>
              </span>
            </div>
            <div className="celluleStatutCont celluleLigneContrat">
              <div className="texteligneContrats statut1">
                <div>
                  <div className="backup-container19">
                    <React.Fragment>
                      <i className="fa-regular fa-calendar-check" />
                    </React.Fragment>
                  </div>
                </div>
                <span>Visite programmée</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/details-contrat" className="backup-navlink2">
          <div className="backup-ligne12 hoverLigne ligneContrats">
            <div className="celluleLigneContrat celluleNumContrat">
              <span className="texteligneContrats">0000145824</span>
            </div>
            <div className="celluleClient celluleLigneContrat">
              <span className="texteligneContrats">
                <span>Roger Federer</span>
                <br></br>
              </span>
            </div>
            <div className="celluleLigneContrat celluleAdresse">
              <span className="texteligneContrats">
                18 allée du Gymnase - 13120 GARDANNE
              </span>
            </div>
            <div className="celluleDateCreation celluleLigneContrat">
              <span className="texteligneContrats">18/09/2024</span>
            </div>
            <div className="celluleLigneContrat celluleDateVisite">
              <span className="backup-text126 texteligneContrats">
                <span>28/09/2024</span>
                <br></br>
              </span>
            </div>
            <div className="celluleStatutCont celluleLigneContrat">
              <div className="statut2 texteligneContrats">
                <div>
                  <div className="backup-container22">
                    <React.Fragment>
                      <i className="fa-solid fa-pencil" />
                    </React.Fragment>
                  </div>
                </div>
                <span>A valider</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/details-contrat" className="backup-navlink3">
          <div className="backup-ligne13 hoverLigne ligneContrats">
            <div className="celluleLigneContrat celluleNumContrat">
              <span className="texteligneContrats">0000145824</span>
            </div>
            <div className="celluleClient celluleLigneContrat">
              <span className="texteligneContrats">
                <span>Roger Federer</span>
                <br></br>
              </span>
            </div>
            <div className="celluleLigneContrat celluleAdresse">
              <span className="texteligneContrats">
                18 allée du Gymnase - 13120 GARDANNE
              </span>
            </div>
            <div className="celluleDateCreation celluleLigneContrat">
              <span className="texteligneContrats">18/09/2024</span>
            </div>
            <div className="celluleLigneContrat celluleDateVisite">
              <span className="backup-text136 texteligneContrats">
                <span>28/09/2024</span>
                <br></br>
              </span>
            </div>
            <div className="celluleStatutCont celluleLigneContrat">
              <div className="statut3 texteligneContrats">
                <div>
                  <div className="backup-container25">
                    <React.Fragment>
                      <i className="fa-solid fa-magnifying-glass" />
                    </React.Fragment>
                  </div>
                </div>
                <span>En cours de validation</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/details-contrat" className="backup-navlink4">
          <div className="backup-ligne14 hoverLigne ligneContrats">
            <div className="celluleLigneContrat celluleNumContrat">
              <span className="texteligneContrats">0000145824</span>
            </div>
            <div className="celluleClient celluleLigneContrat">
              <span className="texteligneContrats">
                <span>Roger Federer</span>
                <br></br>
              </span>
            </div>
            <div className="celluleLigneContrat celluleAdresse">
              <span className="texteligneContrats">
                18 allée du Gymnase - 13120 GARDANNE
              </span>
            </div>
            <div className="celluleDateCreation celluleLigneContrat">
              <span className="texteligneContrats">18/09/2024</span>
            </div>
            <div className="celluleLigneContrat celluleDateVisite">
              <span className="backup-text146 texteligneContrats">
                <span>28/09/2024</span>
                <br></br>
              </span>
            </div>
            <div className="celluleStatutCont celluleLigneContrat">
              <div className="statut4 texteligneContrats">
                <div>
                  <div className="backup-container28">
                    <React.Fragment>
                      <i className="fa-regular fa-envelope" />
                    </React.Fragment>
                  </div>
                </div>
                <span>Documents à envoyer</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/details-contrat" className="backup-navlink5">
          <div className="backup-ligne15 hoverLigne ligneContrats">
            <div className="celluleLigneContrat celluleNumContrat">
              <span className="texteligneContrats">0000145824</span>
            </div>
            <div className="celluleClient celluleLigneContrat">
              <span className="texteligneContrats">
                <span>Roger Federer</span>
                <br></br>
              </span>
            </div>
            <div className="celluleLigneContrat celluleAdresse">
              <span className="texteligneContrats">
                18 allée du Gymnase - 13120 GARDANNE
              </span>
            </div>
            <div className="celluleDateCreation celluleLigneContrat">
              <span className="texteligneContrats">18/09/2024</span>
            </div>
            <div className="celluleLigneContrat celluleDateVisite">
              <span className="backup-text156 texteligneContrats">
                <span>28/09/2024</span>
                <br></br>
              </span>
            </div>
            <div className="celluleStatutCont celluleLigneContrat">
              <div className="texteligneContrats statut5">
                <div>
                  <div className="backup-container31">
                    <React.Fragment>
                      <i className="fa-regular fa-circle-check" />
                    </React.Fragment>
                  </div>
                </div>
                <span>Contrat clôturé</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="backup-grille-de-contrle10 mediumContainer grilleDeControle">
        <div className="ligneCommune titreColonnes">
          <div className="celluleNum cellule">
            <span className="texteTitreColonne">
              <span>N° du critère</span>
              <br></br>
            </span>
          </div>
          <div className="celluleTitreIntitule">
            <span className="backup-text163 texteTitreColonne">
              <span>Intitulé du critère</span>
              <br></br>
            </span>
          </div>
          <div className="cellule celluleStatut">
            <span className="texteTitreColonne">Statut du critère</span>
          </div>
          <div className="cellulePoints cellule">
            <span className="backup-text167 texteTitreColonne">
              <span>Points</span>
              <br></br>
            </span>
          </div>
          <div className="celluleValidation cellule">
            <span className="texteTitreColonne">Validation du critère</span>
          </div>
          <div className="cellule cellulePointsObtenus">
            <span className="texteTitreColonne">Points obtenus</span>
          </div>
          <div className="celluleTitreCommentaires cellule">
            <span className="texteTitreColonne">Commentaires</span>
          </div>
        </div>
        <div className="backup-ligne-titre-chapitre1 ligneCommune LigneTitreChapitre">
          <div className="cellulePreTitre cellule"></div>
          <div className="backup-container33 celluleTitre cellule">
            <span>Text</span>
          </div>
        </div>
        <div className="backup-ligne-sous-titre-chapitre11 ligneTitreSousChapitre ligneCommune">
          <div className="cellulePreTitre cellule"></div>
          <div className="backup-container35 celluleTitre cellule">
            <span>1.1 Aménagement général</span>
          </div>
        </div>
        <div className="backup-ligne-rubrique1 ligneTitreRubrique ligneCommune">
          <div className="cellulePreTitre cellule"></div>
          <div className="celluleTitre cellule">
            <span>Surfaces de l&apos;habitation</span>
          </div>
        </div>
        <div id="crit1" className="ligneCommune ligneGrille">
          <div className="celluleNum cellule">
            <span className="texteCellule">
              <span>1</span>
              <br></br>
            </span>
          </div>
          <div className="cellule celluleIntitule">
            <span>
              Surface totale minimum (cuisine et coin cuisine compris) du
              logement meublé hors salle d&apos;eau et toilettes
            </span>
          </div>
          <div className="cellule celluleStatut">
            <span className="critereObligatoire">x</span>
          </div>
          <div className="cellulePoints cellule">
            <span id="points1" className="backup-text178">
              <span>5</span>
              <br></br>
            </span>
          </div>
          <div className="celluleValidation cellule">
            <input type="radio" id="radio1-1" name="radio1" />
            <label htmlFor="radio1-1" className="optionRadio">
              Oui
            </label>
            <input type="radio" id="radio1-2" name="radio1" />
            <label htmlFor="radio1-2" className="optionRadio">
              Non
            </label>
            <input type="radio" id="radio1-3" name="radio1" />
            <label htmlFor="radio1-3" className="optionRadio">
              NA
            </label>
          </div>
          <div className="cellule cellulePointsObtenus">
            <span id="pointsObtenus1">5</span>
          </div>
          <div className="celluleCommentaire">
            <input type="text" id="commentaire1" />
          </div>
        </div>
      </div>
      <div>
        <div className="backup-container39">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
document.addEventListener("DOMContentLoaded", function() {
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

    // Validation pour la date de visite
    function validateDateVisite() {
        const dateVisiteTextarea = document.getElementById("dateVisiteContrat");
        const errorContainer3 = document.getElementById("ligneErreurs3");
        let value = dateVisiteTextarea.value.split(' ').join('');

        const existingError = errorContainer3.querySelector(".date-visite-error");
        if (existingError) existingError.remove();

        if (value === "") {
            dateVisiteTextarea.classList.remove("na-value");
            return true;
        } else if (new RegExp('^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])[0-9]{4}\$').test(value) || 
                   new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}\$').test(value)) {
            dateVisiteTextarea.classList.remove("na-value");
            if (!value.includes('/')) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4);
            }
            dateVisiteTextarea.value = value;
            return true;
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
        const dateVisiteTextarea = document.getElementById("dateVisite");

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
        if (dateVisiteTextarea) dateVisiteTextarea.addEventListener("blur", validateDateVisite);
    }

    // Gestion des contrats et clients
    function getContratIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get("id");
    }

    function fetchContratDetails() {
        const contratId = getContratIdFromUrl();
        if (!contratId) {
            console.error("ID du contrat non trouvé dans l'URL.");
            return;
        }

        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats/\${contratId}\`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
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

            attachBlurEventsToContractFields(contrat.id);
            fetchClientDetails(contrat.client_id);
        })
        .catch(error => {
            console.error('Erreur:', error.message);
            window.location.href = '/contrats?error=notFound';
        });
    }

    function attachBlurEventsToContractFields(contratID) {
        const contractFieldsWithValidation = {
            "CPBien": function() {
                return validateCP(document.getElementById("CPBien"), "cp-bien-error", "Le code postal doit comporter 5 chiffres", document.getElementById("ligneErreurs2"));
            },
            "nbPiecesBien": validateNbPieces,
            "montantFacture": validateMontantFacture,
            "dateVisiteContrat": validateDateVisite
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


    function updateContract(contratID) {
        const data = {
            adresse: document.getElementById("adresse1Bien")?.value || '',
            complement_adresse: document.getElementById("adresse2Bien")?.value || '',
            code_postal: document.getElementById("CPBien")?.value || '',
            ville: document.getElementById("villeBien")?.value || '',
            nombre_pieces: document.getElementById("nbPiecesBien")?.value || '',
            num_contrat: document.getElementById("numeroContrat")?.value || '',
            site_web: document.getElementById("siteWebBien")?.value || '',
            date_creation: document.getElementById("dateCreationContrat")?.value || '',
            date_visite: document.getElementById("dateVisiteContrat")?.value || ''
        };

        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats/\${contratID}\`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
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

    function fetchClientDetails(clientID) {
        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${clientID}\`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
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

            const particulierRadio = document.getElementById("particulier");
            const professionnelRadio = document.getElementById("professionnel");
            if (client.type === "PARTICULIER") {
                particulierRadio.checked = true;
            } else if (client.type === "PROFESSIONNEL") {
                professionnelRadio.checked = true;
            }

            attachBlurEventsToClientFields(client.id);
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
                        creerClient(clientID);
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
                    creerClient(clientID);  // Mise à jour directement
                });
            }
        });
    }

    function creerClient(clientID) {
        const statutParticulier = document.getElementById("particulier");
        const statutProfessionnel = document.getElementById("professionnel");

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
            type: statutParticulier.checked ? "PARTICULIER" : statutProfessionnel.checked ? "PROFESSIONNEL" : ''
        };

        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${clientID}\`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.json();
        })
        .then(() => {
            console.log("Client mis à jour avec succès.");
        })
        .catch(error => {
            console.error('Erreur lors de la mise à jour du client:', error);
        });
    }

    // Appel des fonctions principales
    attachValidationEvents();
    fetchContratDetails();
});
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="backup-container41">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    // Fonction pour récupérer les paramètres de la grille et les afficher
    function fetchGrilleParametres(idGrille) {
        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}\`;

        return fetch(url, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Données récupérées du back par UpdateParametres :', data);

            // Mettre à jour les éléments select et input en fonction des données récupérées
            const rapportProvisoire = data;

            if (rapportProvisoire) {
                // Mise à jour de select1 (type_habitation)
                const select1 = document.getElementById('select1');
                if (select1 && rapportProvisoire.type_habitation) {
                    if (rapportProvisoire.type_habitation === "INDIVIDUEL") {
                        select1.value = "1";
                    } else if (rapportProvisoire.type_habitation === "COLLECTIF") {
                        select1.value = "2";
                    } else {
                        select1.value = "NA";
                    }
                }

                // Mise à jour de select2 (étage)
                const select2 = document.getElementById('select2');
                if (select2 && rapportProvisoire.etage !== undefined) {
                    select2.value = rapportProvisoire.etage;
                }

                // Mise à jour de select3 (categorie_demandee)
                const select3 = document.getElementById('select3');
                if (select3 && rapportProvisoire.categorie_demandee) {
                    select3.value = rapportProvisoire.categorie_demandee.replace('*', '');
                }

                // Mise à jour de input0 (capacite_accueil)
                const input0 = document.getElementById('input0');
                if (input0 && rapportProvisoire.capacite_accueil !== undefined) {
                    input0.value = rapportProvisoire.capacite_accueil;
                }
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des paramètres :', error);
        });
    }

    // Fonction pour mettre à jour les paramètres de la grille
    function updateParametres(idGrille, key, value) {
        console.log(\`Mise à jour \${key} : \${value}\`);

        const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/\${key}/\${value}\`;

        return fetch(url, {
            method: 'PUT'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Réponse du back :', data);

            // Mise à jour des éléments de la réponse sur la page
            const rapportProvisoire = data.rapport_provisoire;
            for (const key in rapportProvisoire) {
                if (rapportProvisoire.hasOwnProperty(key)) {
                    const element = document.getElementById(key);
                    if (element) {
                        // Afficher "OUI" ou "NON" pour les booléens
                        if (key === "points_obligatoires_atteints" || key === "resultat") {
                            element.textContent = rapportProvisoire[key] ? "OUI" : "NON";
                        } else {
                            element.textContent = rapportProvisoire[key];
                        }
                    }
                }
            }

            // Désactiver les critères non applicables
            desactiverCriteresNonApplicables(data.criteres_non_applicables);

        })
        .catch(error => {
            console.error('Erreur :', error);
        });
    }

    // Fonction pour désactiver les critères non applicables
    function desactiverCriteresNonApplicables(criteres) {
        // Commence par réactiver tous les critères
        document.querySelectorAll('.ligneGrille').forEach(ligne => {
            ligne.classList.remove('ligneGrilleDesactivee');
        });

        // Désactive les critères non applicables
        criteres.forEach(critereNum => {
            const ligneCritere = document.getElementById(\`crit\${critereNum}\`);
            if (ligneCritere) {
                ligneCritere.classList.add('ligneGrilleDesactivee');
            }
        });
    }

    // Fonction pour extraire l'ID de la grille depuis l'URL
    function getGrilleIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id') || "codeForm"; // Valeur par défaut si l'ID n'est pas présent
    }

    // Ajoute les listeners aux différents éléments pour suivre les modifications et récupère les paramètres initiaux
    window.addEventListener('load', function() {
        const idGrille = getGrilleIdFromUrl(); // Extraire l'ID de la grille depuis l'URL

        // Récupérer les paramètres actuels de la grille et les afficher dans les champs correspondants
        fetchGrilleParametres(idGrille);

        // Listener pour select1
        const select1 = document.getElementById('select1');
        select1.addEventListener('change', function(event) {
            let typeHabitation = event.target.value;
            if (typeHabitation === "NA") typeHabitation = "NA";
            else if (typeHabitation === "1") typeHabitation = "INDIVIDUEL";
            else if (typeHabitation === "2") typeHabitation = "COLLECTIF";
            updateParametres(idGrille, "typeHabitation", typeHabitation);
        });

        // Listener pour select2
        const select2 = document.getElementById('select2');
        select2.addEventListener('change', function(event) {
            const etage = event.target.value;
            updateParametres(idGrille, "etage", etage);
        });

        // Listener pour select3
        const select3 = document.getElementById('select3');
        select3.addEventListener('change', function(event) {
            let classementDemande = event.target.value;
            if (classementDemande !== "NA") {
                classementDemande += "*";
            }
            updateParametres(idGrille, "classementDemande", classementDemande);
        });

        // Listener pour input0
        const input0 = document.getElementById('input0');
        input0.addEventListener('blur', function(event) {
            const capaciteAccueil = event.target.value;
            // Vérifier que la valeur respecte le format souhaité avant d'envoyer
            if (/^[1-9][0-9]*\$/.test(capaciteAccueil)) {
                updateParametres(idGrille, "capaciteAccueil", capaciteAccueil);
            }
        });
    });
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="backup-container43">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    document.addEventListener("DOMContentLoaded", function() {
        // Fonction principale pour afficher les contrats
        function afficherContrats() {
            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats\`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(contrats => {
                // Sélectionner la div où afficher les contrats
                const tableauListeContrats = document.getElementById("tableauListeContrats");

                // Créer un tableau de promesses pour récupérer les clients dans l'ordre
                const promesses = contrats.map(contrat => {
                    return fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${contrat.client_id}\`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(client => {
                        // Préparer l'adresse complète
                        let adresseComplete = '';
                        const villeMajuscule = contrat.ville.toUpperCase();

                        if (!contrat.complement_adresse) {
                            adresseComplete = \`\${contrat.adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                        } else {
                            adresseComplete = \`\${contrat.adresse}, \${contrat.complement_adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                        }

                        // Déterminer ce qu'il faut afficher dans celluleClient en fonction du type
                        let affichageClient = '';
                        if (client.type === 'PARTICULIER') {
                            affichageClient = \`\${client.prenom} \${client.nom}\`;
                        } else if (client.type === 'PROFESSIONNEL') {
                            affichageClient = client.raison_sociale || '';  // Afficher raison sociale pour les professionnels
                        }

                        // Créer la div pour chaque contrat
                        const ligneContrat = document.createElement("div");
                        ligneContrat.classList.add("hoverLigne", "ligneContrats", "flex");

                        // Créer la structure HTML pour chaque contrat et client
                        ligneContrat.innerHTML = \`
                            <div class="celluleLigneContrat celluleNumContrat">
                                <span class="texteligneContrats">\${contrat.num_contrat || ''}</span>
                            </div>
                            <div class="celluleLigneContrat celluleClient">
                                <span class="texteligneContrats">\${affichageClient}</span>
                            </div>
                            <div class="celluleLigneContrat celluleAdresse">
                                <span class="texteligneContrats">\${adresseComplete}</span>
                            </div>
                            <div class="celluleLigneContrat celluleDateCreation">
                                <span class="texteligneContrats">\${contrat.date_creation || ''}</span>
                            </div>
                            <div class="celluleLigneContrat celluleDateVisite">
                                <span class="texteligneContrats">\${contrat.date_visite || ''}</span>
                            </div>
                            <div class="celluleLigneContrat celluleStatutCont">
                                <span class="texteligneContrats">a coder</span>
                            </div>
                        \`;

                        // Créer l'élément <a> qui encapsule chaque div contrat
                        const lienContrat = document.createElement("a");
                        lienContrat.href = \`details-contrat?id=\${contrat.id}\`;
                        lienContrat.classList.add("contrats-link");

                        // Ajouter la div du contrat à l'élément <a>
                        lienContrat.appendChild(ligneContrat);

                        // Retourner l'élément <a> finalisé
                        return lienContrat;
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des données client:', error);
                        return null; // Gérer les erreurs en renvoyant null pour ignorer cette ligne
                    });
                });

                // Attendre que toutes les promesses soient résolues
                Promise.all(promesses).then(lignes => {
                    // Ajouter les éléments dans l'ordre des contrats
                    lignes.forEach(ligne => {
                        if (ligne) { // S'assurer que la ligne est valide
                            tableauListeContrats.appendChild(ligne);
                        }
                    });

                    // Re-sélectionner toutes les lignes de contrat créées dynamiquement
                    const lignesContrat = tableauListeContrats.querySelectorAll(".hoverLigne");

                    // Réappliquer la classe pour forcer le rechargement du style
                    lignesContrat.forEach((ligne) => {
                        ligne.classList.remove("hoverLigne");
                        ligne.classList.add("hoverLigne");
                    });
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des contrats:', error);
            });
        }

        // Utilisation du MutationObserver pour surveiller les changements dans le DOM
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const tableauListeContrats = document.getElementById("tableauListeContrats");
                    if (tableauListeContrats) {
                        // Exécuter afficherContrats une fois que la div tableauListeContrats est présente
                        afficherContrats();
                        // Arrêter d'observer une fois que la section est détectée
                        observer.disconnect();
                    }
                }
            });
        });

        // Configurer l'observation du body
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div id="docsContainer2" className="mainContainer--onglets">
        <div className="backup-tableau-documents-contrat mediumContainer firstContainer containerCentral">
          <div className="backup-documents-obligatoires1 ligneTitreSousChapitre sousTitreContainer">
            <span>Grille de contrôle</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="backup-actions10 actionDocumentContratGrille">
              <div
                id="boutonEditer"
                className="backup-bouton-bleu boutonActionGrille actionGrilleDeControle boutonBleu"
              >
                <span>
                  <span>Éditer</span>
                  <br></br>
                </span>
              </div>
              <div
                id="boutonReinitGrille"
                className="backup-bouton-rouge boutonActionGrille actionGrilleDeControle boutonRouge"
              >
                <span>
                  <span>Réinitialiser</span>
                  <br></br>
                </span>
              </div>
              <div
                id="boutonValidation"
                className="backup-bouton-vert boutonActionGrille actionGrilleDeControle boutonVert"
              >
                <span>
                  <span>Envoyer pour validation</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="backup-documents-obligatoires2 ligneTitreSousChapitre sousTitreContainer">
            <span>Documents contractuels</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-contrat-de-service3">
                <span>Contrat de service</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions11 actionDocumentContrat">
              <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Générer</span>
                  <br></br>
                </span>
              </div>
              <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Ajouter</span>
                  <br></br>
                </span>
              </div>
              <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
              <div className="boutonActionGrillePetit actionGrilleDeControle boutonRouge">
                <span>
                  <span>Supprimer</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle13">
                <span>Bordereau d&apos;exécution de mission</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions12 actionDocumentContrat">
              <div className="boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Générer</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-ajouter2 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Ajouter</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-telecharger2 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-supprimer2 boutonActionGrillePetit actionGrilleDeControle boutonRouge">
                <span>
                  <span>Supprimer</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle15">
                <span>Facture</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions13 actionDocumentContrat">
              <div className="backup-generer3 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Générer</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-telecharger3 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-supprimer3 boutonActionGrillePetit actionGrilleDeControle boutonRouge">
                <span>
                  <span>Supprimer</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="backup-documents-obligatoires3 ligneTitreSousChapitre sousTitreContainer">
            <span>Documents à remettre au client</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle18">
                <span>Grille de contrôle</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions14 actionDocumentContrat">
              <div className="backup-telecharger4 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-contrat-de-service6">
                <span>Rapport de contrôle</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions15 actionDocumentContrat">
              <div className="backup-telecharger5 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle20">
                <span>Décision de classement</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions16 actionDocumentContrat">
              <div className="backup-telecharger6 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle22">
                <span>Courrier</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions17 actionDocumentContrat">
              <div className="backup-telecharger7 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="backup-documents-obligatoires4 ligneTitreSousChapitre sousTitreContainer">
            <span>Justificatifs</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-grille-de-contrle25">
                <span>Justificatif 1</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions18 actionDocumentContrat">
              <div className="backup-telecharger8 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Télécharger</span>
                  <br></br>
                </span>
              </div>
              <div className="backup-supprimer4 boutonActionGrillePetit actionGrilleDeControle boutonRouge">
                <span>
                  <span>Supprimer</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="backup-contrat-de-service7 ligneBilanPoints">
            <div className="nomDocumentContrat">
              <span className="backup-contrat-de-service9">
                <span>Justificatif 2</span>
                <br></br>
              </span>
            </div>
            <div className="backup-actions19 actionDocumentContrat">
              <div className="backup-ajouter3 boutonActionGrillePetit actionGrilleDeControle boutonBleu">
                <span>
                  <span>Ajouter</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="backup-container45">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  (function() {
    const dlContratButton = document.getElementById("DLContrat");

    dlContratButton.addEventListener("click", function() {
      // Récupérer la valeur de idContrat dans l'URL
      const urlParams = new URLSearchParams(window.location.search);
      const idContrat = urlParams.get('id');

      // Vérifier que idContrat est bien présent
      if (!idContrat) {
        alert("L'identifiant du contrat est manquant dans l'URL.");
        return;
      }

      // Créer le corps de la requête
      const body = \`modele=contrat&idContrat=\${idContrat}\`;

      // Récupérer le token depuis localStorage
      const token = localStorage.getItem('jwtToken');

      // Vérifier si le token existe
      if (!token) {
        alert("Vous devez être connecté pour accéder à cette page.");
        window.location.href = '/';
        return;
      }

      // Envoyer la requête POST
      fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/documents/telecharger?\${body}\`, {
        method: 'GET',
        headers: {
          'Authorization': \`Bearer \${token}\`
        },
      })
      .then(response => {
          if (response.status === 401) {
              alert("Votre session a expiré, veuillez vous reconnecter.");
              window.location.href = '/';
              return Promise.reject("Unauthorized");
          } else if (response.ok) {
              const disposition = response.headers.get('Content-Disposition');
              let fileName = 'document'; // Valeur par défaut

              if (disposition && disposition.includes('filename=')) {
                  fileName = disposition.split('filename=')[1].split(';')[0].trim().replace(/['"]/g, '');
              }

              return response.blob().then(blob => ({ blob, fileName }));
          } else {
              throw new Error("Erreur lors du téléchargement");
          }
      })
      .then(({ blob, fileName }) => {
          
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName; // Utiliser la valeur extraite
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error("Erreur:", error));
    });
  })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div className="messageInspecteur">
        <span>Sélectionnez les éléments à corriger :</span>
      </div>
      <div className="backup-points-corriger2 messageInspecteur">
        <div className="listePointsACorriger">
          <div>
            <input
              type="checkbox"
              id="corrigerGrille"
              className="checkboxValidationDossier"
            />
          </div>
          <label htmlFor="corrigerGrille">Grille de contrôle</label>
        </div>
        <div className="listePointsACorriger">
          <div>
            <input
              type="checkbox"
              id="corrigerContrat"
              className="checkboxValidationDossier"
            />
          </div>
          <label htmlFor="corrigerContrat">Contrat de service</label>
        </div>
        <div className="listePointsACorriger">
          <div>
            <input
              type="checkbox"
              id="corrigerBordereau"
              className="checkboxValidationDossier"
            />
          </div>
          <label htmlFor="corrigerBordereau">Bordereau</label>
        </div>
        <div className="listePointsACorriger">
          <div>
            <input
              type="checkbox"
              id="corrigerJustificatifs"
              className="checkboxValidationDossier"
            />
          </div>
          <label htmlFor="corrigerJustificatifs">Justificatifs</label>
        </div>
      </div>
      <div>
        <div className="backup-container47">
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

                let grilleControleId = null;

                // Récupérer l'élément bouton et appeler la fonction pour le transformer en lien
                const boutonEditer = document.getElementById("boutonEditer");
                if (contrat.grille_controles && contrat.grille_controles.length > 0) {
                    grilleControleId = contrat.grille_controles[0].id;  // Exemple d'accès à l'ID de la grille de contrôle
                    mettreAJourBoutonEditer(boutonEditer, grilleControleId);
                }

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

                    // Transformer reinitGrille en lien comme boutonEditer
                    // mettreAJourBoutonEditer(reinitGrille, grilleControleId);

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
        <div className="backup-container49">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
// Fonction générique pour compter et afficher les critères non cochés
function compterEtAfficherCriteresNonValides(classeCritere, listeId) {
    // Récupération de tous les critères de la grille
    const criteres = document.querySelectorAll('.ligneGrille');
    const listeCriteresElement = document.getElementById(listeId);
    let criteresNonCoches = [];

    // Boucle à travers les critères
    criteres.forEach((critere) => {
        // Vérifier que le critère est actif (n'a pas la classe ligneGrilleDesactivee)
        if (!critere.classList.contains('ligneGrilleDesactivee')) {
            // Vérifier si le critère est de la classe demandée (obligatoire ou facultatif)
            const critereType = critere.querySelector(\`.\${classeCritere}\`);
            if (critereType) {
                // Récupérer le numéro du critère
                const critereNumero = critere.querySelector('.celluleNum span').innerText;

                // Vérifier si aucune balise radio n'est cochée
                const radios = critere.querySelectorAll('input[type="radio"]');
                const aucuneCochee = Array.from(radios).every(radio => !radio.checked);

                if (aucuneCochee) {
                    // Ajouter le critère à la liste des non cochés
                    criteresNonCoches.push(critereNumero);
                }
            }
        }
    });

    // Gestion de l'affichage de la liste
    if (listeCriteresElement) {
        // Vide la liste avant de la remplir, même si elle est vide
        listeCriteresElement.innerHTML = "";

        // Si la liste des critères est vide, ajouter un message "Aucun critère non validé"
        if (criteresNonCoches.length === 0) {
            const message = document.createElement("li");
            message.textContent = "Aucun critère non validé";
            listeCriteresElement.appendChild(message);
        } else {
            // Crée une entrée pour chaque critère non validé
            criteresNonCoches.forEach(critereNum => {
                // Créer un lien qui renvoie vers l'ancre du critère
                const lien = document.createElement("a");
                lien.href = \`#crit\${critereNum}\`;
                lien.textContent = \`Critère \${critereNum}\`;
                
                // Ajoute le lien à la liste
                const listItem = document.createElement("li");
                listItem.appendChild(lien);
                listeCriteresElement.appendChild(listItem);
            });
        }
    }
}

// Rendre la fonction accessible pour les deux types de critères
window.compterEtAfficherCriteresNonValides = compterEtAfficherCriteresNonValides;

// Appel des fonctions pour chaque type de critère au chargement de la grille
document.addEventListener("grilleRenderComplete", function() {
    compterEtAfficherCriteresNonValides('critereObligatoire', 'listeCriteresOaC'); // Critères obligatoires
    compterEtAfficherCriteresNonValides('critereFacultatif', 'listeCriteresAaC');  // Critères à la carte
});
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Backup
