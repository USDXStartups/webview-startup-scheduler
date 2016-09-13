require("./style.css");
$ = require("jquery");

// console.log(require("./content.js"));

var url = "https://startupcalendarhelper.azurewebsites.net/api/RequestTopicExpert?code=6yy62ob12opbsym3ombgkeudrq0dcws1fk04&Test=true"

var data = {
    "Topic": "Azure Functions",
    "ReqestorFirstName": "Earl", 
    "ReqestorLastName": "Jones",
    "ReqestorEmailAddress": "mschray@yahoo.com",
    "RequestedConversation": "How to migrate from Azure Functions to MVC and Web API site.",
    "RequestedDayHalf": "Afternoon",
    "IsTest": "true"
}

// var request = new XMLHttpRequest();
// request.open('POST', url, true);
// request.setRequestHeader('Content-Type', 'application/json; charset=utf-8; charset=UTF-8');
// request.send(data);

console.log(data);

$.ajax({
  type: 'POST',
  url: url,
  data: data,
  contentType : "application/json; charset=utf-8"
}).done(function( result ) {
    console.log('allo', result);
  });