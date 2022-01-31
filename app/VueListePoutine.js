class VueListePoutine{
  constructor(){
    this.html = document.getElementById("html-vue-liste-poutine").innerHTML;
    this.listePoutineDonnee = null;
  }

  initialiserListePoutine(listePoutineDonnee){
    this.listePoutineDonnee = listePoutineDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listePoutine = document.getElementById("liste-poutine");
    const listePoutineItemHTML = listePoutine.innerHTML;
    let listePoutineHTMLRemplacement = "";

    for(var numeroPoutine in this.listePoutineDonnee){
      let listePoutineItemHTMLRemplacement = listePoutineItemHTML;
      listePoutineItemHTMLRemplacement = listePoutineItemHTMLRemplacement.replace("{Poutine.id}",this.listePoutineDonnee[numeroPoutine].id);
      listePoutineItemHTMLRemplacement = listePoutineItemHTMLRemplacement.replace("{Poutine.nom}",this.listePoutineDonnee[numeroPoutine].nom);
      listePoutineHTMLRemplacement += listePoutineItemHTMLRemplacement;
    }

    listePoutine.innerHTML = listePoutineHTMLRemplacement;
  }

}
