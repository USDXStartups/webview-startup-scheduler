$ = require("jquery");

$(".submit").click( (e) => {
    e.preventDefault();

    var url = "https://calendarhelper.azurewebsites.net/api/RequestTopicExpert?code=LnHOtIYH0p1WuH6LTmMtuDrhQ/dIV3p47pUp7IxMhT0ex/l2XT888Q=="

    var data = {
        "Topic": $("#topic").val(),
        "ReqestorFirstName": $("#first").val(), 
        "ReqestorLastName": $("#last").val(),
        "ReqestorEmailAddress": $("#email").val(),
        "RequestedConversation": $("#queston").val(),
        "RequestedDayHalf": $("input[name=time]:checked").val(),
        "IsTest": "true"
    }

    $("form").css({"display": "none"})
    $(".loader").css({"display": "block"});


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