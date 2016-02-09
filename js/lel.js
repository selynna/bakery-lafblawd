//sengrid key: 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

var button = document.getElementById("test");
$(".test").click(function() {
  console.log("????");
  var sendgrid  = require('sendgrid')('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');

  var email     = new sendgrid.Email({
    to:       'ssun098@gmail.com',
    from:     'team@losaltoshacks.com',
    subject:  'Make a Reservation',
    text:     'Hello world'
  });

  sendgrid.send(email, function(err, json) {
    if (err) {
      return console.error(err);
    }
    console.log(json);
  });
});



//var Sendgrid = require("sendgrid-web");

 // var sendgrid = new Sendgrid({
 //   user: "ssun098@gmail.com",
 //   key: "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"
 // });

 // $('#test').onclick {
 //   sendgrid.send({
 //   to: 'ssun098@gmail.com',
 //   from: 'team@losaltoshacks.com',
 //   subject: 'Online Reservation',
 //   html: '<h1>Hello world!</h1>'
 // }, function (err) {
 //   if (err) {
 //     console.log(err);
 //   } else {
 //     console.log("Success.");
 //   }
 // });
 // }
