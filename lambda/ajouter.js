console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let poutine = null;
  let poutinejson = postdata["poutinejson"];
  if(poutinejson){
    poutine = JSON.parse(poutinejson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de poutine reçue",
  };
  
  if (poutine == null) {
    return response;
  }

  poutine.id = Date.now();

  const params = {
      Bucket: "app-poutine-serverless",
      Key: "liste-poutine.json",
  };

  let data = await s3.getObject(params).promise();
  let listePoutineJson = data.Body.toString('utf-8');
  const listePoutine = JSON.parse(listePoutineJson);
  listePoutine.push(poutine);
  listePoutineJson = JSON.stringify(listePoutine);
  params.Body  = listePoutineJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: poutine.id
  };

  return response;
};
