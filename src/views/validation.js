import React from 'react'

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
      </div>
      <div id="listeContainer" className="mainContainer">
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
                Demande de validation
              </span>
            </div>
          </div>
          <div
            id="tableauListeContrats"
            className="validation-container2"
          ></div>
        </div>
      </div>
      <div>
        <div className="validation-container4">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour afficher les contrats
        function afficherContrats() {
            const url = "https://starsmanager-edefd7b34118.herokuapp.com/contrats";

            // Récupérer le token depuis localStorage
            const token = localStorage.getItem("jwtToken");

            // Vérifier si le token existe
            if (!token) {
                // Rediriger vers la page d'accueil si l'utilisateur n'est pas connecté
                sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Vous devez être connecté pour accéder à cette page." }));
                window.location.href = "/";
                return;
            }

            // Faire une requête GET pour récupérer les contrats en utilisant le token
            fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": \`Bearer \${token}\`,
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.status === 401) {
                    sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                    window.location.href = "/";
                    return Promise.reject("Unauthorized");
                }

                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                
                return response.json();
            })
            .then(contrats => {
                // Filtrer les contrats avec statut = EN_COURS_DE_VALIDATION
                const contratsEnCoursDeValidation = contrats.filter(contrat => contrat.statut === "EN_COURS_DE_VALIDATION");
                const tableauListeContrats = document.getElementById("tableauListeContrats");

                const promesses = contratsEnCoursDeValidation.map(contrat => {
                    // Fetch pour le client
                    const promesseClient = fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${contrat.client_id}\`, {
                        method: "GET",
                        headers: {
                            "Authorization": \`Bearer \${token}\`,
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        if (response.status === 401) {
                            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                            window.location.href = "/";
                            return Promise.reject("Unauthorized");
                        }

                        return response.json();
                    });

                    // Fetch pour l'utilisateur
                    const promesseUser = fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/users/\${contrat.user_id}\`, {
                        method: "GET",
                        headers: {
                            "Authorization": \`Bearer \${token}\`,
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        if (response.status === 401) {
                            sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter." }));
                            window.location.href = "/";
                            return Promise.reject("Unauthorized");
                        }

                        return response.json();
                    });

                    // Attendre les deux fetches (client et user)
                    return Promise.all([promesseClient, promesseUser])
                        .then(([client, user]) => {
                            let adresseComplete = "";
                            const villeMajuscule = contrat.ville.toUpperCase();

                            if (!contrat.complement_adresse) {
                                adresseComplete = \`\${contrat.adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                            } else {
                                adresseComplete = \`\${contrat.adresse}, \${contrat.complement_adresse} - \${contrat.code_postal} \${villeMajuscule}\`;
                            }

                            let affichageClient = "";
                            if (client.type === "PARTICULIER") {
                                affichageClient = \`\${client.prenom} \${client.nom}\`;
                            } else if (client.type === "PROFESSIONNEL") {
                                affichageClient = client.raison_sociale || "";
                            }

                            const ligneContrat = document.createElement("div");
                            ligneContrat.classList.add("hoverLigne", "ligneContrats", "flex");

                            ligneContrat.innerHTML = 
                                \`<div class="celluleLigneContrat celluleNumContrat">
                                    <span class="texteligneContrats">\${contrat.num_contrat || ""}</span>
                                </div>
                                <div class="celluleLigneContrat celluleClient">
                                    <span class="texteligneContrats">\${affichageClient}</span>
                                </div>
                                <div class="celluleLigneContrat celluleAdresse">
                                    <span class="texteligneContrats">\${adresseComplete}</span>
                                </div>
                                <div class="celluleLigneContrat celluleInspecteur">
                                    <span class="texteligneContrats">\${user.prenom} \${user.nom}</span>
                                </div>
                                <div class="celluleLigneContrat celluleDateVisite">
                                    <span class="texteligneContrats">\${contrat.date_visite || ""}</span>
                                </div>
                                <div class="celluleLigneContrat celluleDateSoumission">
                                    <span class="texteligneContrats">\${contrat.date_demande_validation || ""}</span>
                                </div>\`;

                            const lienContrat = document.createElement("a");
                            lienContrat.href = \`valider-contrat?id=\${contrat.id}\`;
                            lienContrat.classList.add("contrats-link");

                            lienContrat.appendChild(ligneContrat);

                            return lienContrat;
                        })
                        .catch(error => {
                            console.error("Erreur lors de la récupération des données client ou utilisateur:", error);
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
                console.error("Erreur lors de la récupération des contrats:", error);
            });
        }

        // Appeler la fonction initialement pour charger les contrats
        afficherContrats();
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
