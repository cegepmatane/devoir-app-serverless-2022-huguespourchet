class CadeauDAO{
  constructor(){
    let listeCadeauMemoire = [new Cadeau("Auto téléguidée", "Tesla", "Petite voiture pour faire rêver", 0),
                              new Cadeau("Montre intelligente", "Neo Pebble", "Une vraie montre intelligente open source", 1),
                              new Cadeau("Lunette de réalité augmentée", "Seer Glasses", "Des lunettes qui me montrent l'invisible", 2)];

    localStorage['cadeau'] = JSON.stringify(listeCadeauMemoire);
    this.listeCadeau = [];
  }

  lister(){
    this.listeCadeau = [];
    let listeCadeauMemoire = [];
    if(localStorage['cadeau']){
      listeCadeauMemoire = JSON.parse(localStorage['cadeau']);
    }

    for(let position in listeCadeauMemoire){
      let cadeau = new Cadeau(listeCadeauMemoire[position].nom,
                              listeCadeauMemoire[position].marque,
                              listeCadeauMemoire[position].description,
                              listeCadeauMemoire[position].id);

      this.listeCadeau.push(cadeau);
    }

    return this.listeCadeau;

  }

  chercher(id){
    this.lister();
    return this.listeCadeau.find(cadeau => cadeau.id === id);
  }

}
