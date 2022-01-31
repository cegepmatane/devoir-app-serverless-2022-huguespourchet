class Application {
  constructor(window, vueListeCadeau, vueCadeau, cadeauDAO){

    this.window = window;

    this.vueListeCadeau = vueListeCadeau;

    this.vueCadeau = vueCadeau;

    this.cadeauDAO = cadeauDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeCadeau.initialiserListeCadeau(this.cadeauDAO.lister());
      this.vueListeCadeau.afficher();

    }else{

      let navigation = hash.match(/^#cadeau\/([0-9]+)/);
      let idCadeau = navigation[1];

      let cadeau = this.cadeauDAO.chercher(parseInt(idCadeau))
      this.vueCadeau.initialiserCadeau(cadeau);
      this.vueCadeau.afficher();

    }
  }

}

new Application(window, new VueListeCadeau(), new VueCadeau(), new CadeauDAO());

