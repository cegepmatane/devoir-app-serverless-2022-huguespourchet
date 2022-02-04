class VuePoutine{
  constructor(){
    this.html = document.getElementById("html-vue-poutine").innerHTML;
    this.poutine = null;
  }

  initialiserPoutine(poutine){
    this.poutine = poutine;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("poutine-nom").innerHTML = this.poutine.nom;
    document.getElementById("poutine-ingredients").innerHTML = this.poutine.ingredients;
    document.getElementById("poutine-prix").innerHTML = this.poutine.prix;
    document.getElementById("poutine-tailles").innerHTML = this.poutine.tailles;
    document.getElementById("poutine-description").innerHTML = this.poutine.description;
  }

}
