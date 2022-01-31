class VueAjouterPoutine{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-poutine").innerHTML;
    this.ajouterPoutine = null;
  }

  initialiserAjouterPoutine(ajouterPoutine){
    this.ajouterPoutine = ajouterPoutine;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("poutine-nom").value;
    let marque = document.getElementById("poutine-marque").value;
    let description = document.getElementById("poutine-description").value;

    this.ajouterPoutine(new Poutine(nom, marque, description, null));

  }

}