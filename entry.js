$ = require("jquery");

$(".submit").click( (e) => {
    e.preventDefault();

    var url = "https://startupcalendarhelper.azurewebsites.net/api/RequestTopicExpert?code=6yy62ob12opbsym3ombgkeudrq0dcws1fk04"

    var data = {
        "Topic": $("#topic").val(),
        "ReqestorFirstName": $("#first").val(), 
        "ReqestorLastName": $("#last").val(),
        "ReqestorEmailAddress": $("#email").val(),
        "RequestedConversation": $("#queston").val(),
        "RequestedDayHalf": $("input[name=time]:checked").val(),
        "IsTest": "true"
    }

    $(".loader").css({"display": "block"})

    console.log(data);

    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data),
      contentType : "application/json; charset=utf-8",
      dataType: "json",
    }).done(function( result ) {
        console.log(result)
        $(".loader").css({"display": "none"})
        $(".complete").css({"display": "block"})
      });
})