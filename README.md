# Tu te mets combien ?

Jeu d'enchères pour deux équipes, piloté par un meneur de jeu (MJ).
Trois fichiers, aucune installation, aucun serveur : ça tourne dans le navigateur.

```
index.html      → le jeu (ne pas toucher)
questions.js    → vos questions (le seul fichier à modifier)
README.md       → cette notice
```

## Le déroulé d'une manche

1. Le MJ choisit un thème et l'annonce.
2. L'équipe qui ouvre annonce un niveau entre 1 et 10 (10 = la question la plus dure du thème).
3. L'autre équipe surenchérit plus haut, ou passe.
4. Dès qu'une équipe passe, la dernière à avoir enchéri doit répondre à la question de son niveau.
5. Réponse juste → elle marque le nombre de points de sa mise.
   Réponse fausse → l'adversaire empoche les points (option désactivable dans les réglages).
6. L'équipe qui ouvre les enchères alterne à chaque manche.

Raccourcis clavier pendant les enchères : touches **1 à 9**, **0** pour le niveau 10, **P** pour passer.

## Modifier les questions

Ouvrez `questions.js` dans Visual Studio Code. La structure est toujours la même :

```js
{
  theme: "Carrelage",
  questions: [
    { niveau: 1,  question: "Votre question facile ?", reponse: "La réponse" },
    { niveau: 2,  question: "...", reponse: "..." },
    // ... jusqu'à
    { niveau: 10, question: "Votre question la plus dure ?", reponse: "La réponse" }
  ]
},
```

- Un thème = 10 questions, une par niveau.
- Ajoutez autant de thèmes que vous voulez, séparés par une virgule.
- Attention à ne pas supprimer une virgule ou une accolade : le jeu affiche alors « Aucun thème chargé ».
- Pour tester : double-cliquez sur `index.html`, ça s'ouvre dans votre navigateur.

## Mettre en ligne sur GitHub Pages (gratuit)

1. Sur GitHub : **New repository** → nom `tu-te-mets-combien` → **Public** → Create.
2. **Add file → Upload files** → déposez `index.html`, `questions.js` et `README.md` → Commit.
3. Onglet **Settings → Pages** → Source : *Deploy from a branch* → Branch : `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 minutes, votre adresse s'affiche :
   `https://VOTRE-COMPTE.github.io/tu-te-mets-combien/`

Depuis VS Code, vous pouvez aussi cloner le dépôt et pousser vos modifications de questions directement : la page en ligne se met à jour toute seule.

## Intégrer sur votre site Odoo

Dans l'éditeur de site Odoo, ajoutez un bloc **Code HTML** (aussi appelé *Intégrer un code* / *Embed Code*), puis collez :

```html
<iframe
  src="https://VOTRE-COMPTE.github.io/tu-te-mets-combien/"
  title="Tu te mets combien ?"
  loading="lazy"
  style="width:100%;height:780px;border:0;border-radius:14px;">
</iframe>
```

Remplacez l'adresse par la vôtre. Ajustez `height` selon le rendu (680 px suffit souvent sur ordinateur, 820 px est plus confortable sur mobile).

**Autre option, sans GitHub :** dans Odoo, allez dans *Paramètres → Technique → Pièces jointes*, téléversez les deux fichiers et pointez l'iframe vers l'URL de `index.html`. La méthode GitHub Pages reste plus simple à maintenir, surtout pour modifier les questions.

## Personnaliser les couleurs

Tout est regroupé en haut de `index.html`, dans le bloc `:root` :
`--laiton` (l'accent doré), `--equipeA` et `--equipeB` (les deux équipes), `--encre` (le fond).
