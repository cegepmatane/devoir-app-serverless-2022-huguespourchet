class PoutineDAO{
  lister(action){
    fetch("https://mw2drr9rq5.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
      .then(response => response.json())
      .then(data =>
        {
          let listePoutine = [];
          for(let position in data){
            let poutine = new Poutine(data[position].nom,
                                    data[position].ingredients,
                                    data[position].prix,
                                    data[position].tailles,
                                    data[position].description,
                                    data[position].id);

            listePoutine.push(poutine);
          }
          action(listePoutine);
        });
  }

  chercher(id, action){
    fetch("https://v2gs0o4p21.execute-api.us-east-1.amazonaws.com/default/chercher-par-id"+ "?id="+id, {mode:'cors'})
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let poutine = new Poutine(data.nom,
                                  data.ingredients,
                                  data.prix,
                                  data.tailles,
                                  data.description,
                                  data.id);
          action(poutine);
        });
  }

  ajouter(poutine, action){
    fetch("https://8hj2rrtfvl.execute-api.us-east-1.amazonaws.com/default/ajout",
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: "poutinejson="+JSON.stringify(poutine),
        mode: 'cors'
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }
  commander(poutine, action) {
      fetch("https://ey530lu46a.execute-api.us-east-1.amazonaws.com/default/ajout-commande",
          {
              method: 'POST',
              headers: {
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body: "poutinejson="+JSON.stringify(poutine),
              mode: 'cors'
          })
          .then(response => response.text())
          .then(data =>
          {
              console.log('Détail:', data);
              action();
          });
    }
    lister_commandes(action) {
      fetch("https://dasbh2tj05.execute-api.us-east-1.amazonaws.com/default/lister-commandes", {mode:"cors"})
          .then(response => response.json())
          .then(data =>
          {
              let listePoutine = [];
              for(let position in data){
                  let poutine = new Poutine(data[position].nom,
                      data[position].ingredients,
                      data[position].prix,
                      data[position].tailles,
                      data[position].description,
                      data[position].id);

                  listePoutine.push(poutine);
              }
              action(listePoutine);
          });
  }
  supprimer_poutine(id, action) {
        fetch("https://tg2m7rii2f.execute-api.us-east-1.amazonaws.com/default/suppression-poutine"+ "?id="+id, {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log('Supprimé:', data);
                action();
            });
    }
    supprimer_commande(id, action) {
        fetch("https://hbe8bgeisa.execute-api.us-east-1.amazonaws.com/default/suppression-commande"+ "?id="+id, {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log('Supprimé:', data);
                action();
            });
    }
}