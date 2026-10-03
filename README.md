# Job Board Express / EJS

## Description

Ce projet est un Job Board développé avec Node.js, Express et EJS.

Les offres sont stockées dans un fichier JSON et sont lues côté serveur avec Node.js.  
Express traite les routes et EJS génère les pages HTML côté serveur.

Le projet ne contient pas de base de données MySQL.

## Technologies utilisées

- Node.js
- Express
- EJS
- JSON
- CSS
- Git / GitHub

## Installation

Cloner le projet :

```bash
git clone https://github.com/meskiabdelilah/job-board-express-json.git
```

Entrer dans le projet :

```bash
cd job-board-express-json
```

Installer les dépendances :

```bash
npm install
```

## Lancer le projet

Mode développement :

```bash
npm run dev
```

Mode normal :

```bash
npm start
```

Le serveur est disponible sur :

```text
http://localhost:3000
```

## Routes

### Liste des offres

```text
GET /offres
```

Affiche toutes les offres disponibles.

### Filtrer les offres par ville

```text
GET /offres?ville=Nador
```

Exemple :

```text
/offres?ville=Casablanca
```

Le filtre est effectué côté serveur avec Express.

### Détail d'une offre

```text
GET /offres/:id
```

Exemple :

```text
/offres/1
```

Affiche les informations détaillées d'une offre.

### Page d'accueil

```text
GET /
```

Redirige vers :

```text
/offres
```

## Gestion des erreurs

Si une offre demandée n'existe pas, le serveur retourne une page 404.

Les URLs inexistantes retournent également une page 404.

## Données

Les offres sont stockées dans :

```text
data/offres.json
```

Le fichier JSON est lu côté serveur avec Node.js.

Les données ne sont pas chargées avec `fetch()` dans le navigateur.

## Rendu EJS

Le HTML est généré côté serveur avec EJS.

Flux principal :

```text
Requête
→ Route Express
→ Lecture des données JSON
→ res.render()
→ Vue EJS
→ HTML envoyé au navigateur
```

## Limites connues

- Pas de base de données.
- Pas d'authentification.
- Pas de back-office.
- Pas de CRUD complet.
- Les données sont stockées uniquement dans un fichier JSON.
- Le filtre disponible est actuellement basé sur la ville.

## Auteur

Abdelilah Meski