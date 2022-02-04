class PoutineDAO{
  lister(action){
    fetch("https://uurj7mqprd.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let listePoutine = [];
          for(let position in data){
            let poutine = new Poutine(data[position].nom,
                                    data[position].ingredients,
                                    data[position].prix,
                                    data[position].tailles,
                                    data[position].description,
                                    data[position].id);

            console.log(poutine);
            listePoutine.push(poutine);
          }
          action(listePoutine);
        });
  }

  chercher(id, action){
    fetch("https://2puqf5vbl9.execute-api.us-east-1.amazonaws.com/default/chercher-par-id", {mode:'cors'})
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
    fetch("https://wnpx1k9xo4.execute-api.us-east-1.amazonaws.com/default/ajouter",
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

}