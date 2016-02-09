//sengrid key: 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

var Sendgrid = require("sendgrid-web");

 var sendgrid = new Sendgrid({
   user: "ssun098@gmail.com",
   key: "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"
 });

 sendgrid.send({
   to: 'ssun098@gmail.com',
   from: 'team@losaltoshacks.com',
   subject: 'Online Reservation',
   html: '<h1>Hello world!</h1>'
 }, function (err) {
   if (err) {
     console.log(err);
   } else {
     console.log("Success.");
   }
 });
