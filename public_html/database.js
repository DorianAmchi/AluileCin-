var films = [
    {
        "id": 0,
        "titre": "SpiderMan",
        "description": "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l’œil attentif de son nouveau mentor, Tony Stark. Il s’efforce de reprendre sa vie d’avant, mais l’apparition d’un nouvel ennemi,le Vautour, va mettre en danger tout ce qui compte pour lui.",
        "auteur": "",
        "jaquette": "./image/spiderman.jpg",
        "categorie": "Action"
    },
    {
        "id": 1,
        "titre": "John Wick",
        "description": "Depuis la mort de sa femme bien-aimée, John Wick passe ses journées à retaper sa Ford Mustang de 1969, avec pour seule compagnie sa chienne Daisy. Il mène une vie sans histoire, jusqu’à ce qu’un malfrat sadique nommé Iosef Tarasof  remarque sa voiture. John refuse de la lui vendre. Iosef n’acceptant pas qu’on lui résiste, s’introduit chez John avec deux complices pour voler la Mustang, et tuer sauvagement Daisy… John remonte la piste de Iosef jusqu’à New York. Un ancien contact, Aurelio, lui apprend que le malfrat est le fils unique d’un grand patron de la pègre, Viggo Tarasof. La rumeur se répand rapidement dans le milieu : le légendaire tueur cherche Iosef. ",
        "auteur": "",
        "jaquette": "./image/johnwick.jpg",
        "categorie": "Action De La Mort Qui Tue"
    },
    {
        "id": 2,
        "titre": "Gardien de la Galaxie",
        "description": "",
        "auteur": "",
        "jaquette": "./image/gdlg.jpg",
        "categorie": "Action"

    },
    {
        "id": 3,
        "titre": "Game Over Man",
        "description": "Le pouvoir de Voldemort s'étend. Celui-ci contrôle maintenant le Ministère de la Magie et Poudlard. Harry, Ron et Hermione décident de terminer le travail commencé par Dumbledore, et de retrouver les derniers Horcruxes pour vaincre le Seigneur des Ténèbres. Mais il reste bien peu d'espoir aux trois sorciers, qui doivent réussir à tout prix.",
        "auteur": "",
        "jaquette": "./image/gameoverman.jpg",
        "categorie": "Humour Action"
    },
    {
        "id": 4,
        "titre": "Annihilation",
        "description": "",
        "auteur": "",
        "jaquette": "./image/annihilation.jpg",
        "categorie": "Thriller SciFi"
    },
    {
        "id": 5,
        "titre": "The Dark Knight Rises",
        "description": "Deadpool, est l'anti-héros le plus atypique de l'univers Marvel. A l'origine, il s'appelle Wade Wilson : un ancien militaire des Forces Spéciales devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, Deadpool va traquer l'homme qui a bien failli anéantir sa vie.",
        "auteur": "",
        "jaquette": "./image/tdnr.jpg",
        "categorie": "Action"
    }];

var series = [
    {
        "id": 0,
        "titre": "Breaking Bad",
        "description": "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu'il apprend qu'il est atteint d'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d'argent afin de mettre sa famille à l'abri, Walter ne voit plus qu'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.",
        "auteur": "",
        "jaquette": "./image/breakingbad.jpg",
        "categorie": "Action DroguesDure I'M THE DANGER"
    },
    {
        "id": 1,
        "titre": "Viking",
        "description": "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer. Malgré la réprobation de son chef, Haraldson, il se fie aux signes et à la volonté des dieux, en construisant une nouvelle génération de vaisseaux, plus légers et plus rapides...",
        "auteur": "",
        "jaquette": "./image/vikings.jpg",
        "categorie": "Action Historique"
    },
    {
        "id": 2,
        "titre": "Game Of Thrones",
        "description": "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.",
        "auteur": "",
        "jaquette": "./image/got.jpg",
        "categorie": "SciFi Porn Action Trahison Boisson"
    },
    {
        "id": 3,
        "titre": "Silicon Valley",
        "description": "Dans la Silicon Valley d'aujourd'hui, les personnes les plus qualifiées pour réussir ne sont pas forcément celles les plus qualifiées pour savoir comment le gérer...",
        "auteur": "",
        "jaquette": "./image/svalley.jpeg",
        "categorie": "StartUp Code Dev"
    },
    {
        "id": 4,
        "titre": "Rick Et Morty",
        "description": "Un brillant inventeur et son petit fils un peu à l'Ouest partent à l'aventure...",
        "auteur": "",
        "jaquette": "./image/ricketmorty.png",
        "categorie": "StartUp Code Dev"
    }, {
        "id": 5,
        "titre": "Workaholics",
        "description": "Un brillant inventeur et son petit fils un peu à l'Ouest partent à l'aventure...",
        "auteur": "",
        "jaquette": "./image/workaholics.jpg",
        "categorie": "StartUp Code Dev"
    }];

