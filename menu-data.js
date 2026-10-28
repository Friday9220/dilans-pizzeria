// Menukortet – skrevet af fra assets/img/menu.jpg.
// Ret priser her. Hver ret: [nr, navn, beskrivelse, priser]
// priser er enten et tal eller en liste af [størrelse, pris].
window.DILANS_MENU = [
  {
    id: 'frokost', title: 'Frokosttilbud', note: 'Mellem kl. 11–14',
    items: [
      ['', 'Pizza', 'Vælg mellem nr. 1–14', 69],
      ['', 'Durum rulle', 'Vælg mellem kebab / kylling / falafel', 55],
      ['', 'Pizza sandwich', 'Vælg mellem kebab / kylling / falafel', 65],
      ['', 'Pitabrød', 'Vælg mellem kebab / kylling / falafel', 37],
      ['', 'Husets bøf', 'Med salat, pommes frites og bearnaisesauce', 75],
      ['', 'Box', 'Vælg mellem kebab / kylling / falafel', 55]
    ]
  },
  {
    id: 'pizza', title: 'Pizza', note: 'Almindelig, deep pan eller familie',
    sizes: ['Alm.', 'Deep', 'Fam.'],
    items: [
      ['1', 'Vesuvio', 'Tomatsauce, ost og skinke', [80, 95, 154]],
      ['2', 'Kebab', 'Tomatsauce, ost, kebab, salat og dressing', [85, 100, 161]],
      ['3', 'København', 'Tomatsauce, ost, pepperoni og champignon', [85, 100, 161]],
      ['4', 'Hawaii', 'Tomatsauce, ost, skinke og ananas', [85, 100, 161]],
      ['5', 'Margherita', 'Tomatsauce og ost', [75, 90, 140]],
      ['6', 'Capricciosa', 'Tomatsauce, ost, skinke og champignon', [85, 100, 161]],
      ['7', 'Italiana', 'Tomatsauce, ost, kødsauce og løg', [85, 100, 161]],
      ['8', 'Tonny Special', 'Tomatsauce, ost, pepperoni og ananas', [85, 100, 161]],
      ['9', 'Milano', 'Tomatsauce, ost, kebab og champignon', [85, 100, 161]],
      ['10', 'Napoli', 'Tomatsauce, ost, kylling, salat og dressing', [85, 100, 161]],
      ['11', 'Pep', 'Tomatsauce, ost og pepperoni', [80, 95, 154]],
      ['12', 'Pollo', 'Tomatsauce, ost, kylling og champignon', [85, 100, 160]],
      ['13', 'Vegetaria', 'Tomatsauce, ost, champignon, paprika, artiskok og løg', [85, 100, 158]],
      ['14', 'Apollo', 'Tomatsauce, ost, kebab, løg og chili', [85, 100, 161]],
      ['15', 'La Luna', 'Tomatsauce, ost, skinke, bacon, kebab og chili', [97, 112, 184]],
      ['16', 'Calzone', 'Indbagt. Tomatsauce, ost og skinke', [89, null, null]],
      ['17', 'Balkan', 'Tomatsauce, ost, friske tomater, rucola, pesto og oliven', [89, 106, 172]],
      ['18', 'Matador', 'Tomatsauce, ost, kebab, løg og bearnaise', [87, 102, 164]],
      ['19', 'Mama Mia', 'Tomatsauce, ost, skinke og cocktailpølser', [90, 106, 172]],
      ['20', 'Græsk', 'Tomatsauce, ost, fetaost, oliven, paprika, rucolasalat og pesto', [90, 106, 172]],
      ['21', 'Orientale', 'Tomatsauce, ost, cherrytomater, lufttørret skinke, rucola og pesto', [93, 110, 180]],
      ['22', 'Amore', 'Tomatsauce, ost, pepperoni, skinke og bacon', [97, 112, 184]],
      ['23', 'Palermo', 'Tomatsauce, ost, lufttørret skinke, artiskok og løg', [93, 108, 176]],
      ['24', 'Parma', 'Tomatsauce, ost, lufttørret skinke og gorgonzola', [95, 110, 172]],
      ['25', 'Mamma Rosa', 'Tomatsauce, ost, hakket kød, pepperoni og chili', [90, 105, 170]],
      ['26', 'Pompei', 'Tomatsauce, ost, skinke, løg og bacon', [90, 107, 178]],
      ['27', 'Delal', 'Indbagt. Tomatsauce, ost, kødsauce og spaghetti', [89, null, null]],
      ['28', 'Dilan', 'Tomatsauce, ost, tun og rejer', [90, 108, 170]],
      ['29', 'Viking', 'Tomatsauce, ost, hk. oksekød, champignon og paprika', [90, 106, 172]],
      ['30', 'Gorgonzola', 'Tomatsauce, ost, kebab, gorgonzola og grøn peber', [90, 108, 172]],
      ['31', 'Carlo', 'Tomatsauce, ost, skinke og pepperoni', [90, 106, 172]],
      ['32', 'Roma', 'Tomatsauce, ost, kebab, grøn peber, champignon, fetaost, salat og dressing', [97, 112, 184]],
      ['33', 'Rhodos', 'Tomatsauce, ost, hk. oksekød, paprika, løg og chili', [90, 108, 176]],
      ['34', 'Pepperoni', 'Tomatsauce, ost, pepperoni og gorgonzola', [90, 108, 176]],
      ['35', 'Paris', 'Tomatsauce, ost, hakket kød, løg, jalapeños og hvidløg', [90, 108, 176]],
      ['36', 'Orino', 'Tomatsauce, ost, pepperoni, bacon og pølser', [97, 112, 184]],
      ['37', 'Bello', 'Tomatsauce, ost, kylling, fetaost, cherrytomater, rucola og pesto', [97, 112, 184]],
      ['38', 'Nexus', 'Tomatsauce, ost, bacon, kylling og pølser', [97, 112, 184]],
      ['39', 'Amazon', 'Tomatsauce, ost, kebab, grøn peber, bacon og hvidløg', [90, 105, 170]],
      ['40', 'Inca', 'Tomatsauce, ost, pepperoni, hakket oksekød, jalapeños, løg og tacosauce', [93, 108, 176]],
      ['41', 'New Mexico', 'Tomatsauce, ost, kylling, løg, paprika, jalapeños og tacosauce', [93, 108, 176]],
      ['42', 'Atlantic', 'Tomatsauce, ost, kebab, paprika, løg, jalapeños, tacosauce og hvidløg', [93, 108, 176]],
      ['43', 'Danish', 'Tomatsauce, ost, kartofler, rucola, cherrytomater og pesto', [91, 106, 172]],
      ['44', 'Kartoffel', 'Tomatsauce, ost, kartofler, kylling, cherrytomater, rucola og pesto', [93, 108, 176]],
      ['45', 'Århus', 'Tomatsauce, ost, kartofler, hakket oksekød, løg, jalapeños, chili og hvidløg', [93, 108, 176]],
      ['46', 'Kreta', 'Tomatsauce, ost, skinke, kylling, kebab, chili og hvidløg', [97, 112, 174]],
      ['63', 'Ny pizza', 'Tomatsauce, ost, grillede auberginer, grillede squash og artiskok', [91, 106, 172], 'Ny'],
      ['64', 'Ny pizza', 'Tomatsauce, ost, grillede auberginer, grillede squash, kartoffel og løg', [91, 106, 172], 'Ny'],
      ['65', 'Ny pizza', 'Tomatsauce, mozzarella, gorgonzola og feta cheddarost', [91, 106, 172], 'Ny']
    ]
  },
  {
    id: 'tilbehoer', title: 'Ekstra på pizzaen',
    sizes: ['Alm.', 'Fam.'],
    items: [
      ['', 'Grønt', 'Champignon, oliven, artiskok, løg, æg, jalapeños, paprika eller ananas', [12, 22]],
      ['', 'Kød, fisk og ost', 'Tunfisk, rejer, skinke, kylling, bacon, kødboller, pepperoni, kebab, gorgonzola, cocktailpølser, ost eller salat og dressing', [14, 24]]
    ]
  },
  {
    id: 'durum', title: 'Durum ruller', note: 'Med iceberg, tomat, agurk, løg, rødkål og dressing',
    items: [
      ['47', 'Mix', 'Kebab og kylling', 70],
      ['48', 'Kebab', '', 62],
      ['49', 'Kylling', '', 62],
      ['50a', 'Falafel', '', 62],
      ['50', 'Græsk bøf', '', 70]
    ]
  },
  {
    id: 'pita', title: 'Pitabrød', note: 'Med iceberg, tomat, agurk, løg, rødkål og dressing',
    sizes: ['Alm.', 'Hj.lavet'],
    items: [
      ['86', 'Kebab', '', [39, 55]],
      ['87', 'Kebab med bacon', '', [43, 59]],
      ['88', 'Kylling', '', [37, 55]],
      ['89', 'Kylling med bacon', '', [43, 59]],
      ['90', 'Græsk bøf', '', [null, 62]],
      ['91', 'Falafel', '', [39, 55]],
      ['92', 'Skinke, tun eller rejer', '', [43, 59]],
      ['105', 'Mix', 'Kebab og kylling', [43, 59]]
    ]
  },
  {
    id: 'panino', title: 'Pizza sandwich', note: 'Panino med ost, iceberg, tomat, agurk, løg, rødkål og dressing',
    items: [
      ['93', 'Kebab', '', 75],
      ['94', 'Kebab med bacon', '', 79],
      ['95', 'Kylling', '', 75],
      ['96', 'Kylling med bacon', '', 79],
      ['97', 'Græsk bøf', '', 79],
      ['98', 'Falafel', '', 75],
      ['99', 'Vælg mellem', 'Skinke, rejer, pepperoni, gorgonzola eller tun', 79],
      ['100', 'Mix', 'Kebab og kylling', 79],
      ['101', 'Pizza sandwich menu', 'Med pommes frites og sodavand. Kebab, kylling eller falafel', 120]
    ]
  },
  {
    id: 'burgere', title: 'Burgere', note: 'Med tomat, agurk, ketchup, iceberg og salatmayonnaise',
    items: [
      ['69', 'Dilans burger', '', 56],
      ['70', 'Dilans burger', 'Med ost', 58],
      ['71', 'Dilans burger', 'Med bacon', 60],
      ['72', 'Dilans burger', 'Med bacon og ost', 61],
      ['73', 'Dobbelt burger', '', 70],
      ['74', 'Dobbelt burger', 'Med ost', 72],
      ['75', 'Dobbelt burger', 'Med ost og bacon', 75],
      ['76', 'Dobbelt burger', 'Med bløde løg', 71],
      ['77', 'Kyllingeburger', 'Med creme fraiche', 62],
      ['78', 'Kyllingeburger', 'Med bacon og creme fraiche', 65],
      ['', 'Ekstra ost', '', 6]
    ]
  },
  {
    id: 'store-burgere', title: 'Store burgere', note: 'Hjemmelavede, med tomat, agurk, ketchup, iceberg og salatmayonnaise',
    items: [
      ['79', 'Jagt burger', '', 68],
      ['80', 'Jagt burger', 'Med ost', 70],
      ['81', 'Jagt burger', 'Med bacon', 72],
      ['82', 'Jagt burger', 'Med ost og bacon', 74],
      ['83', 'Jagt burger', 'Med ost, bacon og spejlæg', 77],
      ['84', 'Jagt burger', 'Mexicansk, med chili og jalapeños', 70],
      ['85', 'Jagt burger', 'Med hjemmelavet brød', 71],
      ['164', 'Jagt dobbelt burger', '', 84],
      ['165', 'Jagt burger', 'Med bløde løg og bearnaisesauce', 70],
      ['', 'Ekstra ost', '', 6]
    ]
  },
  {
    id: 'menuer', title: "Dilan's menuer", note: 'Med lille pommes frites og mayonnaise',
    items: [
      ['M1', 'Dilan burger', 'Dåse sodavand', 99],
      ['M2', 'Kylling burger', 'Dåse sodavand', 99],
      ['M3', 'Hj. lavet durum', 'Mellem sodavand', 109],
      ['M4', 'Hj. lavet burger', 'Mellem sodavand', 109],
      ['M5', 'Alm. pitabrød', 'Dåse sodavand', 95],
      ['M6', 'Hj. lavet pitabrød', 'Mellem sodavand', 105]
    ]
  },
  {
    id: 'a-la-carte', title: 'A la carte', note: 'Med dressing. Vælg bagt kartoffel eller pommes frites',
    items: [
      ['102', 'Husets bøf', '2 stk. hjemmelavede bøffer med pommes frites og bearnaisesauce', 105],
      ['103', 'Græsk bøf', '2 stk. hjemmelavede krydderbøffer med pommes frites og bearnaisesauce', 105],
      ['104', 'Kebab ret', 'Med kebab, pommes frites, bearnaisesauce og brød', 100],
      ['108', 'Chicken dipper', '10 stk. med pommes frites og remoulade', 90],
      ['110', 'Fiskefilet', '2 stk. med pommes frites og remoulade', 95],
      ['111', 'Hotwings og inderfilet', 'Med pommes frites og mayonnaise', 90],
      ['112', '½ kylling', 'Uden tilbehør', 75],
      ['113', '½ kylling', 'Med pommes frites, salat og remoulade', 99],
      ['115', 'Kylling ret', 'Med pommes frites, salat og bearnaisesauce', 100],
      ['116', 'Oksefilet', 'Med pommes frites og bearnaisesauce', 139],
      ['117', 'Oksefilet', 'Med kartoffelbåde og gorgonzolasauce', 139],
      ['118', 'Oksefilet', 'Med kartoffelbåde og champignonsauce', 139],
      ['119', 'Oksefilet', 'Med kartoffelbåde og pebersauce', 139]
    ]
  },
  {
    id: 'pasta', title: 'Pasta',
    items: [
      ['55', 'Lasagne', 'Med kødsauce', 85],
      ['56', 'Lasagne', 'Med kødsauce, ost og gorgonzola', 85],
      ['57', 'Lasagne', 'Med kødsauce og bacon', 85],
      ['58', 'Spaghetti bolognese', 'Med kødsauce', 85],
      ['59', 'Carbonara spaghetti', 'Med bacon, æg og flødesauce', 85],
      ['60', 'Pomodori spaghetti', 'Med kylling, bacon, paprika og tomat-flødesauce', 85],
      ['61', 'Lucabna spaghetti', 'Med gorgonzola, kebab, champignon og fløde-tomatsauce', 85],
      ['62', 'A la matica', 'Spaghetti med bacon, champignon og fløde-tomatsauce', 85]
    ]
  },
  {
    id: 'salater', title: 'Store salater', note: 'Med flûte, iceberg, tomat, agurk, løg, rødkål og dressing',
    items: [
      ['124', 'Naturel salat', '', 63],
      ['125', 'Græsk salat', '', 69],
      ['126', 'Tun salat', '', 74],
      ['127', 'Reje salat', '', 74],
      ['128', 'Kylling salat', '', 69],
      ['129', 'Kylling & bacon salat', '', 72],
      ['130', 'Kebab salat', '', 69],
      ['131', 'Skinke & ost salat', '', 69]
    ]
  },
  {
    id: 'nachos', title: 'Nachos', note: 'Sprøde mexicanske chips, varmet i ovnen',
    items: [
      ['121', 'Nachos', 'Med cheddarost, salsa, guacamole og jalapeños', 75],
      ['122', 'Nachos', 'Med kylling, cheddarost, salsa, guacamole og jalapeños', 78],
      ['123', 'Nachos', 'Med hakket oksekød, cheddarost, salsa, guacamole og jalapeños', 78]
    ]
  },
  {
    id: 'kartoffel', title: 'Bagt kartoffel', note: 'Med iceberg, tomat, agurk, løg, rødkål og dressing',
    items: [
      ['132', 'Creme fraiche dressing', '', 50],
      ['133', 'Kylling & bacon', '', 73],
      ['134', 'Vælg mellem', 'Kebab, kylling, falafel eller skinke', 69],
      ['150', 'Bagt kartoffel', 'Med tun eller rejer', 73]
    ]
  },
  {
    id: 'boern', title: 'Børnemenu',
    items: [
      ['51', 'Børne pizza', 'Tomatsauce, ost og skinke', 65],
      ['52', 'Børne pizza', 'Tomatsauce, ost og kødsauce', 65],
      ['53', 'Børne pizza', 'Tomatsauce, ost og pepperoni', 65],
      ['54', 'Fiskefilet', 'Med pommes frites og remoulade', 65],
      ['162', 'Børne chicken dipper', 'Med pommes frites og remoulade', 65],
      ['163', 'Børneburger menu', 'Med lille cola, pommes frites og mayonnaise', 88]
    ]
  },
  {
    id: 'diverse', title: 'Pommes frites & diverse',
    items: [
      ['135', 'Pommes frites', 'Lille', 33],
      ['136', 'Pommes frites', 'Stor', 41],
      ['137', 'Forårsrulle', '150 g', 32],
      ['138', 'Hvidløgsbrød', '', 48],
      ['139', 'Kartoffelbåde', 'Lille', 39],
      ['140', 'Kartoffelbåde', 'Stor', 49],
      ['141', 'Box', 'Kebab, kylling eller falafel med iceberg, tomat, agurk, løg, rødkål, pommes frites og dressing', 60],
      ['142', 'Box mix kebab og kylling', 'Med iceberg, tomat, agurk, løg, rødkål, pommes frites og dressing', 65],
      ['143', 'Snack mix', '3 chicken nuggets, 3 chili cheese, 3 mozzarella sticks og 3 crispy onion rings med salatmayonnaise', 80],
      ['', 'Dyppelse', 'Ketchup, mayonnaise, remoulade, bearnaise, hummus, chili eller dressing', 9]
    ]
  },
  {
    id: 'drikke', title: 'Drikkevarer', note: 'Cola, Fanta, Sport, Cola Zero, Lemon, Danskvand',
    items: [
      ['', 'Sodavand', '', [['Lille', 25], ['Mellem', 35], ['Stor', 43]]],
      ['', 'Sodavand 1,5 l', '', 39],
      ['', 'Dåse sodavand 0,33 l', '', 17],
      ['', 'Kaffe', '', 25],
      ['', 'Cocio', '', 30],
      ['', 'Nestea', '', 30]
    ]
  }
];
