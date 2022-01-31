class VueAjouterCadeau{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-cadeau").innerHTML;
    this.ajouterCadeau = null;
  }

  initialiserAjouterCadeau(ajouterCadeau){
    this.ajouterCadeau = ajouterCadeau;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("cadeau-nom").value;
    let marque = document.getElementById("cadeau-marque").value;
    let description = document.getElementById("cadeau-description").value;

    this.ajouterCadeau(new Cadeau(nom, marque, description, null));

  }

}