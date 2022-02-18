class PoutineDAO{
  lister(action){
    fetch("https://mw2drr9rq5.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
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

}