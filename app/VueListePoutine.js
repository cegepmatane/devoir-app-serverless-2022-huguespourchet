class VueListePoutine{
  constructor(){
    this.display = [document.getElementById("html-vue-liste-poutine-guest").innerHTML, document.getElementById("html-vue-liste-poutine-admin").innerHTML];
    this.html = this.display[0];
    this.listePoutineDonnee = null;
  }

  initialiserListePoutine(listePoutineDonnee){
    this.listePoutineDonnee = listePoutineDonnee;
  }

  change_html() {
    this.html = this.display[1];
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
