class VueAuthentification {
    constructor() {
        this.boutons = document.getElementById("html-vue-authentification").innerHTML;
        this.form = document.getElementById("html-vue-form-auth").innerHTML;
        this.user = null;
    }

    afficher_boutons() {
        document.getElementsByTagName("body")[0].innerHTML = this.boutons;
    }
    afficher_form(){
        document.getElementsByTagName("body")[0].innerHTML = this.form;
        document.getElementById("formulaire-auth").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }
    enregistrer(evenement){
        evenement.preventDefault();

        let user = document.getElementById("user").value;
        let mdp = document.getElementById("mdp").value;
        console.log(user, mdp)
        //appel de fonction lambda
    }
}