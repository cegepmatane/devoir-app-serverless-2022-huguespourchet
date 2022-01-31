class VueCadeau{
  constructor(){
    this.html = document.getElementById("html-vue-cadeau").innerHTML;
    this.cadeau = null;
  }

  initialiserCadeau(cadeau){
    this.cadeau = cadeau;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("cadeau-nom").innerHTML = this.cadeau.nom;
    document.getElementById("cadeau-marque").innerHTML = this.cadeau.marque;
    document.getElementById("cadeau-description").innerHTML = this.cadeau.description;
  }

}
