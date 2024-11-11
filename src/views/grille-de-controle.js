import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MenuLatral from '../components/menu-latral'
import './grille-de-controle.css'

const GrilleDeControle = (props) => {
  return (
    <div id="pageGrilleDeControle" className="grille-de-controle-container10">
      <Helmet>
        <title>Grille-de-controle - starsmanager_ui</title>
        <meta
          property="og:title"
          content="Grille-de-controle - starsmanager_ui"
        />
      </Helmet>
      <MenuLatral rootClassName="menu-latralroot-class-name"></MenuLatral>
      <div className="header--onglets header">
        <div className="cadreTitreHeader">
          <h1 className="texteTitreHeader">Grille de contrôle</h1>
        </div>
        <div
          id="retourContrat"
          className="grille-de-controle-menu cadreMenuHeader"
        >
          <div className="grille-de-controle-action1 cadreActionMenuHeader">
            <span className="grille-de-controle-retour-contrat texteOptionMenuHeader">
              Retour au contrat
            </span>
          </div>
          <div className="grille-de-controle-icone1 cadreIconeMenuHeader">
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
      </div>
      <div className="MainCadreOnglets">
        <div id="ongletGrille" className="cadreOnglet actif">
          <h1 className="texteOnglet">Grille</h1>
        </div>
        <div id="ongletRapport" className="cadreOnglet">
          <h1 className="texteOnglet">Rapport</h1>
        </div>
        <div id="ongletVerification" className="cadreOnglet">
          <h1 className="texteOnglet">Vérification</h1>
        </div>
      </div>
      <div id="grilleContainer" className="mainContainer--onglets">
        <div className="mediumContainer cadreInfosLogement firstContainer">
          <div className="grille-de-controle-titre-infos-logement ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">Informations du logement</span>
          </div>
          <div className="ligneInfo">
            <div className="partieInfoLogement1">
              <span className="texteInfoLogement1">
                <span>Propriétaire</span>
                <br></br>
              </span>
            </div>
            <div className="grille-de-controle-partie21 partieInfoLogement2">
              <span id="nomProprietaire"> </span>
            </div>
            <div className="grille-de-controle-partie31 partieInfoLogement3">
              <span className="texteInfoLogement1">Adresse</span>
            </div>
            <div className="grille-de-controle-partie41 partieInfoLogement4">
              <span id="adresseBien"> </span>
            </div>
          </div>
          <div className="grille-de-controle-ligne2-infos ligneInfo">
            <div className="grille-de-controle-partie12 partieInfoLogement1">
              <span className="texteInfoLogement1">Type d&apos;habitation</span>
            </div>
            <div className="grille-de-controle-partie22 partieInfoLogement2">
              <select id="select1" className="select1">
                <option id="habitationNA" value="NA">
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
            <div className="grille-de-controle-partie32 partieInfoLogement3">
              <span className="texteInfoLogement1">Etage</span>
            </div>
            <div className="grille-de-controle-partie42 partieInfoLogement4">
              <select
                id="select2"
                className="grille-de-controle-select-etage select1"
              >
                <option id="etageNA" value="NA">
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
          <div className="grille-de-controle-ligne3-infos ligneInfo">
            <div className="grille-de-controle-partie13 partieInfoLogement1">
              <span className="texteInfoLogement1">Classement demandé</span>
            </div>
            <div className="grille-de-controle-partie23 partieInfoLogement2">
              <select
                id="select3"
                className="grille-de-controle-select-classement select1"
              >
                <option id="classementNA" value="NA">
                  --
                </option>
                <option value="1">1*</option>
                <option value="2">2*</option>
                <option value="3">3*</option>
                <option value="4">4*</option>
                <option value="5">5*</option>
              </select>
            </div>
            <div className="grille-de-controle-partie33 partieInfoLogement3">
              <span className="texteInfoLogement1">
                Capacité d&apos;accueil
              </span>
            </div>
            <div className="grille-de-controle-partie43 partieInfoLogement4">
              <input
                type="text"
                id="input0"
                placeholder="--"
                className="grille-de-controle-textinput select1"
              />
            </div>
          </div>
        </div>
        <div id="grille" className="mediumContainer grilleDeControle"></div>
      </div>
      <div
        id="rapportContainer"
        className="grille-de-controle-rapport mainContainer--onglets"
      >
        <div className="mediumContainer firstContainer containerCentral">
          <div className="grille-de-controle-titre-critres-obligatoires-non-valids ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Critères obligatoires non validés
            </span>
          </div>
          <div
            id="listeCriteresOnV"
            className="grille-de-controle-liste-critres-obligatoires-non-valids listeCriteresOnV ligneInfo"
          ></div>
        </div>
        <div className="grille-de-controle-tableau-rcap-points mediumContainer containerCentral">
          <div className="grille-de-controle-points-obligatoires1 ligneTitreSousChapitre sousTitreContainer">
            <span>Points obligatoires</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  a) Nombre total de points obligatoires à respecter pour la
                  catégorie demandée (tenant compte des cas particuliers et des
                  critères non applicables) :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_totaux_obligatoires"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  b) Nombre minimal de points obligatoires à respecter, 95% de
                  (a) :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_minimaux_obligatoires"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPointsBig ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>c) Nombre de points obligatoires atteints :</span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_obligatoires_obtenus"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPointsBig ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  Respect du seuil de nombre de points obligatoires à atteindre
                  :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_obligatoires_atteints"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  d) Nombre de points obligatoires à compenser - dans la limite
                  de 5% du total des points obligatoires à respecter
                  (coefficient 3), soit a-c*3 :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_obligatoires_a_compenser"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="grille-de-controle-points-obligatoires2 ligneTitreSousChapitre sousTitreContainer">
            <span>Points à la carte</span>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  e) Nombre total de points à la carte disponibles pour la
                  catégorie demandée :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_optionnels_disponibles"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  f) Nombre de points à la carte à respecter, soit 5%, 10%, 20%,
                  30%, 40% respectivement pour les catégories 1, 2, 3, 4, 5* de
                  e)
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_optionnels_necessaires"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  g) Nombre de points à la carte à atteindre : (d) +(f)
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_optionnels_a_atteindre"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="ligneBilanPointsBig ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>h) Nombre de points à la carte atteints :</span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span
                id="points_optionnels_obtenus"
                className="texteResultatBilanPoints"
              >
                NA
              </span>
            </div>
          </div>
          <div className="grille-de-controle-ligne119 ligneBilanPointsBig ligneBilanPoints">
            <div className="critereBilanPoints">
              <span className="texteCritereBilanPoints">
                <span>
                  Respect du seuil de nombre de points à la carte à atteindre :
                </span>
                <br></br>
              </span>
            </div>
            <div className="resultatBilanPoints">
              <span id="resultat" className="texteResultatBilanPoints">
                NA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="verificationContainer"
        className="grille-de-controle-verification mainContainer--onglets"
      >
        <div className="mediumContainer firstContainer containerCentral">
          <div className="grille-de-controle-titre-critres-obligatoiresa-cocher ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Critères obligatoires à cocher
            </span>
          </div>
          <div
            id="listeCriteresOaC"
            className="grille-de-controle-liste-critres-obligatoires-a-cocher listeCriteresOaC ligneInfo"
          ></div>
        </div>
        <div className="mediumContainer containerCentral">
          <div className="grille-de-controle-titre-critres-la-carte-cocher1 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">Critères à la carte à cocher</span>
          </div>
          <div
            id="listeCriteresAaC"
            className="grille-de-controle-liste-critres-la-carte-cocher1 listeCriteresAaC ligneInfo"
          ></div>
        </div>
        <div className="mediumContainer containerCentral">
          <div className="grille-de-controle-titre-critres-la-carte-cocher2 ligneTitreSousChapitre sousTitreContainer">
            <span className="titreRubrique">
              Commentaires obligatoires à fournir
            </span>
          </div>
          <div
            id="listeCommentairesAF"
            className="grille-de-controle-liste-critres-la-carte-cocher2 listeCommentairesAF ligneInfo"
          ></div>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container12">
          <React.Fragment>
            <React.Fragment>
              <Script type="text/javascript">{`
  const { useState, useEffect } = React;

  const token = localStorage.getItem("jwtToken");

  if (!token) {
    sessionStorage.setItem(
      "message",
      JSON.stringify({
        type: "error",
        text: "Vous devez être connecté pour accéder à cette page.",
      })
    );
    window.location.href = "/";
  }

  // Fonction pour réactiver tous les critères
  function reactiverTousLesCriteres() {
    document.querySelectorAll(".ligneGrille").forEach((ligne) => {
      ligne.classList.remove("ligneGrilleDesactivee");
    });
  }

  // Fonction pour désactiver un critère donné
  function desactiverCriteresNonApplicables(critereNum) {
    const ligneCritere = document.getElementById(\`crit\${critereNum}\`);
    if (ligneCritere) {
      ligneCritere.classList.add("ligneGrilleDesactivee");

      // Décoche toutes les radios associées à ce critère
      const radios = ligneCritere.querySelectorAll('input[type="radio"]');
      radios.forEach((radio) => {
        radio.checked = false;
      });

      // Supprime le commentaire associé à ce critère
      const commentaire = document.getElementById(\`commentaire\${critereNum}\`);
      if (commentaire) {
        commentaire.value = ""; // Vider la zone de texte du commentaire
      }
    } else {
      console.warn(\`Élément non trouvé pour le critère \${critereNum}\`);
    }
  }

  // Composant Chapitre avec clés stables
  function Chapitre({
    libelle,
    sousChapitres,
    select1Value,
    select2Value,
    select3Value,
  }) {
    const chapitreKey = libelle || "chapitre-" + Math.random().toString();

    return React.createElement(
      React.Fragment,
      { key: chapitreKey },
      React.createElement(
        "div",
        { className: "ligneCommune LigneTitreChapitre" },
        React.createElement("div", { className: "cellulePreTitre cellule" }),
        React.createElement(
          "div",
          { className: "celluleTitre cellule" },
          React.createElement(
            "span",
            { className: "" },
            libelle || "Titre Chapitre"
          )
        )
      ),
      sousChapitres.map((sousChapitre) => {
        const sousChapitreKey =
          sousChapitre.libelle || "souschapitre-" + Math.random().toString();
        return React.createElement(Souschapitre, {
          key: sousChapitreKey,
          libelle: sousChapitre.libelle,
          rubriques: sousChapitre.rubriques,
          select1Value,
          select2Value,
          select3Value,
        });
      })
    );
  }

  // Composant Souschapitre
  function Souschapitre({
    libelle,
    rubriques,
    select1Value,
    select2Value,
    select3Value,
  }) {
    const sousChapitreKey = libelle || Math.random().toString(); // Utilisez une valeur stable

    const rubriqueElements = rubriques.map((rubrique) => {
      const rubriqueKey = rubrique.libelle || Math.random().toString();

      if (rubrique.libelle) {
        const critereElements = rubrique.criteres.map((critere) => {
          return React.createElement(Critere, {
            key: critere.numCritere,
            numCritere: critere.numCritere,
            libelle: critere.libelle,
            points: critere.points,
            categories: critere.categories,
            select1Value,
            select2Value,
            select3Value,
            peutEtreNonAppliquable: critere.peutEtreNonAppliquable,
          });
        });

        return [
          React.createElement(
            "div",
            { key: rubriqueKey, className: "ligneTitreRubrique ligneCommune" },
            React.createElement("div", {
              className: "cellulePreTitre cellule",
            }),
            React.createElement(
              "div",
              { className: "celluleTitre cellule" },
              React.createElement(
                "span",
                { className: "" },
                rubrique.libelle || "Titre Rubrique"
              )
            )
          ),
          ...critereElements,
        ];
      } else {
        return rubrique.criteres.map((critere) => {
          return React.createElement(Critere, {
            key: critere.numCritere,
            numCritere: critere.numCritere,
            libelle: critere.libelle,
            points: critere.points,
            categories: critere.categories,
            select1Value,
            select2Value,
            select3Value,
            peutEtreNonAppliquable: critere.peutEtreNonAppliquable,
          });
        });
      }
    });

    // Aplatir les éléments de rubriques pour éviter les tableaux imbriqués
    const flatRubriqueElements = [].concat(...rubriqueElements);

    return React.createElement(
      React.Fragment,
      { key: sousChapitreKey },
      React.createElement(
        "div",
        { className: "ligneTitreSousChapitre ligneCommune" },
        React.createElement("div", { className: "cellulePreTitre cellule" }),
        React.createElement(
          "div",
          { className: "celluleTitre cellule" },
          React.createElement(
            "span",
            { className: "" },
            libelle || "Titre Sous-chapitre"
          )
        )
      ),
      ...flatRubriqueElements
    );
  }

  function Rubrique({
    libelle,
    criteres,
    select1Value,
    select2Value,
    select3Value,
  }) {
    const rubriqueKey = libelle || "rubrique-" + Math.random().toString();

    const critereElements = criteres.map((critere) => {
      return React.createElement(Critere, {
        key: critere.numCritere,
        numCritere: critere.numCritere,
        libelle: critere.libelle,
        points: critere.points,
        categories: critere.categories,
        select1Value,
        select2Value,
        select3Value,
        peutEtreNonAppliquable: critere.peutEtreNonAppliquable,
      });
    });

    return React.createElement(
      React.Fragment,
      { key: rubriqueKey },
      React.createElement(
        "div",
        { className: "ligneTitreRubrique ligneCommune" },
        React.createElement("div", { className: "cellulePreTitre cellule" }),
        React.createElement(
          "div",
          { className: "celluleTitre cellule" },
          React.createElement(
            "span",
            { className: "" },
            libelle || "Titre de la rubrique"
          )
        )
      ),
      ...critereElements
    );
  }

  // Composant Critere avec la logique de statut dynamique
  function Critere({
    numCritere = "N° Critère",
    libelle = "Titre Critère",
    points = "Nombre de Points",
    categories,
    select1Value,
    select2Value,
    select3Value,
    peutEtreNonAppliquable,
  }) {
    // Ajouter des états pour le statut et la classe
    const [statutDisplay, setStatutDisplay] = useState("");
    const [statutClass, setStatutClass] = useState("");

    // Déterminer les options de radio à afficher
    const radiosToDisplay = peutEtreNonAppliquable
      ? ["Oui", "Non", "NA"]
      : ["Oui", "Non"];

    return React.createElement(
      "div",
      {
        id: \`crit\${numCritere}\`,
        className: "ligneGrille ligneCommune",
        key: numCritere,
      },
      // Numéro du critère
      React.createElement(
        "div",
        { className: "cellule celluleNum" },
        React.createElement(
          "span",
          { className: "texteCellule" },
          React.createElement("span", null, numCritere),
          React.createElement("br")
        )
      ),
      // Libellé du critère
      React.createElement(
        "div",
        { className: "cellule celluleIntitule" },
        React.createElement("span", null, libelle)
      ),
      // Statut du critère
      React.createElement(
        "div",
        { className: "cellule celluleStatut" },
        React.createElement("span", null, "") // Initialiser avec une valeur vide
      ),
      // Points du critère
      React.createElement(
        "div",
        { className: "cellule cellulePoints" },
        React.createElement(
          "span",
          {
            id: \`points\${numCritere}\`,
            className: "grille-de-controle-points grille-de-controle-text",
          },
          React.createElement("span", null, points),
          React.createElement("br")
        )
      ),
      // Options de validation du critère
      React.createElement(
        "div",
        { className: "cellule celluleValidation" },
        radiosToDisplay.map((label, index) => [
          React.createElement("input", {
            type: "radio",
            id: \`radio\${numCritere}-\${index + 1}\`,
            name: \`radio\${numCritere}\`,
            key: \`input-\${index}\`,
          }),
          React.createElement(
            "label",
            {
              htmlFor: \`radio\${numCritere}-\${index + 1}\`,
              className: "optionRadio",
              key: \`label-\${index}\`,
            },
            label
          ),
        ])
      ),
      // Points obtenus
      React.createElement(
        "div",
        { className: "cellule cellulePointsObtenus" },
        React.createElement(
          "span",
          {
            id: \`pointsObtenus\${numCritere}\`,
            className: "grille-de-controle-points-obtenus",
          },
          ""
        )
      ),
      // Colonne "Surfaces relevées" vide
      React.createElement(
        "div",
        { className: "celluleSurface" } // Cellule vide sans contenu
      ),
      // Commentaire avec un textarea
      React.createElement(
        "div",
        { className: "celluleCommentaire" }, // Seulement "celluleCommentaire"
        React.createElement("textarea", {
          id: \`commentaire\${numCritere}\`,
          className: "inputCommentaireGrille", // Classe CSS pour le textarea
        })
      )
    );
  }

  // Main component
  function AfficherGrille() {
    const [grilleControle, setGrilleControle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Variables d'état pour le contrat et le client
    const [contratId, setContratId] = useState(null);
    const [contrat, setContrat] = useState(null);
    const [client, setClient] = useState(null);
    const [adresseBien, setAdresseBien] = useState("");
    const [nomProprietaire, setNomProprietaire] = useState("");

    // State for the 4 parameters
    const [select1Value, setSelect1Value] = useState("NA");
    const [select2Value, setSelect2Value] = useState("NA");
    const [select3Value, setSelect3Value] = useState("NA");
    const [capaciteAccueil, setCapaciteAccueil] = useState("");

    const [additionalData, setAdditionalData] = useState(null); // For storing additional data

    const idGrille = getGrilleIdFromUrl(); // Get the grid ID from URL

    // Function to fetch grid parameters from the back-end
    async function fetchGrilleParams(idGrille) {
      const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}\`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: \`Bearer \${token}\`, // Ajout du token
            Accept: "application/json",
          },
        });

        if (response.status === 401) {
          sessionStorage.setItem(
            "message",
            JSON.stringify({
              type: "error",
              text: "Votre session a expiré, veuillez vous reconnecter.",
            })
          );
          window.location.href = "/";
          return Promise.reject("Unauthorized");
        }

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const data = await response.json();
        console.log("Données récupérées :", data);

        return data; // Return the fetched parameters
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
      }
    }

    // Function to fetch the static grid data
    async function fetchGrilleControle() {
      const url =
        "https://starsmanager-edefd7b34118.herokuapp.com/grilleControle";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: \`Bearer \${token}\`,
            Accept: "application/json",
          },
        });

        if (response.status === 401) {
          sessionStorage.setItem(
            "message",
            JSON.stringify({
              type: "error",
              text: "Votre session a expiré, veuillez vous reconnecter.",
            })
          );
          window.location.href = "/";
          return Promise.reject("Unauthorized");
        }

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const jsonData = await response.json();
        const grilleData = deserializeGrilleControleDto(jsonData);
        return grilleData; // Return the processed data
      } catch (err) {
        setError(err);
        throw err;
      }
    }

    // Récupérer les détails du contrat
    function fetchContratDetails(contratId) {
      if (!contratId) {
        console.error("ID du contrat non fourni.");
        return;
      }

      const url = \`https://starsmanager-edefd7b34118.herokuapp.com/contrats/\${contratId}\`;

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: \`Bearer \${token}\`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            sessionStorage.setItem(
              "message",
              JSON.stringify({
                type: "error",
                text: "Votre session a expiré, veuillez vous reconnecter.",
              })
            );
            window.location.href = "/";
            return Promise.reject("Unauthorized");
          }

          if (!response.ok) {
            throw new Error("Contrat introuvable");
          }
          return response.json();
        })
        .then((contratData) => {
          setContrat(contratData);

          // Créer la chaîne d'adresse
          const adresse = \`\${contratData.adresse} - \${contratData.code_postal} \${contratData.ville}\`;

          // Mettre à jour l'élément adresseBien en dehors du composant React
          const adresseBienElement = document.getElementById("adresseBien");
          if (adresseBienElement) {
            adresseBienElement.textContent = adresse;
          }

          // Mettre à jour l'élément retourContrat pour rediriger vers la bonne URL
          const retourContratElement = document.getElementById("retourContrat");
          if (retourContratElement) {
            retourContratElement.onclick = () => {
              window.location.href = \`/details-contrat?id=\${contratId}\`;
            };
          }

          // Utiliser contrat.client_id pour récupérer les détails du client
          if (contratData.client_id) {
            fetchClientDetails(contratData.client_id);
          } else {
            console.error("client_id non disponible dans le contrat");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du contrat:", error);
        });
    }

    // Récupérer les détails du client
    function fetchClientDetails(clientID) {
      if (!clientID) {
        console.error("ID du client non fourni.");
        return;
      }

      const url = \`https://starsmanager-edefd7b34118.herokuapp.com/clients/\${clientID}\`;

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: \`Bearer \${token}\`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 401) {
            sessionStorage.setItem(
              "message",
              JSON.stringify({
                type: "error",
                text: "Votre session a expiré, veuillez vous reconnecter.",
              })
            );
            window.location.href = "/";
            return Promise.reject("Unauthorized");
          }

          if (!response.ok) {
            throw new Error("Client introuvable");
          }
          return response.json();
        })
        .then((clientData) => {
          setClient(clientData);

          // Créer le nom complet
          const nomComplet = \`\${clientData.prenom} \${clientData.nom}\`;

          // Mettre à jour l'élément nomProprietaire en dehors du composant React
          const nomProprietaireElement =
            document.getElementById("nomProprietaire");
          if (nomProprietaireElement) {
            nomProprietaireElement.textContent = nomComplet;
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du client:", error);
        });
    }

    // Fetch initial data
    useEffect(() => {
      async function initialFetch() {
        try {
          // 1. Fetch grid parameters
          const params = await fetchGrilleParams(idGrille);

          // Assign the values from the back-end if they are not null or empty
          if (params.type_habitation) {
            setSelect1Value(
              params.type_habitation === "INDIVIDUEL" ? "1" : "2"
            );
            const select1 = document.getElementById("select1");
            if (select1)
              select1.value =
                params.type_habitation === "INDIVIDUEL" ? "1" : "2";
          }

          if (params.etage !== null && params.etage !== undefined) {
            setSelect2Value(params.etage.toString());
            const select2 = document.getElementById("select2");
            if (select2) select2.value = params.etage.toString();
          }

          if (params.categorie_demandee) {
            setSelect3Value(params.categorie_demandee.replace("*", ""));
            const select3 = document.getElementById("select3");
            if (select3)
              select3.value = params.categorie_demandee.replace("*", "");
          }

          if (
            params.capacite_accueil !== null &&
            params.capacite_accueil !== undefined
          ) {
            setCapaciteAccueil(params.capacite_accueil);
            const input0 = document.getElementById("input0");
            if (input0) input0.value = params.capacite_accueil;
          }

          if (params.id_contrat) {
            setContratId(params.id_contrat);
            // Appeler fetchContratDetails avec contratId
            fetchContratDetails(params.id_contrat);
          }

          // Fetch static grid data
          const grilleData = await fetchGrilleControle();
          setGrilleControle(grilleData);

          // Check if all parameters are set
          if (
            params.type_habitation &&
            params.etage !== null &&
            params.etage !== undefined &&
            params.categorie_demandee &&
            params.capacite_accueil !== null &&
            params.capacite_accueil !== undefined
          ) {
            // All parameters are present, proceed to fetch additional data
            console.log(
              "All parameters present from backend. Fetching additional data."
            );
            const additionalData = await fetchGrilleParams(idGrille);
            setAdditionalData(additionalData);
          }

          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      }

      initialFetch();
    }, []); // This useEffect runs only once after the first render

    // Listen for the 'parametersUpdated' event
    useEffect(() => {
      function handleParametersUpdated() {
        // Update the state based on the current values of the select elements and input
        const select1 = document.getElementById("select1");
        const select2 = document.getElementById("select2");
        const select3 = document.getElementById("select3");
        const input0 = document.getElementById("input0");
        console.log("event reçu");

        if (select1) {
          setSelect1Value(select1.value);
        }

        if (select2) {
          setSelect2Value(select2.value);
        }

        if (select3) {
          setSelect3Value(select3.value);
        }

        if (input0) {
          setCapaciteAccueil(input0.value);
        }

        // Check if all parameters are set
        if (allParamsSet()) {
          // Fetch additional data without processing it immediately
          fetchAdditionalData();
          console.log("allParamSet True");
        }
      }

      document.addEventListener("parametersUpdated", handleParametersUpdated);

      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener("parametersUpdated", handleParametersUpdated);
      };
    }, [grilleControle]);


    // Function to check if all parameters are set
    function allParamsSet() {
      // Recalculer les valeurs des éléments à chaque appel
      const select1Value = document.getElementById("select1").value;
      const select2Value = document.getElementById("select2").value;
      const select3Value = document.getElementById("select3").value;
      const capaciteAccueil = document.getElementById("input0").value;

      return (
        select1Value !== "NA" &&
        select2Value !== "NA" &&
        select3Value !== "NA" &&
        capaciteAccueil !== ""
      );
    }

    // Function to fetch additional data when all parameters are set
    async function fetchAdditionalData() {
      try {
        // Fetch previously entered data (load)
        const additionalData = await fetchGrilleParams(idGrille);
        setAdditionalData(additionalData);
      } catch (err) {
        setError(err);
      }
    }

    // Fonction pour traiter les données supplémentaires et mettre à jour la grille
    function processAdditionalData(grilleControle, additionalData) {
      if (grilleControle && additionalData) {
        // Réactiver tous les critères avant de les mettre à jour
        reactiverTousLesCriteres();

        if (
          additionalData.reponses
        ) {
          console.log("Mise à jour des critères en fonction des réponses de l'API.");

          additionalData.reponses.forEach((reponse) => {
            const critereElement = document.getElementById(
              \`crit\${reponse.num_critere}\`
            );
            if (critereElement) {
              // Mise à jour du statut du critère
              let statutDisplay = "";
              let statutClass = "";

              if (reponse.statut_critere) {
                switch (reponse.statut_critere) {
                  case "OPTIONNEL":
                    statutDisplay = "o";
                    statutClass = "critereFacultatif";
                    break;
                  case "OBLIGATOIRE":
                    statutDisplay = "x";
                    statutClass = "critereObligatoire";
                    break;
                  case "ONC":
                    statutDisplay = "ONC";
                    statutClass = "critereObligatoire";
                    break;
                  case "NON_APPLICABLE":
                    statutDisplay = "NA";
                    statutClass = "";
                    desactiverCriteresNonApplicables(reponse.num_critere);
                    break;
                  default:
                    console.warn(
                      \`Statut inconnu pour le critère \${reponse.num_critere}: \${reponse.statut_critere}\`
                    );
                }

                // Mettre à jour l'affichage du statut du critère
                const statutElement = document.querySelector(
                  \`#crit\${reponse.num_critere} .celluleStatut span\`
                );
                if (statutElement) {
                  statutElement.textContent = statutDisplay;
                  statutElement.parentElement.className = \`cellule celluleStatut \${statutClass}\`;
                }
              }

              // Sélectionner la radio correspondant au statut de validation
              const radioOui = document.getElementById(
                \`radio\${reponse.num_critere}-1\`
              );
              const radioNon = document.getElementById(
                \`radio\${reponse.num_critere}-2\`
              );
              const radioNA = document.getElementById(
                \`radio\${reponse.num_critere}-3\`
              );

              switch (reponse.statut_validation) {
                case "VALIDE":
                  if (radioOui) radioOui.checked = true;
                  break;
                case "NON_VALIDE":
                  if (radioNon) radioNon.checked = true;
                  break;
                case "NON_APPLICABLE":
                  if (radioNA) radioNA.checked = true;
                  break;
                default:
                  if (reponse.statut_validation !== null) {
                    console.warn(
                      \`Statut inconnu pour le critère \${reponse.num_critere}: \${reponse.statut_validation}\`
                    );
                  }
              }

              // Mettre à jour les points obtenus
              const pointsObtenusElement = document.getElementById(
                \`pointsObtenus\${reponse.num_critere}\`
              );
              if (pointsObtenusElement) {
                if (reponse.statut_validation === "VALIDE") {
                  pointsObtenusElement.textContent =
                    reponse.points_obtenus !== null ? reponse.points_obtenus : "";
                } else if (reponse.statut_validation === "NON_VALIDE") {
                  pointsObtenusElement.textContent = "0";
                } else if (reponse.statut_validation === "NON_APPLICABLE") {
                  pointsObtenusElement.textContent = ""; // Pas d'affichage si non applicable
                }
              }

              // Mettre à jour le commentaire s'il existe
              const commentaireElement = document.getElementById(\`commentaire\${reponse.num_critere}\`);
              if (commentaireElement) {
                const commentaireModifie = reponse.commentaire_modifie === "true";
                const commentaireObligatoire = reponse.commentaire_obligatoire === "true";

                if (commentaireModifie) {
                  commentaireElement.value = reponse.commentaire || "";
                  commentaireElement.classList.remove("CAF-value");
                } else if (!commentaireModifie && commentaireObligatoire) {
                  commentaireElement.placeholder = reponse.commentaire || "";
                  commentaireElement.classList.add("CAF-value");
                  commentaireElement.value = "";
                }
              }
            }
          });
        }

        // Mettre à jour le comportement des labels dans toute la page
        (function () {
          const labels = document.querySelectorAll("label");
          labels.forEach((label) => {
            // Vérifier si l'événement est déjà attaché pour éviter les doublons
            if (!label.hasAttribute("data-click-listener")) {
              label.style.userSelect = "none"; // Désactiver la sélection de texte
              label.addEventListener("mousedown", (event) => {
                event.preventDefault(); // Empêche la sélection de texte par défaut
                event.stopPropagation(); // Empêche toute propagation de l'événement
              });
              // Marquer le label pour indiquer que l'événement est déjà attaché
              label.setAttribute("data-click-listener", "true");
            }
          });
        })(); // Exécution immédiate de la fonction anonyme

        // Dispatcher un événement après le rendu de la grille
        const grilleRenderCompleteEvent = new CustomEvent("grilleRenderComplete");
        document.dispatchEvent(grilleRenderCompleteEvent);
      }
    }

    // useEffect pour traiter les données supplémentaires après leur récupération
    useEffect(() => {
      if (grilleControle && additionalData) {
        processAdditionalData(grilleControle, additionalData);
      }
    }, [grilleControle, additionalData]);

    // Handle loading and error states
    if (loading) {
      return React.createElement("div", null, "Chargement...");
    }

    if (error) {
      return React.createElement("div", null, \`Erreur : \${error.message}\`);
    }

    // Render the grid
    // Define the header line here
    const ligneHeader = React.createElement(
      "div",
      { className: "ligneCommune titreColonnes" },
      React.createElement(
        "div",
        { className: "cellule celluleNum" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "N° du critère"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule celluleTitreIntitule" },
        React.createElement(
          "span",
          { className: "grille-de-controle-text15 texteTitreColonne" },
          "Intitulé du critère"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule celluleStatut" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "Statut du critère"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule cellulePoints" },
        React.createElement(
          "span",
          { className: "grille-de-controle-text19 texteTitreColonne" },
          "Points"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule celluleValidation" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "Validation du critère"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule cellulePointsObtenus" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "Points obtenus"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule cellulePointsObtenus" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "Surfaces relevées"
        )
      ),
      React.createElement(
        "div",
        { className: "cellule celluleTitreCommentaires" },
        React.createElement(
          "span",
          { className: "texteTitreColonne" },
          "Commentaires"
        )
      )
    );

    // Render the grid
    return React.createElement(
      "div",
      { className: "grilleContainer" },
      // Ligne d'en-tête et le reste de la grille
      ligneHeader,
      grilleControle.chapitres.map((chapitre, index) =>
        React.createElement(Chapitre, {
          key: chapitre.libelle || "chapitre-" + index,
          libelle: chapitre.libelle,
          sousChapitres: chapitre.sousChapitres,
          select1Value,
          select2Value,
          select3Value,
        })
      )
    );
  }

  // Function to extract the grid ID from the URL
  function getGrilleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || "codeForm"; // Default value if ID is not present
  }

  // Select the root container (make sure you have <div id="grille"></div> in your HTML)
  const rootElement = document.getElementById("grille");

  // Create a React root
  const root = ReactDOM.createRoot(rootElement);

  // Render the AfficherGrille component
  root.render(React.createElement(AfficherGrille));
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container14">
          <React.Fragment>
            <React.Fragment>
              <Script>{`  
    // Check paramètres grille de contrôle
    (function() {
        function attachChangeEvents() {
            var selectIds = ['select1', 'select2', 'select3'];
            var defaultOptionIds = ['habitationNA', 'etageNA', 'classementNA'];

            // Surveiller chaque select
            selectIds.forEach(function(id, index) {
                var selectElement = document.getElementById(id);
                var defaultOption = document.getElementById(defaultOptionIds[index]); // Récupérer l'option par défaut associée
                
                if (selectElement) {
                    selectElement.addEventListener('change', function() {
                        applyValueStyles.call(selectElement);
                        updateGrilleState();

                        // Désactiver l'option par défaut associée une fois une autre option sélectionnée
                        if (selectElement.value !== "" && defaultOption) {
                            defaultOption.disabled = true;
                        }
                    });

                    // Définir le style en fonction de la valeur par défaut
                    applyValueStyles.call(selectElement);
                } else {
                    console.error("Élément select non trouvé avec l'ID :" + id);
                }
            });

            // Surveiller l'input
            var inputElement = document.getElementById('input0');
            if (inputElement) {
                inputElement.addEventListener('input', function() {
                    applyValueStyles.call(inputElement);
                    updateGrilleState();
                });

                // Définir le style en fonction de la valeur par défaut
                applyValueStyles.call(inputElement);
            } else {
                console.error("Élément input non trouvé");
            }

            // Initialiser l'état de la grille
            updateGrilleState();
        }

        function applyValueStyles() {
            var inputValue = this.value;

            // Supprimer les classes existantes
            this.classList.remove('na-value', 'ok-value');

            // Vérifier si l'élément est un select avec "NA" ou un input avec des valeurs invalides
            if ((this.tagName === "SELECT" && inputValue === "NA") ||
                (this.tagName === "INPUT" && (!/^[1-9][0-9]*\$/.test(inputValue) || inputValue === ""))) {
                this.classList.add('na-value'); // Ajouter la classe na-value
            } else {
                this.classList.add('ok-value'); // Ajouter la classe ok-value
            }
        }

        function updateGrilleState() {
            var selectIds = ['select1', 'select2', 'select3'];
            var grille = document.getElementById('grille');
            var disableGrille = false;

            // Vérifier l'état de chaque select
            selectIds.forEach(function(id) {
                var selectElement = document.getElementById(id);
                if (selectElement && selectElement.value === "NA") {
                    disableGrille = true;
                }
            });

            // Vérifier l'état de l'input pour une valeur vide ou non entière strictement positive
            var inputElement = document.getElementById('input0');
            var inputValue = inputElement ? inputElement.value : "";
            if (inputElement && (!/^[1-9][0-9]*\$/.test(inputValue) || inputValue === "")) {
                disableGrille = true;
            }

            // Désactiver ou activer la grille
            if (disableGrille) {
                grille.style.pointerEvents = 'none';
                grille.style.opacity = '0.5'; // Rendre la grille visuellement désactivée
            } else {
                grille.style.pointerEvents = 'auto';
                grille.style.opacity = '1'; // Rendre la grille active
            }
        }

        // Fonction qui vérifie la présence de la grille et exécute le script si elle est présente
        function checkAndAttachEvents() {
            var grille = document.getElementById('grille');
            if (grille) {
                attachChangeEvents(); // Attacher les événements si la grille est présente
            }
        }

        // Observer les changements dans le DOM pour les transitions de pages (navigation dynamique)
        const observer = new MutationObserver(function(mutationsList, observer) {
            checkAndAttachEvents(); // Vérifier et attacher les événements si la grille est présente après une mutation
        });

        // Observer tout changement dans le body
        observer.observe(document.body, { childList: true, subtree: true });

        // Vérifier immédiatement après le chargement initial si la grille est présente
        checkAndAttachEvents();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container16">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour gérer la navigation vers les ancres et le changement d'onglet
        function setupAnchorNavigation(listeId, fromVerification, highlightClass) {
            const listeCriteres = document.getElementById(listeId);
            if (listeCriteres) {
                const critLinks = listeCriteres.querySelectorAll("a");

                critLinks.forEach(link => {
                    link.addEventListener("click", function(event) {
                        event.preventDefault();

                        const ongletGrille = document.getElementById("ongletGrille");
                        const grilleContainer = document.getElementById("grilleContainer");

                        // Choix du conteneur de départ : verificationContainer ou rapportContainer
                        const fromContainer = fromVerification ? document.getElementById("verificationContainer") : document.getElementById("rapportContainer");

                        // Changement vers l'onglet Grille avant de naviguer vers l'ancre
                        if (ongletGrille && grilleContainer && fromContainer) {
                            grilleContainer.style.display = "flex";  
                            fromContainer.style.display = "none"; 
                            ongletGrille.classList.add("actif");

                            // Désactiver l'onglet actif correspondant
                            const ongletActif = fromVerification ? document.getElementById("ongletVerification") : document.getElementById("ongletRapport");
                            if (ongletActif) {
                                ongletActif.classList.remove("actif");
                            }
                        }

                        // Retarder le défilement pour s'assurer que le contenu est rendu
                        setTimeout(() => {
                            // Récupérer l'ID de l'ancre en nettoyant les espaces et retours à la ligne
                            let anchorId = this.getAttribute("href").substring(1).trim();
                            const anchorElement = document.getElementById(anchorId);
                            if (anchorElement) {
                                anchorElement.scrollIntoView({ behavior: "smooth", block: "center" });

                                // Retirer toute surbrillance existante (de n'importe quelle liste)
                                document.querySelectorAll('.highlightCnV, .highlightCOaC, .highlightCAaC, .highlightCAF').forEach(el => el.classList.remove('highlightCnV', 'highlightCOaC', 'highlightCAaC', 'highlightCAF'));

                                // Ajouter la classe de surbrillance spécifique
                                anchorElement.classList.add(highlightClass);

                                // Supprimer la surbrillance après 1 seconde si l'utilisateur clique ailleurs
                                setTimeout(() => {
                                    removeHighlightOnClick(highlightClass);
                                }, 1000);
                            } else {
                                console.warn('Élément avec ID "' + anchorId + '" non trouvé.');
                            }
                        }, 50); // Ajustez le délai si nécessaire
                    });
                });
            }
        }

        function removeHighlightOnClick(highlightClass) {
            document.addEventListener('click', function(event) {
                const highlighted = document.querySelector('.' + highlightClass);

                // Si un élément surligné est cliqué, retirer la surbrillance
                if (highlighted && !highlighted.contains(event.target)) {
                    highlighted.classList.remove(highlightClass);
                } else if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].includes(event.target.tagName)) {
                    // Retirer la surbrillance même si l'utilisateur clique sur un input, bouton ou select
                    if (highlighted) {
                        highlighted.classList.remove(highlightClass);
                    }
                }
            }, { once: true });  // L'événement ne sera déclenché qu'une seule fois
        }

        function checkAndSetupAnchorNavigation() {
            // Liste des IDs et spécification si le switch se fait depuis verificationContainer, et classe de surbrillance
            const listesConfig = [
                { id: 'listeCriteresOnV', fromVerification: false, highlightClass: 'highlightCnV' },
                { id: 'listeCriteresOaC', fromVerification: true, highlightClass: 'highlightCOaC' },
                { id: 'listeCriteresAaC', fromVerification: true, highlightClass: 'highlightCAaC' },
                { id: 'listeCommentairesAF', fromVerification: true, highlightClass: 'highlightCAF' }
            ];

            // Parcours des configurations des listes et mise en place des écouteurs
            listesConfig.forEach(config => setupAnchorNavigation(config.id, config.fromVerification, config.highlightClass));
        }

        const observer = new MutationObserver(function(mutationsList, observer) {
            checkAndSetupAnchorNavigation();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Initialisation
        checkAndSetupAnchorNavigation();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container18">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {

        // Function to update grid parameters
        function updateParametres(idGrille, key, value) {
            // Vérification du token 
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            console.log(\`Mise à jour \${key} : \${value}\`);

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/\${key}/\${value}\`;

            return fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': \`Bearer \${token}\`,  // Utilisation du token ici
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
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
            .then(data => {
                console.log('Réponse du back :', data);

                // Update elements on the page with the response data
                const rapportProvisoire = data.rapport_provisoire;
                for (const key in rapportProvisoire) {
                    if (rapportProvisoire.hasOwnProperty(key)) {
                        const element = document.getElementById(key);
                        if (element) {
                            // Display "OUI" or "NON" for boolean values
                            if (key === "points_obligatoires_atteints" || key === "resultat") {
                                element.textContent = rapportProvisoire[key] ? "OUI" : "NON";
                            } else {
                                element.textContent = rapportProvisoire[key];
                            }
                        }
                    }
                }

                // Dispatch a custom event to indicate that parameters have been updated
                const event = new Event('parametersUpdated');
                document.dispatchEvent(event);

            })
            .catch(error => {
                console.error('Erreur :', error);
            });
        }

        // Function to extract the grid ID from the URL
        function getGrilleIdFromUrl() {
            const params = new URLSearchParams(window.location.search);
            return params.get('id') || "codeForm"; // Default value if ID is not present
        }

        // Add listeners to various elements to track changes and retrieve initial parameters
        window.addEventListener('load', function() {
            const idGrille = getGrilleIdFromUrl(); // Extract the grid ID from the URL

            // Listener for select1
            const select1 = document.getElementById('select1');
            select1.addEventListener('change', function(event) {
                let typeHabitation = event.target.value;
                if (typeHabitation === "NA") typeHabitation = "NA";
                else if (typeHabitation === "1") typeHabitation = "INDIVIDUEL";
                else if (typeHabitation === "2") typeHabitation = "COLLECTIF";
                updateParametres(idGrille, "typeHabitation", typeHabitation);
            });

            // Listener for select2
            const select2 = document.getElementById('select2');
            select2.addEventListener('change', function(event) {
                const etage = event.target.value;
                updateParametres(idGrille, "etage", etage);
            });

            // Listener for select3
            const select3 = document.getElementById('select3');
            select3.addEventListener('change', function(event) {
                let classementDemande = event.target.value;
                if (classementDemande !== "NA") {
                    classementDemande += "*";
                }
                updateParametres(idGrille, "classementDemande", classementDemande);
            });

            // Listener for input0
            const input0 = document.getElementById('input0');
            input0.addEventListener('blur', function(event) {
                const capaciteAccueil = event.target.value;
                // Verify that the value meets the desired format before sending
                if (/^[1-9][0-9]*\$/.test(capaciteAccueil)) {
                    updateParametres(idGrille, "capaciteAccueil", capaciteAccueil);
                }
            });
        });
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container20">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour envoyer la réponse au back avec retry
        async function envoyerReponse(idGrille, numCritere, statut, retries = 3) {
            // Vérification du token
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }

            console.log("Envoi de la réponse au back :", {
                num_critere: numCritere,
                statut_validation: statut
            });

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/reponse\`;

            const data = {
                num_critere: numCritere,
                statut_validation: statut
            };

            for (let attempt = 0; attempt < retries; attempt++) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout après 5 secondes

                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            'Authorization': \`Bearer \${token}\`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data),
                        signal: controller.signal
                    });

                    clearTimeout(timeoutId);

                    if (response.status === 401) {
                        sessionStorage.setItem("message", JSON.stringify({ type: "error", text: "Votre session a expiré, veuillez vous reconnecter."}));
                        window.location.href = '/';
                        return;
                    }

                    if (!response.ok) {
                        throw new Error(\`HTTP error! status: \${response.status}\`);
                    }

                    const responseData = await response.json();
                    console.log("Success:", responseData); // Log principal de la réponse

                    // Cocher la radio après retour positif du back
                    const radioElement = document.getElementById(\`radio\${numCritere}-\${getStatutIndex(statut)}\`);
                    if (radioElement) {
                        radioElement.checked = true;
                    }

                    // Mettre à jour le contenu de la cellule pointsObtenus
                    const pointsCell = document.getElementById(\`pointsObtenus\${numCritere}\`);
                    if (pointsCell) {
                        pointsCell.textContent = responseData.points_obtenus;
                    }
                    
                    return;
                } catch (error) {
                    if (attempt < retries - 1) {
                        console.warn(\`Tentative \${attempt + 1} échouée. Nouvel essai...\`);
                    } else {
                        console.error("Error:", error);
                    }
                }
            }
        }

        // Fonction pour surveiller la grille et ajouter les écouteurs d'événements
        function surveillerEtAjouterEcouteurs() {
            const targetNode = document.getElementById("grille"); // Assurez-vous que la grille a cet ID
            const config = { childList: true, subtree: true };

            const observer = new MutationObserver(function (mutationsList, observer) {
                // Recherchez les éléments radio
                const radios = document.querySelectorAll("input[type='radio']");
                if (radios.length > 0) {
                    console.log("Grille chargée, ajout des écouteurs d'événements aux radios.");
                    
                    // Ajoutez les écouteurs d'événements à chaque radio
                    radios.forEach(radio => {
                        radio.addEventListener("click", function(event) {
                            const radioId = event.target.id;
                            const numCritere = extractNumCritere(radioId);
                            const statut = getStatut(radioId);
                            
                            // Désélectionner la radio temporairement
                            event.target.checked = false;
                            
                            // Envoie la réponse au back-end
                            envoyerReponse(getUrlParameter("id"), numCritere, statut);
                        });
                    });
                    // Arrêtez d'observer une fois les écouteurs ajoutés
                    observer.disconnect();
                }
            });

            // Lance l'observation
            observer.observe(targetNode, config);
        }

        // Fonction pour afficher la liste des critères obligatoires non validés
        window.afficherCriteresObligatoiresNonValides = function(criteres) {
            const listeCriteresElement = document.getElementById("listeCriteresOnV");
            if (listeCriteresElement) {
                // Vide la liste avant de la remplir, même si la liste est vide
                listeCriteresElement.innerHTML = "";

                // Si la liste des critères est vide, ajoute un message indiquant qu'il n'y a pas de critères non validés
                if (criteres.length === 0) {
                    const message = document.createElement("li");
                    message.textContent = "Aucun critère non validé";
                    listeCriteresElement.appendChild(message);
                } else {
                    // Crée une entrée pour chaque critère non validé
                    criteres.forEach(critereNum => {
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
            } else {
                console.warn("L'élément listeCriteresOnV n'existe pas dans la page.");
            }
        }

        // Fonction globale pour mise à jour du rapport provisoire
        window.mettreAJourRapportProvisoire = function(data) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = document.getElementById(key);
                    if (element) {
                        // Vérifie si la clé correspond à \`points_obligatoires_atteints\` ou \`resultat\`
                        if (key === "points_obligatoires_atteints" || key === "resultat") {
                            // Affiche "OUI" si la valeur est true, sinon affiche "NON"
                            element.textContent = data[key] ? "OUI" : "NON";
                        } else {
                            // Sinon, affiche la valeur directement
                            element.textContent = data[key];
                        }
                    }
                }
            }
        }

        // Fonction pour extraire le numéro de critère de l'ID du bouton radio
        function extractNumCritere(radioId) {
            const match = radioId.match(/radio([^-]+)-/);
            return match ? match[1] : null;
        }

        // Fonction pour déterminer le statut en fonction de la radio sélectionnée
        function getStatut(radioId) {
            const suffix = radioId.split("-")[1];
            if (suffix === "1") return "VALIDE";
            if (suffix === "2") return "NON_VALIDE";
            return "NON_APPLICABLE";
        }

        // Fonction pour obtenir l'index du statut pour l'ID du bouton radio
        function getStatutIndex(statut) {
            if (statut === "VALIDE") return 1;
            if (statut === "NON_VALIDE") return 2;
            return 3;
        }

        // Fonction pour extraire les paramètres de l'URL
        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Appel à la fonction après que la grille est rendue
        window.addEventListener("load", function() {
            surveillerEtAjouterEcouteurs(); // Lancer la surveillance et ajouter les écouteurs d'événements après le chargement de la grille
        });
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container22">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    (function() {
        // Fonction pour envoyer le commentaire au back
        function envoyerCommentaire(idGrille, numCritere, commentaire) {
            // Vérification du token une seule fois
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                sessionStorage.setItem('message', JSON.stringify({ type: 'error', text: 'Vous devez être connecté pour accéder à cette page.' }));
                window.location.href = '/';
                return;
            }
            
            console.log("Envoi du commentaire au back :", {
                num_critere: numCritere,
                commentaire: commentaire
            });

            const url = \`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/critere/\${numCritere}/commentaire\`;

            const data = commentaire;

            function fetchWithRetry(url, options, retries = 3) {
                return fetch(url, options)
                    .then(response => {
                        if (!response.ok && retries > 0) {
                            return fetchWithRetry(url, options, retries - 1);
                        }
                        return response;
                    })
                    .catch(error => {
                        if (retries > 0) {
                            return fetchWithRetry(url, options, retries - 1);
                        }
                        throw error;
                    });
            }

            fetchWithRetry(url, {
                method: "POST",
                headers: {
                    'Authorization': \`Bearer \${token}\`,
                    "Content-Type": "application/text"
                },
                body: data
            })
            .then(response => {
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

            .then(reponse => {
                console.log("Réponse du back :", reponse); // Afficher la réponse du backend dans la console

                // Mettre à jour le commentaire s'il existe
                const commentaireElement = document.getElementById(\`commentaire\${reponse.num_critere}\`);
                if (commentaireElement) {
                    const commentaireModifie = reponse.commentaire_modifie === "true";
                    const commentaireObligatoire = reponse.commentaire_obligatoire === "true";

                    if (commentaireModifie) {
                    commentaireElement.value = reponse.commentaire || "";
                    commentaireElement.classList.remove("CAF-value");
                    } else if (!commentaireModifie && commentaireObligatoire) {
                    commentaireElement.placeholder = reponse.commentaire || "";
                    commentaireElement.classList.add("CAF-value");
                    commentaireElement.value = "";
                    }
                }
            })
            .catch(error => {
                console.error("Erreur lors de l'envoi du commentaire:", error);
            });
        }

        // Fonction pour ajouter les écouteurs d'événements sur les champs commentaires
        function ajouterEcouteursCommentaires(commentaireField) {
            commentaireField.addEventListener("blur", function(event) {
                const commentaireId = event.target.id;
                const numCritere = extractNumCritere(commentaireId);
                const commentaire = event.target.value;

                // Envoie le commentaire au back-end
                envoyerCommentaire(getUrlParameter("id"), numCritere, commentaire);
            });
        }

        // Fonction pour surveiller l'ajout des champs de commentaires dans le DOM
        function surveillerEtAjouterEcouteursCommentaires() {
            const targetNode = document.getElementById("grille"); // L'ID du parent contenant les commentaires
            const config = { childList: true, subtree: true };

            const observer = new MutationObserver(function(mutationsList) {
                // Recherchez les champs commentaires
                const commentaires = document.querySelectorAll("textarea[id^='commentaire']");
                if (commentaires.length > 0) {

                    
                    // Ajoutez les écouteurs d'événements à chaque champ commentaire
                    commentaires.forEach(commentaireField => {
                        ajouterEcouteursCommentaires(commentaireField);
                    });
                    // Arrêtez d'observer si les commentaires sont trouvés
                    observer.disconnect();
                }
            });

            // Lance l'observation du parent des commentaires
            observer.observe(targetNode, config);
        }

        // Fonction pour extraire le numéro de critère de l'ID du champ commentaire
        function extractNumCritere(commentaireId) {
            const match = commentaireId.match(/commentaire([0-9]+)/);
            return match ? match[1] : null;
        }

        // Fonction pour extraire les paramètres de l'URL
        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Appel à la fonction après que la page est rendue
        window.addEventListener("load", function() {
            surveillerEtAjouterEcouteursCommentaires(); // Lancer la surveillance après le chargement de la page
        });
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container24">
          <React.Fragment>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /* Lignes paires */\n    .ligneGrille:nth-child(even) {\n    background-color: #f0f8ff; /* Bleu très clair pour les lignes paires */\n    }\n\n    /* Lignes impaires */\n    .ligneGrille:nth-child(odd) {\n    background-color: #ffffff; /* Blanc pour les lignes impaires */\n    }\n    \n    .ligneGrille:hover .inputCommentaireGrille,\n    .ligneGrille:nth-child(even) .inputCommentaireGrille {\n    background-color: transparent; /* Garde le textarea transparent pour l'harmonie avec la ligne */\n    }\n\n    .ligneCommune, .ligneGrille {\n    box-sizing: border-box; /* Inclut le padding dans la taille totale */\n    }\n\n    .titreColonnes, .ligneGrille, .ligneCommune {\n    border-right: 1px solid #ccc; /* Bordure droite pour séparer les colonnes */\n    }\n\n    .titreColonnes:last-child, .ligneGrille:last-child {\n    border-right: none; /* Supprime la dernière bordure pour la dernière colonne */\n    }\n\n    .cellule:last-child {\n    border-right-width: 0; /* Supprime la dernière bordure droite */\n    }\n",
              }}
            />
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container26">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
  document.addEventListener("grilleRenderComplete", function() {
    const textareas = document.querySelectorAll("textarea");
    
    textareas.forEach((textarea) => {
      textarea.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          textarea.blur();
        }
      });
    });
  });
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <div>
        <div className="grille-de-controle-container28">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
    // Script pour la page Grille de contrôle
    (function() {
        const ongletGrille = document.getElementById("ongletGrille");
        const ongletRapport = document.getElementById("ongletRapport");
        const ongletVerification = document.getElementById("ongletVerification");
        const grilleContainer = document.getElementById("grilleContainer");
        const rapportContainer = document.getElementById("rapportContainer");
        const verificationContainer = document.getElementById("verificationContainer");

        // Fonction pour changer d'onglet sur la page Grille de contrôle
        function afficherGrille() {
            grilleContainer.style.display = "flex";  // Afficher le contenu de Grille
            rapportContainer.style.display = "none"; // Cacher le contenu de Rapport
            verificationContainer.style.display = "none"; // Cacher le contenu de Vérification
            ongletGrille.classList.add("actif");
            ongletRapport.classList.remove("actif");
            ongletVerification.classList.remove("actif");
        }

        async function afficherRapport() {
            const urlParams = new URLSearchParams(window.location.search);
            const idGrille = urlParams.get('id');
            if (idGrille) {
                try {
                    const response = await fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/rapport\`, {
                        method: 'GET'
                    });
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération du rapport');
                    }
                    const data = await response.json();
                    console.log('Rapport:', data); // Log des données pour vérification

                    // Appeler la fonction pour mettre à jour le rapport provisoire
                    window.mettreAJourRapportProvisoire(data);
                    window.afficherCriteresObligatoiresNonValides(data.criteres_obligatoires_non_valides);
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }

            grilleContainer.style.display = "none";   // Cacher le contenu de Grille
            rapportContainer.style.display = "flex";  // Afficher le contenu de Rapport
            verificationContainer.style.display = "none"; // Cacher le contenu de Vérification
            ongletRapport.classList.add("actif");
            ongletGrille.classList.remove("actif");
            ongletVerification.classList.remove("actif");
        }

        async function afficherVerification() {
            const urlParams = new URLSearchParams(window.location.search);
            const idGrille = urlParams.get('id');
            if (idGrille) {
                try {
                    const response = await fetch(\`https://starsmanager-edefd7b34118.herokuapp.com/grilleControle/\${idGrille}/verification\`, {
                        method: 'GET'
                    });
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération de la vérification');
                    }
                    const data = await response.json();
                    console.log('Vérification:', data); // Log des données pour vérification

                    // Appeler les fonctions pour mettre à jour les listes
                    mettreAJourListe(data.criteres_obligatoires_a_cocher, "listeCriteresOaC");
                    mettreAJourListe(data.criteres_optionnels_a_cocher, "listeCriteresAaC");
                    mettreAJourListe(data.commentaires_obligatoires_a_fournir, "listeCommentairesAF");
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }

            grilleContainer.style.display = "none";  // Cacher le contenu de Grille
            rapportContainer.style.display = "none"; // Cacher le contenu de Rapport
            verificationContainer.style.display = "flex"; // Afficher le contenu de Vérification
            ongletVerification.classList.add("actif");
            ongletGrille.classList.remove("actif");
            ongletRapport.classList.remove("actif");
        }

        function mettreAJourListe(criteres, elementId) {
            const listeCriteresElement = document.getElementById(elementId);
            if (listeCriteresElement) {
                // Vide la liste avant de la remplir, même si la liste est vide
                listeCriteresElement.innerHTML = "";

                // Si la liste des critères est vide, ajoute un message indiquant qu'il n'y a pas de critères non validés
                if (criteres.length === 0) {
                    const message = document.createElement("li");
                    message.textContent = "Aucun critère non validé";
                    listeCriteresElement.appendChild(message);
                } else {
                    // Crée une entrée pour chaque critère non validé
                    criteres.forEach(critereNum => {
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
            } else {
                console.warn(\`L'élément \${elementId} n'existe pas dans la page.\`);
            }
        }

        // Ajouter les écouteurs d'événements sur les onglets
        ongletGrille.addEventListener("click", afficherGrille);
        ongletRapport.addEventListener("click", afficherRapport);
        ongletVerification.addEventListener("click", afficherVerification);

        // Activer l'onglet Grille par défaut au chargement de la page
        afficherGrille();
    })();
`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default GrilleDeControle
