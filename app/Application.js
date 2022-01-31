class Application {
  constructor(window, vueListePoutine, vuePoutine, vueAjouterPoutine, poutineDAO){

    this.window = window;

    this.vueListePoutine = vueListePoutine;

    this.vuePoutine = vuePoutine;

    this.vueAjouterPoutine = vueAjouterPoutine;
    // C'est l'équivalent de function(poutine){this.ajouterPoutine(poutine)}
    this.vueAjouterPoutine.initialiserAjouterPoutine(poutine =>this.ajouterPoutine(poutine));

    this.poutineDAO = poutineDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.poutineDAO.lister((listePoutine) => this.afficherNouvelleListePoutine(listePoutine));

    }else if(hash.match(/^#ajouter-poutine/)){

      this.vueAjouterPoutine.afficher();

    }else{

      let navigation = hash.match(/^#poutine\/([0-9]+)/);
      let idPoutine = navigation[1];

      this.poutineDAO.chercher(idPoutine, (poutine) => this.afficherNouveauPoutine(poutine));
    }
  }

  afficherNouvelleListePoutine(listePoutine){

    console.log(listePoutine);
    this.vueListePoutine.initialiserListePoutine(listePoutine);
    this.vueListePoutine.afficher();
  }

  afficherNouveauPoutine(poutine){
    console.log(poutine);
    this.vuePoutine.initialiserPoutine(poutine);
    this.vuePoutine.afficher();
  }

  ajouterPoutine(poutine){
    this.poutineDAO.ajouter(poutine, () => this.afficherListePoutine());
  }

  afficherListePoutine(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListePoutine(), new VuePoutine(), new VueAjouterPoutine(), new PoutineDAO());

