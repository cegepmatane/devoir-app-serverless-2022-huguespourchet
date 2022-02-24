class Application {
  constructor(window, vueListePoutine, vuePoutine, vueAjouterPoutine, poutineDAO, vueAuthentification, vueListeCommandes){

    this.window = window;

    this.vueListePoutine = vueListePoutine;

    this.vuePoutine = vuePoutine;

    this.vueAjouterPoutine = vueAjouterPoutine;
    // C'est l'équivalent de function(poutine){this.ajouterPoutine(poutine)}
    this.vueAjouterPoutine.initialiserAjouterPoutine(poutine =>this.ajouterPoutine(poutine));

    this.poutineDAO = poutineDAO;

    this.vueListeCommandes = vueListeCommandes;

    this.vueAuthentification = vueAuthentification;
    this.vueAuthentification.app = this;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer() {
    let hash = window.location.hash;

    if (!hash) {
      this.vueAuthentification.afficher_boutons();

    } else if (hash.match(/^#ajouter-poutine/)) {
      this.vueAjouterPoutine.afficher();

    }else if(hash.match(/^#lister-poutine/)) {
      this.poutineDAO.lister((listePoutine) => this.afficherNouvelleListePoutine(listePoutine));

    }else if(hash.match(/^#form-auth/)) {
      this.vueAuthentification.afficher_form();

    }else if(hash.match(/^#form-boutons/)) {
      this.vueAuthentification.afficher_boutons();

    }else if(hash.match(/^#poutine\/([0-9]+)/)) {
      let idPoutine = hash.match(/^#poutine\/([0-9]+)/)[1];
      this.poutineDAO.chercher(idPoutine, (poutine) => this.afficherNouveauPoutine(poutine));

    }else if(hash.match(/^#commander\/([0-9]+)/)) {
      let idPoutine = hash.match(/^#commander\/([0-9]+)/)[1];
      this.poutineDAO.chercher(idPoutine, (poutine) => this.ajouterCommande(poutine));

    }else if(hash.match(/^#lister-commandes/)) {
      this.poutineDAO.lister_commandes((listeCommandes) => this.afficherListeCommandes(listeCommandes));

    }else if(hash.match(/^#supprimer-poutine\/([0-9]+)/)) {
      let idPoutine = hash.match(/^#supprimer-poutine\/([0-9]+)/)[1];
      this.poutineDAO.supprimer_poutine(idPoutine, () => this.afficherListePoutine());

    }else if(hash.match(/^#supprimer-commande\/([0-9]+)/)) {
      let idPoutine = hash.match(/^#supprimer-commande\/([0-9]+)/)[1];
      this.poutineDAO.supprimer_commande(idPoutine, () => this.afficherListeCommande());

    }else if(hash.match(/^#liste-guest/)){
      this.vueAuthentification.connect = "guest";
      this.verifConnection();
      this.afficherListePoutine();

    }else{
      this.vueAuthentification.afficher_boutons();
      console.log("error, returning home...");
    }
  }

  verifConnection() {
    if (this.vueAuthentification.connect == "admin") {
      this.vueListePoutine.change_html(1);
    }
    else {
      this.vueListePoutine.change_html(0);
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

  afficherListeCommandes(listeCommandes){
    console.log(listeCommandes);
    this.vueListeCommandes.initialiserListeCommandes(listeCommandes);
    this.vueListeCommandes.afficher();
  }

  ajouterPoutine(poutine){
    this.poutineDAO.ajouter(poutine, () => this.afficherListePoutine());
  }

  ajouterCommande(poutine) {
    this.poutineDAO.commander(poutine, () => this.afficherListePoutine());
  }

  afficherListePoutine(){
    this.window.location.hash = "#lister-poutine";
  }
  afficherListeCommande() {
    this.window.location.hash = "#lister-commandes";
  }
}

new Application(window, new VueListePoutine(), new VuePoutine(), new VueAjouterPoutine(), new PoutineDAO(), new VueAuthentification(), new VueListeCommandes());

