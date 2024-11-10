import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MenuLatral from '../components/menu-latral'
import './validation.css'

const Validation = (props) => {
  return (
    <div id="pageValidation" className="validation-container1">
      <Helmet>
        <title>Validation - starsmanager_ui</title>
        <meta property="og:title" content="Validation - starsmanager_ui" />
      </Helmet>
      <MenuLatral rootClassName="menu-latralroot-class-name4"></MenuLatral>
      <div className="header">
        <div className="validation-titre1 cadreTitreHeader">
          <h1 className="texteTitreHeader">Validation dossiers</h1>
        </div>
        <div className="validation-menu">
          <Link to="/creer-contrat" className="validation-navlink">
            <div
              id="boutonNewContrat"
              className="cadreActionMenuHeader cadreMenuHeader"
            >
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
                <span className="texteOptionMenuHeader">Nouveau contrat</span>
              </div>
            </div>
          </Link>
          <div className="validation-barre-de-recherche">
            <input
              type="text"
              placeholder="Rechercher un contrat"
              className="validation-textinput barreRecherche select1"
            />
          </div>
        </div>
      </div>
      <div id="listeContainer" className="mainContainer">
        <div id="messageErreur" className="boxMessageErreur"></div>
        <div className="validation-tableau-contrats grilleDeControle firstContainer">
          <div className="validation-titre-des-colonnes ligneTitreColonnesContrats">
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
            <div className="celluleInspecteur titreColonnesContrats">
              <span className="texteTitreColonnesContrats">Inspecteur</span>
            </div>
            <div className="celluleDateVisite titreColonnesContrats">
              <span className="validation-text16 texteTitreColonnesContrats">
                <span>Date de visite</span>
                <br></br>
              </span>
            </div>
            <div className="titreColonnesContrats celluleDateSoumission">
              <span className="texteTitreColonnesContrats">
                Date de soumission
              </span>
            </div>
          </div>
          <div
            id="tableauListeContrats"
            className="validation-container3"
          ></div>
        </div>
      </div>
      <div>
        <div className="validation-container5">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour afficher les contrats
        function afficherContrats() {
            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats\`;

            // Récupérer le token depuis localStorage
            const token = localStorage.getItem('jwtToken');

            // Vérifier si le token existe
            if (!token) {
                // Rediriger vers la page d'accueil si l'utilisateur n'est pas connecté
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            // Faire une requête GET pour récupérer les contrats en utilisant le token
            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': \`Bearer \${token}\`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                // Si le token est périmé ou invalide, le back renverra probablement un statut 401 (Unauthorized)
                if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                    window.location.href = '/';
                    return Promise.reject("Unauthorized");
                }

                // Si le statut est OK, on peut continuer
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                
                return response.json();
            })
            .then(contrats => {
                const tableauListeContrats = document.getElementById("tableauListeContrats");

                const promesses = contrats.map(contrat => {
                    return fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${contrat.client_id}\`, {
                        method: 'GET',
                        headers: {
                            'Authorization': \`Bearer \${token}\`,
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.status === 401) {
                            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                            window.location.href = '/';
                            return Promise.reject("Unauthorized");
                        }

                        return response.json();
                    })
                    .then(client => {
                        let adresseComplete = '';
                        const villeMajuscule = contrat.ville.toUpperCase();

                        if (!contrat.complement_adresse) {
                            adresseComplete = \`\${contrat.adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                        } else {
                            adresseComplete = \`\${contrat.adresse}, \${contrat.complement_adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                        }

                        let affichageClient = '';
                        if (client.type === 'PARTICULIER') {
                            affichageClient = \`\${client.prenom} \${client.nom}\`;
                        } else if (client.type === 'PROFESSIONNEL') {
                            affichageClient = client.raison_sociale || '';
                        }

                        const ligneContrat = document.createElement("div");
                        ligneContrat.classList.add("hoverLigne", "ligneContrats", "flex");

                        // Déterminer la classe CSS et l'icône pour le statut
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
                                <div class="texteligneContrats \${classeStatut}">
                                    \${iconeStatut}
                                    <span>\${contrat.statut || ''}</span>
                                </div>
                            </div>
                        \`;

                        const lienContrat = document.createElement("a");
                        lienContrat.href = \`details-contrat?id=\${contrat.id}\`;
                        lienContrat.classList.add("contrats-link");

                        lienContrat.appendChild(ligneContrat);

                        return lienContrat;
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des données client:', error);
                        return null;
                    });
                });

                Promise.all(promesses).then(lignes => {
                    lignes.forEach(ligne => {
                        if (ligne) {
                            tableauListeContrats.appendChild(ligne);
                        }
                    });

                    const lignesContrat = tableauListeContrats.querySelectorAll(".hoverLigne");

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

        // Fonction pour vérifier si la page "pageContrats" est présente
        function checkPageContrats() {
            const pageContrats = document.getElementById("pageContrats");
            if (pageContrats && !pageContrats.dataset.loaded) {
                // Marquer comme chargé pour éviter les exécutions multiples
                pageContrats.dataset.loaded = 'true';
                afficherContrats();
            }
        }

        // Appeler la fonction initialement
        checkPageContrats();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Validation
