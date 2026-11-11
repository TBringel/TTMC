/* ==========================================================================
   TU TE METS COMBIEN ? — Banque de questions
   28 thèmes · 280 questions
   --------------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER POUR CHANGER LE CONTENU DU JEU.

   Règles à respecter :
   - Chaque thème contient 10 questions, une par niveau (1 = facile, 10 = très dure).
   - Gardez bien les guillemets, les virgules et les accolades.
   - Une virgule après chaque accolade fermante de thème, sauf la dernière.
   - Pour supprimer un thème, effacez son bloc entier, de l'accolade ouvrante
     à l'accolade fermante et sa virgule.
   - Pour tester : ouvrez index.html dans votre navigateur. Si le jeu affiche
     « Aucun thème chargé », c'est qu'une virgule ou un guillemet manque.
   ========================================================================== */

window.THEMES = [

  /* ==========================================================================
     CULTURE GÉNÉRALE
     ========================================================================== */

  {
    theme: "Cinéma",
    questions: [
      { niveau: 1,  question: "Qui a réalisé le film « Titanic » (1997) ?", reponse: "James Cameron" },
      { niveau: 2,  question: "Dans quelle saga trouve-t-on le personnage de Dark Vador ?", reponse: "Star Wars" },
      { niveau: 3,  question: "Quel acteur incarne Jack Sparrow dans « Pirates des Caraïbes » ?", reponse: "Johnny Depp" },
      { niveau: 4,  question: "Quel studio d’animation a produit « Toy Story » ?", reponse: "Pixar" },
      { niveau: 5,  question: "Qui a réalisé « Pulp Fiction » ?", reponse: "Quentin Tarantino" },
      { niveau: 6,  question: "Quel film a remporté l’Oscar du meilleur film en 2020 ?", reponse: "Parasite" },
      { niveau: 7,  question: "Quel est le premier long métrage d’animation des studios Disney ?", reponse: "Blanche-Neige et les Sept Nains (1937)" },
      { niveau: 8,  question: "Quel film français détient le record d’entrées en salles en France ?", reponse: "Bienvenue chez les Ch’tis (2008)" },
      { niveau: 9,  question: "Quel acteur détient le record d’Oscars du meilleur acteur ?", reponse: "Daniel Day-Lewis (3 Oscars)" },
      { niveau: 10, question: "En quelle année les frères Lumière ont-ils organisé la première projection publique payante ?", reponse: "1895 (le 28 décembre, à Paris)" }
    ]
  },

  {
    theme: "Géographie",
    questions: [
      { niveau: 1,  question: "Quelle est la capitale de la France ?", reponse: "Paris" },
      { niveau: 2,  question: "Quel est le plus grand océan du monde ?", reponse: "L’océan Pacifique" },
      { niveau: 3,  question: "Dans quel pays se trouve le Machu Picchu ?", reponse: "Le Pérou" },
      { niveau: 4,  question: "Quelle est la capitale de l’Australie ?", reponse: "Canberra" },
      { niveau: 5,  question: "Quel est le plus long fleuve d’Europe ?", reponse: "La Volga" },
      { niveau: 6,  question: "Combien de pays composent l’Union européenne ?", reponse: "27" },
      { niveau: 7,  question: "Quel est le point culminant du continent africain ?", reponse: "Le Kilimandjaro (5 895 m)" },
      { niveau: 8,  question: "Quel est le pays le plus peuplé d’Afrique ?", reponse: "Le Nigeria" },
      { niveau: 9,  question: "Quel pays possède le plus grand nombre de fuseaux horaires ?", reponse: "La France (12, grâce aux territoires d’outre-mer)" },
      { niveau: 10, question: "Quel est le seul pays traversé à la fois par l’équateur et par le tropique du Capricorne ?", reponse: "Le Brésil" }
    ]
  },

  {
    theme: "Musique",
    questions: [
      { niveau: 1,  question: "Quel instrument comporte 88 touches ?", reponse: "Le piano" },
      { niveau: 2,  question: "Quel groupe a enregistré « Bohemian Rhapsody » ?", reponse: "Queen" },
      { niveau: 3,  question: "Combien de cordes compte une guitare classique ?", reponse: "6" },
      { niveau: 4,  question: "Qui est le chanteur des Rolling Stones ?", reponse: "Mick Jagger" },
      { niveau: 5,  question: "Qui a composé l’opéra « La Flûte enchantée » ?", reponse: "Mozart" },
      { niveau: 6,  question: "Quel groupe a sorti l’album « The Dark Side of the Moon » ?", reponse: "Pink Floyd" },
      { niveau: 7,  question: "Quel artiste belge a écrit et interprété « Ne me quitte pas » ?", reponse: "Jacques Brel" },
      { niveau: 8,  question: "Combien de symphonies Beethoven a-t-il composées ?", reponse: "9" },
      { niveau: 9,  question: "Quel est l’album le plus vendu de tous les temps ?", reponse: "« Thriller » de Michael Jackson" },
      { niveau: 10, question: "En quelle année s’est déroulé le festival de Woodstock ?", reponse: "1969" }
    ]
  },

  {
    theme: "Les sports",
    questions: [
      { niveau: 1,  question: "Combien de joueurs compte une équipe de football sur le terrain ?", reponse: "Onze" },
      { niveau: 2,  question: "Tous les combien d’années ont lieu les Jeux olympiques d’été ?", reponse: "Tous les quatre ans" },
      { niveau: 3,  question: "Combien de joueurs une équipe de basket aligne-t-elle sur le terrain ?", reponse: "Cinq" },
      { niveau: 4,  question: "De quelle couleur est le maillot du leader du Tour de France ?", reponse: "Jaune" },
      { niveau: 5,  question: "Quelle est la distance exacte d’un marathon ?", reponse: "42,195 km" },
      { niveau: 6,  question: "Que représentent les cinq anneaux du drapeau olympique ?", reponse: "Les cinq continents" },
      { niveau: 7,  question: "Quel baron français est à l’origine des Jeux olympiques modernes ?", reponse: "Pierre de Coubertin" },
      { niveau: 8,  question: "En quelle année et dans quelle ville se sont tenus les premiers JO modernes ?", reponse: "En 1896, à Athènes" },
      { niveau: 9,  question: "Quelle est la devise olympique, en latin ?", reponse: "Citius, Altius, Fortius — plus vite, plus haut, plus fort" },
      { niveau: 10, question: "Dans quel sport olympique les concurrents franchissent-ils la ligne d’arrivée en lui tournant le dos ?", reponse: "L’aviron" }
    ]
  },

  {
    theme: "Les inventions",
    questions: [
      { niveau: 1,  question: "Quelle invention permet de parler à quelqu’un qui est loin ?", reponse: "Le téléphone" },
      { niveau: 2,  question: "Quel inventeur américain est associé à l’ampoule électrique ?", reponse: "Thomas Edison" },
      { niveau: 3,  question: "Quels frères français ont inventé le cinématographe ?", reponse: "Les frères Lumière" },
      { niveau: 4,  question: "Qui a mis au point l’imprimerie à caractères mobiles en Europe, vers 1450 ?", reponse: "Johannes Gutenberg" },
      { niveau: 5,  question: "Quels frères ont fait voler le premier ballon à air chaud, en 1783 ?", reponse: "Les frères Montgolfier" },
      { niveau: 6,  question: "Quel Écossais a déposé le brevet du téléphone en 1876 ?", reponse: "Alexander Graham Bell" },
      { niveau: 7,  question: "Qui a inventé l’écriture en relief pour les aveugles, alors qu’il était lui-même adolescent ?", reponse: "Louis Braille" },
      { niveau: 8,  question: "Quel système d’attache a été inventé après l’observation de fruits de bardane accrochés au poil d’un chien ?", reponse: "Le Velcro, par le Suisse Georges de Mestral" },
      { niveau: 9,  question: "Quel objet d’écriture du quotidien doit-on au Hongrois László Bíró ?", reponse: "Le stylo à bille" },
      { niveau: 10, question: "Quel revêtement antiadhésif a été découvert par accident en 1938 par le chimiste Roy Plunkett ?", reponse: "Le Téflon" }
    ]
  },

  /* ==========================================================================
     SCIENCES ET NATURE
     ========================================================================== */

  {
    theme: "Le corps humain",
    questions: [
      { niveau: 1,  question: "Combien de doigts compte une main ?", reponse: "Cinq" },
      { niveau: 2,  question: "Quel organe pompe le sang dans tout le corps ?", reponse: "Le cœur" },
      { niveau: 3,  question: "Combien de poumons avons-nous ?", reponse: "Deux" },
      { niveau: 4,  question: "Quel est le plus grand organe du corps humain ?", reponse: "La peau" },
      { niveau: 5,  question: "Combien d’os compte le squelette d’un adulte, environ ?", reponse: "206" },
      { niveau: 6,  question: "Quel est le plus long os du corps ?", reponse: "Le fémur" },
      { niveau: 7,  question: "Combien de litres de sang circulent chez un adulte, environ ?", reponse: "Environ 5 litres" },
      { niveau: 8,  question: "Quel organe produit l’insuline ?", reponse: "Le pancréas" },
      { niveau: 9,  question: "Combien de vertèbres compte la colonne vertébrale ?", reponse: "33 au total, dont 24 mobiles (le sacrum et le coccyx sont soudés)" },
      { niveau: 10, question: "Quel est le plus petit os du corps humain, et où se trouve-t-il ?", reponse: "L’étrier, dans l’oreille moyenne (environ 3 mm)" }
    ]
  },

  {
    theme: "Le système solaire",
    questions: [
      { niveau: 1,  question: "Autour de quel astre la Terre tourne-t-elle ?", reponse: "Le Soleil" },
      { niveau: 2,  question: "Quelle planète surnomme-t-on « la planète rouge » ?", reponse: "Mars" },
      { niveau: 3,  question: "Combien de planètes compte le système solaire ?", reponse: "Huit" },
      { niveau: 4,  question: "Quelle est la plus grosse planète du système solaire ?", reponse: "Jupiter" },
      { niveau: 5,  question: "Quelle planète est la plus proche du Soleil ?", reponse: "Mercure" },
      { niveau: 6,  question: "Quelle planète a perdu son statut de planète en 2006 ?", reponse: "Pluton, devenue planète naine" },
      { niveau: 7,  question: "Combien de temps met la lumière du Soleil pour nous parvenir ?", reponse: "Environ 8 minutes (8 min 20)" },
      { niveau: 8,  question: "Quelle planète possède le plus grand nombre de lunes connues ?", reponse: "Saturne (devant Jupiter — les comptages évoluent régulièrement)" },
      { niveau: 9,  question: "Quel est le plus haut volcan connu du système solaire, et où se trouve-t-il ?", reponse: "Olympus Mons, sur Mars (environ 22 km de haut)" },
      { niveau: 10, question: "Quelle planète tourne pratiquement « couchée », son axe presque dans le plan de son orbite ?", reponse: "Uranus (inclinaison d’environ 98°)" }
    ]
  },

  {
    theme: "Les volcans",
    questions: [
      { niveau: 1,  question: "Qu’est-ce qui s’écoule d’un volcan en éruption ?", reponse: "La lave" },
      { niveau: 2,  question: "Comment appelle-t-on l’ouverture au sommet d’un volcan ?", reponse: "Le cratère" },
      { niveau: 3,  question: "Comment appelle-t-on la roche en fusion tant qu’elle est sous terre ?", reponse: "Le magma (elle devient lave en sortant)" },
      { niveau: 4,  question: "Comment appelle-t-on le scientifique qui étudie les volcans ?", reponse: "Un volcanologue" },
      { niveau: 5,  question: "Quel volcan italien a enseveli Pompéi en l’an 79 ?", reponse: "Le Vésuve" },
      { niveau: 6,  question: "Quel volcan de Sicile est le plus actif d’Europe ?", reponse: "L’Etna" },
      { niveau: 7,  question: "Comment appelle-t-on la zone du Pacifique qui concentre la majorité des volcans actifs de la planète ?", reponse: "La ceinture de feu du Pacifique" },
      { niveau: 8,  question: "Quel volcan islandais a paralysé le trafic aérien européen en 2010 ?", reponse: "L’Eyjafjallajökull" },
      { niveau: 9,  question: "Comment appelle-t-on le nuage brûlant de gaz et de cendres qui dévale les pentes à grande vitesse ?", reponse: "Une nuée ardente (ou coulée pyroclastique)" },
      { niveau: 10, question: "Quelle éruption indonésienne de 1815 a provoqué « l’année sans été » en 1816 ?", reponse: "Celle du Tambora" }
    ]
  },

  {
    theme: "Les microbes et les vaccins",
    questions: [
      { niveau: 1,  question: "Comment appelle-t-on les micro-organismes responsables du rhume ou de la grippe ?", reponse: "Des virus" },
      { niveau: 2,  question: "Quel geste simple, avec du savon, limite le plus la transmission des microbes ?", reponse: "Se laver les mains" },
      { niveau: 3,  question: "Les antibiotiques sont-ils efficaces contre les virus ?", reponse: "Non, uniquement contre les bactéries" },
      { niveau: 4,  question: "Quel scientifique français a mis au point le vaccin contre la rage ?", reponse: "Louis Pasteur" },
      { niveau: 5,  question: "Comment appelle-t-on les molécules que notre corps fabrique pour neutraliser un intrus ?", reponse: "Des anticorps" },
      { niveau: 6,  question: "Contre quelle maladie Edward Jenner a-t-il conçu le tout premier vaccin, en 1796 ?", reponse: "La variole" },
      { niveau: 7,  question: "Comment appelle-t-on la protection indirecte des non-vaccinés lorsqu’une grande partie de la population est immunisée ?", reponse: "L’immunité collective (ou immunité de groupe)" },
      { niveau: 8,  question: "Quel antibiotique Alexander Fleming a-t-il découvert par accident en 1928 ?", reponse: "La pénicilline" },
      { niveau: 9,  question: "Quelle est la seule maladie humaine officiellement éradiquée de la planète, déclarée disparue en 1980 ?", reponse: "La variole" },
      { niveau: 10, question: "Comment appelle-t-on un virus qui n’infecte que des bactéries ?", reponse: "Un bactériophage (ou phage)" }
    ]
  },

  {
    theme: "Les médicaments du quotidien",
    questions: [
      { niveau: 1,  question: "Dans quel commerce achète-t-on des médicaments ?", reponse: "À la pharmacie" },
      { niveau: 2,  question: "Quel document le médecin remet-il pour obtenir certains médicaments ?", reponse: "Une ordonnance" },
      { niveau: 3,  question: "Quelle molécule prend-on le plus couramment contre un mal de tête ?", reponse: "Le paracétamol" },
      { niveau: 4,  question: "Quel est le nom commercial le plus connu du paracétamol en France ?", reponse: "Le Doliprane" },
      { niveau: 5,  question: "Qu’est-ce qu’un médicament générique ?", reponse: "La copie d’un médicament dont le brevet a expiré, même molécule, moins cher" },
      { niveau: 6,  question: "Qu’appelle-t-on « effet placebo » ?", reponse: "Une amélioration ressentie avec un produit dépourvu de principe actif" },
      { niveau: 7,  question: "De quelle écorce d’arbre l’aspirine est-elle issue à l’origine ?", reponse: "L’écorce de saule" },
      { niveau: 8,  question: "À quelle grande famille appartient l’ibuprofène ?", reponse: "Les anti-inflammatoires non stéroïdiens (les AINS)" },
      { niveau: 9,  question: "Quelle est la molécule active de l’aspirine ?", reponse: "L’acide acétylsalicylique" },
      { niveau: 10, question: "Que signifient les lettres « DCI » inscrites sur une boîte de médicament ?", reponse: "Dénomination Commune Internationale : le nom officiel de la molécule" }
    ]
  },

  {
    theme: "Les légumes",
    questions: [
      { niveau: 1,  question: "De quelle couleur est une carotte ordinaire ?", reponse: "Orange" },
      { niveau: 2,  question: "Quel légume fait pleurer quand on l’épluche ?", reponse: "L’oignon" },
      { niveau: 3,  question: "Quel légume vert donne sa force à Popeye ?", reponse: "Les épinards" },
      { niveau: 4,  question: "La tomate est-elle un fruit ou un légume ?", reponse: "Un fruit en botanique, un légume en cuisine" },
      { niveau: 5,  question: "De quel légume-racine tire-t-on du sucre ?", reponse: "La betterave sucrière" },
      { niveau: 6,  question: "De quelle partie du monde la pomme de terre est-elle originaire ?", reponse: "D’Amérique du Sud, la cordillère des Andes" },
      { niveau: 7,  question: "Quel agronome français a fait accepter la pomme de terre au XVIIIe siècle ?", reponse: "Antoine Parmentier" },
      { niveau: 8,  question: "Quelle partie de la plante mange-t-on quand on mange du brocoli ?", reponse: "Les boutons floraux, c’est-à-dire les fleurs pas encore ouvertes" },
      { niveau: 9,  question: "Pourquoi l’oignon pique-t-il les yeux ?", reponse: "Il libère un composé soufré volatil qui irrite l’œil au contact des larmes" },
      { niveau: 10, question: "Chou, brocoli, chou-fleur, chou de Bruxelles, kale : qu’ont-ils d’exceptionnel en commun ?", reponse: "Ce sont toutes des variétés d’une seule et même espèce, Brassica oleracea" }
    ]
  },

  {
    theme: "Les fruits",
    questions: [
      { niveau: 1,  question: "De quelle couleur est une banane mûre ?", reponse: "Jaune" },
      { niveau: 2,  question: "Quel fruit tombe sur la tête de Newton dans la légende ?", reponse: "Une pomme" },
      { niveau: 3,  question: "Quel fruit exotique porte une couronne de feuilles sur le dessus ?", reponse: "L’ananas" },
      { niveau: 4,  question: "De quel fruit obtient-on le pruneau ?", reponse: "La prune" },
      { niveau: 5,  question: "Comment appelait-on la tomate à son arrivée en Europe ?", reponse: "La pomme d’amour" },
      { niveau: 6,  question: "La fraise est-elle vraiment un fruit, en botanique ?", reponse: "Non, c’est un faux-fruit : les vrais fruits sont les petits grains jaunes à sa surface" },
      { niveau: 7,  question: "La banane est-elle une baie, en botanique ?", reponse: "Oui" },
      { niveau: 8,  question: "Quelle enzyme de l’ananas frais empêche une gelée de prendre ?", reponse: "La bromélaïne" },
      { niveau: 9,  question: "Quel pays est de très loin le premier producteur mondial de pommes ?", reponse: "La Chine" },
      { niveau: 10, question: "Quelle variété domine le commerce mondial de la banane, et quelle maladie la menace aujourd’hui ?", reponse: "La Cavendish, menacée par la maladie de Panama (le champignon TR4)" }
    ]
  },

  /* ==========================================================================
     SCOLAIRE
     ========================================================================== */

  {
    theme: "La Révolution française",
    questions: [
      { niveau: 1,  question: "En quelle année a eu lieu la prise de la Bastille ?", reponse: "1789" },
      { niveau: 2,  question: "À quelle date exacte ?", reponse: "Le 14 juillet" },
      { niveau: 3,  question: "Quel roi de France a été guillotiné en 1793 ?", reponse: "Louis XVI" },
      { niveau: 4,  question: "Quelle reine a été guillotinée quelques mois après lui ?", reponse: "Marie-Antoinette" },
      { niveau: 5,  question: "Quelle devise, toujours celle de la République, est née de la Révolution ?", reponse: "Liberté, Égalité, Fraternité" },
      { niveau: 6,  question: "Quel grand texte a été adopté le 26 août 1789 ?", reponse: "La Déclaration des droits de l’homme et du citoyen" },
      { niveau: 7,  question: "Comment appelle-t-on la période de 1793-1794 marquée par les exécutions massives ?", reponse: "La Terreur" },
      { niveau: 8,  question: "Quel révolutionnaire a été poignardé dans sa baignoire par Charlotte Corday ?", reponse: "Jean-Paul Marat" },
      { niveau: 9,  question: "Quel médecin a donné son nom à la guillotine, sans l’avoir inventée ?", reponse: "Joseph-Ignace Guillotin (il en avait proposé l’usage à l’Assemblée)" },
      { niveau: 10, question: "Quelle date du calendrier républicain marque la chute de Robespierre ?", reponse: "Le 9 Thermidor an II (27 juillet 1794)" }
    ]
  },

  {
    theme: "Les maths du collège",
    questions: [
      { niveau: 1,  question: "Combien font 7 × 8 ?", reponse: "56" },
      { niveau: 2,  question: "Combien de côtés compte un hexagone ?", reponse: "Six" },
      { niveau: 3,  question: "Combien vaut la somme des angles d’un triangle ?", reponse: "180 degrés" },
      { niveau: 4,  question: "Quelle est la valeur de π à deux décimales ?", reponse: "3,14" },
      { niveau: 5,  question: "Combien vaut la racine carrée de 144 ?", reponse: "12" },
      { niveau: 6,  question: "Comment appelle-t-on le plus grand côté d’un triangle rectangle ?", reponse: "L’hypoténuse" },
      { niveau: 7,  question: "Quel théorème relie les carrés des trois côtés d’un triangle rectangle ?", reponse: "Le théorème de Pythagore" },
      { niveau: 8,  question: "Quelle est la formule de l’aire d’un disque ?", reponse: "π × r² (pi fois le rayon au carré)" },
      { niveau: 9,  question: "Quel théorème permet de calculer des longueurs à l’aide de droites parallèles ?", reponse: "Le théorème de Thalès" },
      { niveau: 10, question: "Quelle est la formule du volume d’une sphère ?", reponse: "(4/3) × π × r³" }
    ]
  },

  {
    theme: "L’orthographe et la grammaire",
    questions: [
      { niveau: 1,  question: "Combien de lettres compte l’alphabet français ?", reponse: "26" },
      { niveau: 2,  question: "Combien de voyelles compte-t-il ?", reponse: "Six : a, e, i, o, u, y" },
      { niveau: 3,  question: "Quelle est la nature du mot « rapidement » ?", reponse: "Un adverbe" },
      { niveau: 4,  question: "Quel est le participe passé du verbe « prendre » ?", reponse: "Pris" },
      { niveau: 5,  question: "Quelle différence y a-t-il entre « ces » et « ses » ?", reponse: "« Ces » désigne (ceux-là), « ses » possède (les siens)" },
      { niveau: 6,  question: "Avec l’auxiliaire « être », avec quoi le participe passé s’accorde-t-il ?", reponse: "Avec le sujet" },
      { niveau: 7,  question: "Avec l’auxiliaire « avoir », avec quoi s’accorde-t-il ?", reponse: "Avec le complément d’objet direct, uniquement s’il est placé avant le verbe" },
      { niveau: 8,  question: "Comment appelle-t-on un mot qui se lit indifféremment dans les deux sens ?", reponse: "Un palindrome" },
      { niveau: 9,  question: "Quel temps ne doit jamais suivre un « si » de condition ?", reponse: "Le conditionnel — on écrit « si j’avais », jamais « si j’aurais »" },
      { niveau: 10, question: "Quel mot est traditionnellement cité comme le plus long du dictionnaire français ?", reponse: "Anticonstitutionnellement (25 lettres)" }
    ]
  },

  /* ==========================================================================
     TECHNOLOGIE
     ========================================================================== */

  {
    theme: "Les ordinateurs",
    questions: [
      { niveau: 1,  question: "Avec quel objet déplace-t-on le curseur à l’écran ?", reponse: "La souris" },
      { niveau: 2,  question: "Que veulent dire les lettres « PC » ?", reponse: "Personal Computer, ordinateur personnel" },
      { niveau: 3,  question: "Quel raccourci clavier permet de copier un élément ?", reponse: "Ctrl + C (Cmd + C sur Mac)" },
      { niveau: 4,  question: "Comment appelle-t-on le composant qui exécute les calculs, le « cerveau » de la machine ?", reponse: "Le processeur" },
      { niveau: 5,  question: "Que désigne la RAM, en français ?", reponse: "La mémoire vive" },
      { niveau: 6,  question: "Que signifie l’acronyme USB ?", reponse: "Universal Serial Bus" },
      { niveau: 7,  question: "Combien de bits contient un octet ?", reponse: "Huit" },
      { niveau: 8,  question: "Qui a fondé Microsoft avec Paul Allen ?", reponse: "Bill Gates" },
      { niveau: 9,  question: "Comment s’appelle le premier grand ordinateur électronique américain, mis en service en 1945 ?", reponse: "L’ENIAC" },
      { niveau: 10, question: "Quelle mathématicienne britannique du XIXe siècle est considérée comme la première programmeuse de l’histoire ?", reponse: "Ada Lovelace" }
    ]
  },

  {
    theme: "Les jeux vidéo",
    questions: [
      { niveau: 1,  question: "Quel plombier moustachu est la mascotte de Nintendo ?", reponse: "Mario" },
      { niveau: 2,  question: "Dans quel jeu empile-t-on des blocs qui tombent du haut de l’écran ?", reponse: "Tetris" },
      { niveau: 3,  question: "Quel hérisson bleu court à toute vitesse ?", reponse: "Sonic" },
      { niveau: 4,  question: "Quel jeu de construction en cubes est le plus vendu de toute l’histoire ?", reponse: "Minecraft" },
      { niveau: 5,  question: "Quelle console portable de Nintendo, sortie à la fin des années 80, a marqué toute une génération ?", reponse: "La Game Boy" },
      { niveau: 6,  question: "Dans quel pays Tetris a-t-il été créé ?", reponse: "En URSS, par un informaticien soviétique" },
      { niveau: 7,  question: "Quel jeu d’arcade de 1972 a lancé l’industrie du jeu vidéo grand public ?", reponse: "Pong, d’Atari" },
      { niveau: 8,  question: "Quel créateur japonais a imaginé Mario et Zelda ?", reponse: "Shigeru Miyamoto" },
      { niveau: 9,  question: "Sous quel nom Mario est-il apparu pour la première fois, dans Donkey Kong ?", reponse: "Jumpman" },
      { niveau: 10, question: "Quel événement a failli anéantir l’industrie du jeu vidéo en Amérique du Nord en 1983 ?", reponse: "Le krach du jeu vidéo, avec des cartouches invendues enterrées dans le désert du Nouveau-Mexique" }
    ]
  },

  /* ==========================================================================
     IMPROBABLE
     ========================================================================== */

  {
    theme: "Les ronds-points",
    questions: [
      { niveau: 1,  question: "Quelle forme géométrique dessine un rond-point vu du ciel ?", reponse: "Un cercle" },
      { niveau: 2,  question: "En France, dans quel sens tourne-t-on dans un rond-point ?", reponse: "Dans le sens inverse des aiguilles d’une montre" },
      { niveau: 3,  question: "Qui est prioritaire : le véhicule déjà dans l’anneau ou celui qui arrive ?", reponse: "Celui qui est déjà engagé dans l’anneau" },
      { niveau: 4,  question: "Comment appelle-t-on la partie centrale, souvent fleurie ou décorée, d’un rond-point ?", reponse: "L’îlot central" },
      { niveau: 5,  question: "Quel pays détient le record mondial du nombre de ronds-points ?", reponse: "La France" },
      { niveau: 6,  question: "Dans quel type de pays tourne-t-on dans le sens des aiguilles d’une montre ?", reponse: "Ceux qui roulent à gauche (Royaume-Uni, Irlande, Australie…)" },
      { niveau: 7,  question: "Quel mouvement social français de 2018 a fait des ronds-points son quartier général ?", reponse: "Les Gilets jaunes" },
      { niveau: 8,  question: "Environ combien de ronds-points compte la France ?", reponse: "Plusieurs dizaines de milliers : on cite souvent entre 30 000 et 60 000 (accepter tout ordre de grandeur juste)" },
      { niveau: 9,  question: "Comment surnomme-t-on le célèbre carrefour de Swindon, en Angleterre, formé de cinq mini-ronds-points autour d’un sixième ?", reponse: "Le Magic Roundabout (le rond-point magique)" },
      { niveau: 10, question: "Quel architecte et urbaniste français a théorisé dès 1907 la circulation giratoire, appliquée place de l’Étoile à Paris ?", reponse: "Eugène Hénard" }
    ]
  },

  {
    theme: "Le papier bulle",
    questions: [
      { niveau: 1,  question: "À quoi sert le papier bulle ?", reponse: "À protéger des objets fragiles pendant le transport" },
      { niveau: 2,  question: "Que contiennent les bulles ?", reponse: "De l’air" },
      { niveau: 3,  question: "Sous quel nom commercial anglais le connaît-on partout dans le monde ?", reponse: "Bubble Wrap" },
      { niveau: 4,  question: "Sur quel continent a-t-il été inventé ?", reponse: "En Amérique du Nord (aux États-Unis)" },
      { niveau: 5,  question: "Dans quelle décennie a-t-il été inventé ?", reponse: "Les années 1950 (en 1957)" },
      { niveau: 6,  question: "À quel usage complètement différent ses inventeurs le destinaient-ils au départ ?", reponse: "À servir de papier peint mural texturé" },
      { niveau: 7,  question: "Quelle marque d’ordinateurs lui a offert son premier grand succès commercial, à la fin des années 1950 ?", reponse: "IBM, pour protéger ses ordinateurs pendant le transport" },
      { niveau: 8,  question: "Quelle entreprise américaine fabrique le Bubble Wrap et en détient la marque ?", reponse: "Sealed Air" },
      { niveau: 9,  question: "Citez au moins un des deux inventeurs du papier bulle.", reponse: "Alfred Fielding et Marc Chavannes" },
      { niveau: 10, question: "Quel jour de l’année lui est consacré aux États-Unis ?", reponse: "Le Bubble Wrap Appreciation Day, le dernier lundi de janvier" }
    ]
  },

  {
    theme: "Les cornichons",
    questions: [
      { niveau: 1,  question: "De quel légume le cornichon est-il une variété récoltée très jeune ?", reponse: "Le concombre" },
      { niveau: 2,  question: "Dans quel liquide les conserve-t-on traditionnellement en France ?", reponse: "Le vinaigre" },
      { niveau: 3,  question: "Que veut dire « quel cornichon ! » en parlant de quelqu’un ?", reponse: "Que c’est un imbécile, un nigaud" },
      { niveau: 4,  question: "Quelle herbe aromatique parfume classiquement un bocal de cornichons à la française ?", reponse: "L’estragon" },
      { niveau: 5,  question: "Quel chanteur français a connu le succès en 1965 avec la chanson « Les Cornichons » ?", reponse: "Nino Ferrer" },
      { niveau: 6,  question: "De quel pays provient aujourd’hui la grande majorité des cornichons vendus en France ?", reponse: "L’Inde" },
      { niveau: 7,  question: "En pleine saison, tous les combien de jours faut-il récolter les cornichons ?", reponse: "Tous les 1 à 3 jours : ils grossissent très vite" },
      { niveau: 8,  question: "Quel procédé de conservation, sans vinaigre, est utilisé pour les cornichons à la russe en saumure ?", reponse: "La lacto-fermentation" },
      { niveau: 9,  question: "Quelle région d’Allemagne est si réputée pour ses cornichons qu’elle a donné son nom à une indication géographique protégée ?", reponse: "Le Spreewald (Spreewälder Gurken)" },
      { niveau: 10, question: "Quel est le nom scientifique de l’espèce dont le cornichon est issu ?", reponse: "Cucumis sativus" }
    ]
  },

  {
    theme: "Le micro-ondes",
    questions: [
      { niveau: 1,  question: "Que met-on principalement dans un micro-ondes ?", reponse: "De la nourriture, pour la réchauffer" },
      { niveau: 2,  question: "Peut-on y mettre un plat en métal ou une feuille d’aluminium ?", reponse: "Non, cela provoque des étincelles" },
      { niveau: 3,  question: "Comment appelle-t-on le disque en verre qui tourne à l’intérieur ?", reponse: "Le plateau tournant" },
      { niveau: 4,  question: "Quelle molécule présente dans les aliments les micro-ondes font-elles vibrer pour produire de la chaleur ?", reponse: "L’eau" },
      { niveau: 5,  question: "Dans quel pays le micro-ondes a-t-il été inventé ?", reponse: "Aux États-Unis" },
      { niveau: 6,  question: "Comment s’appelle le composant qui génère les micro-ondes dans l’appareil ?", reponse: "Le magnétron" },
      { niveau: 7,  question: "Quelle découverte accidentelle, devant un appareil radar, a mené à son invention ?", reponse: "Une barre chocolatée qui a fondu dans la poche de l’ingénieur" },
      { niveau: 8,  question: "Qui est l’ingénieur américain à l’origine de cette découverte, en 1945 ?", reponse: "Percy Spencer" },
      { niveau: 9,  question: "Comment s’appelait le tout premier micro-ondes commercialisé, en 1947 ?", reponse: "Le Radarange" },
      { niveau: 10, question: "À quelle fréquence fonctionnent les micro-ondes domestiques ?", reponse: "2,45 GHz" }
    ]
  },

  {
    theme: "Les nains de jardin",
    questions: [
      { niveau: 1,  question: "De quelle couleur est le bonnet traditionnel du nain de jardin ?", reponse: "Rouge" },
      { niveau: 2,  question: "Dans quel pays européen les nains de jardin sont-ils nés au XIXe siècle ?", reponse: "En Allemagne" },
      { niveau: 3,  question: "Dans quel matériau étaient fabriqués les premiers nains de jardin ?", reponse: "La terre cuite (céramique)" },
      { niveau: 4,  question: "Dans quel film français de 2001 un nain de jardin part-il en voyage autour du monde en envoyant des photos ?", reponse: "Le Fabuleux Destin d’Amélie Poulain" },
      { niveau: 5,  question: "Quel dessin animé Disney de 1937 a ancré les nains dans l’imaginaire populaire ?", reponse: "Blanche-Neige et les Sept Nains" },
      { niveau: 6,  question: "Quel film d’animation de 2011 transpose « Roméo et Juliette » chez les nains de jardin ?", reponse: "Gnoméo et Juliette" },
      { niveau: 7,  question: "Comment s’appelait le mouvement français des années 1990 qui « libérait » les nains des jardins de leurs propriétaires ?", reponse: "Le Front de Libération des Nains de Jardin (FLNJ)" },
      { niveau: 8,  question: "Quel prestigieux concours horticole britannique a longtemps interdit les nains de jardin ?", reponse: "Le Chelsea Flower Show" },
      { niveau: 9,  question: "Comment dit-on « nain de jardin » en anglais ?", reponse: "A garden gnome" },
      { niveau: 10, question: "Quelle région d’Allemagne, berceau du nain de jardin, abrite encore des manufactures historiques ?", reponse: "La Thuringe, notamment le village de Gräfenroda" }
    ]
  },

  {
    theme: "Les pigeons",
    questions: [
      { niveau: 1,  question: "Quel cri fait le pigeon ?", reponse: "Il roucoule" },
      { niveau: 2,  question: "Comment appelle-t-on un pigeon dressé pour porter des messages ?", reponse: "Un pigeon voyageur" },
      { niveau: 3,  question: "Quel oiseau blanc, symbole de paix, est un cousin très proche du pigeon ?", reponse: "La colombe" },
      { niveau: 4,  question: "Que signifie « se faire pigeonner » ?", reponse: "Se faire avoir, se faire arnaquer" },
      { niveau: 5,  question: "Avec quelle substance rare chez les oiseaux les pigeons nourrissent-ils leurs petits ?", reponse: "Une sorte de lait : le lait de jabot" },
      { niveau: 6,  question: "Quel naturaliste célèbre était un éleveur de pigeons passionné, ce qui a nourri sa théorie de la sélection ?", reponse: "Charles Darwin" },
      { niveau: 7,  question: "Quelle capacité cognitive rare, testée avec un miroir, les pigeons partagent-ils avec très peu d’animaux ?", reponse: "Se reconnaître dans un miroir" },
      { niveau: 8,  question: "Quelle espèce de pigeon nord-américain, autrefois comptée en milliards, s’est éteinte en 1914 ?", reponse: "Le pigeon migrateur : le dernier individu s’appelait Martha" },
      { niveau: 9,  question: "Quel pigeon voyageur de la Première Guerre mondiale, blessé en vol, a sauvé un bataillon américain encerclé ?", reponse: "Cher Ami" },
      { niveau: 10, question: "À quelle vitesse de croisière vole un pigeon voyageur en course ?", reponse: "Autour de 80 km/h, avec des pointes au-delà de 100 km/h" }
    ]
  },

  {
    theme: "Les moustiques",
    questions: [
      { niveau: 1,  question: "Quel son caractéristique fait un moustique ?", reponse: "Un bourdonnement aigu" },
      { niveau: 2,  question: "Que provoque sa piqûre sur la peau ?", reponse: "Un bouton qui démange" },
      { niveau: 3,  question: "Du mâle ou de la femelle, lequel pique ?", reponse: "La femelle" },
      { niveau: 4,  question: "Pourquoi pique-t-elle ?", reponse: "Elle a besoin de sang pour faire mûrir ses œufs" },
      { niveau: 5,  question: "Dans quel milieu pond-elle ses œufs ?", reponse: "Dans l’eau stagnante" },
      { niveau: 6,  question: "Quel moustique rayé noir et blanc s’est installé en France ces dernières années ?", reponse: "Le moustique tigre" },
      { niveau: 7,  question: "Quel animal est considéré comme le plus meurtrier pour l’être humain ?", reponse: "Le moustique, à cause des maladies qu’il transmet" },
      { niveau: 8,  question: "Quel gaz que nous expirons permet aux moustiques de nous repérer à distance ?", reponse: "Le dioxyde de carbone (CO₂)" },
      { niveau: 9,  question: "Quelle maladie transmise par le moustique fait le plus de victimes dans le monde ?", reponse: "Le paludisme (la malaria)" },
      { niveau: 10, question: "Quel parasite est responsable du paludisme ?", reponse: "Le plasmodium" }
    ]
  },

  {
    theme: "Le papier toilette",
    questions: [
      { niveau: 1,  question: "Dans quelle pièce de la maison le trouve-t-on ?", reponse: "Les toilettes" },
      { niveau: 2,  question: "Sous quelle forme se présente-t-il habituellement ?", reponse: "En rouleau" },
      { niveau: 3,  question: "Que désigne le nombre de « plis » indiqué sur l’emballage ?", reponse: "Le nombre de couches de papier superposées" },
      { niveau: 4,  question: "Dans quel pays le papier a-t-il été inventé ?", reponse: "En Chine" },
      { niveau: 5,  question: "Quel grand débat oppose les utilisateurs à propos du rouleau ?", reponse: "Faut-il le dérouler par-dessus ou par-dessous" },
      { niveau: 6,  question: "Quel équipement de toilettes, très répandu au Japon, le remplace en partie ?", reponse: "Les toilettes à jet d’eau (le washlet)" },
      { niveau: 7,  question: "Qu’utilisaient les Romains à la place, dans les latrines publiques ?", reponse: "Une éponge fixée au bout d’un bâton (le tersorium)" },
      { niveau: 8,  question: "À quelle époque le papier toilette en rouleau est-il apparu dans le commerce ?", reponse: "À la fin du XIXe siècle, aux États-Unis (autour de 1890)" },
      { niveau: 9,  question: "Quel événement mondial de 2020 a provoqué une pénurie planétaire de papier toilette ?", reponse: "La pandémie de Covid-19 et les achats de panique" },
      { niveau: 10, question: "Dans quel sens le brevet d’origine de 1891 représente-t-il le rouleau, tranchant définitivement le débat ?", reponse: "Par-dessus : la feuille passe devant le rouleau" }
    ]
  },

  {
    theme: "Les emojis",
    questions: [
      { niveau: 1,  question: "De quelle couleur est le smiley classique ?", reponse: "Jaune" },
      { niveau: 2,  question: "De quelle langue le mot « emoji » vient-il ?", reponse: "Du japonais" },
      { niveau: 3,  question: "Que signifie généralement l’emoji des deux mains jointes 🙏 ?", reponse: "Merci, s’il te plaît, ou la prière — l’interprétation varie" },
      { niveau: 4,  question: "Quel emoji est le plus utilisé dans le monde ?", reponse: "Le visage qui pleure de rire 😂" },
      { niveau: 5,  question: "Que veut dire littéralement « emoji » en japonais ?", reponse: "Image (e) + caractère (moji)" },
      { niveau: 6,  question: "Sur quel type d’appareil les premiers emojis sont-ils apparus, en 1999 ?", reponse: "Sur les téléphones mobiles japonais" },
      { niveau: 7,  question: "Qui a dessiné ce tout premier jeu d’emojis ?", reponse: "Shigetaka Kurita, pour l’opérateur NTT DoCoMo" },
      { niveau: 8,  question: "Quel organisme international valide aujourd’hui la création de nouveaux emojis ?", reponse: "Le consortium Unicode" },
      { niveau: 9,  question: "Quel dictionnaire a élu un emoji « mot de l’année » en 2015 ?", reponse: "L’Oxford Dictionary, avec le visage qui pleure de rire" },
      { niveau: 10, question: "Combien d’emojis existe-t-il aujourd’hui, approximativement ?", reponse: "Plus de 3 700 (accepter tout ordre de grandeur correct)" }
    ]
  },

  {
    theme: "Les ascenseurs",
    questions: [
      { niveau: 1,  question: "À quoi sert un ascenseur ?", reponse: "À monter et descendre les étages d’un bâtiment" },
      { niveau: 2,  question: "Comment appelle-t-on la partie dans laquelle on monte ?", reponse: "La cabine" },
      { niveau: 3,  question: "Comment appelle-t-on le conduit vertical dans lequel elle se déplace ?", reponse: "La cage (ou la gaine) d’ascenseur" },
      { niveau: 4,  question: "Comment appelle-t-on la musique d’ambiance diffusée dans les ascenseurs ?", reponse: "La musique d’ascenseur (la « muzak »)" },
      { niveau: 5,  question: "Quel monument parisien de 1889 abrite des ascenseurs dans ses piliers ?", reponse: "La tour Eiffel" },
      { niveau: 6,  question: "Quel industriel américain a donné son nom à la marque d’ascenseurs la plus connue au monde ?", reponse: "Elisha Otis" },
      { niveau: 7,  question: "Quelle invention décisive lui doit-on, en 1853 ?", reponse: "Le frein de sécurité (le parachute) qui bloque la cabine si le câble casse" },
      { niveau: 8,  question: "Comment a-t-il prouvé son invention au public, lors de l’Exposition universelle de New York en 1854 ?", reponse: "Il est monté sur une plateforme et a fait couper le câble devant la foule" },
      { niveau: 9,  question: "Pourquoi manque-t-il souvent le 13e étage dans les immeubles américains ?", reponse: "Par superstition liée au chiffre 13" },
      { niveau: 10, question: "Quel pays possède aujourd’hui les ascenseurs les plus rapides du monde ?", reponse: "La Chine (plus de 20 mètres par seconde, à Shanghai et Canton)" }
    ]
  },

  {
    theme: "La taxidermie",
    questions: [
      { niveau: 1,  question: "Sur quoi travaille un taxidermiste ?", reponse: "Sur des animaux morts, qu’il conserve et met en position" },
      { niveau: 2,  question: "Dans quel type de musée voit-on beaucoup d’animaux naturalisés ?", reponse: "Un muséum d’histoire naturelle" },
      { niveau: 3,  question: "Quel autre verbe, courant, emploie-t-on pour cette pratique ?", reponse: "Empailler (ou naturaliser)" },
      { niveau: 4,  question: "En quelle matière sont les yeux d’un animal naturalisé ?", reponse: "En verre" },
      { niveau: 5,  question: "Que conserve-t-on réellement de l’animal ?", reponse: "La peau, tendue sur un mannequin ; l’intérieur est entièrement reconstitué" },
      { niveau: 6,  question: "D’où vient le mot « taxidermie » ?", reponse: "Du grec taxis (arrangement) et derma (peau) : l’art d’arranger la peau" },
      { niveau: 7,  question: "En quoi sont faits les mannequins modernes sur lesquels on tend la peau ?", reponse: "En mousse de polyuréthane moulée" },
      { niveau: 8,  question: "Quel produit toxique servait autrefois à traiter les peaux, aujourd’hui abandonné ?", reponse: "L’arsenic" },
      { niveau: 9,  question: "À quel siècle la taxidermie connaît-elle son âge d’or, porté par les grandes expéditions et les cabinets de curiosités ?", reponse: "Le XIXe siècle" },
      { niveau: 10, question: "Quel taxidermiste anglais de l’époque victorienne est célèbre pour ses scènes de chatons en costume et de lapins à l’école ?", reponse: "Walter Potter" }
    ]
  }

];


/* ==========================================================================
   THÈMES SUPPLÉMENTAIRES — 22 thèmes · 220 questions
   --------------------------------------------------------------------------
   Ajoutés à la suite, sans modifier les 28 thèmes ci-dessus.
   Total du jeu : 50 thèmes · 500 questions.
   Même règles : 10 questions par thème, niveau 1 (facile) à 10 (très dure).
   Pour retirer un thème : effacez son bloc { ... } et sa virgule.
   ========================================================================== */

window.THEMES.push(

  /* ==========================================================================
     BASIQUES
     ========================================================================== */

  {
    theme: "Les animaux de la ferme",
    questions: [
      { niveau: 1,  question: "Quel animal de la ferme fait « meuh » ?", reponse: "La vache" },
      { niveau: 2,  question: "Comment appelle-t-on le petit de la chèvre ?", reponse: "Le chevreau (ou cabri)" },
      { niveau: 3,  question: "Comment appelle-t-on la femelle du cochon ?", reponse: "La truie" },
      { niveau: 4,  question: "Comment appelle-t-on le petit de l’âne ?", reponse: "L’ânon" },
      { niveau: 5,  question: "Quel animal naît du croisement d’un âne et d’une jument ?", reponse: "Le mulet (ou la mule pour la femelle)" },
      { niveau: 6,  question: "Combien de temps dure la gestation d’une vache, environ ?", reponse: "Environ 9 mois, comme chez l’humain" },
      { niveau: 7,  question: "En combien de compartiments est divisé l’estomac d’une vache ?", reponse: "Quatre : la panse, le bonnet, le feuillet et la caillette" },
      { niveau: 8,  question: "Comment appelle-t-on un jeune coq castré et engraissé, servi pour les fêtes ?", reponse: "Un chapon" },
      { niveau: 9,  question: "Quel verbe désigne le cri de l’oie ?", reponse: "Cacarder" },
      { niveau: 10, question: "Et quel animal naît du croisement d’un cheval et d’une ânesse ?", reponse: "Le bardot" }
    ]
  },

  {
    theme: "La cuisine française",
    questions: [
      { niveau: 1,  question: "Quel pain long et fin est un symbole de la France ?", reponse: "La baguette" },
      { niveau: 2,  question: "Quel est l’ingrédient principal d’une omelette ?", reponse: "Les œufs" },
      { niveau: 3,  question: "Quelle spécialité savoyarde consiste à tremper du pain dans du fromage fondu ?", reponse: "La fondue savoyarde" },
      { niveau: 4,  question: "De quelle région française vient la choucroute ?", reponse: "L’Alsace" },
      { niveau: 5,  question: "Quels sont les trois ingrédients de base d’une pâte à crêpes ?", reponse: "Farine, œufs et lait" },
      { niveau: 6,  question: "Quel plat provençal mélange aubergines, courgettes, poivrons et tomates mijotés ?", reponse: "La ratatouille" },
      { niveau: 7,  question: "Quelle tarte aux pommes caramélisées est cuite à l’envers, la pâte au-dessus ?", reponse: "La tarte Tatin" },
      { niveau: 8,  question: "Quelle sauce est une émulsion de jaunes d’œufs, de beurre et de jus de citron ?", reponse: "La sauce hollandaise" },
      { niveau: 9,  question: "Quelles trois villes se disputent la paternité du cassoulet ?", reponse: "Castelnaudary, Carcassonne et Toulouse" },
      { niveau: 10, question: "Quel chef du XIXe siècle, surnommé « le roi des cuisiniers et le cuisinier des rois », a fondé la grande cuisine française ?", reponse: "Antonin Carême" }
    ]
  },

  {
    theme: "Les dessins animés",
    questions: [
      { niveau: 1,  question: "Quelle souris est la mascotte de Disney ?", reponse: "Mickey" },
      { niveau: 2,  question: "De quelle couleur sont les Schtroumpfs ?", reponse: "Bleus" },
      { niveau: 3,  question: "Quel lapin de dessin animé demande « Quoi de neuf, docteur ? »", reponse: "Bugs Bunny" },
      { niveau: 4,  question: "Dans « Le Roi lion », comment s’appelle le père de Simba ?", reponse: "Mufasa" },
      { niveau: 5,  question: "Dans quelle ville vivent les Simpson ?", reponse: "Springfield" },
      { niveau: 6,  question: "Comment s’appelle le chat qui court sans cesse après Titi ?", reponse: "Grosminet" },
      { niveau: 7,  question: "Quel studio japonais a produit « Le Voyage de Chihiro » ?", reponse: "Le studio Ghibli" },
      { niveau: 8,  question: "Quel dessinateur belge a créé les Schtroumpfs ?", reponse: "Peyo" },
      { niveau: 9,  question: "Dans « Il était une fois… la Vie », comment s’appelle le vieux savant à longue barbe blanche ?", reponse: "Maestro" },
      { niveau: 10, question: "Quel film d’Émile Cohl, projeté en 1908, est considéré comme le tout premier dessin animé ?", reponse: "Fantasmagorie" }
    ]
  },

  {
    theme: "Les fromages",
    questions: [
      { niveau: 1,  question: "Avec quel liquide fabrique-t-on le fromage ?", reponse: "Le lait" },
      { niveau: 2,  question: "Quel fromage normand est vendu dans une boîte ronde en bois ?", reponse: "Le camembert" },
      { niveau: 3,  question: "Quel fromage alsacien à l’odeur puissante porte le nom d’une ville ?", reponse: "Le munster" },
      { niveau: 4,  question: "Quel fromage italien à râper doit son nom officiel à deux villes ?", reponse: "Le parmesan (Parmigiano Reggiano : Parme et Reggio d’Émilie)" },
      { niveau: 5,  question: "Quel fromage bleu est affiné dans des caves naturelles de l’Aveyron ?", reponse: "Le roquefort" },
      { niveau: 6,  question: "Avec le lait de quel animal fabrique-t-on le roquefort ?", reponse: "La brebis" },
      { niveau: 7,  question: "Que signifie le sigle AOP sur une étiquette de fromage ?", reponse: "Appellation d’origine protégée" },
      { niveau: 8,  question: "Comment appelle-t-on les fromages dont la croûte est frottée à l’eau salée pendant l’affinage, comme le munster ?", reponse: "Les fromages à croûte lavée" },
      { niveau: 9,  question: "Quel champignon forme les veines bleues du roquefort ?", reponse: "Penicillium roqueforti" },
      { niveau: 10, question: "Quelle substance, tirée traditionnellement de l’estomac des jeunes veaux, fait cailler le lait ?", reponse: "La présure" }
    ]
  },

  {
    theme: "La mythologie grecque",
    questions: [
      { niveau: 1,  question: "Qui est le roi des dieux de l’Olympe ?", reponse: "Zeus" },
      { niveau: 2,  question: "Quel héros est célèbre pour ses douze travaux ?", reponse: "Héraclès (Hercule chez les Romains)" },
      { niveau: 3,  question: "Comment s’appelle le célèbre cheval ailé ?", reponse: "Pégase" },
      { niveau: 4,  question: "Quel dieu règne sur les mers ?", reponse: "Poséidon" },
      { niveau: 5,  question: "Quel monstre à tête de taureau vivait au centre d’un labyrinthe ?", reponse: "Le Minotaure" },
      { niveau: 6,  question: "Quelle créature à la chevelure de serpents changeait en pierre ceux qui la regardaient ?", reponse: "Méduse" },
      { niveau: 7,  question: "Quel est le seul point faible d’Achille ?", reponse: "Son talon" },
      { niveau: 8,  question: "Quel Titan a volé le feu aux dieux pour l’offrir aux hommes ?", reponse: "Prométhée" },
      { niveau: 9,  question: "Quel passeur faisait traverser le Styx aux âmes des morts, contre une pièce ?", reponse: "Charon" },
      { niveau: 10, question: "Quel roi fut condamné à une faim et une soif éternelles, l’eau et les fruits reculant dès qu’il voulait les saisir ?", reponse: "Tantale (d’où le « supplice de Tantale »)" }
    ]
  },

  {
    theme: "Les super-héros",
    questions: [
      { niveau: 1,  question: "Quel super-héros a obtenu ses pouvoirs grâce à une piqûre d’araignée ?", reponse: "Spider-Man" },
      { niveau: 2,  question: "Quel super-héros se protège avec un bouclier rond étoilé ?", reponse: "Captain America" },
      { niveau: 3,  question: "Quel est le vrai nom d’Iron Man ?", reponse: "Tony Stark" },
      { niveau: 4,  question: "Quelle roche venue de sa planète natale affaiblit Superman ?", reponse: "La kryptonite" },
      { niveau: 5,  question: "Quel métal indestructible recouvre le squelette de Wolverine ?", reponse: "L’adamantium" },
      { niveau: 6,  question: "Quel créateur de Marvel faisait une apparition éclair dans presque tous les films du studio ?", reponse: "Stan Lee" },
      { niveau: 7,  question: "Comment s’appelle l’île natale de Wonder Woman ?", reponse: "Themyscira" },
      { niveau: 8,  question: "En quelle année Superman est-il apparu pour la première fois, dans Action Comics n°1 ?", reponse: "1938" },
      { niveau: 9,  question: "Quel est le vrai nom de Black Panther, et de quel pays est-il le roi ?", reponse: "T’Challa, roi du Wakanda" },
      { niveau: 10, question: "Quel super-héros a été créé par Bob Kane et Bill Finger en 1939 ?", reponse: "Batman" }
    ]
  },

  {
    theme: "Harry Potter",
    questions: [
      { niveau: 1,  question: "Dans quelle école Harry apprend-il la magie ?", reponse: "Poudlard" },
      { niveau: 2,  question: "Quelle forme a la cicatrice de Harry ?", reponse: "Un éclair" },
      { niveau: 3,  question: "Dans quelle maison Harry est-il envoyé ?", reponse: "Gryffondor" },
      { niveau: 4,  question: "Comment s’appelle la chouette de Harry ?", reponse: "Hedwige" },
      { niveau: 5,  question: "Quel sport se joue sur des balais volants ?", reponse: "Le Quidditch" },
      { niveau: 6,  question: "Comment s’appelle la banque des sorciers, tenue par des gobelins ?", reponse: "Gringotts" },
      { niveau: 7,  question: "De quelle voie de la gare de King’s Cross part le Poudlard Express ?", reponse: "La voie 9 ¾" },
      { niveau: 8,  question: "Quelles sont les trois Reliques de la Mort ?", reponse: "La Baguette de sureau, la Pierre de résurrection et la Cape d’invisibilité" },
      { niveau: 9,  question: "Dans la version française, quel est le vrai nom complet de Voldemort ?", reponse: "Tom Elvis Jedusor (anagramme de « Je suis Voldemort »)" },
      { niveau: 10, question: "Quelle forme prend le Patronus de Severus Rogue ?", reponse: "Une biche, comme celui de Lily Potter" }
    ]
  },

  {
    theme: "Les drapeaux",
    questions: [
      { niveau: 1,  question: "Quelles sont les trois couleurs du drapeau français ?", reponse: "Bleu, blanc, rouge" },
      { niveau: 2,  question: "Que représente le disque rouge au centre du drapeau du Japon ?", reponse: "Le soleil" },
      { niveau: 3,  question: "Quelle feuille figure sur le drapeau du Canada ?", reponse: "Une feuille d’érable" },
      { niveau: 4,  question: "Combien d’étoiles compte le drapeau des États-Unis ?", reponse: "50, une par État" },
      { niveau: 5,  question: "Combien d’étoiles compte le drapeau de l’Union européenne ?", reponse: "12 (ce n’est pas le nombre de pays)" },
      { niveau: 6,  question: "Quel est le seul drapeau national qui n’est pas rectangulaire ?", reponse: "Celui du Népal (deux triangles superposés)" },
      { niveau: 7,  question: "Quel arbre figure sur le drapeau du Liban ?", reponse: "Le cèdre" },
      { niveau: 8,  question: "Quels sont les deux seuls pays au drapeau carré ?", reponse: "La Suisse et le Vatican" },
      { niveau: 9,  question: "Comment appelle-t-on l’étude des drapeaux ?", reponse: "La vexillologie" },
      { niveau: 10, question: "Quelle devise est écrite sur le drapeau du Brésil ?", reponse: "« Ordem e Progresso » (Ordre et Progrès)" }
    ]
  },

  {
    theme: "La conquête spatiale",
    questions: [
      { niveau: 1,  question: "Qui est le premier homme à avoir marché sur la Lune ?", reponse: "Neil Armstrong" },
      { niveau: 2,  question: "En quelle année ?", reponse: "1969" },
      { niveau: 3,  question: "Qui est le premier homme à être allé dans l’espace, en 1961 ?", reponse: "Youri Gagarine" },
      { niveau: 4,  question: "Comment s’appelait la chienne soviétique envoyée en orbite en 1957 ?", reponse: "Laïka" },
      { niveau: 5,  question: "Quel astronaute français a séjourné dans la Station spatiale internationale en 2016 et en 2021 ?", reponse: "Thomas Pesquet" },
      { niveau: 6,  question: "Comment s’appelait le premier satellite artificiel, lancé par l’URSS en 1957 ?", reponse: "Spoutnik" },
      { niveau: 7,  question: "Quelle mission Apollo a lancé « Houston, on a un problème » et a dû renoncer à se poser sur la Lune ?", reponse: "Apollo 13" },
      { niveau: 8,  question: "Qui est la première femme à être allée dans l’espace, en 1963 ?", reponse: "Valentina Terechkova" },
      { niveau: 9,  question: "Combien d’hommes ont marché sur la Lune au total ?", reponse: "12 (entre 1969 et 1972)" },
      { niveau: 10, question: "Comment s’appelait le premier véhicule à avoir roulé sur la Lune, un robot soviétique de 1970 ?", reponse: "Lunokhod 1" }
    ]
  },

  {
    theme: "Les dinosaures",
    questions: [
      { niveau: 1,  question: "Quel grand dinosaure carnivore a de minuscules bras ?", reponse: "Le tyrannosaure (T. rex)" },
      { niveau: 2,  question: "Les dinosaures pondaient-ils des œufs ?", reponse: "Oui" },
      { niveau: 3,  question: "Quel dinosaure avait trois cornes sur la tête ?", reponse: "Le tricératops" },
      { niveau: 4,  question: "Quel dinosaure avait de grandes plaques sur le dos et une queue à pointes ?", reponse: "Le stégosaure" },
      { niveau: 5,  question: "Qu’est-ce qui a causé leur extinction, il y a 66 millions d’années ?", reponse: "La chute d’un astéroïde géant" },
      { niveau: 6,  question: "Quels animaux actuels sont les descendants directs des dinosaures ?", reponse: "Les oiseaux" },
      { niveau: 7,  question: "Le ptérodactyle est-il un dinosaure ?", reponse: "Non, c’est un ptérosaure, un reptile volant" },
      { niveau: 8,  question: "Que veut dire « dinosaure » en grec ?", reponse: "« Terrible lézard »" },
      { niveau: 9,  question: "Comment s’appelle le cratère mexicain laissé par l’astéroïde qui les a exterminés ?", reponse: "Le cratère de Chicxulub, dans le Yucatán" },
      { niveau: 10, question: "Quel paléontologue britannique a inventé le mot « dinosaure » en 1842 ?", reponse: "Richard Owen" }
    ]
  },

  {
    theme: "Le chocolat",
    questions: [
      { niveau: 1,  question: "De quelle graine est fait le chocolat ?", reponse: "La fève de cacao" },
      { niveau: 2,  question: "À quelle fête cache-t-on des œufs en chocolat ?", reponse: "Pâques" },
      { niveau: 3,  question: "Sur quel continent le cacaoyer est-il originaire ?", reponse: "L’Amérique (centrale et du Sud)" },
      { niveau: 4,  question: "Quel chocolat ne contient pas de pâte de cacao, seulement du beurre de cacao ?", reponse: "Le chocolat blanc" },
      { niveau: 5,  question: "Quel pays est le premier producteur mondial de cacao ?", reponse: "La Côte d’Ivoire" },
      { niveau: 6,  question: "Quel peuple d’Amérique buvait le cacao sous le nom de « xocolatl » ?", reponse: "Les Aztèques" },
      { niveau: 7,  question: "Que veut dire Theobroma, le nom scientifique du cacaoyer ?", reponse: "« Nourriture des dieux »" },
      { niveau: 8,  question: "Quelle substance du chocolat est toxique pour les chiens ?", reponse: "La théobromine" },
      { niveau: 9,  question: "Quel Suisse a inventé le chocolat au lait en 1875 ?", reponse: "Daniel Peter" },
      { niveau: 10, question: "Quel Suisse a inventé le conchage, qui rend le chocolat fondant, en 1879 ?", reponse: "Rodolphe Lindt" }
    ]
  },

  /* ==========================================================================
     BIZARRE ET NICHE
     ========================================================================== */

  {
    theme: "Les escargots",
    questions: [
      { niveau: 1,  question: "Que porte l’escargot sur son dos ?", reponse: "Sa coquille" },
      { niveau: 2,  question: "Par quel temps les escargots sortent-ils surtout ?", reponse: "Par temps humide, après la pluie" },
      { niveau: 3,  question: "Quelle région est célèbre pour ses escargots au beurre persillé ?", reponse: "La Bourgogne" },
      { niveau: 4,  question: "Où se trouvent les yeux de l’escargot ?", reponse: "Au bout de ses deux grands tentacules" },
      { niveau: 5,  question: "À quelle classe d’animaux appartient l’escargot, dont le nom veut dire « ventre-pied » ?", reponse: "Les gastéropodes" },
      { niveau: 6,  question: "Comment appelle-t-on l’élevage des escargots ?", reponse: "L’héliciculture" },
      { niveau: 7,  question: "Un escargot est-il mâle ou femelle ?", reponse: "Les deux : il est hermaphrodite" },
      { niveau: 8,  question: "Comment s’appelle sa langue râpeuse couverte de milliers de minuscules dents ?", reponse: "La radula" },
      { niveau: 9,  question: "Comment appelle-t-on la membrane qui ferme sa coquille quand il se met en sommeil ?", reponse: "L’épiphragme" },
      { niveau: 10, question: "Comment s’appelle le petit dard calcaire que l’escargot plante dans son partenaire avant l’accouplement ?", reponse: "Le dard d’amour" }
    ]
  },

  {
    theme: "Les LEGO",
    questions: [
      { niveau: 1,  question: "En quelle matière sont fabriquées les briques LEGO ?", reponse: "En plastique" },
      { niveau: 2,  question: "De quel pays vient LEGO ?", reponse: "Le Danemark" },
      { niveau: 3,  question: "Comment s’appellent les parcs d’attractions de la marque ?", reponse: "Les Legoland" },
      { niveau: 4,  question: "De quelle couleur est la peau des petits personnages LEGO classiques ?", reponse: "Jaune" },
      { niveau: 5,  question: "Que signifie « LEGO » ?", reponse: "« Joue bien », du danois « leg godt »" },
      { niveau: 6,  question: "Quels jouets l’entreprise fabriquait-elle avant le plastique ?", reponse: "Des jouets en bois" },
      { niveau: 7,  question: "En quelle année sont apparues les minifigurines ?", reponse: "1978" },
      { niveau: 8,  question: "En quelle année la brique LEGO moderne, avec ses tubes en dessous, a-t-elle été brevetée ?", reponse: "1958" },
      { niveau: 9,  question: "Quel plastique très résistant utilise-t-on pour les briques ?", reponse: "L’ABS (acrylonitrile butadiène styrène)" },
      { niveau: 10, question: "De combien de façons différentes peut-on assembler six briques 2×4 de même couleur ?", reponse: "915 103 765 (plus de 915 millions)" }
    ]
  },

  {
    theme: "Les fourmis",
    questions: [
      { niveau: 1,  question: "Combien de pattes a une fourmi ?", reponse: "Six" },
      { niveau: 2,  question: "Dans la fable de La Fontaine, quel insecte vient demander à manger à la fourmi ?", reponse: "La cigale" },
      { niveau: 3,  question: "Comment appelle-t-on la fourmi qui pond tous les œufs de la colonie ?", reponse: "La reine" },
      { niveau: 4,  question: "Quel animal à très longue langue se nourrit de fourmis ?", reponse: "Le fourmilier (ou tamanoir)" },
      { niveau: 5,  question: "Quel écrivain français a signé la trilogie « Les Fourmis » ?", reponse: "Bernard Werber" },
      { niveau: 6,  question: "Avec quoi les fourmis communiquent-elles principalement ?", reponse: "Des signaux chimiques : les phéromones" },
      { niveau: 7,  question: "Quel acide certaines fourmis projettent-elles pour se défendre ?", reponse: "L’acide formique (du latin formica, fourmi)" },
      { niveau: 8,  question: "Que font les fourmis « champignonnistes » des feuilles qu’elles découpent ?", reponse: "Elles s’en servent pour cultiver un champignon, qu’elles mangent" },
      { niveau: 9,  question: "Quelles fourmis s’accrochent les unes aux autres pour former des radeaux vivants lors des inondations ?", reponse: "Les fourmis de feu" },
      { niveau: 10, question: "Comment s’appelle la science qui étudie les fourmis ?", reponse: "La myrmécologie" }
    ]
  },

  {
    theme: "Le Rubik’s Cube",
    questions: [
      { niveau: 1,  question: "Combien de faces a un Rubik’s Cube ?", reponse: "Six" },
      { niveau: 2,  question: "Combien de couleurs différentes compte-t-il ?", reponse: "Six" },
      { niveau: 3,  question: "Combien de cases y a-t-il sur chaque face d’un cube classique ?", reponse: "Neuf" },
      { niveau: 4,  question: "Comment s’appelle son inventeur ?", reponse: "Ernő Rubik" },
      { niveau: 5,  question: "De quel pays est-il originaire ?", reponse: "La Hongrie" },
      { niveau: 6,  question: "En quelle année a-t-il été inventé ?", reponse: "1974" },
      { niveau: 7,  question: "Comment appelle-t-on la discipline qui consiste à le résoudre le plus vite possible ?", reponse: "Le speedcubing" },
      { niveau: 8,  question: "Combien de combinaisons différentes peut-il prendre, environ ?", reponse: "Environ 43 milliards de milliards" },
      { niveau: 9,  question: "Combien de mouvements suffisent pour résoudre n’importe quelle position, au maximum ?", reponse: "20 (on l’appelle « le nombre de Dieu »)" },
      { niveau: 10, question: "Sous quel nom était-il vendu à l’origine, en Hongrie ?", reponse: "Le « Cube magique » (Bűvös kocka)" }
    ]
  },

  {
    theme: "Les canards en plastique",
    questions: [
      { niveau: 1,  question: "Dans quelle pièce joue-t-on avec un canard en plastique ?", reponse: "La salle de bain, dans le bain" },
      { niveau: 2,  question: "De quelle couleur est-il le plus souvent ?", reponse: "Jaune" },
      { niveau: 3,  question: "Que fait-il quand on appuie dessus ?", reponse: "Il couine" },
      { niveau: 4,  question: "Quel personnage de « 1, rue Sésame » chante une chanson à son canard de bain ?", reponse: "Ernest" },
      { niveau: 5,  question: "Quel artiste néerlandais installe des canards jaunes géants dans les ports du monde entier ?", reponse: "Florentijn Hofman" },
      { niveau: 6,  question: "Quelle méthode de programmeur consiste à expliquer son code, ligne par ligne, à un canard en plastique ?", reponse: "Le « rubber duck debugging » (la méthode du canard en plastique)" },
      { niveau: 7,  question: "Quel accident de 1992 a lâché des milliers de canards en plastique dans l’océan ?", reponse: "Un conteneur de jouets de bain (canards, tortues, castors, grenouilles) tombé d’un cargo en plein Pacifique" },
      { niveau: 8,  question: "À quoi ces jouets perdus en mer ont-ils servi aux scientifiques ?", reponse: "À étudier les courants marins, en suivant leurs échouages" },
      { niveau: 9,  question: "Combien de temps certains ont-ils dérivé avant de s’échouer de l’autre côté de l’Atlantique ?", reponse: "Une quinzaine d’années (après avoir traversé l’Arctique)" },
      { niveau: 10, question: "Quel océanographe américain a suivi leur dérive pour cartographier les courants ?", reponse: "Curtis Ebbesmeyer" }
    ]
  },

  {
    theme: "Les pieuvres",
    questions: [
      { niveau: 1,  question: "Combien de bras a une pieuvre ?", reponse: "Huit" },
      { niveau: 2,  question: "Que projette-t-elle pour s’échapper ?", reponse: "De l’encre" },
      { niveau: 3,  question: "Quelle différence y a-t-il entre une pieuvre et un poulpe ?", reponse: "Aucune, c’est le même animal" },
      { niveau: 4,  question: "Combien de cœurs a une pieuvre ?", reponse: "Trois" },
      { niveau: 5,  question: "De quelle couleur est son sang ?", reponse: "Bleu" },
      { niveau: 6,  question: "Quel poulpe d’un aquarium allemand a « prédit » les matchs de la Coupe du monde 2010 ?", reponse: "Paul le poulpe" },
      { niveau: 7,  question: "À quelle classe appartient la pieuvre, avec la seiche et le calmar ?", reponse: "Les céphalopodes" },
      { niveau: 8,  question: "Quelle molécule, à base de cuivre, rend son sang bleu ?", reponse: "L’hémocyanine" },
      { niveau: 9,  question: "Où se trouvent la majorité de ses neurones ?", reponse: "Dans ses bras (environ les deux tiers)" },
      { niveau: 10, question: "Quel écrivain français a popularisé le mot « pieuvre », emprunté au patois de Guernesey ?", reponse: "Victor Hugo, dans « Les Travailleurs de la mer » (1866)" }
    ]
  },

  {
    theme: "Les codes-barres",
    questions: [
      { niveau: 1,  question: "Où trouve-t-on des codes-barres ?", reponse: "Sur les emballages des produits" },
      { niveau: 2,  question: "Quel appareil les lit à la caisse ?", reponse: "Un lecteur de codes-barres (scanner ou douchette)" },
      { niveau: 3,  question: "Comment s’appelle le code carré qu’on scanne avec son téléphone ?", reponse: "Le QR code" },
      { niveau: 4,  question: "Combien de chiffres compte un code-barres européen classique ?", reponse: "13 (le code EAN-13)" },
      { niveau: 5,  question: "Que veulent dire les lettres « QR » ?", reponse: "Quick Response (réponse rapide)" },
      { niveau: 6,  question: "Les premiers chiffres d’un code-barres indiquent-ils le pays de fabrication ?", reponse: "Non, seulement le pays de l’organisme qui a attribué le code" },
      { niveau: 7,  question: "Par quels chiffres commencent les codes-barres attribués en France ?", reponse: "De 300 à 379" },
      { niveau: 8,  question: "Dans quel pays le QR code a-t-il été inventé, en 1994 ?", reponse: "Au Japon (par Denso Wave, une filiale de Toyota)" },
      { niveau: 9,  question: "Quel produit a été le tout premier scanné en caisse, en 1974 aux États-Unis ?", reponse: "Un paquet de chewing-gums Wrigley’s" },
      { niveau: 10, question: "À quoi sert le dernier chiffre d’un code EAN-13 ?", reponse: "C’est une clé de contrôle, calculée à partir des autres chiffres, pour détecter les erreurs de lecture" }
    ]
  },

  {
    theme: "Les paresseux",
    questions: [
      { niveau: 1,  question: "Le paresseux est-il un animal rapide ou lent ?", reponse: "Très lent" },
      { niveau: 2,  question: "Où passe-t-il presque toute sa vie ?", reponse: "Dans les arbres, suspendu aux branches" },
      { niveau: 3,  question: "Sur quel continent vit-il ?", reponse: "En Amérique (centrale et du Sud)" },
      { niveau: 4,  question: "Que mange-t-il surtout ?", reponse: "Des feuilles" },
      { niveau: 5,  question: "On distingue deux familles de paresseux : lesquelles ?", reponse: "Les paresseux à deux doigts et ceux à trois doigts" },
      { niveau: 6,  question: "Le paresseux sait-il nager ?", reponse: "Oui, et plutôt bien" },
      { niveau: 7,  question: "À quelle fréquence descend-il de son arbre, et pourquoi ?", reponse: "Environ une fois par semaine, pour faire ses besoins" },
      { niveau: 8,  question: "Pourquoi son pelage prend-il parfois une teinte verte ?", reponse: "Des algues y poussent, ce qui l’aide à se camoufler" },
      { niveau: 9,  question: "Quels animaux sont ses plus proches cousins ?", reponse: "Les fourmiliers (et les tatous)" },
      { niveau: 10, question: "Quel paresseux géant préhistorique, grand comme un éléphant, vivait en Amérique du Sud ?", reponse: "Le mégathérium" }
    ]
  },

  {
    theme: "Les feux tricolores",
    questions: [
      { niveau: 1,  question: "Quelle couleur du feu oblige à s’arrêter ?", reponse: "Le rouge" },
      { niveau: 2,  question: "Quelle couleur autorise à passer ?", reponse: "Le vert" },
      { niveau: 3,  question: "Combien de couleurs compte un feu tricolore ?", reponse: "Trois" },
      { niveau: 4,  question: "Que dit le code de la route face à un feu orange fixe ?", reponse: "Il faut s’arrêter, sauf si l’arrêt serait dangereux" },
      { niveau: 5,  question: "Que signifie un feu orange clignotant ?", reponse: "On peut passer, mais avec prudence, en respectant les priorités" },
      { niveau: 6,  question: "Dans quelle ville a été installé le premier feu de circulation, en 1868 ?", reponse: "À Londres" },
      { niveau: 7,  question: "Qu’est-il arrivé à ce premier feu, qui fonctionnait au gaz, quelques semaines plus tard ?", reponse: "Il a explosé, blessant le policier qui le manœuvrait" },
      { niveau: 8,  question: "Quel petit panneau permet aux cyclistes de franchir certains feux rouges en cédant le passage ?", reponse: "Le « cédez-le-passage cycliste au feu » (le tourne-à-droite cycliste)" },
      { niveau: 9,  question: "Dans quel pays les bonshommes des feux piétons portent-ils un chapeau, et s’appellent les « Ampelmännchen » ?", reponse: "En Allemagne (hérités de l’Allemagne de l’Est)" },
      { niveau: 10, question: "Au Japon, comment appelle-t-on officiellement le feu vert ?", reponse: "« Ao », qui veut dire bleu (les feux y sont d’ailleurs bleutés)" }
    ]
  },

  {
    theme: "Le carrelage",
    questions: [
      { niveau: 1,  question: "Dans quelles pièces pose-t-on le plus souvent du carrelage ?", reponse: "La salle de bain et la cuisine" },
      { niveau: 2,  question: "Comment appelle-t-on l’espace rempli entre deux carreaux ?", reponse: "Le joint" },
      { niveau: 3,  question: "Quels petits accessoires en forme de croix gardent un espacement régulier pendant la pose ?", reponse: "Les croisillons" },
      { niveau: 4,  question: "Comment appelle-t-on l’art de composer des motifs avec de tout petits carreaux ?", reponse: "La mosaïque" },
      { niveau: 5,  question: "Quel carreau hexagonal en terre cuite rouge est typique de la Provence ?", reponse: "La tomette" },
      { niveau: 6,  question: "Comment s’appellent les carreaux de faïence peints, emblèmes du Portugal ?", reponse: "Les azulejos" },
      { niveau: 7,  question: "Entre la faïence et le grès cérame, lequel convient le mieux au sol ?", reponse: "Le grès cérame, plus dur et moins poreux (la faïence est surtout murale)" },
      { niveau: 8,  question: "Comment appelle-t-on le plan de disposition des carreaux, préparé avant la pose ?", reponse: "Le calepinage" },
      { niveau: 9,  question: "Comment appelle-t-on la technique qui consiste à encoller à la fois le support et le dos du carreau ?", reponse: "Le double encollage, indispensable pour les grands formats" },
      { niveau: 10, question: "Quelle classification, de I à V, indique la résistance à l’usure de l’émail d’un carreau ?", reponse: "La classe PEI" }
    ]
  },

  {
    theme: "Le chewing-gum",
    questions: [
      { niveau: 1,  question: "Un chewing-gum, ça s’avale ou ça se mâche ?", reponse: "Ça se mâche (puis ça se jette, et pas par terre)" },
      { niveau: 2,  question: "Comment appelle-t-on le chewing-gum avec lequel on fait des bulles ?", reponse: "Le bubble-gum" },
      { niveau: 3,  question: "Comment appelle-t-on le chewing-gum au Québec ?", reponse: "La gomme (à mâcher)" },
      { niveau: 4,  question: "Quelle marque américaine a rendu le chewing-gum célèbre dans le monde entier ?", reponse: "Wrigley’s" },
      { niveau: 5,  question: "Un chewing-gum avalé reste-t-il vraiment 7 ans dans le ventre ?", reponse: "Non, c’est une légende : il est évacué en quelques jours" },
      { niveau: 6,  question: "Quel pays asiatique interdit la vente de chewing-gum depuis 1992 ?", reponse: "Singapour" },
      { niveau: 7,  question: "Quel peuple d’Amérique centrale mâchait déjà de la gomme naturelle il y a des siècles ?", reponse: "Les Mayas" },
      { niveau: 8,  question: "De quel arbre tirait-on cette gomme naturelle, le chicle ?", reponse: "Le sapotillier" },
      { niveau: 9,  question: "De quoi est faite la base de la plupart des chewing-gums aujourd’hui ?", reponse: "De gommes synthétiques, des polymères proches du plastique" },
      { niveau: 10, question: "Quel général mexicain, vaincu à la bataille de San Jacinto, a fait découvrir le chicle à l’inventeur du chewing-gum moderne ?", reponse: "Antonio López de Santa Anna (qui l’a fait découvrir à Thomas Adams)" }
    ]
  }

);
