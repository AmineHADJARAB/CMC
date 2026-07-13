# Gestion Tabac — Application de bureau (Windows)

Ce dossier transforme votre application (le fichier `app/index.html`) en un **vrai logiciel Windows installable** (un `.exe`), grâce à Electron.

## Important — à faire SUR VOTRE PC (pas ici dans le chat)

Je ne peux pas fabriquer et tester un `.exe` Windows depuis cet environnement (il est basé sur Linux, sans Windows pour vérifier que tout marche). La bonne façon de faire, et la plus fiable, est d'utiliser **Claude Code** directement sur votre PC Windows : il pourra installer les outils, lancer les commandes, corriger un souci si besoin, et vous obtiendrez un `.exe` que vous aurez testé vous-même.

## Ce qu'il vous faut sur votre PC

1. **Node.js** (version 18 ou plus récente) : téléchargez-le sur https://nodejs.org (choisissez la version "LTS") et installez-le normalement.
2. **Claude Code** : si vous ne l'avez pas encore, installez-le depuis https://claude.com/product/claude-code (ou demandez-moi comment faire).
3. Ce dossier `tabac-app-electron` copié sur votre PC.

## Étapes

Ouvrez Claude Code (ou une simple invite de commande / PowerShell) dans ce dossier, puis :

```bash
npm install
```
Cela télécharge Electron et l'outil de packaging (electron-builder). La première fois, ça peut prendre plusieurs minutes.

Pour tester l'application immédiatement (sans encore créer l'installateur) :
```bash
npm start
```
Une fenêtre de bureau doit s'ouvrir avec votre application, comme un vrai logiciel.

Pour fabriquer le vrai fichier d'installation Windows (`.exe`) :
```bash
npm run dist
```
Le fichier d'installation apparaîtra dans le dossier `release/`, par exemple `Gestion Tabac Setup 1.0.0.exe`. Double-cliquez dessus pour l'installer normalement, avec un raccourci sur le Bureau et dans le menu Démarrer, exactement comme Stock Express.

## Si Claude Code rencontre un souci

C'est normal que ça arrive parfois avec un premier essai (dépendances manquantes, version de Node trop ancienne, etc.). Sur votre PC, Claude Code peut lire les messages d'erreur et corriger automatiquement — c'est justement pour ça qu'il vaut mieux faire cette étape chez vous plutôt que dans ce chat.

## Vos données restent locales

Rien ne change dans le fonctionnement de l'application elle-même : toutes vos données (produits, ventes, achats, commandes...) restent stockées localement sur votre PC, exactement comme avant. Le fichier de données automatique (Paramètres → "Fichier de données") continue de fonctionner normalement dans cette version installée.

## Mettre à jour l'application plus tard

Si je vous envoie une nouvelle version de `index.html` avec de nouvelles fonctionnalités, il suffit de remplacer le fichier `app/index.html` dans ce dossier, puis de relancer `npm run dist` pour générer un nouvel installateur.
