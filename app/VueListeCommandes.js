class VueListeCommandes{
    constructor(){
        this.html = document.getElementById("html-vue-liste-commandes").innerHTML;
        this.listeCommandesDonnee = null;
    }

    initialiserListeCommandes(listeCommandesDonnee){
        this.listeCommandesDonnee = listeCommandesDonnee;
    }


    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeCommandes = document.getElementById("liste-commandes");
        const listeCommandesItemHTML = listeCommandes.innerHTML;
        let listeCommandesHTMLRemplacement = "";

        for(var numeroCommandes in this.listeCommandesDonnee){
            let listeCommandesItemHTMLRemplacement = listeCommandesItemHTML;
            listeCommandesItemHTMLRemplacement = listeCommandesItemHTMLRemplacement.replace("{Poutine.id}",this.listeCommandesDonnee[numeroCommandes].id);
            listeCommandesItemHTMLRemplacement = listeCommandesItemHTMLRemplacement.replace("{Poutine.id}",this.listeCommandesDonnee[numeroCommandes].id);
            listeCommandesItemHTMLRemplacement = listeCommandesItemHTMLRemplacement.replace("{Poutine.nom}",this.listeCommandesDonnee[numeroCommandes].nom);
            listeCommandesHTMLRemplacement += listeCommandesItemHTMLRemplacement;
        }

        listeCommandes.innerHTML = listeCommandesHTMLRemplacement;
    }

}
